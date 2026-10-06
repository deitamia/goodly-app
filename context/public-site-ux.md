# Public site UX

Version: 0.3 · 2026-10-03 · Accepted public behavior.

## Pages and navigation

| Route | Purpose |
| --- | --- |
| `/` | Hero, common search, Products/Services buttons, two explanatory accordions |
| `/products` | Product-only catalog and product filters |
| `/services` | Service-only catalog and service filters |
| `/search` | Mixed search results and common filters |
| `/seller/{generated-id}` | Public approved seller profile with mixed active listings |
| `/become-a-seller` | Eligibility accordion and seller registration |
| `/contact` | Public Email/Subject/Message contact form |
| `/privacy` | Privacy Policy; final text pending |
| `/terms` | Terms; final text pending |
| `/publishing-rules` | Short publishing rules; final text pending |

Main navigation: Home, **Products**, **Services**, Become a seller. Products/Services are the most prominent choices. Small **Log in** link near the top-right language selector. Authentication endpoints/route names beyond this public map are not finalized.

No About the project page/menu. **About the idea** appears only as the homepage accordion. Footer links include Contact, Privacy Policy, Terms, Publishing Rules, and the operator's public contact email once chosen. Publishing Rules is also linked on Become a seller.

On mobile, Products and Services stay visible in a separate header row. Home, Become a seller, and Log in are in the expandable menu. Keep the language selector accessible at the top.

## Homepage

Centered hero on a very pale green background, without a background image. Use the accepted mission line and humanitarian-purpose line in `english-content.md`, above the search input.

Order: hero → common keyword search → Products and Services buttons → closed **About the idea** and **Who can become a seller?** accordions. Clicking a heading reveals text immediately below it. Both are independently understandable; mutual-open behavior has not been explicitly selected. Use accessible keyboard controls and expanded-state semantics.

Common search submits to `/search`, searching products and services together. The homepage search is sufficient; do not add an extra standalone seller-search interface. No homepage newest-listings section.

An earlier one-sentence homepage summary remains a draft, not approved additional hero copy. Do not insert it silently.

## Search and filters

Search uses original and available translated listing text, categories, and relevant country/type data; exact indexing and matching rules are pending. No manual tags. Public results always sort newest-added first; an edit must not silently redefine an old listing as newly added. A stable tie-breaker is a technical requirement to choose later.

| Page | Filters |
| --- | --- |
| Products | Category; Ship from; Ship to |
| Services | Category; Available in; Online language; City |
| Mixed search | Category; Available in / Ships to country |

There is no public price filter, sort selector, or separate mixed-results product/service filter. Special product/service filters remain on their own pages.

Product Ship from uses the seller's **current approved country**. A pending country request changes neither the flag nor origin filter. Approval updates origin for all seller products, without rewriting their destination countries.

Ship to matches an explicitly selected destination or Worldwide shipping. The mixed country filter uses product destination, physical-service country, and online-service eligible countries/Worldwide. It must not use seller origin as a substitute for service availability or delivery destination.

Service Available in matches physical-service country or online-service selected countries/Worldwide. All services are shown with no filters. Online language restricts to online services; City restricts to physical services. **Selecting City clears Online language; selecting Online language clears City.** Category/country can remain combined with either. City is applicable only to physical services and should be offered where physical services exist. The exact option-generation dependency rules remain technical planning work.

Online services still carry country availability even though delivered online. The countries describe where the seller offers the service; the card shows only Online, without a country list or languages. Service languages are discoverable through the filter. Additional free-text languages from published eligible services appear in filter choices; normalization is pending.

Desktop: filters row above results. Mobile: **Filters** panel with **Apply filters** and **Clear filters**. Query/filter/navigation state must be preserved for Back to results. Exact URL encoding/storage is unselected.

## Results and card interactions

Shared grid on Products, Services, Search, and seller profiles: three cards on desktop, two on tablet, one on phone. Initially 12; **Load more** adds 12 while preserving filters/search. Exact breakpoints and pagination mechanism remain to be chosen.

All cards show one image, Product/Service label, title, full short description, category, seller profile photo, approved public nickname, country flag, price information near the main button, and a very small secondary **Report seller** action.

The whole card is not a link. Seller photo/nickname opens `/seller/{generated-id}`. **Only Buy/View service opens the listing's external URL**, in a new tab. No separate External site label or internal listing detail page. Apply standard safe external-link behavior when implementing.

| Card | Additional content | Main button |
| --- | --- | --- |
| Product | Ships to list / Worldwide; exact amount + currency | Buy, green |
| Service with exact price | Online OR Physical + city; amount + currency | View service, green |
| Service with Price on request | Online OR Physical + city; Price on request | View service, warm yellow/gold, black caption |

Product destination example: **Ships to: Belgium + 3 more**. Activating + more reveals the full list; desktop hover may supplement click, while mobile can use a small popup/bottom sheet. Do not rely on hover alone. No separate Ship from text on the card; seller flag indicates country of origin. Physical service country is a filter value; display Physical + city on its card.

Automatic title/description translations get the localized **Auto-translated** indicator. Current original text, including fallback, has no translation label. Mixed successful/fallback fields must not imply that the original itself was translated; exact label grouping should be resolved during UI implementation.

## Public seller profile

Show approved photo, nickname, country/flag, **Seller since** month/year of first approval, public active-listing count, optional introduction, optional social/personal links as icons, then one mixed list of public listings. Social links may include Facebook, Instagram, TikTok, YouTube, personal website, or another link; open in a new tab. No product/service tabs or separate seller directory.

At the bottom: small secondary Report seller. **Back to results** restores the prior search/filter result context; direct entry without that context goes to the homepage. Profile URL is stable across nickname changes. Real first name, email, pending values, reports, and private Messages are not in public payloads.

The listing count must reflect publicly eligible listings, not Hidden, Blocked, deleted, or seller-suppressed listings. Seller since survives block/unblock. Nonpublic seller route response/SEO behavior is still a technical decision; it must reveal no private data.

## Become a seller and login

Use the accepted introduction. Above the registration form, a closed **Who can become a seller?** button expands text below itself and above the form. Do not duplicate About the idea here.

Form: Email, Password, Confirm password, required Terms acceptance checkbox with Terms/Privacy links, Create account. The checkbox accepts Terms; do not describe it as blanket consent to every privacy operation. No social login. After email confirmation: profile setup and eligibility declaration, then application review.

Include **Forgot password?** and **Resend confirmation email** flows in MVP. Reset link is one-use and expiring; durations/security implementation are pending. A common email/password login routes authenticated sellers/admins by their server-authorized role. Signup cannot assign admin.

## Report seller

Report actions appear at the end of a seller profile and as tiny secondary links on cards. Required fields: reporter email and free-text description. No account, files, predefined reason list, public publication, seller visibility, or automatic blocking. A report from a card is still about the seller and retains source-listing context for the administrator. Reports refer to stable seller ID and nickname.

## Contact

Footer-only Contact navigation opens `/contact`. Required **Email**, **Subject**, **Message**; button **Send message**. No attachments or buyer account. Subject/message remain in the submitted language. Admin handles them in **Contact inquiries**, separately from seller Messages and Reports. Exact success/error copy and abuse-prevention controls remain to be finalized.
