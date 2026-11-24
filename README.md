# Furasentr landing page

Static one-page site built with Astro. Languages: Russian at `/`, Uzbek (Latin) at `/uz/`.

## Run

    npm install
    npm run dev       # development
    npm run build     # production files in dist/
    npm run preview   # serve at http://localhost:4321/FURASENTR/
    npm run publish:pages   # copy the build to the repo root for GitHub Pages

**Deploy:** GitHub Pages serves the root of `main`. Run `npm run publish:pages`, then commit and push. Files at the root such as `index.html`, `uz/` and `_astro/` are generated, so edit `src/` instead.

## Edit content

Everything editable is in `src/content/site.ts`: texts in both languages, category names and photos, store links and contacts. A `null` value shows a marked placeholder on the page.

**Replace a category photo:** put the file in `src/content/photos/` (JPG, PNG, WebP or AVIF, at least 1000 px wide, landscape 16:10), then set its name in `settings.categoryPhotos`, for example `engine: 'engine.jpg'`. Resizing and lazy loading are automatic.

**Edit translations:** both languages are in `site.ts`, as `ru` and `uz`, with the same structure. TypeScript flags a missing key.

## Backend-driven fields

These fields are labeled in blue on the page. The label text is the field key. The values are still local until the API exists.

| Key | Type | Shown in |
| --- | --- | --- |
| `screens.marketplace` | image URL | Marketplace phone |
| `screens.trucks` | image URL | Грузовики phone |
| `screens.jobs` | image URL | Работа phone |
| `screens.garage` | image URL | Автопарк phone |
| `apps.ecommerce.google_play_url` | URL | Furasentr E-commerce: hero, download section, footer |
| `apps.ecommerce.app_store_url` | URL | Furasentr E-commerce: hero, download section, footer |
| `apps.autopark.google_play_url` | URL | Furasentr Autopark: download section, footer |
| `apps.autopark.app_store_url` | URL | Furasentr Autopark: download section, footer |
| `screens.marketplace_strip[]` | list of 5 image URLs | Screenshot row under Маркетплейс |
| `screens.trucks_strip[]` | list of 5 image URLs | Screenshot row under Грузовики |
| `screens.garage_strip[]` | list of 5 image URLs | Screenshot row under Автопарк |
| `categories[]` | list of `{ name, image, alt }` | Marketplace category cards (label on each image: `categories[i].image`) |
| `truck_brands[]` | list of `{ name, logo }` | Грузовики, «Грузовики» brand cards (label on each logo: `truck_brands[i].logo`) |
| `trailer_brands[]` | list of `{ name, logo }` | Грузовики, «Прицепы» brand cards (label on each logo: `trailer_brands[i].logo`) |
| `partners[]` | list of `{ name, logo }` | «Разрабатывался с поддержкой», logo only; `name` is the logo's alt text (label on each logo: `partners[i].logo`) |
| `contacts.dealer.phone`, `.telegram`, `.email` | string | Стать дилером |
| `contacts.support.phone`, `.telegram`, `.email` | string | Footer |

Images without a value render as empty grey boxes. In `site.ts`, an image value can be a file name from `src/content/photos/`, `screens/` or `logos/`, or a full https:// URL.

Set `settings.showDynamicLabels` to `false` in `src/content/site.ts` to hide the labels. It must be `false` at launch.

## To fill before launch

| Item | Where in `site.ts` |
| --- | --- |
| Furasentr E-commerce App Store link | `settings.apps.ecommerce.appStore` |
| Furasentr Autopark Google Play and App Store links | `settings.apps.autopark` |
| Dealer phone, Telegram, e-mail | `settings.contacts.dealer` |
| Support phone, Telegram, e-mail | `settings.contacts.support` |
| 6 category photos | `settings.categoryPhotos` |
| Screenshot of the Работа section | `settings.screens.jobs` |

Also before launch:

- Set `settings.showDynamicLabels` to `false`.
- Remove `<meta name="robots" content="noindex">` from `src/pages/index.astro`.
- Add the Kinetika font files if licensed. Montserrat is the Cyrillic stand-in for now.
