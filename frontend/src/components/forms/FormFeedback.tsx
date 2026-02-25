import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FormFeedbackProps {
  type: 'success' | 'error';
  title: string;
  message: string;
  onDismiss?: () => void;
}

export default function FormFeedback({ type, title, message, onDismiss }: FormFeedbackProps) {
  return (
    <Alert variant={type === 'error' ? 'destructive' : 'default'} className="mb-6">
      {type === 'success' ? (
        <CheckCircle2 className="h-4 w-4" />
      ) : (
        <XCircle className="h-4 w-4" />
      )}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription className="mt-2">
        {message}
        {onDismiss && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onDismiss}
            className="ml-4"
          >
            Dismiss
          </Button>
        )}
      </AlertDescription>
    </Alert>
  );
}
