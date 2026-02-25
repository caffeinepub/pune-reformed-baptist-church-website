import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, BookOpen, Headphones } from 'lucide-react';
import type { Sermon } from '@/backend';

interface SermonListItemProps {
  sermon: Sermon;
}

export default function SermonListItem({ sermon }: SermonListItemProps) {
  const date = new Date(Number(sermon.sermonDate) / 1000000);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl font-serif">
          <Link
            to="/sermons/$sermonId"
            params={{ sermonId: sermon.id.toString() }}
            className="hover:text-primary transition-colors"
          >
            {sermon.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <BookOpen className="w-4 h-4" />
          <span>{sermon.scriptureReference}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <User className="w-4 h-4" />
          <span>{sermon.preacher}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{formattedDate}</span>
        </div>
        {sermon.audioUrl && (
          <div className="flex items-center gap-2 pt-2">
            <Headphones className="w-4 h-4 text-primary" />
            <a
              href={sermon.audioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Listen to Audio
            </a>
          </div>
        )}
        <div className="pt-2">
          <Button asChild variant="outline" size="sm">
            <Link
              to="/sermons/$sermonId"
              params={{ sermonId: sermon.id.toString() }}
            >
              Read More
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
