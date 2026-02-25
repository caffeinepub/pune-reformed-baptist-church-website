import Section from '@/components/sections/Section';
import SermonListItem from '@/components/sermons/SermonListItem';
import { useGetAllSermons } from '@/hooks/useQueries';
import { Loader2 } from 'lucide-react';

export default function SermonsPage() {
  const { data: sermons, isLoading, isError } = useGetAllSermons();

  return (
    <div>
      <Section className="pt-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-center mb-6">Sermons</h1>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            We are committed to expository preaching—opening the Scriptures verse by verse, explaining 
            the text in its context, and applying God's Word to our lives. Browse our sermon archive below.
          </p>

          {isLoading && (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          )}

          {isError && (
            <div className="text-center py-12">
              <p className="text-destructive">Failed to load sermons. Please try again later.</p>
            </div>
          )}

          {sermons && sermons.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No sermons available yet. Check back soon.</p>
            </div>
          )}

          {sermons && sermons.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2">
              {sermons.map((sermon) => (
                <SermonListItem key={sermon.id} sermon={sermon} />
              ))}
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
