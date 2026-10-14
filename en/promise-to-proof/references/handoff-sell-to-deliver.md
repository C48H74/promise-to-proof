# Handoff: from sale to delivery

Load when a deal is about to close or just closed, when delivery complains about "what sales promised", or when scope grows right after kickoff. Closes with `templates/handoff-contract.md`, signed by the sales owner and the delivery owner.

Most revenue is lost at this seam: the promise was made in conversation, the delivery is judged against the document. This module turns the promise into something both sides can audit.

## 1. Why the seam breaks

| Symptom | Usual cause | Where the fix lives |
|---|---|---|
| "That is not what I was sold" | The promise lived in calls and slides, not in the contract | Section 3 below, `references/contract.md` |
| Scope grows in week 2 | Exclusions were never written; no change-control rule | `references/project-delivery.md` (change control) |
| Delivery starts late or understaffed | Capacity was not checked before signing | Section 2 below, `references/economics.md` |
| Client's first result arrives after the pain is forgotten | No agreed first useful result | `references/delivery-retention.md`, `templates/onboarding-30-60-90.md` |
| A guarantee is claimed on day 60 | Trigger and evidence were vague | `references/guarantees-scarcity.md` (exposure maths) |
| The champion leaves and nobody knows why we won | Buying criteria not recorded | `templates/mutual-action-plan.md`, `templates/handoff-contract.md` |

## 2. Gate before signature: can delivery sustain this?

Do not close a deal that fails any line. Fix it or re-scope it.

1. **Capacity:** bottleneck hours for the first 90 days exist (`references/economics.md`, capacity formula).
2. **Margin:** the tier sold has positive contribution at the real hours estimate (`references/offer-pricing.md`, unit economics).
3. **Dependencies:** what the client must provide (access, data, people, decisions) is listed with dates.
4. **Acceptance:** one observable first useful result, with owner and date.
5. **Guarantee exposure:** if a guarantee exists, its trigger is measurable and its worst-case cost is approved.
6. **Risks:** the three biggest are in the risk register (`templates/risk-register.md`).

## 3. What must cross the seam

Everything below is written, not remembered. The sales owner fills it; the delivery owner challenges it before signing; both sign.

- **The promise in the buyer's words:** the pain, the number attached to it, the decision criteria they stated.
- **The commitment in your words:** scope, exclusions, deliverables, timing, price, payment terms.
- **People:** economic buyer, champion, day-to-day contact, users, blockers. Who is not yet reached.
- **What was said but not written:** informal promises, discounts traded, concessions, commitments made on calls. If it is not in the contract, it is either added or explicitly withdrawn with the client.
- **Baseline:** the day-0 measure the result will be compared with (`references/proof.md`).
- **Proof permissions:** whether and how a case study or referral may be requested later (`templates/case-study.md`).

## 4. The first 90 days

Delivery owns the plan; sales stays on the account until the first useful result is accepted.

| Window | Goal | Evidence |
|---|---|---|
| Days 0–7 | Kickoff held, roles confirmed, decision log opened (`templates/kickoff-script.md`) | Signed charter (`templates/project-charter.md`) |
| Days 8–30 | First useful result delivered and accepted | Written acceptance by the champion |
| Days 31–60 | Status reported on a fixed rhythm; change requests decided in writing | `templates/status-report.md` |
| Days 61–90 | Measured result against baseline; renewal or expansion conversation opened | One-page result review |

## 5. Closing the loop back to sales

At day 90 the delivery owner returns three facts to the sales owner: what was delivered against the promise, what cost more than estimated, what the client now asks for. These update the offer, the price, the qualification criteria and the objection library. Without this return path the sales side keeps selling its own fiction.

## 6. Anti-patterns

- Kickoff without a signed handoff contract.
- Sales leaves the account at signature.
- Discount granted without a written trade, then forgotten by delivery.
- Case study requested before the client has accepted a result.
- Treating a complaint about scope as a delivery failure when it is a sales failure.
