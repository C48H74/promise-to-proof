# Changelog

## 3.0.0 — 2026-10-14

Unification of two skills into one: `business-sales-engine` (sell side) and `commercial-engine-and-delivery` (deliver side), now in three languages in one repository. New name: **promise-to-proof**. License changed to **CC BY 4.0**.

**Structure**
- One orchestrator `SKILL.md` with the sell map (12 steps), the deliver map (6 steps) and the bridge between them.
- New module `references/handoff-sell-to-deliver.md` and template `templates/handoff-contract.md`: no kickoff without a contract signed by both owners.
- Delivery modules from the second skill renamed without numbers: `project-delivery`, `costs-forecasting`, `risk`, `people-rituals`, `standards-benchmarks`, `evidence-and-profile`, `engine-12-steps`, `sales-methods-evidence`, `validation-and-negotiation-br`.
- 11 delivery and negotiation templates added; duplicates (experiment card, 30/60/90 plan) resolved in favour of the richer versions.
- One validator without dependencies: `scripts/validate_skill.mjs` (frontmatter, links, referenced paths, orphans).

**Merged and removed**
- `offer`, `pricing` folded into `offer-pricing`; `ai-sales` into `ai-in-sales`; `sales-process` into `qualification`. Guarantee exposure maths, framing mechanisms, price review checklist, objection anatomy and outbound checklist added to their modules.
- Objection library stays at 15 scripts.

**Corrections**
- JOLT: "87% of calls" corrected to customers; the unsupported "~60% of no-decision losses are indecision" removed; remaining figures labelled as author-reported.
- Delivery sources now carry official URLs for ISO 21502, ISO 31000 and PMBOK 7; PMI Pulse figures stay limited to those confirmed.

## 2.0.0 — 2026-10-13

Restructured from a single file into an orchestrator plus modules.

**Structure**
- `SKILL.md` is now an orchestrator: three modes (quick review, bottleneck diagnosis, full build), a decision tree, a diagnosis sequence and output contracts.
- 17 reference modules, 9 fillable templates, objection library (15), 2 checklists, 2 examples, trends file, reading list.
- Frontmatter: trigger words, `version`, `last_reviewed`, `review_cadence`, license.

**Corrections**
- Tier math fixed: 10% of buyers at 10× price adds 1.9× base revenue (0.9 + 1.0), not 2×.
- Removed the unsupported "75% profit" claim.
- Removed the unsupported "97%" statistic.
- Premium tiers are optional and only for distinct buyer types; ranked by contribution per senior hour.
- Guarantees: no default stacking; compute expected claim cost first.
- Live proposal walk-through recommended only for complex or high-value sales.
- Pricing anchored on cost floor, buyer reference and value ceiling, with willingness-to-pay research.

**Added**
- MEDDPICC, Gap Selling, SPIN, Mom Test, JOLT, Voss-style negotiation, multithreading, business case, outbound deliverability, signal-based selling, founder-led sales, PLG/PQL, AI-in-sales guidance.
- Stage gates, deal review red flags, post-call rubric.

**Removed / cut**
- Manipulative urgency and fake scarcity tactics.
- Generic motivational filler and unverifiable statistics.

## 1.0.0 — earlier

Single-file skill (EN, PT, ES) distilled from the source transcripts.
