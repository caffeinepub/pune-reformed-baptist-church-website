import Section from '@/components/sections/Section';
import ResourceList from '@/components/resources/ResourceList';

const confessions = [
  {
    title: '1689 London Baptist Confession of Faith',
    description: 'The doctrinal standard of Reformed Baptist churches, articulating the faith once delivered to the saints.',
    url: 'https://www.1689.com/',
  },
  {
    title: 'Westminster Confession of Faith',
    description: 'A Reformed confession widely used in Presbyterian churches, sharing much common ground with the 1689.',
  },
  {
    title: 'The Heidelberg Catechism',
    description: 'A beautiful catechism that teaches the comfort of belonging to Christ in life and death.',
  },
];

const catechisms = [
  {
    title: 'Keach\'s Catechism',
    description: 'A Baptist catechism based on the Westminster Shorter Catechism, adapted for Baptist convictions.',
  },
  {
    title: 'The Westminster Shorter Catechism',
    description: 'A concise summary of Christian doctrine in question-and-answer format, excellent for memorization.',
  },
  {
    title: 'The Westminster Larger Catechism',
    description: 'A more detailed exposition of Reformed doctrine, useful for deeper study.',
  },
];

const reading = [
  {
    title: 'The Reformed Pastor by Richard Baxter',
    description: 'A classic work on pastoral ministry and the care of souls.',
  },
  {
    title: 'The Pilgrim\'s Progress by John Bunyan',
    description: 'An allegory of the Christian life, beloved by generations of believers.',
  },
  {
    title: 'Knowing God by J.I. Packer',
    description: 'A modern classic on the doctrine of God and the Christian life.',
  },
  {
    title: 'The Holiness of God by R.C. Sproul',
    description: 'A powerful exposition of God\'s holiness and its implications for our lives.',
  },
  {
    title: 'Desiring God by John Piper',
    description: 'An exploration of Christian hedonism—finding joy in God above all else.',
  },
];

export default function ResourcesPage() {
  return (
    <div>
      <Section className="pt-16">
        <div className="prose-content">
          <h1 className="text-center mb-12">Resources</h1>

          <p className="text-lg text-center text-muted-foreground mb-12">
            We commend these resources for your growth in grace and knowledge of our Lord Jesus Christ. 
            All are consistent with Reformed Baptist theology and the 1689 Confession.
          </p>

          <h2>Confessions of Faith</h2>
          <p className="mb-6">
            Confessions are summaries of biblical doctrine that help us understand and articulate the 
            faith. They are subordinate to Scripture but serve as faithful guides to its teaching.
          </p>
          <ResourceList resources={confessions} />

          <h2 className="mt-12">Catechisms</h2>
          <p className="mb-6">
            Catechisms are tools for teaching doctrine through questions and answers. They are especially 
            useful for instructing children and new believers in the faith.
          </p>
          <ResourceList resources={catechisms} />

          <h2 className="mt-12">Recommended Reading</h2>
          <p className="mb-6">
            These books have proven helpful to countless Christians in their walk with God. We encourage 
            you to read widely and deeply in the Reformed tradition.
          </p>
          <ResourceList resources={reading} />

          <div className="mt-12 p-6 bg-muted/30 rounded">
            <h3 className="text-xl font-semibold mb-3">A Word of Caution</h3>
            <p className="mb-0">
              While we commend these resources, we remind you that Scripture alone is the infallible 
              Word of God. Read all books with discernment, testing everything against the teaching 
              of Scripture. The Bereans were commended for examining the Scriptures daily to see if 
              what they heard was true (Acts 17:11).
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
