'use client';

import { useEffect, useRef, useState, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { handleContactSubmit, type ContactFormState } from '@/app/actions';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Submitting...' : 'Send Message'}
    </Button>
  );
}

export function ContactSection() {
  const initialState: ContactFormState = { success: false };
  const [state, formAction] = useActionState(handleContactSubmit, initialState);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success) {
      setIsDialogOpen(true);
      formRef.current?.reset();
    } else if (state.errors?._form) {
       toast({
        title: "Error",
        description: state.errors._form,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <>
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <Card className="max-w-2xl mx-auto shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary font-headline">Contact Us</CardTitle>
              <CardDescription className="md:text-lg">
                Have a question or want to work together? Drop us a message.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={formAction} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" required />
                  {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                  {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message..." required className="min-h-[120px]" />
                  {state.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Message Sent Successfully!</AlertDialogTitle>
            <AlertDialogDescription>
              Thank you for reaching out. We have received your message and will get back to you shortly. Here is an AI-generated summary of your request:
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="p-4 bg-secondary rounded-md my-4">
            <p className="text-sm text-foreground/80 italic">{state.summary}</p>
          </div>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setIsDialogOpen(false)}>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
