import Section from '@/components/sections/Section';
import PageHeaderImage from '@/components/media/PageHeaderImage';
import LiturgyList from '@/components/sections/LiturgyList';
import PrimaryCTA from '@/components/cta/PrimaryCTA';

const liturgyItems = [
  {
    title: 'Call to Worship',
    description: 'We begin by hearing God\'s call to gather in His presence, often through the reading of Scripture.',
  },
  {
    title: 'Prayer of Invocation',
    description: 'We ask God to be present with us and to bless our worship.',
  },
  {
    title: 'Congregational Singing',
    description: 'We sing psalms, hymns, and spiritual songs that exalt Christ and edify the saints.',
  },
  {
    title: 'Scripture Reading',
    description: 'The public reading of God\'s Word is central to our worship.',
  },
  {
    title: 'Prayer',
    description: 'We pray for the church, the world, and the needs of the congregation.',
  },
  {
    title: 'Sermon',
    description: 'The Word of God is expounded through verse-by-verse expository preaching.',
  },
  {
    title: 'The Lord\'s Supper',
    description: 'We regularly observe the Lord\'s Supper as Christ commanded.',
  },
  {
    title: 'Benediction',
    description: 'We are sent out with God\'s blessing to live for His glory.',
  },
];

export default function WorshipPage() {
  return (
    <div>
      <PageHeaderImage
        src="/assets/generated/lords-table-elements.dim_1920x900.png"
        alt="The Lord's Table elements"
      >
        <h1 className="text-4xl md:text-5xl font-serif font-semibold">Worship With Us</h1>
      </PageHeaderImage>

      <Section>
        <div className="prose-content">
          <h2>The Lord's Day Gathering</h2>
          <p>
            Each Lord's Day, we gather as the covenant community to worship the Triune God. Our worship 
            is regulated by Scripture and characterized by reverence, simplicity, and a focus on the 
            ordinary means of grace: the Word, prayer, and the sacraments.
          </p>
          <p>
            We believe that corporate worship is not entertainment or a performance, but a sacred meeting 
            between God and His people. We come to hear from God through His Word, to respond in prayer 
            and praise, and to be strengthened for faithful living.
          </p>

          <h2>Our Liturgy</h2>
          <p className="mb-6">
            While our worship is Spirit-led and Christ-centered, we follow a basic order of worship that 
            reflects biblical priorities:
          </p>
          <LiturgyList items={liturgyItems} />

          <h2 className="mt-12">What to Expect</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Service Length</h3>
              <p>
                Our Lord's Day worship service typically lasts 90 minutes to two hours. We believe that 
                worship should not be rushed, and we take time to hear God's Word thoroughly expounded.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Attire</h3>
              <p>
                We encourage modest, respectful attire that reflects the reverence due to God. There is 
                no strict dress code, but we ask that clothing be appropriate for worship.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Families and Children</h3>
              <p>
                Families are welcome and encouraged to worship together. We believe that children benefit 
                from being present in corporate worship, learning to reverence God alongside their parents. 
                Parents are encouraged to train their children in attentiveness and reverence.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Visitors</h3>
              <p>
                If you are visiting for the first time, we welcome you warmly. You are not required to 
                participate in any way that makes you uncomfortable. We simply ask that you join us in 
                reverent attention to God's Word and respectful participation in worship.
              </p>
            </div>
          </div>

          <div className="text-center mt-12 pt-8 border-t">
            <h3 className="text-2xl font-serif font-semibold mb-4">Plan Your Visit</h3>
            <p className="text-muted-foreground mb-6">
              We would be honored to have you join us for worship this Lord's Day.
            </p>
            <PrimaryCTA to="/contact" />
          </div>
        </div>
      </Section>
    </div>
  );
}
