Login (ALIS)

Overview
The sign-in screen for the "dyad"-branded ALIS instance at `https://customer-alis.dyadtech.com`. This is a separate, independently-configured instance from the Novatae UAT instance referenced elsewhere in this knowledge base (see the "Environment variant" notes in `add-edit-risk.md`, `add-quote.md`, `market-selection.md`, `new-insured-form.md`, and `commercial-property-building.md`) — do not assume credentials, agency data, or UI behavior carry over between the two.

Field
Value
Application
ALIS (Alis Core / Alis Custom — Dyad Tech Private Limited automation POC)
Environment
customer-alis.dyadtech.com, build v4.1.19.5 (footer reads "Version Number: 4.1.19.5, Release Date: 07/03/2026")
URL
https://customer-alis.dyadtech.com
Credentials (this pass)
testqa1 / Welcome@1234 — confirmed unchanged and working across this entire session, contrary to an earlier assumption (raised mid-session) that credentials had changed. If login fails, don't assume the password rotated — check for a typo or a caps-lock/whitespace issue first.

Layout
A centered login card on a plain background, "dyad"-branded (not the Novatae/ALIS branding seen on the other UAT instance). The footer of the login page shows the build's version number and release date (see above) — a quick way to confirm which environment/build you're actually pointed at before doing any other verification.

Behavior confirmed this pass
- Successful login with testqa1/Welcome@1234 lands on the Follow Up list (`#/followup`) as the default post-login page — see `followup-list.md`.
- The top header (apps-grid icon, "ALIS" wordmark, search bar, user avatar, etc.) is present immediately after login and is consistent across every page of the app thereafter — see `header.md`.

Open items / to verify
- Exact field labels/placeholders on the login form itself (Username vs. Email, Password) — not screenshotted/inspected directly in this pass; login was performed but the form's own field-level detail wasn't captured.
- Behavior on a failed login attempt (error message wording, lockout behavior, rate limiting).
- Whether there's a "Forgot password" or SSO option on this login screen.
- Whether MFA/2FA is configured for this account or environment.
- Session timeout behavior (how long testqa1 stays logged in before being kicked back to this screen).

(Element IDs/classes/selectors intentionally omitted — tracked separately.)

Data used to produce this document
Login performed with testqa1 / Welcome@1234 against `https://customer-alis.dyadtech.com` (v4.1.19.5) at the start of this session, and re-confirmed working (no credential change) partway through the same session after an initial assumption that it might have changed.