import Section from '@/components/sections/Section';
import ScriptureQuote from '@/components/scripture/ScriptureQuote';
import { beliefsScriptures } from '@/content/scripture';

export default function BeliefsPage() {
  return (
    <div>
      <Section className="pt-16">
        <div className="prose-content">
          <h1 className="text-center mb-12">What We Believe</h1>

          <p className="text-lg text-center text-muted-foreground mb-12">
            Our beliefs are grounded in the authority and sufficiency of Holy Scripture and summarized 
            in the 1689 London Baptist Confession of Faith.
          </p>

          <h2>The Gospel</h2>
          <p>
            The gospel is the good news that God, in His great love and mercy, has provided salvation 
            for sinners through the life, death, and resurrection of Jesus Christ. All people are by 
            nature sinners, dead in trespasses and sins, unable to save themselves. But God, being rich 
            in mercy, sent His Son to live the perfect life we could not live and to die the death we 
            deserved to die.
          </p>
          <p>
            Through faith in Christ alone, sinners are justified—declared righteous before God—not 
            because of any works they have done, but solely on the basis of Christ's finished work. 
            This salvation is received by grace alone, through faith alone, in Christ alone, to the 
            glory of God alone.
          </p>
          <ScriptureQuote
            text={beliefsScriptures.gospel.text}
            reference={beliefsScriptures.gospel.reference}
            translation={beliefsScriptures.gospel.translation}
          />

          <h2>The Doctrines of Grace</h2>
          <p>
            We affirm the doctrines of grace, often summarized as the five points of Calvinism: total 
            depravity, unconditional election, particular redemption, effectual calling, and the 
            perseverance of the saints. These doctrines magnify God's sovereignty in salvation and 
            humble the sinner before the throne of grace.
          </p>
          <p>
            Salvation is entirely of the Lord. From eternity past, God chose a people for Himself. 
            In time, Christ died specifically for His elect, securing their redemption. The Holy Spirit 
            effectually calls them to faith, and God preserves them to the end. All glory belongs to God.
          </p>
          <ScriptureQuote
            text={beliefsScriptures.grace.text}
            reference={beliefsScriptures.grace.reference}
            translation={beliefsScriptures.grace.translation}
          />

          <h2>Covenant Theology</h2>
          <p>
            We hold to covenant theology as articulated in the 1689 London Baptist Confession of Faith. 
            God relates to His people through covenants—binding agreements that display His faithfulness 
            and grace. The covenant of works was made with Adam, and the covenant of grace was established 
            in Christ.
          </p>
          <p>
            The new covenant, prophesied in the Old Testament and inaugurated by Christ, is the fulfillment 
            of God's redemptive purposes. In this covenant, God writes His law on the hearts of His people, 
            forgives their sins, and dwells with them forever.
          </p>
          <ScriptureQuote
            text={beliefsScriptures.covenant.text}
            reference={beliefsScriptures.covenant.reference}
            translation={beliefsScriptures.covenant.translation}
          />

          <h2>The Regulative Principle of Worship</h2>
          <p>
            We believe that God alone prescribes how He is to be worshiped. The regulative principle 
            teaches that in worship, we are to do only what God has commanded in His Word. We do not 
            add to or subtract from what Scripture prescribes.
          </p>
          <p>
            Our worship includes the reading and preaching of Scripture, prayer, the singing of psalms 
            and hymns, the administration of baptism and the Lord's Supper, and the giving of offerings. 
            We seek to worship God in spirit and truth, with reverence and awe.
          </p>
          <ScriptureQuote
            text={beliefsScriptures.worship.text}
            reference={beliefsScriptures.worship.reference}
            translation={beliefsScriptures.worship.translation}
          />

          <h2>Believer's Baptism</h2>
          <p>
            We practice believer's baptism by immersion. Baptism is an ordinance of the new covenant, 
            given by Christ to His church. It is a sign and seal of the covenant of grace, signifying 
            union with Christ in His death, burial, and resurrection.
          </p>
          <p>
            Only those who have made a credible profession of faith in Christ are to be baptized. 
            Baptism does not save, but it is a means by which believers publicly identify with Christ 
            and His church.
          </p>
          <ScriptureQuote
            text={beliefsScriptures.baptism.text}
            reference={beliefsScriptures.baptism.reference}
            translation={beliefsScriptures.baptism.translation}
          />

          <h2>The Lord's Supper</h2>
          <p>
            The Lord's Supper is a sacred ordinance instituted by Christ for His church. In this meal, 
            believers remember Christ's death, proclaim His sacrifice until He returns, and commune with 
            Him by faith. The bread and wine are signs and seals of Christ's body and blood, given for us.
          </p>
          <p>
            We observe the Lord's Supper regularly as a means of grace, a time of solemn reflection, 
            thanksgiving, and renewed commitment to Christ and His people.
          </p>
          <ScriptureQuote
            text={beliefsScriptures.supper.text}
            reference={beliefsScriptures.supper.reference}
            translation={beliefsScriptures.supper.translation}
          />
        </div>
      </Section>
    </div>
  );
}
