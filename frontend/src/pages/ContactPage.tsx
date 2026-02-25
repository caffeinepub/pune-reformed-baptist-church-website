import Section from '@/components/sections/Section';
import ContactForm from '@/components/forms/ContactForm';
import { useGetServiceInfo } from '@/hooks/useQueries';
import { MapPin, Clock, Mail } from 'lucide-react';

export default function ContactPage() {
  const { data: serviceInfo } = useGetServiceInfo();

  return (
    <div>
      <Section className="pt-16" id="visit">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-center mb-12">Contact & Visit Us</h1>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-6">Location & Service Times</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      {serviceInfo?.address || 'Kothrud, Pune, Maharashtra'}
                    </p>
                    {serviceInfo?.mapUrl && (
                      <a
                        href={serviceInfo.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm mt-2 inline-block"
                      >
                        View on Map
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Service Times</h3>
                    <p className="text-muted-foreground">
                      {serviceInfo?.serviceTimes || 'Sunday Worship 10:30 AM | Bible Study 7:00 PM Wednesdays'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Get in Touch</h3>
                    <p className="text-muted-foreground">
                      Use the contact form to send us a message. We will respond as soon as possible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-muted/30 rounded">
                <h3 className="font-semibold mb-2">First Time Visitors</h3>
                <p className="text-sm text-muted-foreground mb-0">
                  If you are planning to visit for the first time, we welcome you warmly. Please arrive 
                  a few minutes early so you can find parking and seating. If you have any questions or 
                  special needs, please let us know using the contact form.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
