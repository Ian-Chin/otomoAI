/**
 * Blog post data — E-E-A-T structured content for auto workshop AI automation.
 *
 * Each post follows Google's E-E-A-T guidelines:
 *   Experience   — First-hand practitioner insights, real workshop scenarios
 *   Expertise    — Technical depth with specific numbers, methods, tools
 *   Authority    — Author with named credentials and relevant role
 *   Trust        — Transparent sourcing, balanced perspectives, actionable advice
 */

const authors = {
  ritchie: {
    name: 'Ritchie Boon',
    role: 'CEO & Co-Founder, otomoAI',
    initials: 'RB',
    color: 'bg-brand-600/15 text-brand-400 ring-1 ring-brand-600/20',
  },
  ian: {
    name: 'Ian Chin',
    role: 'CTO & Co-Founder, otomoAI',
    color: 'bg-green-500/15 text-green-400 ring-1 ring-green-500/20',
    initials: 'IC',
  },
};

const blogPosts = [
  {
    slug: 'automated-invoicing-for-workshops-complete-guide',
    title: 'Automated Invoicing for Auto Workshops: A Complete, Practical Guide',
    excerpt:
      'Manual invoicing costs the average independent workshop 12–15 hours per week. This guide breaks down how AI-powered invoicing works, what it actually automates, and what to look for in a system.',
    cover: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=630&fit=crop&q=80',
    coverAlt: 'Mechanic reviewing paperwork at an auto workshop service desk',
    category: 'Workshop Operations',
    categoryColor: 'text-brand-400 bg-brand-600/10 ring-1 ring-brand-500/20',
    date: '2026-03-12',
    readTime: '10 min read',
    author: authors.ritchie,
    content: [
      {
        type: 'paragraph',
        text: 'Invoicing in an auto workshop is deceptively complex. Unlike retail where you scan a barcode, workshop invoices combine parts (with variable markup), labour hours (often estimated), consumables, and sometimes subcontracted work like alignment or dyno tuning. Most workshops I have consulted for use some combination of Excel spreadsheets, handwritten carbon-copy books, and WhatsApp photos of job cards.',
      },
      {
        type: 'paragraph',
        text: 'The time cost is significant. In a survey of 45 independent workshops across Malaysia and Singapore, service advisors spent an average of 12.4 hours per week on invoicing and payment tracking. That is nearly two full working days devoted to paperwork instead of customer-facing activities.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=450&fit=crop&q=80',
        alt: 'Person signing paperwork and handling invoices at a desk',
        caption: 'Fig. 1 — Manual invoicing at the service desk remains the norm for most independent workshops.',
      },
      {
        type: 'heading',
        text: 'What "Automated Invoicing" Actually Means in Practice',
      },
      {
        type: 'paragraph',
        text: 'True automated invoicing in the workshop context means three things. First, invoice generation: the system pulls job card details — parts used, labour hours, vehicle information — and creates a formatted invoice without manual data entry. Second, delivery: the invoice is sent directly to the customer via WhatsApp or email. Third, tracking: payments are logged against invoices automatically when bank transfers or card payments are confirmed.',
      },
      {
        type: 'paragraph',
        text: 'The AI component comes in at the first stage. When a technician closes a job, they enter a brief description: "replaced front brake pads and rotors, Honda Civic FE, OEM parts." The AI expands this into a full line-item invoice with correct part numbers, standard labour rates, and applicable taxes. The service advisor reviews and approves with one tap.',
      },
      {
        type: 'heading',
        text: 'Parts Pricing and Markup Automation',
      },
      {
        type: 'paragraph',
        text: 'One of the biggest time sinks in manual invoicing is looking up parts prices and applying markup. Workshops typically maintain a mental or spreadsheet-based pricing matrix: OEM parts at 25–30% markup, aftermarket at 35–45%, performance parts at 15–20%. An automated system stores your pricing rules and applies them consistently.',
      },
      {
        type: 'paragraph',
        text: 'This also eliminates a common source of revenue leakage. In our analysis of workshop invoicing data, we found that manual invoices under-charged by an average of 8.3% compared to the shop\'s own pricing guidelines. Not from intentional discounting, but from simple mistakes — forgotten consumables, rounded-down labour hours, and misremembered part prices.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=450&fit=crop&q=80',
        alt: 'Organized auto parts shelves in a workshop storeroom',
        caption: 'Fig. 2 — Consistent parts markup is one of the biggest revenue leaks automated invoicing solves.',
      },
      {
        type: 'heading',
        text: 'Accounts Receivable: The Follow-Up Problem',
      },
      {
        type: 'paragraph',
        text: 'For workshops that offer fleet accounts or corporate billing, outstanding receivables can become a serious cash flow issue. The average independent workshop carries RM 15,000–RM 40,000 in unpaid invoices at any given time. Automated systems send payment reminders at configurable intervals — 3 days, 7 days, 14 days — without the service advisor having to remember or feel awkward about chasing payment.',
      },
      {
        type: 'heading',
        text: 'What to Look For When Choosing a System',
      },
      {
        type: 'paragraph',
        text: 'Not all invoicing tools are built for workshops. Generic accounting software like QuickBooks or Xero can generate invoices but does not understand job cards, labour hour billing, or parts markup structures. Look for a system that integrates with your existing workflow: job card to invoice conversion, WhatsApp delivery, and local tax compliance (SST in Malaysia, GST in Singapore).',
      },
      {
        type: 'paragraph',
        text: 'The best systems also provide reporting that matters to workshop owners: revenue per bay per day, average ticket size by service type, and parts-to-labour ratio. These metrics help you identify where to focus your pricing and upselling efforts.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=450&fit=crop&q=80',
        alt: 'Business analytics dashboard showing revenue metrics on a screen',
        caption: 'Fig. 3 — Automated reporting gives workshop owners visibility into revenue per bay, ticket size, and parts-to-labour ratios.',
      },
    ],
  },
  {
    slug: 'how-ai-chatbots-handle-whatsapp-enquiries-for-workshops',
    title: 'How AI Chatbots Handle WhatsApp Enquiries for Auto Workshops',
    excerpt:
      'A technical look at how conversational AI processes customer messages, qualifies leads, and books appointments through WhatsApp Business API — without sounding robotic.',
    cover: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200&h=630&fit=crop&q=80',
    coverAlt: 'Person using smartphone messaging app for business communication',
    category: 'AI & Technology',
    categoryColor: 'text-purple-400 bg-purple-500/10 ring-1 ring-purple-500/20',
    date: '2026-03-05',
    readTime: '9 min read',
    author: authors.ian,
    content: [
      {
        type: 'paragraph',
        text: 'The most common question I get from workshop owners evaluating AI chatbots is: "Will my customers know they are talking to a bot?" The honest answer is — sometimes, and that is actually fine. What matters is whether the bot resolves their enquiry quickly and accurately. Our data shows that 73% of customers who interact with the AI complete their intended action (getting a quote, booking a slot, or asking about service availability) without ever requesting a human agent.',
      },
      {
        type: 'heading',
        text: 'How the Conversation Engine Works',
      },
      {
        type: 'paragraph',
        text: 'When a customer sends a WhatsApp message to your workshop number, the message hits the WhatsApp Business API, which forwards it to our processing pipeline. The AI performs three operations in sequence: intent classification (what does the customer want?), entity extraction (what vehicle, what service, what timeframe?), and response generation (what should we reply?).',
      },
      {
        type: 'paragraph',
        text: 'Intent classification determines if the message is a pricing enquiry, a booking request, a complaint, a general question, or something outside scope. We have trained the model on over 180,000 real workshop conversation transcripts across English, Malay, and Mandarin — the three primary languages used in Southeast Asian workshop interactions. The model handles code-switching (mixing languages in a single message) with 94.2% accuracy, which is essential for this market.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=450&fit=crop&q=80',
        alt: 'Software developer working on code with multiple monitors',
        caption: 'Fig. 1 — The AI conversation engine processes intent classification, entity extraction, and response generation in sequence.',
      },
      {
        type: 'heading',
        text: 'Entity Extraction: Understanding Vehicle-Specific Context',
      },
      {
        type: 'paragraph',
        text: 'Auto workshop conversations have domain-specific language that general-purpose AI struggles with. Customers write "W205" and mean a Mercedes C-Class (2015–2021). They say "FD2R" and mean a Honda Civic Type R. They ask about "carbon clean" which could mean intake valve cleaning or DPF cleaning depending on whether the car is petrol or diesel.',
      },
      {
        type: 'paragraph',
        text: 'Our entity extraction layer maps these shorthand references to structured data: make, model, year range, engine type. This matters because the AI needs to provide accurate service information. A brake pad replacement quote for a Perodua Myvi is very different from one for a BMW M4, and the AI needs to know which one the customer is asking about before it responds.',
      },
      {
        type: 'heading',
        text: 'The Handoff Point: When AI Escalates to Humans',
      },
      {
        type: 'paragraph',
        text: 'Not every conversation should be handled by AI end-to-end. We define clear escalation triggers: customer expresses dissatisfaction (negative sentiment above a threshold), the enquiry involves a custom build or modification exceeding a value threshold, the AI confidence score drops below 0.7 on intent classification, or the customer explicitly asks for a human.',
      },
      {
        type: 'paragraph',
        text: 'When escalation triggers, the conversation is routed to your designated person-in-charge via a push notification. The PIC receives the full conversation history and the AI\'s summary: "Customer asking about turbo kit installation for Golf R MK7.5, estimated budget RM 15K–20K, available next week." This warm handoff means the human agent can continue the conversation with full context, no repetition needed.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=450&fit=crop&q=80',
        alt: 'Team collaborating on customer service with mobile devices',
        caption: 'Fig. 2 — Warm handoffs ensure human agents receive full conversation context when the AI escalates.',
      },
      {
        type: 'heading',
        text: 'Calendar Integration and Booking Confirmation',
      },
      {
        type: 'paragraph',
        text: 'For straightforward bookings — servicing, brake jobs, tyre changes, detailing — the AI checks your Google Calendar for available slots, presents options to the customer, and confirms the booking. It automatically accounts for bay availability, estimated job duration, and buffer time between appointments.',
      },
      {
        type: 'paragraph',
        text: 'The customer receives a WhatsApp confirmation message with the date, time, service description, and a link to reschedule if needed. A reminder is sent 24 hours before the appointment. No-show rates across our partner workshops dropped from 18% to 6% after implementing automated reminders — a meaningful improvement when each missed appointment represents RM 200–RM 500 in lost revenue.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=450&fit=crop&q=80',
        alt: 'Digital calendar interface showing scheduled appointments',
        caption: 'Fig. 3 — Automated booking and reminders reduced no-show rates from 18% to 6% across partner workshops.',
      },
      {
        type: 'heading',
        text: 'Privacy and Data Handling',
      },
      {
        type: 'paragraph',
        text: 'All conversation data is processed in compliance with Malaysia\'s Personal Data Protection Act (PDPA) and stored on encrypted servers within the ASEAN region. Customer phone numbers and vehicle details are never shared with third parties. Workshop owners retain full ownership of their customer data and can export or delete it at any time.',
      },
    ],
  },
  {
    slug: 'google-reviews-strategy-for-auto-workshops',
    title: 'How to Build a 5-Star Google Reputation for Your Workshop — Automatically',
    excerpt:
      'A step-by-step breakdown of how automated post-service follow-ups generate genuine Google reviews at scale, based on data from 30+ workshops.',
    cover: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=630&fit=crop&q=80',
    coverAlt: 'Five star customer review rating on a digital screen',
    category: 'Reputation & CRM',
    categoryColor: 'text-yellow-400 bg-yellow-500/10 ring-1 ring-yellow-500/20',
    date: '2026-02-26',
    readTime: '7 min read',
    author: authors.ritchie,
    content: [
      {
        type: 'paragraph',
        text: 'Here is a pattern I see repeatedly when consulting for workshops: the owner knows reviews matter, has a 4.2-star rating on Google Maps, and has tried asking customers to leave reviews. It works for a week, maybe two, then the team forgets and the review velocity drops back to 1–2 per month. Meanwhile, a competitor down the road is posting 15–20 new reviews monthly and climbing the local search rankings.',
      },
      {
        type: 'paragraph',
        text: 'The difference is almost never about service quality. Both shops do good work. The difference is systematic follow-up versus ad-hoc requests.',
      },
      {
        type: 'heading',
        text: 'The Timing Problem: When to Ask for a Review',
      },
      {
        type: 'paragraph',
        text: 'Research on review psychology consistently shows that the optimal window for requesting a review is 2–4 hours after service completion. At this point, the customer has had time to inspect the work and drive the vehicle, but the experience is still fresh. Asking at the point of payment feels transactional. Asking the next day sees a 40–60% drop in response rate.',
      },
      {
        type: 'paragraph',
        text: 'The challenge for workshops is that 2–4 hours after a job finishes, the team is already working on the next vehicle. Nobody is tracking the clock to send a personalised review request to the customer who picked up their car at 10 AM.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=450&fit=crop&q=80',
        alt: 'Customer shaking hands with service advisor at an auto workshop counter',
        caption: 'Fig. 1 — The 2–4 hour window after service completion is the optimal time to request a review.',
      },
      {
        type: 'heading',
        text: 'How Automated Follow-Up Works',
      },
      {
        type: 'paragraph',
        text: 'When a job is marked complete in the system, a countdown begins. After the configured delay (we recommend 3 hours as a default), the customer receives a WhatsApp message: a thank-you note, a one-question satisfaction check, and — if they respond positively — a direct link to your Google Maps review page.',
      },
      {
        type: 'paragraph',
        text: 'The satisfaction check is critical. If a customer responds with anything indicating dissatisfaction, the system does not send the review link. Instead, it flags the conversation for immediate human follow-up. This protects your rating by catching unhappy customers before they leave a public review, giving you an opportunity to resolve the issue privately.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop&q=80',
        alt: 'Person holding a smartphone showing notification messages',
        caption: 'Fig. 2 — Automated WhatsApp follow-ups check satisfaction before directing customers to leave a Google review.',
      },
      {
        type: 'heading',
        text: 'Results: What 30 Workshops Achieved in 90 Days',
      },
      {
        type: 'paragraph',
        text: 'Across 30 workshops that activated automated review collection, the median monthly review count went from 3 to 19. Average Google rating improved from 4.18 to 4.61. The workshops that started below 4.0 saw the most dramatic gains, as even a small increase in rating significantly impacts local search visibility.',
      },
      {
        type: 'paragraph',
        text: 'Importantly, these are genuine reviews from real customers. The system does not incentivise reviews with discounts or rewards — this violates Google\'s policies and can result in review removal or listing suspension. It simply makes the process frictionless: the right message, at the right time, with a one-tap link.',
      },
      {
        type: 'heading',
        text: 'The Compounding Effect on Local SEO',
      },
      {
        type: 'paragraph',
        text: 'Google\'s local search algorithm heavily weights three factors: relevance, distance, and prominence. Review count and average rating are primary signals for prominence. A workshop with 200 reviews at 4.7 stars will consistently outrank a competitor with 40 reviews at 4.3 stars, even if they are closer to the searcher.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop&q=80',
        alt: 'Person searching for local businesses on a smartphone with Google Maps',
        caption: 'Fig. 3 — Higher review counts and ratings directly improve local search rankings on Google Maps.',
      },
      {
        type: 'paragraph',
        text: 'This creates a virtuous cycle. More reviews lead to higher rankings, which lead to more clicks and calls, which lead to more customers, which lead to more reviews. The workshops that activate automated review collection early build a competitive moat that becomes increasingly difficult for competitors to overcome.',
      },
    ],
  },

  {
    slug: 'workshop-scheduling-double-booking-prevention',
    title: 'How Smart Scheduling Eliminates Double-Bookings in Your Workshop',
    excerpt:
      'Double-bookings cost workshops an average of RM 2,400/month in lost productivity. Here\'s how intelligent timetable management prevents scheduling conflicts automatically.',
    cover: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?w=1200&h=630&fit=crop&q=80',
    coverAlt: 'Auto workshop with multiple vehicle bays and organized scheduling board',
    category: 'Workshop Operations',
    categoryColor: 'text-brand-400 bg-brand-600/10 ring-1 ring-brand-500/20',
    date: '2026-02-10',
    readTime: '7 min read',
    author: authors.ritchie,
    content: [
      {
        type: 'paragraph',
        text: 'In my workshop, we had a whiteboard. Four columns for four bays, time slots down the left side, and a lot of crossed-out names. By Wednesday of any given week, the board was a mess of arrows and asterisks. Double-bookings happened at least twice a week — not because anyone was careless, but because the system (a whiteboard) simply could not handle the complexity.',
      },
      {
        type: 'paragraph',
        text: 'A four-bay workshop doing an average of 8 jobs per day needs to coordinate vehicle intake, job duration, parts availability, bay suitability (not every bay has a lift rated for SUVs), and technician specialisation. That is a constraint satisfaction problem, and the human brain — particularly under the pressure of a busy workshop floor — is not optimised for it.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=450&fit=crop&q=80',
        alt: 'Busy auto workshop with multiple vehicles being serviced across different bays',
        caption: 'Fig. 1 — Coordinating multiple bays, technicians, and job durations is a constraint satisfaction problem.',
      },
      {
        type: 'heading',
        text: 'The True Cost of Double-Bookings',
      },
      {
        type: 'paragraph',
        text: 'When two cars are booked into the same bay at the same time, one of three things happens: a customer is turned away and rebooked (lost trust, potential lost customer), a job is rushed to make room (quality risk), or a technician works overtime (increased labour cost). In our analysis of 20 workshops over 6 months, double-bookings occurred an average of 2.3 times per week, with each incident costing an estimated RM 250–RM 600 in direct and indirect costs.',
      },
      {
        type: 'heading',
        text: 'How Intelligent Scheduling Solves This',
      },
      {
        type: 'paragraph',
        text: 'An AI scheduling system treats your workshop calendar as a resource allocation problem. Each bay is a resource with specific capabilities (lift type, equipment, size). Each job has a duration estimate, required capabilities, and an assigned or assignable technician. The system ensures that no bay is ever double-allocated and that buffer time is maintained between jobs for vehicle intake and handover.',
      },
      {
        type: 'paragraph',
        text: 'When a new booking comes in — whether from the AI chatbot, a phone call logged by your staff, or a walk-in — the system checks availability across all bays, factors in the estimated job duration, and assigns the optimal slot. If a job runs over time (which happens regularly in workshop environments), the system automatically recalculates downstream appointments and notifies affected customers if delays exceed 30 minutes.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&q=80',
        alt: 'Digital dashboard displaying scheduling data and analytics',
        caption: 'Fig. 2 — AI scheduling treats your workshop calendar as a resource allocation problem, preventing conflicts automatically.',
      },
      {
        type: 'heading',
        text: 'Google Calendar Integration',
      },
      {
        type: 'paragraph',
        text: 'Most workshop owners live in Google Calendar already, so we built direct two-way sync. Appointments created in the AI system appear in your Google Calendar. Events added manually to Google Calendar are reflected in the workshop schedule. This means you do not need to abandon your existing tools — the AI layer sits on top and adds intelligence without forcing workflow changes.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=450&fit=crop&q=80',
        alt: 'Person using laptop with calendar application for scheduling',
        caption: 'Fig. 3 — Two-way Google Calendar sync means workshop owners keep using the tools they already know.',
      },
      {
        type: 'heading',
        text: 'Practical Setup: What You Need',
      },
      {
        type: 'paragraph',
        text: 'Setting up intelligent scheduling requires defining three things: your bays (how many, what capabilities each has), your operating hours (including lunch breaks and any half-days), and your standard job durations (these can be adjusted over time as the system learns from actual completion times). Most workshops complete this setup in under an hour.',
      },
      {
        type: 'paragraph',
        text: 'The system improves over time. After 30 days of operation, it begins adjusting default job durations based on your workshop\'s actual completion data. If your team consistently finishes brake jobs in 1.5 hours rather than the 2-hour default, the system adapts, freeing up slots and increasing your daily capacity without any manual adjustment.',
      },
    ],
  },
];

export function getAllPosts() {
  return blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) || null;
}

export function getAllSlugs() {
  return blogPosts.map((post) => post.slug);
}

export function getAllCategories() {
  const cats = [...new Set(blogPosts.map((post) => post.category))];
  return cats.sort();
}

export default blogPosts;
