# AI in the sales process

Load when the user wants to apply AI to prospecting, calls, forecasting, timing or content. Principle: AI raises the floor of mediocre work and the bar for what counts as personal; it does not replace judgment or relationships.

## Where it helps, with guardrails

| Use | How | Guardrail |
|---|---|---|
| **Account research** | Summarize public info, recent news, hiring, product changes into a one-paragraph brief with sources | Verify one fact before using it in a message; hallucinated details end conversations |
| **Personalization at scale** | Draft first lines from real signals; you edit | Since everyone does this, generic "AI-personalized" lines read as template. The bar is a specific, true, recent observation |
| **Call transcription and analysis** | Score against `checklists/post-call-rubric.md`: talk ratio, question count and types, next step captured, objections raised, MEDDPICC gaps | Review the scoring on a sample; models over-credit polite calls |
| **Objection mining** | Cluster objections from transcripts and emails; update `objections/library.md` | Keep the buyer's wording |
| **Proposal and business-case drafts** | Fill `templates/business-case-onepager.md` from discovery notes | Numbers come from the client, never generated |
| **Pipeline hygiene** | Flag deals with no next step, stale stages, single threads | Rules-based first; it's cheaper and more reliable |
| **Forecasting and timing ("who will buy, when")** | Intent/propensity scores from signals | See calibration note below |
| **Brand presence in assistants** | Ask several AI assistants how they describe your company, category and alternatives; fix with factual pages | Re-check quarterly; answers change |
| **Role-play** | Rehearse discovery and objections with a model playing the buyer persona | Treat as practice, not as research |

## Calibration note on predictive scores

Models that predict human decisions (who will buy, when a deal closes, which lead will convert) are much weaker than vendors claim, as Narayanan and Kapoor argue in *AI Snake Oil*: outcomes depend on information the model never sees. Before trusting a propensity score:
1. Compare it against a simple baseline (recency of signal + fit) on your own closed deals.
2. Check calibration: of leads scored 80%, did roughly 80% convert?
3. Use scores to **prioritize** work, never to **skip** discovery or to decline a lead automatically.

## What not to automate

- Discovery conversations (the buyer notices).
- Negotiation.
- The referral ask.
- Any message that implies a human relationship that doesn't exist.

## Data and disclosure

- Record calls only with consent per local law; say so at the start.
- Keep client data out of tools that train on inputs unless contractually covered.
- Don't let a model invent references, logos or results. Every claim traces to `references/delivery-retention.md` proof rules.

## A workable setup for a small team

1. Research brief per account (AI draft, 2-minute human check).
2. Sequence drafts from `templates/5-touch-sequence.md` with signal-based first lines (human edits).
3. Call transcripts scored weekly against the rubric; one coaching note per rep.
4. Monthly objection mining into the library.
5. Quarterly brand-in-assistants check.

## Evaluation protocols and stop rules

Use [AI evaluation](../templates/ai-sales-evaluation.md) and [brand audit](../templates/ai-brand-audit.md). *AI Snake Oil* motivates skepticism about capability claims [S17](sources.md); controls below are this skill's operational design, not a quoted sales methodology.

| Task | Suitable bounded assistance | Human verification |
|---|---|---|
| Account research/personalization | Summarize supplied or verified public facts; draft a relevance hypothesis | Source, date, factual accuracy, no sensitive inference |
| Calls | Summarize authorized transcript; propose missing questions | Quote/timestamp, speaker, correction, agreed next step |
| Timing/lead scores | Test candidate signals on appropriate historical data | Leakage, calibration, baseline comparison, false positives |
| Brand descriptions | Collect repeatable prompt/output samples | Date/model/settings, exact observed claims and evidence |

Use approved tools/data routes. Do not send confidential transcripts or CRM exports to unapproved services. Record data source, purpose, access and review owner; redact unnecessary identifiers. A drafting workflow does not authorize automatic sending or CRM updates.

Evaluate summarization against a small representative labeled set: false facts, missing commitments, unsupported certainty and review time. Compare personalized drafts with a manual baseline on relevance/accuracy, then customer outcomes if a legitimate campaign is authorized. More fluent language is not proof of sales lift.

Predictive timing: define outcome and horizon, split by time/account to reduce leakage, compare with a simple baseline, report precision/recall and calibration if probabilities are issued. Use a holdout/intervention test before claiming incremental impact. Small data may only justify qualitative hypotheses. Do not infer willingness to buy from a public signal or assistant confidence.

Brand audit: fixed questions about category, ideal customer, limits, price and alternatives across observed assistants/conditions. Save exact outputs and supported citations; report inconsistencies and sample limits. Correct owned factual content; do not promise control over assistant recommendations or fabricate sampled responses.

Stop on factual invention, privacy misuse or material degradation. Record vendor/version/date and rerun relevant checks after changes. AI simulations are useful rehearsals but not evidence of actual buyer behavior.
