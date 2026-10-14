# Outbound and prospecting

Load to build pipeline. Closes with `templates/5-touch-sequence.md`, `templates/cold-call-scripts.md`, `examples/cold-email-good-vs-bad.md`.

## The pipeline rule

Prospecting done today shows up as pipeline in roughly 60–90 days (Blount's "30-day rule": what you do or skip in any 30-day window decides the next quarter). Pipeline is a daily habit with a number, not a campaign.

## Signal-based lists beat static lists

Build the list from **signals that a problem is live**, not from firmographics alone:

| Signal | Where to see it | Why it matters |
|---|---|---|
| Hiring for the role that owns your problem | Job boards, LinkedIn | Budget exists, pain is acknowledged |
| New executive in the function | LinkedIn, press | New leaders change vendors in their first 90 days |
| Funding round, acquisition, expansion | Press, registries | Money and change at the same time |
| Product launch, new market | Company news | New processes break |
| Regulatory deadline in their sector | Regulator sites | A date they can't move |
| Visits to pricing/comparison pages | Your analytics / intent tools | Active evaluation |
| Public complaint or review | Social, review sites | Pain stated in their words |
| Usage signals (PLG) | Your product | `references/plg-pql.md` |

Prioritize: signal + fit + reachable contact. A perfect-fit account with no signal goes in the nurture list, not the sequence.

## Research before the first touch (2 minutes, not 20)

Find one thing that is true, specific and recent: a post they wrote, a hire, a stated goal in an interview, a product change. Use it in the first line. If you can't find anything in two minutes, send a short, honest, non-personalized message or skip the account; fake personalization ("loved your recent post!") now reads as template.

## Deliverability is a prerequisite, not a detail

Before sending volume from any domain:
- **SPF, DKIM, DMARC** configured and passing. Google and Yahoo have enforced authentication, one-click unsubscribe and a spam-complaint rate under 0.3% for bulk senders since February 2024; unauthenticated mail is filtered.
- **Warm up** new domains/mailboxes over 2–4 weeks before cold volume.
- **Volume cap** per mailbox: tens of cold emails a day, not hundreds. Use a separate sending domain from your main one.
- **List hygiene:** verify addresses; bounces above ~2% damage reputation.
- **Plain text, few links, no images, no tracking pixels** for cold mail.
- Monitor: open rate is unreliable (privacy proxies); track **reply rate** and **positive reply rate**.

Any volume advice without this section is advice to burn a domain.

## Multichannel 5-touch sequence (10 days)

| Day | Touch | Goal |
|---|---|---|
| 1 | Call | Permission-based opener; book 15 minutes or learn why not |
| 2 | Email | 3–5 sentences: signal, problem hypothesis, one question |
| 4 | LinkedIn | Connect with a one-line reason; or comment on their post |
| 7 | Call + email | Reference day 2; add one new insight or proof |
| 10 | Breakup email | "Should I close the file?" No guilt, easy out |

Full copy: `templates/5-touch-sequence.md`.

## Cold calls

They work again precisely because inboxes are full. Rules:
- **Permission opener:** "I know this is out of the blue. Can I take 30 seconds to say why I called, and you decide if we keep going?"
- **Pattern interrupt:** don't sound like a script; sound like a person who did research.
- **One hypothesis, one question:** "Teams your size usually hit [problem] when [signal]. Is that on your radar, or am I off?"
- **Tone matching:** mirror their pace and energy.
- **Ask for the meeting, then stop talking.**
Scripts: `templates/cold-call-scripts.md`.

## Metrics for outbound

| Metric | Healthy range (heuristic, re-verify) |
|---|---|
| Email positive reply rate | 2–5% on well-targeted, signal-based lists |
| Call connect rate | 5–15% depending on sector |
| Connect → meeting | 15–30% with a good opener |
| Meeting → qualified | Above 50%; below means list or pitch problem |

Track per sequence and per signal type; kill what doesn't perform after a statistically meaningful sample (hundreds, not dozens).

## What to cut

- "Hope you're well" / "I'd like to introduce our company".
- Walls of text; more than one call to action.
- Attachments and decks on first touch.
- Follow-ups that say "just bumping this".
- Any sequence longer than needed to get a clear yes or no.

## Checklist before sending any outbound

- [ ] Is the touch-1 observation **verifiable** by anyone?
- [ ] Does the email have 3 sentences and **one** request?
- [ ] Is the phrasing honest (no invented urgency, no false scarcity)?
- [ ] Do I know which pain I am assuming — and is it in the profile?
- [ ] Do I have authorised proof ready to use if they reply?
- [ ] Does touch 5 close the file politely (no emotional blackmail)?
