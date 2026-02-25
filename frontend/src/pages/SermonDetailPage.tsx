import { useParams, Link } from '@tanstack/react-router';
import Section from '@/components/sections/Section';
import { useGetSermonById } from '@/hooks/useQueries';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, BookOpen, Headphones } from 'lucide-react';
import { Loader2 } from 'lucide-react';

export default function SermonDetailPage() {
  const { sermonId } = useParams({ from: '/sermons/$sermonId' });
  const { data: sermon, isLoading, isError } = useGetSermonById(Number(sermonId));

  if (isLoading) {
    return (
      <Section className="pt-16">
        <div className="flex justify-center items-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </Section>
    );
  }

  if (isError || !sermon) {
    return (
      <Section className="pt-16">
        <div className="prose-content text-center">
          <h1>Sermon Not Found</h1>
          <p className="text-muted-foreground">The sermon you are looking for could not be found.</p>
          <Button asChild className="mt-6">
            <Link to="/sermons">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Sermons
            </Link>
          </Button>
        </div>
      </Section>
    );
  }

  const date = new Date(Number(sermon.sermonDate) / 1000000);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div>
      <Section className="pt-16">
        <div className="prose-content">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/sermons">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Sermons
            </Link>
          </Button>

          <h1 className="mb-6">{sermon.title}</h1>

          <div className="flex flex-wrap gap-4 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">{sermon.scriptureReference}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{sermon.preacher}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{formattedDate}</span>
            </div>
          </div>

          {sermon.audioUrl && (
            <div className="mb-8 p-4 bg-muted/30 rounded flex items-center gap-3">
              <Headphones className="w-6 h-6 text-primary" />
              <div className="flex-1">
                <p className="font-medium mb-1">Audio Recording Available</p>
                <a
                  href={sermon.audioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  Listen to this sermon
                </a>
              </div>
            </div>
          )}

          <div className="prose-content">
            <div className="whitespace-pre-wrap leading-relaxed">
              {sermon.sermonText}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
