# SaaS example: activation, retention and sales assist

**Synthetic data and proposed experiment.** No observed customer result or universal benchmark.

Product helps teams reconcile weekly reports. First useful result = an approved report with exceptions resolved, not account creation. Freemium permits a bounded workflow; team controls require a transparently priced paid plan. Hosting/support costs are included in planning.

Month's starting 100 paid accounts and 10,000 MRR: five accounts leave (500 MRR), contraction 200, expansion 1,000; new revenue 2,000. Logo churn 5%, GRR 93%, NRR 103%, ending MRR 12,300. Expansion hides some customer loss; neither signups nor NRR alone establish healthy cohorts.

A free-account cohort has 200 eligible accounts; 40 complete the first useful workflow in seven days (**20% activation**). Ten become paid within thirty days (**5% free-cohort conversion**, or **25% of activated accounts** if all ten belong to the activated subset). Specify which denominator and evidence apply; do not mix them.

Hypothesis: unclear exception handling blocks useful value. Experiment: in-product guidance for that task, comparing comparable eligible cohorts or an authorized random allocation. Track seven-day activation, thirty-day paid conversion, sixty-day retained contribution, support load and complaints. Owner is product lead; cost cap 1,000; review after complete windows. Predetermine minimum useful improvement and uncertainty handling from business economics; no uplift is asserted before the test.

Candidate PQL = repeated approved workflows, real team collaboration and need for controlled access. Validate whether it predicts retained paying value rather than merely activity. Sales assist uses the contact's agreed route and offers help with the observed job; it does not imply knowledge of budget.

Before more acquisition, investigate churn/exit reasons and newly acquired cohort economics. Expansion is offered for additional value; cancellation/export remain clear. A 3× LTV/CAC heuristic cannot compensate for a forecast built from immature cohorts.

Use [PLG template](../templates/plg-experiment.md), [dashboard](../templates/metrics-dashboard.md) and [AI evaluation](../templates/ai-sales-evaluation.md) if a predictive PQL score is proposed.
