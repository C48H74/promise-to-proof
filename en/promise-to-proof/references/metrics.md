# Metrics of the sales engine

Load for any diagnosis, forecast or "is this working?" question. Benchmarks below are heuristics with sources in `reading-list.md`; re-verify at each review.

## Acquisition

| Metric | Formula | Use |
|---|---|---|
| **CAC** | (sales + marketing spend in period) ÷ new customers in period | Fully loaded: salaries, tools, ads, content |
| **CAC by channel** | same, per channel | Decides where the next unit of budget goes |
| **CAC payback (months)** | CAC ÷ (monthly revenue per customer × gross margin) | Cash risk; under 12 months is comfortable for SMB, 18–24 tolerated in enterprise SaaS |
| **Win rate** | closed won ÷ (closed won + closed lost) | Exclude "no decision" from the denominator and track it separately |
| **No-decision rate** | no decision ÷ qualified opportunities | If above win rate, load `references/jolt.md` |
| **Sales cycle** | median days from qualified to closed | Watch the median, not the mean |
| **Pipeline coverage** | open qualified pipeline ÷ quota for period | 3–4× is a common heuristic; adjust to your win rate (needed coverage ≈ 1 ÷ win rate) |

## Retention and value

| Metric | Formula | Use |
|---|---|---|
| **Logo churn** | customers lost ÷ customers at start of period | Count of relationships lost |
| **Revenue churn (GRR)** | (start MRR − churn − contraction) ÷ start MRR | Floor of the business; max 100% |
| **NRR** | (start MRR − churn − contraction + expansion) ÷ start MRR | Above 100% means the base grows without new logos |
| **LTV** | (avg revenue per customer × gross margin) ÷ churn rate | Use the same period for revenue and churn; for young businesses cap LTV at 3–5 years of data |
| **LTV / CAC** | | ≥ 3 is a common SaaS heuristic; it says nothing about cash timing, so pair with payback |
| **Cohort retention** | % of customers from month X still active at months 1, 3, 6, 12 | The only honest view of churn; averages hide it |

Cohort table template:

| Cohort | M0 | M1 | M3 | M6 | M12 |
|---|---|---|---|---|---|
| 2026-01 | 100% | | | | |
| 2026-02 | 100% | | | | |

A flattening curve means product-market fit for that segment; a curve that keeps falling means the offer or the customer is wrong.

## Operation

| Metric | Formula | Use |
|---|---|---|
| **Contribution margin** | price − direct cost to deliver | Per unit and per tier |
| **Gross margin** | (revenue − cost of delivery) ÷ revenue | Services 50–70% is typical; software 70–90% |
| **Utilization** | billable hours ÷ available hours | Above ~80% sustained, quality and sales time collapse |
| **Time to first value** | days from signature to the first result the customer notices | Strongest early-churn predictor |
| **Referral rate** | customers who referred ÷ customers | Proxy for referability |

## Funnel

Track conversion between stages, not just totals: lead → qualified → discovery → proposal → negotiation → won. The weakest conversion is the bottleneck. Exit criteria per stage: `SKILL.md` stage gates.

## Which metrics first, by business type

| Type | First three |
|---|---|
| Solo consultant / small agency | Contribution per senior hour, pipeline coverage, referral rate |
| Productized service | CAC payback, gross margin, logo churn |
| SaaS | NRR, CAC payback, cohort retention |
| Local business | CAC by channel, repeat purchase rate, capacity utilization |
| PLG | Activation rate, PQL → paid conversion, NRR |

## Worked example

Productized service: price 1,200/month, direct cost 400/month, CAC 2,400, monthly churn 3%.

- Gross margin = (1,200 − 400) ÷ 1,200 = 67%
- CAC payback = 2,400 ÷ (1,200 × 0.67) = 3 months
- LTV = (1,200 × 0.67) ÷ 0.03 = 26,800
- LTV/CAC = 11

Healthy on paper. The check: does cohort retention actually show 3% monthly, or is it 8% in the first three months and 1% afterwards? The blended number hides an onboarding problem that `references/delivery-retention.md` fixes.

## Rules

- Every number carries its period and its population.
- Averages are suspect; show the distribution or the cohort.
- A benchmark is a prompt for a question, not a target.
