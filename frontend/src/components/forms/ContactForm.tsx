import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useSubmitContactForm } from '@/hooks/useQueries';
import FormFeedback from './FormFeedback';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const submitMutation = useSubmitContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      return;
    }

    try {
      await submitMutation.mutateAsync({ name, email, message });
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  if (submitMutation.isSuccess) {
    return (
      <FormFeedback
        type="success"
        title="Message Sent"
        message="Thank you for reaching out. We will respond to your inquiry soon."
        onDismiss={() => submitMutation.reset()}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {submitMutation.isError && (
        <FormFeedback
          type="error"
          title="Submission Failed"
          message="We encountered an error sending your message. Please try again."
          onDismiss={() => submitMutation.reset()}
        />
      )}

      <div className="space-y-2">
        <Label htmlFor="name">Name *</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={submitMutation.isPending}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={submitMutation.isPending}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          disabled={submitMutation.isPending}
          rows={6}
          className="w-full resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={submitMutation.isPending || !name.trim() || !email.trim() || !message.trim()}
        className="w-full sm:w-auto"
      >
        {submitMutation.isPending ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
