import Section from '@/components/sections/Section';

export default function AboutPage() {
  return (
    <div>
      <Section className="pt-16">
        <div className="prose-content">
          <h1 className="text-center mb-12">About Us</h1>

          <h2>Our Identity</h2>
          <p>
            Pune Reformed Baptist Church is a confessional Reformed Baptist congregation aligned with the 
            1689 London Baptist Confession of Faith. We are committed to the authority and sufficiency of 
            Holy Scripture, the doctrines of grace as articulated in historic Reformed theology, and the 
            regulative principle of worship.
          </p>
          <p>
            We believe in believer's baptism by immersion, meaningful church membership, and elder-led 
            congregationalism. Our worship is characterized by expository preaching, psalm and hymn singing, 
            reverent prayer, and the faithful administration of the ordinances Christ has given His church.
          </p>

          <h2>Our History</h2>
          <p>
            By God's grace, Pune Reformed Baptist Church was established to provide a confessional Reformed 
            Baptist witness in Pune. We are a congregation of believers who have been called out of darkness 
            into His marvelous light, united in our commitment to the gospel of Jesus Christ and the historic 
            Reformed faith.
          </p>
          <p>
            We seek to be a church that is faithful to Scripture, grounded in sound doctrine, and devoted to 
            the glory of God in all things. Our desire is to see Christ exalted, sinners saved, and saints 
            edified through the ordinary means of grace.
          </p>

          <h2>Our Leadership</h2>
          <p>
            Our church is led by a plurality of elders who are called to shepherd the flock of God, teaching 
            sound doctrine, protecting against error, and providing spiritual oversight with gentleness and 
            humility. The elders are assisted by deacons who serve the practical needs of the congregation.
          </p>
          <p>
            We believe that church leadership is a sacred trust, and our elders are men who meet the biblical 
            qualifications outlined in 1 Timothy 3 and Titus 1. They are committed to prayer, the ministry of 
            the Word, and the care of souls.
          </p>

          <div className="mt-12 p-6 bg-muted/30 rounded">
            <h3 className="text-xl font-semibold mb-3">Our Commitment</h3>
            <p className="mb-0">
              We are committed to being a church where the Word of God is faithfully preached, where worship 
              is conducted according to Scripture, where the sacraments are rightly administered, where 
              discipline is lovingly exercised, and where the saints are equipped for works of service. 
              Above all, we desire that Christ would be glorified in our midst.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
