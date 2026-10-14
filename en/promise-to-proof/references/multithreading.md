# Multithreading and the buying committee

Load when a deal has one contact, when the buyer says "I have to check with…", and for any enterprise opportunity. Closes with `templates/buying-committee-map.md`.

## The problem

Gartner's buyer research puts a typical B2B purchase at 6–10 decision makers, each with their own information and criteria. Sales-call analytics vendors (Gong and others) consistently report that single-threaded deals close at a fraction of the rate of deals with three or more engaged contacts. Exact ratios vary by dataset; the direction doesn't. One contact means one point of failure: promotion, holiday, reorg, or simple loss of interest kills the deal.

## Roles to map

| Role | What they care about | How to engage |
|---|---|---|
| **Economic buyer** | Return, risk, how it looks | Business case; short meetings; champion arranges |
| **Champion** | Solving the problem; their own standing | Give them material to win internally; test their influence |
| **Technical evaluator** | Fit, integration, security | Give access to your expert; answer in writing |
| **Financial / procurement** | Terms, price, compliance | Engage after business agreement; be predictable |
| **Legal** | Liability, data, exit | Pre-empt with your standard terms early |
| **End users** | Daily friction, learning curve | Demo for them, not for executives |
| **Blocker** | Loss of control, prior vendor, competing project | Find out what they lose; address it or neutralize via the economic buyer |
| **Invisible influencer** | A board member, an advisor, a former colleague | Ask "who else has an opinion on this?" every call |

## Champion test

A champion sells when you're not there. Tests, in increasing demand:
1. Will they share the org chart and decision process?
2. Will they forward your one-pager internally and tell you the reaction?
3. Will they set up a meeting with the economic buyer?
4. Will they tell you about competing options and internal risks?

A contact that fails test 3 after two asks is a coach, not a champion. Coaches are useful; they don't close deals.

## Tactics to add threads

- **Ask for the intro, with a reason:** "The security questions you raised are best answered by our CTO directly. Could you connect me with whoever owns security on your side?"
- **Reciprocity of access:** offer your senior person in exchange for theirs. "Our head of delivery can walk your ops lead through the rollout; would 20 minutes work?"
- **Content the champion forwards:** a one-pager written for the economic buyer, a two-slide summary for the committee. Make forwarding easy.
- **Parallel threads via a workshop or pilot:** a scoped session that legitimately needs three or four of their people in the room.
- **Executive alignment:** your executive to their executive, once the champion agrees.

## Energy map

For each stakeholder record: attitude (for / neutral / against), influence (high / medium / low), last contact date, next action. A deal with a high-influence "against" and no plan is a loss waiting to be recorded.

## Build internal consensus

Committees stall when members haven't agreed on the problem, let alone the solution. Before proposing: get the committee to agree on the problem statement and the decision criteria (write them down, send them back, ask for corrections). A proposal against agreed criteria is evaluated; a proposal against vague criteria is deferred (`references/jolt.md`).

## Anti-patterns

- Hoping the champion "handles it internally".
- Going around the champion to the executive without telling them.
- Treating procurement as the enemy.
- Three threads that are all end users and no one with budget.
