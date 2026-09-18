Add Quote — Quote Creation (ALIS)

Overview The "+Add Quote" flow, reached from an existing Submission's page (the "Submission" tab, next to the Insured/Agency summary panels — see new-insured-form.md for how a submission is created). Clicking it creates a new Quote under that submission and lands on a new Quote tab.

This document covers only quote creation itself: the confirmation pop-up before Add Quote opens, the Add Quote modal, and the resulting Quote tab (its header, kebab menu, and the Edit/Quote Detail modal). What happens once you attach a market to the quote — the Market Selection screen (Markets tab and Market Assistant tab) and the resulting option row — is a separate document, market-selection.md, reached from this Quote tab's "+ Add Markets" / "Choose from Market Assistant" buttons.

Field Value Application ALIS (Alis Core / Alis Custom — Dyad Tech Private Limited automation POC) Environment UAT Opened via An existing Submission's page → "+ Add Quote" button (top-left, next to the "Submission" tab)

Entry point: the Acknowledgement Email pop-up Clicking "+ Add Quote" first opens a small dialog: "Please Confirm — Do you want to send out an Acknowledgement Email to the agent?" with Cancel / Ok buttons.

Clicking Cancel aborts the whole action — no Add Quote modal opens, no quote tab appears, and you're left on the plain Submission view. It is not a "skip the email but continue" option.
Clicking Ok shows a "Submission Saved Successfully" toast and then opens the Add Quote modal described below. The email (if actually sent) would go to the agency's contact email address shown on the Submission page (e.g. d.thakkar@dyadtech.com in this test data) — whether an email is truly delivered in this UAT environment was not independently confirmed.
This prompt only appeared on a submission's very first "+Add Quote" click in this pass — adding a second quote to the same submission went straight to the Add Quote modal with no Acknowledgement Email prompt at all, suggesting it may fire once per submission rather than once per quote (not fully isolated to confirm).

The Add Quote modal Heading "Add Quote", with two tabs: Binding (selected by default) and Brokerage (not opened in this pass).

Fields, top to bottom:

Coverage and COB — a side-by-side pair of type-ahead text fields (each with an "x" clear icon). Typing (tested with "Commercial Package") shows a dropdown after a short delay, formatted "(code) Name" — e.g. "(CPK) Commercial Package" — and only one match existed for that search term in this environment.
"OR" divider beneath the Coverage/COB pair.
Product — a single type-ahead field below the "OR" divider (own "x" clear icon), mutually exclusive with Coverage/COB: as soon as Coverage was set, Product visibly disabled/grayed out. Not tested with an actual Product value, so its own option list and exact behavior when used instead of Coverage/COB is unconfirmed.
Operation — a type-ahead-styled dropdown (own "x" clear icon) that, when clicked, shows a fixed list rather than filtering by typed text. Full list observed (14 options): Agriculture and Farming, Construction and Contracting, Education, Energy and Utilities, Financial Services, Habitational, Healthcare and Medical Services, Hospitality and Entertainment, Manufacturing, Non-Profit, Real Estate and Property Management, Retail and Wholesale, Technology, Transportation and Logistics. Left blank in this pass.
Filing State, Term, Proposed Effective, Proposed Expiry — a row of four fields. Filing State and Term arrive pre-filled (in this pass: "Connecticut" and "12") — presumably defaulted from the Insured's own state and the agency/product's standard term, though this wasn't isolated to confirm. Proposed Effective and Proposed Expiry default to today's date and today+Term respectively, and both render as grayed-out/read-only-looking text until clicked.
Close and Add Quote buttons, bottom right.

Behavior / callouts

Pressing Escape while the modal (or its date-picker) is open closes the entire Add Quote modal immediately, discarding every field filled in — it does not just back out of a nested calendar or dropdown. Click elsewhere on the page instead if you want to close a sub-control without losing the form.
Clicking into Proposed Effective opens a month-calendar pop-up (with "‹ Month Year ›" navigation and a "Today : " footer). Changing the month sometimes needs the target day clicked twice — the first click after navigating a month didn't always register a selection in this pass.
Proposed Expiry recalculates automatically from Proposed Effective + Term the moment Effective changes (confirmed: setting Effective to 08/26/2026 with Term 12 instantly updated Expiry to 08/26/2027) — it is not independently editable.
Clicking "Add Quote" both creates the quote and shows a "Quote Created Successfully" toast.
If a quote with the same Coverage/COB combination already exists on this submission, clicking "Add Quote" instead shows a second confirm dialog: "Please Confirm — Quote Already Available. Would you like to Create duplicate Quote?" (Cancel / Ok). Clicking Ok proceeds to actually create a second quote with the same Coverage/COB (confirmed: creating a second "Commercial Package" quote on a submission that already had one produced "CPK-BA-02" alongside the existing "CPK-BA-01"). What Cancel does here wasn't isolated (presumably backs out, leaving the Add Quote modal open).

Result: the new Quote tab A new tab appears next to "Submission", labeled with a generated quote code (e.g. "CPK-BA-01" — built from the coverage code and authority). The submission-level status badge (top right) changes to "New Business Quote Preparation". The quote tab shows:

A header with the Coverage name as a title (e.g. "Commercial Package"), an Edit button, and the date range/authority/coverage summary line (e.g. "From : Aug 26, 2026 To : Aug 26, 2027 • Binding • Commercial Package").
A kebab (⋮) menu at the top right of this header with: Copy Quote, Advance Copy Option, Close Quote, Decline Quote, Additional Data, Mark as Lead, Expiration Letter, a "Show Unbound" toggle (on by default), and OrderBy (sortable, with a direction arrow).
Before any market is added: two buttons "Rate with all Possible Markets" and "Choose from Market Assistant", a green "+ Add Risk Information" button, a "Risk Information" section with its own "Add/Edit Risk" button (empty at this point), and a green "+ Add Markets" button bottom-right — all covered in market-selection.md, since that's where they lead. These buttons disappear once the quote has at least one market/option attached, replaced by just "+ Add Markets" in the header area.

The header's Edit button opens a separate "Quote Detail" modal — distinct from the Add Quote modal — showing: Coverage (pre-filled), Class of Business (shown blank in this pass, even though "COB" had been filled in on the Add Quote modal — unclear whether these are genuinely different fields or a display/sync quirk), Authority Level (dropdown, "BINDING"), Transaction Type / Carrier Transaction Type / Agency Transaction Type (three dropdowns, all defaulted to "NBS"), Operation, an Acquired checkbox, and Close/Update buttons. Not saved/updated in this pass.

Open items / to verify

Exactly what changes if Cancel vs Ok is chosen on the Acknowledgement Email pop-up beyond "Cancel aborts everything" — and whether Ok truly sends a live email in this UAT environment.
Whether the Acknowledgement Email prompt really is once-per-submission rather than once-per-quote.
What the "Brokerage" tab (alternative to "Binding") changes in the Add Quote modal.
The Product field's own behavior/option list when used instead of Coverage + COB.
Whether "Class of Business" on the Quote Detail edit modal is really a separate field from "COB" on Add Quote, or a display/sync quirk (COB was filled but Class of Business showed blank).
The full option lists for Transaction Type / Carrier Transaction Type / Agency Transaction Type beyond the default "NBS".
What Cancel does on the "Quote Already Available. Would you like to Create duplicate Quote?" dialog (only Ok was exercised).

(Element IDs/classes/selectors intentionally omitted — tracked separately.)

Data used to produce this document Values may change in future explorations — treat these as a worked example, not a fixed convention. Against submission SUB1655627 (Insured: Zeel1 Patel, Agency: DYAD Test Agency (AGT51935)):

Quote CPK-BA-01: Coverage = Commercial Package, COB = Commercial Package, Filing State = Connecticut, Term = 12, Proposed Effective = 08/26/2026 (Proposed Expiry auto-set to 08/26/2027), Operation left blank.
Quote CPK-BA-02: a second, duplicate "Commercial Package" quote created on the same submission (via the "Quote Already Available" confirm dialog). Same Coverage/COB/Filing State/Term as CPK-BA-01; Proposed Effective/Expiry left at their today's-date defaults (09/14/2026–09/14/2027) rather than set explicitly.

See market-selection.md for how markets/options (Market Company = Hadron Specialty Insurance Company (M-RM0164-007), Risk Co. = Hadron Specialty Insurance Company (R4970-003)) were attached to both of these quotes.

