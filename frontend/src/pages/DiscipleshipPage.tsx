import Section from '@/components/sections/Section';
import ScriptureQuote from '@/components/scripture/ScriptureQuote';
import { discipleshipScriptures } from '@/content/scripture';

export default function DiscipleshipPage() {
  return (
    <div>
      <Section className="pt-16">
        <div className="prose-content">
          <h1 className="text-center mb-12">Discipleship</h1>

          <p className="text-lg text-center text-muted-foreground mb-12">
            Discipleship is the lifelong process of growing in grace and conformity to Christ. We are 
            committed to equipping the saints for faithful living through the ordinary means of grace.
          </p>

          <h2>Meaningful Church Membership</h2>
          <p>
            We believe that every Christian should be a committed member of a local church. Church 
            membership is not merely a formality, but a covenant relationship in which believers commit 
            to one another and to the oversight of the elders.
          </p>
          <p>
            Our church is governed by a plurality of elders who shepherd the flock, and by the 
            congregation who affirm decisions and hold one another accountable. This elder-led 
            congregationalism reflects the New Testament pattern of church government.
          </p>
          <p>
            Members are expected to attend worship regularly, participate in the life of the church, 
            support the ministry financially, and submit to the spiritual oversight of the elders. 
            In return, members receive the care, accountability, and fellowship of the body of Christ.
          </p>
          <ScriptureQuote
            text={discipleshipScriptures.membership.text}
            reference={discipleshipScriptures.membership.reference}
            translation={discipleshipScriptures.membership.translation}
          />

          <h2>Catechism and Doctrinal Instruction</h2>
          <p>
            We use catechisms as tools for teaching sound doctrine. Catechisms are question-and-answer 
            summaries of biblical truth that have been used by the church for centuries to instruct 
            believers in the faith.
          </p>
          <p>
            We encourage families to use catechisms in family worship, and we provide catechism classes 
            for children and new believers. The goal is not rote memorization, but deep understanding 
            of Scripture and its application to life.
          </p>
          <ScriptureQuote
            text={discipleshipScriptures.catechism.text}
            reference={discipleshipScriptures.catechism.reference}
            translation={discipleshipScriptures.catechism.translation}
          />

          <h2>Family Worship</h2>
          <p>
            We believe that the home is the primary place of discipleship. Parents are called to teach 
            their children the Word of God, to pray with them, and to model godly living before them.
          </p>
          <p>
            Family worship is a daily practice in which the family gathers to read Scripture, sing, 
            pray, and discuss God's Word. This practice strengthens the family, builds a culture of 
            devotion, and passes the faith to the next generation.
          </p>
          <p>
            We encourage all families to establish a regular pattern of family worship, and we provide 
            resources and guidance to help families grow in this practice.
          </p>
          <ScriptureQuote
            text={discipleshipScriptures.family.text}
            reference={discipleshipScriptures.family.reference}
            translation={discipleshipScriptures.family.translation}
          />

          <div className="mt-12 p-6 bg-muted/30 rounded">
            <h3 className="text-xl font-semibold mb-3">Growing in Grace</h3>
            <p className="mb-0">
              Discipleship is not a program, but a way of life. We grow in grace through the faithful 
              use of the means God has provided: the Word, prayer, the sacraments, fellowship, and 
              service. As we walk together in the faith, we encourage one another, bear one another's 
              burdens, and press on toward the goal of Christlikeness.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
