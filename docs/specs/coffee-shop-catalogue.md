# Spec: Joe & The Juice — coffee & juice shop single-page app

### FEATURE SUMMARY
A single-page web application for a coffee & juice shop branded "Joe & The Juice" that presents a browseable catalogue of exactly 20 products — 10 coffee drinks and 10 juices — with category filtering, text search, and a simple shopping cart (add/remove items with a running total; no checkout). The repo is greenfield (README only), so there is no existing feature to extend; the closest existing pattern is the factory's previous single-page app builds (e.g. kids-book-share's `public/` static frontend convention). Because a catalogue needs no shared state between users, this app is simpler than kids-book-share: purely static frontend, no backend, no build step — item data ships in the repo as a JS data file and the page runs by opening `index.html` or via any one-line static-file command.

### USER STORIES
1. As a customer, I want to open the shop page and see the Joe & The Juice brand so that I know whose menu I'm browsing.
2. As a customer, I want to browse all 20 coffee and juice items laid out as cards so that I can see everything the shop sells at a glance.
3. As a customer, I want to see each item's name, category, short description, and price so that I can decide what to order.
4. As a customer, I want to filter the catalogue to just coffees or just juices so that I can browse only what I'm in the mood for.
5. As a customer, I want to search the catalogue by item name so that I can find a specific drink quickly.
6. As a customer, I want to add items to a cart and see how many items and what total I have so that I can build my order.
7. As a customer, I want to review and remove items from my cart so that I can change my mind before ordering.
8. As a customer, I want the page to work on my phone so that I can browse the menu from anywhere.
9. As the developer running this locally, I want to start the app with a single command (or by opening one file) so that no setup knowledge is needed.

### ACCEPTANCE CRITERIA
1. Opening the app renders a single page with a visible "Joe & The Juice" header/branding and the product catalogue — no login or navigation to other pages required.
2. The catalogue contains exactly 20 items: exactly 10 in the `Coffee` category and exactly 10 in the `Juice` category; every item has a name, category, one-line description, and a price displayed in USD (e.g. `$4.50`).
3. A category filter offers `All`, `Coffee`, and `Juice`; selecting `Coffee` shows exactly the 10 coffee items, `Juice` exactly the 10 juice items, and `All` all 20.
4. A search input filters displayed items by name substring (case-insensitive) and combines correctly with the active category filter; clearing it restores the full filtered list.
5. Each item card has an "Add to cart" (or equivalent) button; clicking it adds that item to the cart and visibly updates a cart item count and cart total shown on the page.
6. Clicking the cart opens a cart view/panel listing each added item (name, unit price, quantity if duplicated) with the correct total price; each entry can be removed, updating count and total accordingly.
7. Cart state survives a page refresh (e.g. localStorage); emptying/removing all items returns the cart to an empty state showing `0` items / `$0.00`.
8. There is no backend, database, login, payment, or checkout flow — the cart is client-side only and no network calls are required to render the catalogue (item data is bundled in the repo).
9. The layout is responsive and fully usable at phone width (~375px): catalogue, filters, and cart all work without horizontal scrolling.
10. The app is static frontend only (e.g. `index.html` + `app.js` + `styles.css` or a single self-contained HTML file): it works when opened directly in a browser OR when served by one simple command documented in the README; no build tooling required.

### SCOPE
IN:
- Single static HTML/CSS/JS page, greenfield implementation, branded "Joe & The Juice".
- Exactly 20 catalogue items (10 coffee, 10 juice) defined in a repo data file/inline JS — name, category, description, price each.
- Category filter (All / Coffee / Juice) and name search.
- Client-side cart: add, view, remove, count + total; localStorage persistence.
- Responsive single-page UI usable on mobile.
- README with run instructions (open file or one static-serve command).

OUT:
- Backend, database, or any server-side state/API.
- User accounts, login, or any authentication.
- Checkout, payment, order submission, or order history.
- Real Joe & The Juice menu/branding assets — generic coffee/juice names and prices in the same spirit are fine.
- Item images beyond simple emoji/CSS placeholders (a nice-to-have, not required).
- Quantity pickers, item detail pages, nutritional info, loyalty/rewards.
- Multiple pages, routing, or navigation.
- External API calls, CDNs required at runtime, or any build step.
- Production deployment/hosting.

### OPEN QUESTIONS
1. Menu content: should items use real Joe & The Juice product names, or generic equivalents (e.g. "Espresso", "Green Machine juice")? Default assumption: generic-but-thematic names with made-up USD prices — no trademark/asset copying.
2. Checkout: is a client-side-only cart acceptable with no way to actually place an order? Default assumption: yes — the request says "basic catalogue", so ordering stops at the cart.

### SPEC IN GIT
- `BRANCH: devin/1792236906-factory-coffee-shop-catalogue`
- `FILE: docs/specs/coffee-shop-catalogue.md`
- `COMMIT: <filled after commit>`

### STATUS
`STATUS: COMPLETE`
