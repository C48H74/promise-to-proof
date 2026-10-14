---
name: promise-to-proof
description: "Run the whole revenue lifecycle of a B2B or service business, from promise to proof. SELL: offer, pricing and tiers, guarantees, idea validation, outbound, discovery (SPIN, Mom Test), qualification (MEDDPICC), objections and no-decision deals (JOLT), negotiation, buying committees, proposals. DELIVER: sales-to-delivery handoff, scope, schedule, cost and earned value, risk, kickoff, status reports, retention, referrals, case studies (PMBOK 7, ISO 21502/31000). Use to review an offer, price, email or proposal; diagnose why revenue stalled; plan, control or report a project. Triggers: deal stuck, 'I'll think about it', cold email, discovery call, pricing, proposal, scope creep, project overran, status report, churn. Not for source code, legal, tax or accounting opinions."
metadata:
  version: "3.0.0"
  language: "en"
  last_reviewed: "2026-10-14"
  review_cadence: "Every 6 months: re-check trends.md, metrics benchmarks, sources.md and the 'not verified' items."
  license: "CC BY 4.0"
---

# Promise to Proof (v3)

Two fronts, one spine. **Sell** makes a promise; **Deliver** keeps it; **Evidence** connects them. A business that sells what it cannot deliver, or delivers what it never sold well, breaks at the boundary. This file is an **orchestrator**: it picks the mode and the module. Theory lives in `references/`, fillable artefacts in `templates/`, scripts in `objections/`, go/no-go gates in `checklists/`, worked cases in `examples/`. Load only what the situation needs.

Reply in the user's language. Be direct. Every recommendation ends in an artefact, a script or a number, never in a slogan.

## Rules that outrank all others

1. **Evidence over adjectives.** No claim without a source: a person, number, date or document. Evidence ladder and number handling: `references/evidence-and-profile.md`.
2. **Stop at the first broken link.** Never optimise conversion when the problem is reach (Step 2).
3. **Never invent a number, testimonial or case.** What is missing becomes `[to fill in]`. Simulations are labelled as simulations.
4. **No profile, no output.** If `templates/business-profile.md` is empty, ask only its minimum questions, once, before producing anything.
5. **Promise only what you control.** Process, method and delivery date yes; the client's result, adoption or revenue no. Rewrite result promises as process promises.
6. **A never-sold offer is validated with real money first** (`templates/idea-validation-script.md`), not structured first.
7. **Nothing is sold that delivery cannot sustain.** No kickoff without a signed handoff contract (`references/handoff-sell-to-deliver.md`).

Sales discipline: every call ends with a scheduled next step or the deal is marked at risk · no price goes out without a quantified pain or a business case · discounts are traded, never given · enterprise deals are never single-threaded · treat "no decision" before treating the competition · scarcity and deadlines are real or absent · proof is documented and authorised · one variable per experiment, with a stop rule.

## Step 0 — Pick the smallest mode that answers

| Mode | When | Deliverable |
|---|---|---|
| **Quick review** | One thing: an email, price, proposal, objection, status report | Verdict in one line + corrected version + one reason per change |
| **Bottleneck diagnosis** | "I need more clients / revenue / margin", "it doesn't convert", cause unknown | The 5 links with number or "unknown" + the single next experiment (`templates/experiment-card.md`) |
| **Full build** | New offer, segment, motion, project, or a founder starting to sell | The relevant subset of the maps in Step 4, each closed with its template |

Never default to a full build and never run all three at once. If unclear, pick the smallest mode, say so, and ask only if the answer changes the path.

## Step 1 — Decision tree: what to load

Read **one** module. Read a second only if the first points to it.

| Situation | Load |
|---|---|
| Offer never sold, "is there demand?" | `references/validation-and-negotiation-br.md` + `templates/idea-validation-script.md` |
| Vague offer, guessed price, messy tiers | `references/offer-pricing.md` + `templates/offer-pricing-canvas.md` + `templates/pricing-tier-worksheet.md` |
| Guarantee, refund, urgency, scarcity | `references/guarantees-scarcity.md` + `checklists/risk-and-proof.md` |
| Unit economics, capacity, cash, break-even | `references/economics.md` + `examples/unit-economics.md` + `templates/metrics-dashboard.md` |
| Proposal and guarantee for a client | `templates/proposal-and-guarantee.md` |
| Cold outreach, nobody replies | `references/outbound.md` + `templates/5-touch-sequence.md` + `templates/cold-call-scripts.md` |
| First call, discovery | `references/discovery.md` + `templates/discovery-call-guide.md` + `templates/consultative-sales-script.md` |
| Large deal, qualification, forecast | `references/qualification.md` + `templates/meddpicc-scorecard.md` |
| Deal stalled, "I'll think about it" | `references/jolt.md` + `objections/library.md` |
| Any objection or price pushback | `references/objections.md` + `objections/library.md` (+ `references/negotiation.md` for price) |
| Discount, procurement, contract terms | `references/negotiation.md` + `templates/negotiation-planner.md` + `templates/integrative-negotiation-script.md` |
| One contact in the account | `references/multithreading.md` + `templates/buying-committee-map.md` |
| Pitch, demo, deck, website hero | `references/narrative.md` + `templates/pitch-narrative.md` |
| Founder selling, first rep | `references/founder-sales.md` |
| Self-serve product with usage signals | `references/plg-pql.md` + `templates/plg-experiment.md` |
| Which method (SPIN, MEDDPICC, JOLT, Challenger) and what the sources really say | `references/sales-methods-evidence.md` |
| Persuasion mechanics, exact phrases | `references/psychology.md` |
| AI in prospecting, calls, scoring | `references/ai-in-sales.md` + `templates/ai-sales-evaluation.md` + `templates/ai-brand-audit.md` |
| Website, content | `references/content.md` |
| Full map, funnel gates, "why did revenue stall" | `references/diagnosis.md` + `references/engine-12-steps.md` + `templates/engine-diagnostic.md` |
| Metrics, benchmarks | `references/metrics.md` |
| **Deal closed, handing over to delivery** | `references/handoff-sell-to-deliver.md` + `templates/handoff-contract.md` + `references/contract.md` + `checklists/contract-handoff.md` |
| Plan the first 90 days | `templates/onboarding-30-60-90.md` + `templates/mutual-action-plan.md` |
| Authorise a project, define roles | `references/project-delivery.md` + `templates/project-charter.md` + `templates/raci-matrix.md` |
| Scope keeps growing | `references/project-delivery.md` (snowball effect, change control) |
| Project overran schedule or cost | `references/costs-forecasting.md` (earned value, PERT) |
| Risks, reserves, guarantee exposure | `references/risk.md` + `templates/risk-register.md` |
| Kickoff, meetings, manager routine | `templates/kickoff-script.md` + `references/people-rituals.md` |
| Report status to a sponsor | `templates/status-report.md` |
| Churn, onboarding, renewal | `references/delivery-retention.md` |
| Referrals, case studies, proof | `references/referrals.md` + `references/proof.md` + `templates/referral-request.md` + `templates/case-study.md` |
| Governance, ISO, PMI benchmarks | `references/standards-benchmarks.md` |
| Negotiation preparation (integrative) | `templates/integrative-negotiation-script.md` |
| Business context to fill in first | `templates/business-profile.md` |
| What to promise, how to state evidence | `references/evidence-and-profile.md` |
| Before a forecast or pipeline review | `checklists/deal-review.md` |
| After any sales call | `checklists/post-call-rubric.md` |
| Before sending any deliverable | `templates/anti-patterns-checklist.md` |
| Is this still current? Where to read more? Sources? | `trends.md` · `reading-list.md` · `references/reading-by-section.md` · `references/sources.md` |
| Worked examples | `examples/cold-email-good-vs-bad.md` · `examples/discovery-call-transcript.md` · `examples/negotiation-case.md` · `examples/saas-plg-case.md` · `examples/service-engine-case.md` · `examples/quick-review-expensive.md` |

## Step 2 — Diagnosis sequence (before concluding anything)

"I need more marketing" is a hypothesis, not a diagnosis. Check in this order and stop at the first broken link:

1. **Reach**: are enough of the right people seeing the offer?
2. **Lead quality**: of those who respond, how many fit the ideal profile?
3. **Conversion**: of qualified leads, how many buy, and where do they drop?
4. **Capacity**: can the business deliver more without quality collapsing? If not, **do not sell more** until it is fixed (see `references/handoff-sell-to-deliver.md`).
5. **Retention and expansion**: do customers stay, renew and refer?

Fixing reach when conversion is broken buys more losses; fixing conversion when capacity is full buys angry customers. Numbers per link: `references/metrics.md` and `references/engine-12-steps.md` §5.3. Every diagnosis ends with **one** experiment card.

## Step 3 — Core principles

1. A business is arbitrage with a margin of safety: revenue per customer must exceed the cost to acquire **and deliver**, with room for error.
2. Order of work: offer → price → sales → demand, but diagnose first. More demand on a weak offer exposes the weakness faster.
3. Trust is the asset. Every artefact lowers the buyer's risk with evidence, not adjectives.
4. Sell outcomes the buyer defined, not features you built. Price ceiling is set by value and alternatives, floor by cost and capacity.
5. **No decision is the main competitor.** Treat it as an objection with its own playbook.
6. The market exposes vagueness: a vague offer shows up as unqualified leads, an illogical price in negotiation, the wrong customer in delivery.
7. **The sale is a written promise; delivery is its audit.** What the sales side cannot specify, the delivery side cannot keep.

## Step 4 — The maps

### A. Sell — 12 steps (a full build covers the subset that applies)

| # | Step | Module | Closes with |
|---|---|---|---|
| 0 | Context intake (and the real-money gate for a never-sold offer) | `templates/business-profile.md`, `templates/idea-validation-script.md` | Filled profile |
| 1 | Ideal customer, pain, research | `references/discovery.md` (Mom Test) | Research notes + ICP |
| 2 | Offer | `references/offer-pricing.md` | Offer statement |
| 3 | Economics and pricing | `references/offer-pricing.md`, `references/economics.md` | `templates/pricing-tier-worksheet.md` |
| 4 | Qualification and discovery | `references/qualification.md`, `references/discovery.md` | MEDDPICC scorecard + call guide |
| 5 | Narrative and proof | `references/narrative.md`, `references/proof.md` | `templates/pitch-narrative.md` |
| 6 | Risk reduction, scarcity | `references/guarantees-scarcity.md` | Guarantee with exposure maths |
| 7 | Pipeline and outbound | `references/outbound.md` | 5-touch sequence |
| 8 | Objections, indecision, negotiation | `references/objections.md`, `references/jolt.md`, `references/negotiation.md` | One-page business case |
| 9 | Buying committee | `references/multithreading.md` | Committee map |
| 10 | Contract and **handoff** | `references/contract.md`, `references/handoff-sell-to-deliver.md` | `templates/handoff-contract.md` signed by both owners |
| 11 | Delivery, retention, referral, case study | `references/delivery-retention.md` | 30/60/90 plan + case-study consent |
| 12 | Content and AI leverage | `references/content.md`, `references/ai-in-sales.md` | Content plan + AI workflow |

### B. Deliver — 6 steps

| # | Step | Module | Closes with |
|---|---|---|---|
| D1 | Authorise | `references/project-delivery.md` | `templates/project-charter.md` |
| D2 | Plan: scope baseline, roles, risks | `references/project-delivery.md`, `references/people-rituals.md`, `references/risk.md` | RACI + risk register |
| D3 | Kick off | `templates/kickoff-script.md` | Decision log |
| D4 | Control: cost, schedule, quality | `references/costs-forecasting.md` | Earned-value reading + forecast |
| D5 | Report | `templates/status-report.md` | Five-block status, decision-oriented |
| D6 | Close, learn, renew | `references/delivery-retention.md`, `references/referrals.md` | Measured result against the day-0 baseline |

The bridge between A and B is step 10 and `references/handoff-sell-to-deliver.md`. Cross-cutting: `references/metrics.md` (measure every step), `references/psychology.md` (phrasing), `templates/experiment-card.md` (change one thing at a time).

## Funnel stage gates

| Stage | Exit criterion |
|---|---|
| Lead | Fits profile on 2 of 3: segment, role, trigger signal |
| Qualified | Pain in their words + quantified impact + a named decision process |
| Discovery done | MEDDPICC scorecard with no red on Pain, Champion, Decision Process |
| Proposal | Business case accepted by the champion; economic buyer identified and reached |
| Negotiation | Written criteria met; paper process mapped with dates |
| Closed | Signed + **handoff contract signed by both owners** + kickoff scheduled |

Full lifecycle evidence per stage: `references/qualification.md` (Pipeline exit evidence).

## Verify before delivering

Walk the **evidence ladder** (`references/evidence-and-profile.md`): 1 exists · 2 substantial · 3 connected to what the client said · 4 functional (tested or used for real). State the rung reached. Never present rungs 1–3 as rung 4. Run `templates/anti-patterns-checklist.md` on anything going to a client.

## Output contracts

- **Quick review:** verdict in one line; the corrected artefact; a change log with one reason per change; one thing to test next.
- **Bottleneck diagnosis:** the 5 links with number or "unknown"; the broken link; **one** experiment card with a stop rule; what to measure in 30 days.
- **Full build:** the steps that apply, each closed with its template; then a 30-day plan with owners and metrics. Never pad with steps that do not apply.
- Always: **specific** ("post Tuesday at 9am", not "post on social"), **opinionated** ("kill this feature"), **sourced** (external numbers carry an origin, else "Estimate" or "Not found"), **brief**, **structured**, and ending with **advance / correct / discard**.

## Context intake (ask only what is missing)

What is sold, to whom, who signs, who uses · market and country · price today, real cost to deliver, hours per customer · capacity · where customers come from, conversion by stage · proof available · deal size and cycle length · goal and constraint. Record answers in `templates/business-profile.md`; deliverables read the profile and never overwrite it silently.

## What this skill refuses to do

- Use BANT as a gate, or write "hope you're well" openers.
- Recommend email volume without deliverability setup.
- Stack guarantees by default, or promise outcomes outside the seller's control.
- Quote percentages without a source and a population.
- Invent urgency, scarcity, testimonials or cases; publish a case without permission.
- Give legal, tax or formal accounting opinions, or analyse source code.

## Known limits

- **Author-reported figures** (Challenger, JOLT, SPIN) are claims with an origin, not measured facts. JOLT: about 2.5 million conversations and 40–60% of deals lost to no decision are Dixon's own statements in an interview; 87% there refers to customers, not calls (`references/sales-methods-evidence.md`).
- **ISO 21502 and ISO 31000** were synthesised from third-party presentations, not the official text. Consult the standard before quoting a clause.
- **PMI Pulse:** only the 2024 figures marked confirmed in `references/standards-benchmarks.md` were checked against the official page.
- **Reference `validation-and-negotiation-br.md`** (Meisler, Soares) is practitioner opinion from an unverified video compilation: market practice, not data.
- Small-business finance is covered by `references/economics.md` as management arithmetic only, not tax or accounting.

## Maintenance

See `CHANGELOG.md`. Trends and benchmarks age fastest: re-verify `trends.md`, `references/metrics.md` and the unverified items at each review date. Sources and their limits: `references/sources.md`.
