Market Selection — Markets & Market Assistant (ALIS)

Overview The screen used to attach one or more markets to an existing Quote, producing a rateable option. Reached from a Quote tab — see add-quote.md for how a quote is created — via either of two entry points that both open the exact same full-screen "Market Selection" panel: the green "+ Add Markets" button (always present on the Quote tab), or the "Choose from Market Assistant" button (only shown before the quote has any market attached). Despite its name, "Choose from Market Assistant" does not jump straight to the Market Assistant tab — it lands on the Markets tab by default, same as "+ Add Markets" (confirmed by opening it directly on a quote with zero markets attached).

This document covers: the Market Selection panel's two tabs (Markets and Market Assistant), and the resulting option row that appears back on the Quote tab once a market is attached. The Risk/Option Detail screen reached by clicking that option's amount (where actual rating/binding happens) is only glimpsed here, not documented — it's a natural next knowledge-base page.

Field Value Application ALIS (Alis Core / Alis Custom — Dyad Tech Private Limited automation POC) Environment UAT Opened via An existing Quote tab → "+ Add Markets" button, or the "Choose from Market Assistant" button (before any market is attached) Panel header Insured / Submission # / Quote # / Authority (e.g. "Authority : BINDING"), with an "x" close icon top right

Behavior / callouts (whole panel)

Pressing Escape anywhere in this panel closes the entire panel immediately (same behavior as the Add Quote modal) and returns to the Quote tab — it is not scoped to just a dropdown or sub-control, so avoid it if you're mid-search.
The Markets tab (selected by default) Toolbar: a Market Company type-ahead filter, a Risk Company type-ahead filter (both formatted "(code) Name" exactly like Coverage/COB on Add Quote), a green "+ Add Market" button, a "Load From Admin" button (appeared once the filter fields were used), and a trash icon and refresh icon at the far right.

Below the toolbar is a large grid — this is a master list of every market company known to the system (several hundred rows, alphabetical by Market Company name), not a list scoped to this quote. Columns, left to right: a row-select checkbox, a globe icon column (populated for only some rows, e.g. "Hadron Specialty Insurance..." and "Golden Bear Insurance Co..." — meaning not confirmed), Market Company, Risk Company (often pre-linked to a specific company; some rows show a generic "Risk Co." placeholder instead, meaning no fixed risk company), Branch, Reserve Type, Status, Note, Last Follow Up, Date Submitted, Count (a number — appears to be how many existing submissions/quotes already reference that market; e.g. "Hadron Specialty Insurance..." showed 13), Contact (a "Select" dropdown plus "x"/"+" icons), Submission Email (an envelope icon, a checkbox, and a second envelope icon), and Actions (a trash/delete icon).

Bottom bar: Submit Market, Market Follow Up, Marketing (none opened in this pass), and Create Option (dark red, the primary action).

Behavior / callouts

Typing into the top Market Company / Risk Company filters behaves exactly like Coverage/COB on Add Quote: a short delay, then a single "(code) Name" suggestion to click. Selecting a suggestion fills those two boxes but does not filter or scroll the grid below to match — the full master grid stays exactly as it was.
Clicking "+ Add Market" after filling in a market that already exists in the grid does not add a duplicate row — instead it shows a warning toast ("<Name> - <Name> already added") and nothing else happens. The top-bar filters appear to be for locating/attaching a market that is genuinely new to the system, not for attaching an existing one to this quote (not confirmed, since a new market was never tested).
To attach an existing market to the quote: find its row in the grid directly (the top filters are a convenient way to know the exact name/code to scroll to, per the behavior above) and tick that row's own checkbox, then click "Create Option". A confirm dialog appears — "Please Confirm — Are you sure you want to create options for the selected markets?" (Cancel / Ok). Clicking Ok shows "Options created successfully for selected markets" and returns you to the Quote tab. This flow was confirmed working end-to-end twice in this pass (once per quote, see Data below).
Once a market has been attached to the quote, reopening the Markets tab shows that market's row pinned at the very top of the grid (ahead of the alphabetical ordering), and its Status column — blank/"-- Select --" on every other row — shows a populated value. Confirmed by reopening Market Selection after creating a Hadron option: the Hadron row appeared first, with Status filled in, while all other visible rows still showed "-- Select --".
The Market Assistant tab (alternative to Markets) The second tab on the Market Selection panel. Where the Markets tab is a raw, un-scoped master grid of every market company in the system, Market Assistant is a curated, quote-scoped view: it pre-filters to markets relevant to this quote's Coverage/COB/Filing State and adds pivot-style analytics columns (Active Premium, Hit Ratio, etc.) not present on the Markets tab.

Search toolbar: a Market Company type-ahead field, a Risk Company type-ahead field, a Contact selector, a free-text search box, and a "Search" button.

Below the toolbar, a row of fields auto-scoped to the quote:

Coverage and COB — shown pre-filled and disabled/read-only (in this pass: both "Commercial Package", carried over from the quote), not editable from this tab.
Filing State — a dropdown, editable here (unlike Coverage/COB), pre-filled with the quote's Filing State ("Connecticut" in this pass). Full option list (54 entries) observed: Alaska, Alabama, Arkansas, Arizona, California, Colorado, Connecticut, District of Columbia, Delaware, Florida, Georgia, Hawaii, Iowa, Idaho, Illinois, Indiana, Kansas, Kentucky, Louisiana, Massachusetts, Maryland, Maine, Michigan, Minnesota, Missouri, Mississippi, Montana, North Carolina, North Dakota, Nebraska, New Hampshire, New Jersey, New Mexico, Nevada, New York, Ohio, Oklahoma, Oregon, Pennsylvania, Puerto Rico, Rhode Island, South Carolina, South Dakota, Tennessee, Texas, Utah, Virginia, Vermont, Washington, Wisconsin, West Virginia, Wyoming, Mexico, Multistate, Virgin Islands — notably the same non-alphabetical ordering quirk seen on the New Insured form's Filing State field, and it includes a few non-US-state entries (Mexico, Multistate, Virgin Islands) alongside the states/territories.
A secondary "Policy Count / Policy Premium" filter with a numeric threshold box, for narrowing the results grid below by a market's existing policy count or premium (not exercised beyond noting its presence).
Results grid: an ag-Grid "treegrid" component, noticeably smaller/curated than the Markets tab's master list — "1 to 20 of 26" rows total across 2 pages in this pass (vs. several hundred on Markets). Columns (8 total): Added, Market Company, Active Premium($), Active Policy, Quoted, Bound, Hit Ratio, Website. The grid supports drag-and-drop pivoting via "Row Groups" and "Column Labels" drop zones above the column headers (ag-Grid pivot feature) — not exercised, so the effect of dragging a column into either zone wasn't observed.

The "Added" column showed a checkmark on every row observed in this pass, including markets not yet attached to the quote — its exact meaning (e.g. "already in the system" vs. "already added to this quote") is therefore unconfirmed; it did not appear to distinguish the already-attached Hadron market from the others.
Right-side panel (appears when a market row is selected/focused), with three tabs:

Risk Company — lists the risk company/companies tied to that market. For a market with only one associated risk company (tested: Accelerant, and separately Hadron), it shows a single entry that looks checked (a filled green circle icon next to the name, e.g. "Hadron Specialty Insurance Company (R4970-003)"). For a market with several (tested: ACE Private Risk Services), it instead shows real, empty checkboxes — one per risk company (e.g. "Illinois Union Insurance Company (R4400-003)" and "Westchester Surplus Lines Ins Company (R4448-003)") — that the user must actually tick before adding.
Contact — an "+Add New Contact" button above a table with Action / Contact Name / Email / Title columns; empty for every market checked in this pass.
Notes — a table with Note Date / Type / Description columns; also empty for every market checked in this pass.
A green "Add to Market" button sits bottom-right of the panel, meant to attach the selected market (with its selected risk company) to the quote — the Market Assistant equivalent of ticking a row + "Create Option" on the Markets tab.

Bug/limitation found: for a market with only one associated risk company (tested repeatedly with Hadron), the green circle icon next to that risk company's name is purely decorative — inspecting the page's own code confirmed it has no click handler and no pointer cursor, so there is nothing to actually select. Clicking "Add to Market" for such a market always fails with a "Please Select Risk Company." warning toast, even though the single option is shown looking checked, and no amount of clicking that icon or the row changes this. By contrast, a market with multiple risk companies (tested with ACE Private Risk Services) shows real, clickable checkboxes and — based on their appearance and behavior — is expected to let "Add to Market" succeed once one is ticked (not fully completed end-to-end in this pass, since the goal market for this document, Hadron, has only one risk company and hits the bug above). Net effect: in this UAT environment, the Market Assistant tab's "Add to Market" action could not be used to attach Hadron to a quote; the Markets tab's checkbox + "Create Option" flow (documented above) was used instead and worked normally, both times.

Result: the option row Back on the Quote tab, the quote now shows an option row beneath its header:

A generated option label (e.g. "NBS-1").
"Risk Co." with the risk company's name/code, and beneath it a generated option reference string (e.g. "BI-R4970-003-M-RM0164-007-CPK-CPK (PRD26472)").
"Market Co." with the market company's name/code.
An "Unbound" status badge.
Fees and Taxes figures (both $0.00 on a freshly created option).
A globe icon.
An editable amount box (defaults "$0.00") with a "→" button.
A kebab (⋮) menu with: Generate Quote, Delete, Web Rating Details, Process Driven Attachment.
Clicking the "$0.00 →" amount navigates to a Risk/Option Detail screen: a header repeating Risk Company / Market Company / Coverage / COB plus Premium, TRIA, Fees, Tax, "Total Amount w/o TRIA", and Total Amount (all $0.00 before any risk/rating data is entered); tabs Risk (selected), Premium, Terms & Forms, Additional Interest, Other Details; an "Add/Edit Risk" button; and a bottom bar showing the running Total Amount plus Generate Quote / Proceed to Bind / Bind & Invoice / Save buttons. A "← Back to List" button (top right) returns to the Quote tab. None of this screen's own data-entry was exercised — it's the natural subject for a follow-up knowledge-base document.

Open items / to verify

What "Rate with all Possible Markets" (the other button shown on the Quote tab before any market is added, alongside "Choose from Market Assistant") does — not opened in this pass.
Whether "Add to Market" on the Market Assistant tab actually succeeds for a market with multiple risk companies once one is ticked (the multi-option checkbox case was seen but not carried through to a full Add to Market click) — the single-risk-company case (e.g. Hadron) is confirmed broken/unusable, per the bug noted above.
What dragging a column into the Market Assistant grid's "Row Groups" or "Column Labels" pivot zones produces.
What the Market Assistant grid's "Added" column actually reflects, since it showed checked on every observed row including markets not yet attached to this quote.
The Market Assistant panel's "+Add New Contact" (Contact tab) and note-adding (Notes tab) flows — both tabs were empty for every market checked and neither add-action was opened.
What "Load From Admin", "Submit Market", "Market Follow Up", and "Marketing" do on the Markets tab.
What the globe icon appearing on only some market rows signifies.
The Branch / Reserve Type / Status per-row dropdown option lists on the Markets tab grid.
What a market row's Submission Email icons/checkbox do.
The full Risk/Option Detail screen (Risk/Premium/Terms & Forms/Additional Interest/Other Details tabs, Add/Edit Risk, Generate Quote/Proceed to Bind/Bind & Invoice) — only its landing state was seen.
(Element IDs/classes/selectors intentionally omitted — tracked separately.)

Data used to produce this document Values may change in future explorations — treat these as a worked example, not a fixed convention. Against submission SUB1655627 (Insured: Zeel1 Patel, Agency: DYAD Test Agency (AGT51935)) — see add-quote.md for how each quote below was created:

Quote CPK-BA-01: Market Company = Hadron Specialty Insurance Company (M-RM0164-007), Risk Co. = Hadron Specialty Insurance Company (R4970-003) — added via the Markets tab (checkbox + Create Option), producing option NBS-1.
Quote CPK-BA-02: same Market Company/Risk Co. (Hadron), added the same way (Markets tab checkbox + Create Option) after the Market Assistant tab's "Add to Market" failed with the bug noted above — also producing option NBS-1.

