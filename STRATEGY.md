# Otomo AI: Automation Adaptation Strategy

This guide details how to adapt the extracted n8n templates ("WhatsApp Lead Generation" & "Calendar Appointment Booking") for our core automotive niches, and how to inject Google Gemini AI LangChain nodes to make the flows fully autonomous.

---

## 1. Template: WhatsApp Lead Generation (`template_whatsapp_lead.json`)

**Original Flow:** A Typeform submission is analyzed by AI for sentiment, saved to a database, and followed up via WhatsApp.

### Making it Autonomous with Gemini AI
To transform this into an *always-on* autonomous lead generation engine:
- **Replace the Webhook:** Swap the Typeform webhook for a **WhatsApp Trigger**.
- **Inject AI Agent Node:** Replace the basic Sentiment Analysis with an **AI Agent Node (`@n8n/n8n-nodes-langchain.agent`)**.
- **Add Gemini Chat Node:** Connect a **Google Gemini Chat Model** to the AI Agent.
- **Add Chat Memory:** Attach a **Window Buffer Memory** node so Gemini remembers the conversation context.

### Adaptation Guide by Niche

#### 🏎️ Premium Car Tint Shop
- **Agent Role:** Premium Tint Consultant.
- **Strategy:** Qualify leads based on their immediate problem (heat rejection vs. privacy/security).
- **Flow:** If the user asks about heat rejection, the Agent dynamically recommends the premium ceramic package, quotes the estimated price, and captures their car model.

#### 🏍️ Superbike Workshop
- **Agent Role:** Performance & Maintenance Expert.
- **Strategy:** Identify riders needing high-margin services (e.g., Desmo valve clearance, Dyno tuning).
- **Flow:** Gemini asks about bike make and current mileage. If it matches a major service interval, Gemini explains the importance and tags them as a "Hot Lead".

#### 🇩🇪 Premium Continental Specialist (BMW/Merc/Porsche/Audi)
- **Agent Role:** Expert Technical Consultant.
- **Strategy:** Do not quote blind. Ask for specific symptoms (e.g., "Any warning lights on the dash?" or "Any unusual vibrations at 110km/h?").
- **Premium Hook:** Explain why a computerized diagnostic scan is mandatory for Euro cars.
- **AI Tweak:** If the user mentions a "Check Engine Light," Gemini automatically tags the lead as "Urgent - Diagnostic Required" and sends an immediate Telegram alert to the Head Mechanic.

#### 🏢 Used Car Dealerships (Private Workshop Network)
- **Agent Role:** Fleet & Warranty Manager.
- **Multi-Location Routing:** Gemini checks location: "Which branch is closer to you? Glenmarie, Cheras, or Puchong?"
- **Internal Reconditioning:** Dealership salesmen can use a "Hidden Keyword" in WhatsApp to bypass the standard queue and trigger a high-priority "Internal Prep" workflow for cars that just arrived in stock.

---

## 2. Template: Calendar Appointment Booking (`template_calendar_booking.json`)

**Original Flow:** An AI Receptionist uses OpenAI to check Google Calendar availability, book appointments, and log the data.

### Making it Autonomous with Gemini AI
- **Swap the LLM:** Disconnect OpenAI and inject the **Google Gemini Chat Model** into both the primary AI Agent and the Structured Output Parser branches.
- **Provide Tool Access:** Ensure Gemini has active tool access to the *Google Calendar Tool* and *Google Sheets Tool* (or Notion) for reading availability and writing bookings.

### Adaptation Guide by Niche

#### 🏎️ Premium Car Tint Shop
- **4-Hour Booking Blocks:** Tinting takes time. Instruct Gemini: *"Tinting services require a 4-hour uninterrupted block. Only propose start times that have 4 continuous hours open (e.g., 9 AM to 1 PM or 1 PM to 5 PM)."* #### 🏍️ Superbike Workshop
- **Scheduling Logic:** Instruct Gemini: *"For Desmo/Major services, advise the customer they must drop off the bike in the morning and it requires 2 full days. For Dyno tuning, propose open 2-hour slots."*

#### 🇩🇪 Premium Continental Specialist (BMW/Merc/Porsche/Audi)
- **Diagnostic Slots:** Conti repairs are unpredictable. Instruct Gemini: *"Always offer a 'Diagnostic First' 1-hour slot before booking major repairs. Ensure 30 minutes of buffer time between appointments."*
- **Loaner Car Integration:** Give Gemini a tool to check a Google Sheet for "Loaner Car Status." If a loaner is available, Gemini dynamically upsells: "Boss, since this repair takes 2 days, would you like to reserve our loaner BMW for RM 80/day?"

#### 🏢 Used Car Dealerships (Private Workshop Network)
- **Network Scheduling:** Gemini has access to multiple branch calendars. 
- **Instruction:** *"Check Glenmarie first. If full, check Puchong. Suggest the branch with the earliest available opening."*
- **Post-Sale Retention Trigger:** 3 months after a car is sold, n8n triggers a proactive WhatsApp message: "Salam Boss! Your 3-month complimentary check-up is due. Shall I check a slot at our private workshop for you?"

---

## 3. Infrastructure Sync & Routing

### Master Dashboard Integration (Notion)
- **Source of Truth:** All shop metadata (from the Scraper workflow) lives in the `Otomo AI - Master Dashboard` in Notion.
- **Dynamic Routing (WF 01):** The Master Router filters incoming WhatsApp messages by `WhatsApp_Number` and cross-references the Notion database.
- **Variable Injection:** The `Calendar_ID` and `Niche` (Tint, Superbike, Conti, Dealer) are passed dynamically as variables to the sub-workflows so one single AI setup can handle different business types seamlessly.