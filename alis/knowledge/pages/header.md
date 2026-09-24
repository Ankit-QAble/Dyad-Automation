Header / Top Navigation Bar (ALIS)

Overview
The dark maroon top bar present on every page of the "dyad"-branded ALIS instance (`https://customer-alis.dyadtech.com`, v4.1.19.5) once logged in — see `login.md`. It stays fixed at the top of the viewport regardless of which underlying page/tab is open (Follow Up list, Submission, Quote, Risk/Option Detail, etc.).

Field
Value
Application
ALIS (Alis Core / Alis Custom — Dyad Tech Private Limited automation POC)
Environment
customer-alis.dyadtech.com, v4.1.19.5
Present on
Every page after login

Layout (left to right)
- Apps-grid icon — leftmost, a 3x3 dot grid icon; presumed to be an app/module switcher (not opened/verified in this pass).
- "ALIS" wordmark — the app's name/logo, next to the apps-grid icon.
- Search bar — a type-dropdown ("Submission" by default) paired with a "Type here" text input. The dropdown's confirmed option list (seen while working the Add/Edit Risk and Premium screens): Submission, Policy, Insured/DBA/Co-App, Invoice, Quote — each corresponding to a different search-by field (`submission_code`, `display_policy_number`, `insured_name_dba_co_applicant`, `invoice_code`, `quote_code`). Typing a value and searching was not exercised end-to-end in this pass; this is a different, simpler search box than the Clearance Search sidebar (green "+" icon — see below).
- "Business Manager" label — a static text label/section indicator to the right of the search bar.
- Building/quote icons — a pair of icons after "Business Manager"; not opened/verified in this pass.
- Settings gear icon — opens/links to app settings; not opened/verified.
- Notification bell icon — showed a badge count (e.g. "2") during this session, indicating unread notifications; the notification panel itself was not opened/verified.
- User avatar (circular icon, far right) — clicking it opens a dropdown showing "Welcome testqa1!", "Job Title N/A", and menu items Profile, Change Password, Logout. None of these were clicked through in this pass beyond observing the menu.

Related: the Clearance Search sidebar
Separate from the header's own search bar, a green "+" icon on the left icon rail (a vertical strip of icons running down the left edge of the screen, distinct from the top header) opens a slide-out Clearance Search sidebar with its own "Clearance Search" tab. On this "dyad" instance its default filter row is Insured Name / DBA / Risk Address 1 / Risk City (all "contains"-style, OR'd together), an "Add Filter Criteria" option, "Exclude prospect"/"Exclude claim" checkboxes, and a "Search" button. This sidebar (not the header's search bar) is the entry point used throughout this knowledge base to reach "+New Insured" — see `new-insured-form.md`. Close it (an × or clicking elsewhere) before proceeding to New Insured, per the standing pattern documented there.

The left icon rail itself (the vertical strip the green "+" belongs to) has several more icons below it (clock/recent, a folder-like icon, a "+"-in-circle, a bell-like icon with a "2" badge, a magnifying glass, a book/library icon, a person icon, an envelope, a document icon, another document icon, and a settings-like icon at the bottom) — none of these were opened/verified individually in this pass beyond the green "+" (Clearance Search) and whatever icon opens the Follow Up list.

Open items / to verify
- What the apps-grid icon, "Business Manager" label, and the building/quote icon pair actually do when clicked.
- The settings gear's destination.
- The notification bell's panel contents (only the unread badge count was observed).
- The full option list and behavior of the header's own Submission/Policy/Insured/Invoice/Quote search dropdown when an actual value is searched.
- What each of the remaining left-rail icons (beyond the green "+") opens.
- Whether "Profile" and "Change Password" in the avatar dropdown are functional in this environment.

(Element IDs/classes/selectors intentionally omitted — tracked separately.)

Data used to produce this document
Observed throughout this session (2026-09-22) against `https://customer-alis.dyadtech.com` (v4.1.19.5), logged in as testqa1. The header's search-dropdown option list (Submission/Policy/Insured-DBA-Co-App/Invoice/Quote) was captured directly from the page's own accessibility tree while working the Premium tab of a Risk/Option Detail screen.