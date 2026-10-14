# Numerical examples with explicit assumptions

**All inputs are synthetic.** Currency is illustrative; formulas assume costs are consistently classified. These are not investment/accounting advice or universal targets.

## 1. Premium mix correction

Baseline: 100 customers × 100 = 10,000 revenue. New mix with unchanged customer count: 90 × 100 + 10 × 1,000 = 19,000. Revenue ratio = **1.9×**, increase = 90%. Premium revenue share = 10,000 / 19,000 = 52.63%; profit share is unknown without costs. Different customer counts or costs produce different results.

## 2. Service contribution, markup and capacity

Price 2,000; variable delivery labor 800, supplier 200 and payment/rework allowance 100. Variable cost = 1,100. Contribution before acquisition = **900**; margin = 900/2,000 = **45%**; markup on that cost base = 900/1,100 = **81.82%**.

Acquisition cost allocated per project 150: contribution after acquisition = **750**. Fixed monthly costs 3,000 imply break-even = 3,000/750 = **4 projects** if acquisition scales at that rate. Acquisition is not counted again in fixed costs.

Available bottleneck labor 100 hours/month; each project takes 20 hours including expected rework. Capacity = **5 projects**. At capacity, revenue 10,000; variable cost 5,500; acquisition 750; contribution 3,750; less fixed 3,000 leaves **750 operating surplus under this simplified model**, before any omitted costs/tax. Do not call 45% contribution margin net profit.

## 3. SaaS CAC, payback and rough LTV

Matched acquisition spend 20,000 yields 20 paying accounts: CAC = **1,000**. Monthly ARPA 200 and gross margin 80% yield 160 monthly gross profit; gross-profit CAC payback = **6.25 months**, assuming stable payments and no churn during payback.

Monthly logo churn 2% gives rough LTV = 200 × 0.8 / 0.02 = **8,000**; ratio = **8**. This shortcut assumes stationary homogeneous cohorts, no expansion and no discounting. It is not observed lifetime value. A bounded 12-month, undiscounted survival model gives 160 × sum(0.98^t, t=0..11) = **1,722.27**, showing horizon sensitivity. Zero churn does not establish infinite value.

## 4. Recurring revenue retention

Starting MRR 10,000 from 100 accounts; churn 500, contraction 200 and expansion 1,000. NRR = (10,000 − 500 − 200 + 1,000)/10,000 = **103%**. GRR = (10,000 − 500 − 200)/10,000 = **93%**. Five lost starting accounts imply **5% monthly logo churn**, independent of NRR.

New accounts contribute 2,000 MRR. Ending MRR = **12,300**. New MRR is excluded from NRR/GRR, so 123% would be an incorrect NRR calculation. Monthly 2% churn compounds to 1 − 0.98^12 = **21.53% annual attrition** under the constant-rate model, not 24%.

## 5. Buyer case and cash timing

Baseline reported rework: 10 hours/month × internal rate 50 = 500 of capacity value. If a verified intervention releases 4 hours, attributable capacity value = 200/month; it becomes cash saving only if costs actually disappear. A 1,000 purchase plus 300 implementation cost has simple 6.5-month payback **only if** 200/month is truly capturable benefit, stable and starts immediately. Otherwise present capacity release, not cash ROI.

Service 2,000 with 1,100 delivery outflow before payment and 150 acquisition needs financing despite positive contribution. A 500 deposit leaves up to **750** to finance before final payment, ignoring fixed costs/timing detail. Match the actual dated cash schedule.

See [economics](../references/economics.md) and [metrics](../references/metrics.md).
