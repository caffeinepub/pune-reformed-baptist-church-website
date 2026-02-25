# Specification

## Summary
**Goal:** Build a mobile-optimized, reading-first church website for Pune Reformed Baptist Church with reverent design, doctrinally precise English copy, required pages, a sermons archive backed by the canister, and a backend-stored contact form.

**Planned changes:**
- Create a minimalist, timeless UI design system (deep blue/charcoal/warm gray/off-white) with long-form readable typography and fully responsive layouts; avoid flashy animations and autoplay media.
- Implement routing, page structure, and navigation for: Home, About Us, Our Confession, What We Believe, Worship With Us, Sermons, Discipleship, Resources, and Contact & Visit Us (with active route indication).
- Write page copy in English in a Christ-centered, Scripture-saturated, confessional tone; include Scripture quotations only from ESV or NKJV and avoid political/cultural/social commentary.
- Build the Home page with welcome content, an ESV/NKJV verse, Lord’s Day service info (with placeholders as needed), and a prominent CTA labeled exactly “Join Us This Lord’s Day” linking to visit details.
- Create About Us content (identity aligned with the 1689 LBCF, brief history with placeholder dates, leadership with respectful placeholder names/titles).
- Create Our Confession page with an introduction on Scripture’s supreme authority and the confession’s subordinate role, and present the confession in a structured, long-form-friendly layout.
- Create What We Believe page with sections for the Gospel, Doctrines of Grace, Covenant Theology (1689), Regulative Principle of Worship, believer’s baptism, and the Lord’s Supper, each with labeled ESV/NKJV quotations.
- Create Worship With Us page with Lord’s Day gathering description, simple liturgy outline, and practical what-to-expect guidance (placeholders allowed), avoiding entertainment/performance framing.
- Implement a Sermons archive that lists sermons (title, Scripture text, preacher, date, optional audio link) and supports viewing sermon details (detail page or expandable view), with data loaded from the backend.
- Add backend Motoko models and query methods to list sermons and get sermon by id, including at least 3 seed sermons.
- Create Discipleship page (membership, catechism, family worship) with labeled ESV/NKJV quotations and mention of elder-led congregationalism.
- Create Resources page with curated sections (confessions, catechisms, recommended reading) including short annotations and safe placeholder outbound links where needed.
- Create Contact & Visit Us page with placeholder Pune address, service timings, and a contact form (name, email, message) that stores submissions in the backend and shows loading/success/error; add a backend query to retrieve stored messages for verification/testing.
- Generate and integrate a small set of reverent static images (stored under frontend/public/assets/generated) and use them at least on Home and Worship With Us with restrained presentation.

**User-visible outcome:** Visitors can navigate a calm, readable church website, learn the church’s confession and beliefs, view a sermons archive with details, and submit a contact message to the church with clear confirmation.
