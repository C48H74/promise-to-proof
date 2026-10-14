# Offer and pricing

Load when the offer is vague, the price was guessed, or tiers exist without a reason. Closes with `templates/pricing-tier-worksheet.md`.

## 1. Offer statement

> For [who] facing [specific moment or problem], we deliver [what] in [timeframe], so that [outcome in their words], without [main friction or risk].

Tests:
- **Trigger test:** can the right buyer name the moment they should call you? If not, the offer is a category, not an offer.
- **Internal justification test:** could the champion repeat the offer to their boss in one sentence and survive the follow-up question "and what do we get?"
- **Alternative test:** what does the buyer do today instead (status quo, in-house, a competitor, nothing)? The offer must beat that specific alternative, not an abstract one.

Bad: "12-week strategic transformation program." Category + duration, no outcome.
Good: "In 6 weeks the leadership team knows whether the performance gap is strategy, execution or alignment, and leaves with decisions, owners and a 90-day plan."

## 2. What the buyer values (discover, don't assume)

Four levers exist; their weight is set by the customer, not by the seller. Ask before building:

| Lever | Question that reveals its weight |
|---|---|
| Outcome | "If this worked perfectly, what would be different in 90 days? How would you measure it?" |
| Likelihood | "What would make you confident this will work here?" (proof, references, pilot, your involvement) |
| Speed | "What does each month of delay cost you?" (if the answer is vague, speed is not the lever) |
| Ease | "What would you need to do on your side? What has made similar projects painful before?" |

Speed is often decisive in competitive, time-boxed situations and irrelevant in careful, regulated ones. Never cut quality to buy speed the buyer didn't ask for.

## 3. Economics of the operation (price floor)

Before any price discussion, compute:

- **Direct cost per unit** (hours × loaded hourly cost + tools + subcontractors + delivery overhead).
- **Contribution margin** = price − direct cost. Must cover acquisition cost and overhead with room to spare.
- **Margin vs. markup:** 50% markup on cost = 33% margin on price. Quote margins on price; don't confuse the two.
- **Break-even units** = fixed costs ÷ contribution margin per unit.
- **Capacity ceiling** = deliverable hours per month ÷ hours per unit. Price × capacity is your revenue ceiling at full utilization; if it doesn't fund the business, the model, not the marketing, is wrong.

A "5–10× cost" rule of thumb is a markup, not a strategy. It fits low-touch digital goods and fails for labor-heavy services. Use the three bounds below instead.

## 4. Three bounds of a price

1. **Floor:** cost + required contribution (section 3).
2. **Reference:** what alternatives cost the buyer, including doing nothing (quantified cost of inaction) and doing it in-house (salaries, time to competence).
3. **Ceiling:** value to the buyer, in three layers so you never claim the whole pie:
   - *Potential* — total gain if the problem is solved.
   - *Attributable* — the share your work plausibly influences.
   - *Realizable* — what the buyer will likely capture after execution, given their constraints.

Price lives between floor and ceiling, positioned against the reference. Willingness to pay is researched, not inferred: ask 5–10 target buyers the four Van Westendorp questions (too cheap to trust / bargain / getting expensive / too expensive to consider) and use the range, not a single answer.

## 5. Billing model

| Situation | Model | Watch out |
|---|---|---|
| Defined start, end and goal | Fixed price, value-based | Scope control (see `references/delivery-retention.md`) |
| Ongoing access, no fixed goal | Advisory retainer: fixed scope, published price, paid in advance | Define what "access" means in hours or response time |
| Repeatable service | Productized packages | Resist custom work that breaks the package |
| Measurable result you strongly control | Performance (per unit, % of revenue or profit, % growth over baseline) | Agree the baseline and measurement in writing first |
| Near-zero marginal cost, large audience | Low price + automation, setup + subscription | CAC payback becomes the key metric |
| Hourly | Only for undefined scope or discovery phases; cap it | Rewards slowness; convert to fixed price once scope is known |

## 6. Tiers (optional, built around real needs)

Tiers help when distinct buyer groups want distinct things. They hurt when they are the same service with arbitrary feature cuts.

Design rules:
- Each tier answers a different job, not a different budget. Name the buyer of each tier.
- Define the minimum every customer gets; never ship a tier you'd be embarrassed to deliver.
- A premium anchor can raise perceived value of the mid tier, but only if someone would plausibly buy it and you can deliver it.
- A 1:1 or "done for you" tier is a capacity decision: cap it (e.g., 5–10% of available hours) and raise its price when the cap fills.

### The math, corrected

With 100 customers at base price P, revenue = 100P. If 10 move to a 10P tier and 90 stay at P: revenue = 90P + 100P = **190P, i.e. 1.9×**, not 2×. Whether that tier is more *profitable* depends on its cost to serve and the cost to sell it; a 10× tier that consumes 40% of senior time can be the least profitable line. Compute contribution per tier before celebrating.

Worked example (consulting):

| Tier | Price | Direct cost | Contribution | Buyers/yr | Contribution/yr |
|---|---|---|---|---|---|
| Workshop | 4,000 | 1,200 | 2,800 | 24 | 67,200 |
| Program | 18,000 | 7,000 | 11,000 | 8 | 88,000 |
| Advisory 1:1 | 40,000 | 22,000 | 18,000 | 2 | 36,000 |

The cheapest tier contributes most per hour if the workshop takes 2 days and the advisory takes 25. Decide on contribution per constrained resource (usually senior hours), not on ticket size.

## 7. Three exercises to design a premium tier (when a premium segment exists)

1. If you charged 10× or 100×, what would you add? Strike what has high hard cost; see what remains and whether a real buyer wants it.
2. If growth depended only on this one customer's word of mouth, what would the experience be?
3. Remove everything that doesn't scale; what would still be worth 10× more?

## 8. Pricing research questions (ask 5–10 buyers)

- "What did you last pay to solve this or something similar? What did you get?"
- "What happened when you tried to solve it yourselves?"
- "At what price would you doubt the quality? At what price would you need board sign-off?"
- "If this cost nothing, what would still stop you?" (reveals non-price objections)

## Anti-patterns

- Pricing from your old salary ÷ days.
- Mandatory 10× tier because a framework said so.
- Quoting hourly when the buyer wants an outcome.
- Discounting before the value is quantified.
- Confusing markup with margin.

## Unit economics — mandatory before presenting

For **each** tier, calculate:

```
Direct delivery cost      = hours × cost/hour + supplies + third parties
Gross margin              = price − direct cost
Margin %                  = gross margin / price
Break-even point          = allocated fixed cost / gross margin per unit
```

**Hard rule:** a tier with negative margin, or with a break-even point above your capacity, **does not go into the proposal**. Without this calculation you are selling in order to lose money.


## Framing mechanisms

| Mechanism | How to apply | Caution |
|---|---|---|
| **Anchoring** | show the more expensive alternative (including "do nothing" and the cost of the problem) before your price | the anchor must be real and verifiable |
| **Decoy** | the complete tier exists to steer the choice toward the recommended one | do not belittle the complete tier; it must be defensible |
| **Annual framing** | show the monthly equivalent **and** the annual discount | make explicit what the annual plan includes |
| **Launch vs. scale** | lower entry price with a declared counterpart (e.g., feedback, case study) | a real end date, not an invented one |
| **Grandfathering** | existing clients keep their price when it rises | **say this out loud** — it is a trust deposit |


## Price review checklist

- [ ] Does the offer pass the three tests of the offer statement (trigger, internal justification, alternative)?
- [ ] Is the chosen model declared and justified?
- [ ] Are there three tiers, with the recommended one marked?
- [ ] Has the unit economics of each tier been calculated?
- [ ] Has the guarantee (if any) passed the exposure mathematics?
- [ ] Is the price anchored to the client's alternative, not to my cost?
- [ ] Is there an **authorised** case study to support the value?
- [ ] If the client says "it's expensive", do I know which of their numbers is missing? (see `objections/library.md`)

## Pricing cautions that apply to every tier

- A cost floor is not proof of demand. Price from delivery cost, capacity, risk, alternatives, buyer value and the willingness to commit that you have actually observed.
- Separate three values when quoting benefit: the total potential, the part attributable to your work, and the part the buyer realistically captures. Never sell projected savings as guaranteed revenue.
- Hourly billing can be right; do not choose it by converting an old salary, and do not forbid it universally. Performance pricing is not itself a guarantee of performance.
- Publish standard prices or honest ranges when they help qualification. Discovery should not become a barrier to transparency.
- A pricing experiment names the cohort, the offer version, the guardrails and the capacity. Compare contribution and retention, not only close rate. With small samples, test sequentially and say so; do not present an arbitrary price as a validated test.
- Revenue can rise while profit falls when the mix changes: check acquisition and service cost per tier before declaring a package a success.
