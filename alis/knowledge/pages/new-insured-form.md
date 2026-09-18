New Insured — Creation Form (ALIS)

Overview
The "+New Insured" screen, reached from the Clearance/Advance Search sidebar (opened via the green "+" icon on the left icon rail — see `search sidebar.md`). After opening the search sidebar and clicking its "Search" button, a results panel appears with three action buttons; "+New Insured" opens this full-page form for creating a brand-new Insured record, which is the first step of the SSPK submission flow ("Click the + icon, then click the Search button, then click +New Insured. Fill in the required data and click Create Submission.").

This document covers only the New Insured form itself, up to (not including) clicking "Create Submission." What happens after Create Submission (the Binding/Quote screen, Class of Business, coverage selection, etc.) is a separate downstream screen and is out of scope here — it was not opened, to avoid actually creating a submission.

Field
Value
Application
ALIS (Alis Core / Alis Custom — Dyad Tech Private Limited automation POC)
Environment
UAT
Opened via
Search sidebar (green "+" icon) → Search button → "New Insured" button on the results screen
Page heading
"Please enter your details below to complete your quote."

Entry point: the results screen toolbar
Running a search from the sidebar (even with no criteria entered) replaces the results grid with an "Insured / Insured Code / DBA / Physical Address / Mailing Address / Phone Number" grid ("No Rows To Show" when nothing matches) and shows three buttons above it:

Quick Quote — button; not opened/verified as part of this pass.
New Insured — button; opens the form documented below.
New Submission — button; not opened/verified (presumably used when the Insured already exists and you're starting a submission for them directly, skipping insured creation).

Layout of the New Insured form (top to bottom)

Agency section
- Agency — free-text field with an "x" clear icon. This is a type-ahead/autocomplete: typing (tested with "Test") shows a dropdown of matching agencies after a short delay, each row showing the agency name, its code in parentheses (e.g. "DYAD Test Agency (AGT51935)"), and its city/state/zip. Required (shows a red left-border until a value is chosen; turns green once one is).
- Producer — dropdown, disabled/empty ("Select" only) until an Agency is chosen. Once "DYAD Test Agency (AGT51935)" was selected, it populated with 4 options: Select, AGT51935, Dyad new Agent, Dyad Producer new.
- Contact/CSR — dropdown, same dependent behavior. Populated with 8 options after the same Agency was chosen: Select, AGT51935, Dyad Agent, Dyad new Agent, Dyad Producer new, Hardik Parmar, PUMAA Agent, PUMAA Agent 2. A small "+" icon button appears next to this field once an Agency is selected; not opened/verified.

Insured section
- Applicant Type — a row of 15 radio buttons: Association, Corporation, Individual (selected by default), Joint Venture, Limited Liability Partnership (LLP), Limited Partnership (LP), LLC, Not For Profit Org., Other, Owner, Partnership, proprietorship, Sole Proprietor, subchapter_s_corporation, trust.
- The name fields change depending on Applicant Type:
  - Individual (default): three separate fields — First Name, Middle Name, Last Name (First and Last are required) — plus a read-only, grayed-out "Full Name" field beneath them (presumably auto-composed from the three name parts; not confirmed since it never populated during this pass).
  - Any non-Individual type (tested with Corporation): the three name fields and the read-only Full Name field are replaced by a single required "Full Name" text field.
- Alternate/DBA — free-text field.
- Mailing Address — required free-text field.
- Mailing Address2 — free-text field.
- City/State/Zip — required free-text field, with "x" (clear) and "+" icon buttons next to it; not opened/verified whether it's a combined type-ahead like Agency or three separate concerns behind one box.
- "Physical is Same as Mailing Address" — checkbox, checked by default.
- "+ Add More Information" — green button with a pin icon, bottom-right of this section. Expands the "Additional Information" section described below (does not submit anything).

Additional Information section (revealed by "+ Add More Information")
- Two link-styled buttons at the top:
  - "Click here to view Specially Designated Nationals List" — attempts to open a popup to `djlogin.dowjones.com` (a Dow Jones sign-in/risk-screening domain, presumably an OFAC/SDN compliance check). The popup was blocked by the browser pane in this pass since it wasn't a direct user click; exact behavior when a real user clicks it is not verified.
  - "Click For Insurance Score" — not clicked/verified in this pass (skipped deliberately — it looks like it would query an external scoring bureau, which isn't appropriate to trigger during read-only inspection).
- Insured Code — read-only, grayed field. It already showed a value ("INS70794") as soon as the Additional Information section was opened, without any save/submit action having been taken. This suggests the app reserves/generates an Insured Code as a side effect of opening this form, not only on Create Submission — worth keeping in mind if repeated exploration of this screen is a concern.
- Occupation, Employer — free-text fields.
- C/O, Date of Birth — free-text fields (Date of Birth's exact input format/picker not verified).
- Email, Phone, Extn, Fax, Website — free-text fields.
- FEIN / SSN — radio toggle (FEIN selected by default) next to a single text box that presumably accepts whichever type is toggled; it renders as a password-style (masked) input.
- "Show FEIN/SSN" — checkbox, unchecked by default; presumed to unmask the field above (not confirmed by toggling it).
- "Does the applicant have a spouse or other co-applicant?" — radio group: No (selected by default), Unknown, Yes. Still present and behaves the same after switching Applicant Type to Corporation (it doesn't hide itself for business entity types).
  - Selecting "Yes" reveals a new collapsible "Co-Applicant Information" section (collapsed section header, expandable via a chevron) containing: First Name (required), Middle Name, Last Name (required), Co-Applicant's Occupation, Co-Applicant's Employer, Date of Birth, a FEIN/SSN radio + masked text box, a "Show FEIN/SSN" checkbox, and a further radio question "Is co-applicant employed, retired or disabled?" (No / Yes, neither selected by default).
- Notes — multi-line free-text textarea.
- "Insured Contact Detail" — a separate collapsible section (collapsed by default, chevron toggle). Expanded, it contains: "Contact Address same as Mailing Address" checkbox (unchecked by default), Contact Name, Address 1, Address 2, City/State/Zip (with the same "x"/"+" icons as the Insured's own address field), Email, Phone, Extn, Fax.

Account Information section
- Office — required dropdown ("Select" default). 14 options total: Select, Legacy Office Ajax, Legacy Office AMC, Legacy Office Brookside, Legacy Office Fastcomp, Legacy Office Marketscout, Legacy Office MidAtlantic, Legacy Office ScottishAmerican et al, Legacy Office UIG, Midwest, Northeast, Southeast, Southwest, West.
- Team — required dropdown ("Select" default). 57 options total — a long list of office/city-based team names (e.g. Astoria NY, Hartford CT, Papillion NE Livestock, Legacy Team Marketscout, Woodstock GA, and so on).
- UW/Broker — dropdown, pre-filled with the logged-in user ("Dyad QA") by default. 222 options total — effectively the full user/personnel directory (e.g. Abigail M Ubaldo, Adam Courtney, admin admin, David Kono, Hardik Parmar, and so on).
- Assistant — dropdown, also pre-filled with "Dyad QA" by default. 228 options, a similarly large personnel list.
- Originating UW/Broker — dropdown, pre-filled with "Dyad QA" by default. 218 options, another large personnel list.
- Secondary UW — dropdown, empty ("Select") by default. 105 options, a personnel list (smaller/different subset than the three above).
- Renewal Quoter — dropdown, empty ("Select") by default. 127 options, another personnel list.
- Filing State — required dropdown ("Select" default), with a small circular info "i" icon next to it (tooltip contents not opened/verified). 54 states/territories plus "Select". Notably not in alphabetical order — the first few options are Alaska, Alabama, Arkansas, Arizona (not A-then-A-then-A-then-A alphabetically), suggesting some other ordering (frequency of use? a fixed source-system order?) rather than a simple alpha sort.

Bottom bar
- Create Submission — dark red button, fixed to the bottom-right of the screen at all times (stays visible while scrolling). Submits the form and creates the Insured/Submission. Not clicked during this pass, per read-only inspection rules.

Interesting behavior / callouts
- The Agency field's type-ahead only shows results after a brief delay (roughly 1–1.5s after typing stops) — no results appeared immediately after typing, then a full list rendered.
- Producer and Contact/CSR are dependent dropdowns: both are un-selectable (only "Select" present) until an Agency is chosen, then populate with values scoped to that agency.
- The Applicant Type selection reshapes the form: Individual shows First/Middle/Last Name plus a read-only computed Full Name; every other type collapses this to one required Full Name field.
- Opening "Additional Information" alone (before entering anything else) already showed a generated Insured Code, implying the form/back end reserves an Insured Code as soon as that section is opened — not only on final submission.
- The "Specially Designated Nationals" link tries to open a third-party popup (Dow Jones risk-screening login) rather than doing anything in-page.
- The "spouse or other co-applicant" question and its resulting Co-Applicant Information section appear regardless of Applicant Type (still shown for Corporation, not just Individual).
- "Insured Contact Detail" is its own independently collapsible section, separate from the Insured's own address fields further up the form.
- Several large personnel dropdowns (UW/Broker, Assistant, Originating UW/Broker, Secondary UW, Renewal Quoter) are plain long `<select>` lists, not searchable type-aheads like the Agency field — worth noting if a test needs to pick a specific, less-common name from 100+ options.

Open items / to verify
- What "Quick Quote" and "New Submission" (the other two results-screen buttons) do — not opened in this pass.
- What "New Submission" does differently from "New Insured" when an Insured already exists.
- Exact validation rules: which fields are truly required to enable "Create Submission" versus merely marked with a red border.
- What the City/State/Zip fields actually do when typed into (type-ahead vs. free text) — not tested.
- Whether "Show FEIN/SSN" unmasks the FEIN/SSN box, and what format validation (if any) applies to that field.
- What the Date of Birth fields' input control looks like (text entry vs. a date picker).
- What "Click For Insurance Score" does — deliberately not clicked (likely triggers a real external bureau lookup).
- What actually happens when "Create Submission" is clicked — the resulting Binding/Quote screen described in the client's SSPK Submission-to-Renewal document is a separate page and wasn't opened here.
- Whether the auto-reserved Insured Code (seen as soon as "Additional Information" was opened) is discarded if the form is abandoned without clicking Create Submission, or whether it persists as an orphaned record — not verified from the UI alone.
- Full option lists for the five large personnel dropdowns (UW/Broker, Assistant, Originating UW/Broker, Secondary UW, Renewal Quoter) were sampled, not exhaustively transcribed (100–228 entries each).
- Why Filing State's option order isn't alphabetical.

(Element IDs/classes/selectors intentionally omitted — tracked separately.)