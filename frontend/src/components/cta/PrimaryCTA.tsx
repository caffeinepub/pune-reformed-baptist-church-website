import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

interface PrimaryCTAProps {
  to: string;
}

export default function PrimaryCTA({ to }: PrimaryCTAProps) {
  return (
    <Button asChild size="lg" className="text-base px-8 py-6 h-auto">
      <Link to={to}>Join Us This Lord's Day</Link>
    </Button>
  );
}
