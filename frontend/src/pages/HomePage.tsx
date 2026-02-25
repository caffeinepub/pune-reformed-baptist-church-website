import { Link } from '@tanstack/react-router';
import PageHeaderImage from '@/components/media/PageHeaderImage';
import Section from '@/components/sections/Section';
import ScriptureQuote from '@/components/scripture/ScriptureQuote';
import PrimaryCTA from '@/components/cta/PrimaryCTA';
import { homeScripture } from '@/content/scripture';
import { useGetServiceInfo } from '@/hooks/useQueries';
import { MapPin, Clock } from 'lucide-react';

export default function HomePage() {
  const { data: serviceInfo } = useGetServiceInfo();

  return (
    <div>
      <PageHeaderImage
        src="/assets/generated/hero-bible-pulpit.dim_1920x900.png"
        alt="Open Bible on pulpit"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-4">
            Pune Reformed Baptist Church
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            A confessional congregation holding to the 1689 London Baptist Confession of Faith
          </p>
          <PrimaryCTA to="/worship" />
        </div>
      </PageHeaderImage>

      <Section>
        <div className="prose-content">
          <h2 className="text-center mb-8">Welcome</h2>
          <p className="text-center text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a Reformed Baptist church in Pune, India, committed to the authority and sufficiency of Scripture, 
            the doctrines of grace, and the ordinary means of grace in worship. We gather each Lord's Day to hear 
            God's Word expounded, to sing His praises, to pray, and to celebrate the sacraments He has ordained.
          </p>

          <ScriptureQuote
            text={homeScripture.text}
            reference={homeScripture.reference}
            translation={homeScripture.translation}
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-3xl mx-auto">
            <div className="text-center p-6 border rounded">
              <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Service Times</h3>
              <p className="text-muted-foreground">
                {serviceInfo?.serviceTimes || 'Sunday Worship 10:30 AM | Bible Study 7:00 PM Wednesdays'}
              </p>
            </div>
            <div className="text-center p-6 border rounded">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">
                {serviceInfo?.address || 'Kothrud, Pune, Maharashtra'}
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-serif font-semibold mb-4">New to Reformed Baptist Theology?</h3>
            <p className="text-muted-foreground mb-6">
              Learn more about what we believe and why we worship as we do.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/beliefs"
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded hover:bg-secondary/80 transition-colors font-medium"
              >
                What We Believe
              </Link>
              <Link
                to="/confession"
                className="px-6 py-3 border border-border rounded hover:bg-accent transition-colors font-medium"
              >
                Our Confession
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
