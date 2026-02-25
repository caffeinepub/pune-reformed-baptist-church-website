import Section from '@/components/sections/Section';
import { confession1689 } from '@/content/confession1689';
import { Separator } from '@/components/ui/separator';

export default function ConfessionPage() {
  return (
    <div>
      <Section className="pt-16">
        <div className="prose-content">
          <h1 className="text-center mb-8">The 1689 London Baptist Confession of Faith</h1>

          <div className="bg-muted/30 p-6 rounded mb-12">
            <h2 className="text-2xl mb-4">The Role of Confessions</h2>
            <p>
              We affirm that the Holy Scriptures are the only infallible rule of faith and practice. 
              The 1689 London Baptist Confession of Faith serves as a subordinate standard—a summary of 
              biblical doctrine that helps us understand and articulate what Scripture teaches.
            </p>
            <p className="mb-0">
              This confession does not replace or supersede Scripture. Rather, it is a faithful summary 
              of biblical truth that has been tested and refined by centuries of Reformed Baptist witness. 
              We hold to this confession because we believe it accurately reflects the teaching of God's Word.
            </p>
          </div>

          <h2 className="text-center mb-8">Confession Chapters</h2>

          <div className="space-y-12">
            {confession1689.map((chapter) => (
              <div key={chapter.number}>
                <h3 className="text-2xl font-serif font-semibold mb-4">
                  Chapter {chapter.number}: {chapter.title}
                </h3>
                <div className="space-y-4">
                  {chapter.paragraphs.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {chapter.number < confession1689.length && (
                  <Separator className="mt-8" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-muted/30 rounded">
            <p className="text-sm text-muted-foreground mb-0">
              Note: This is an excerpt of the 1689 London Baptist Confession of Faith. The full text 
              contains 32 chapters covering all major areas of Christian doctrine. For the complete 
              confession, please visit our Resources page or contact the church office.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
