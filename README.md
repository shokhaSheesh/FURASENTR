# Fura Sentr landing page

Static one-page site built with Astro. Languages: Russian at `/`, Uzbek (Latin) at `/uz/`.

## Run

    npm install
    npm run dev       # development
    npm run build     # production files in dist/
    npm run preview   # serve the built site on port 4321

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
| `stores.google_play_url` | URL | All Google Play buttons and section CTAs |
| `stores.app_store_url` | URL | All App Store buttons |
| `categories[]` | list of `{ name, image, alt }` | Marketplace category cards |
| `truck_brands[]` | list of strings | Грузовики brand list |
| `contacts.dealer.phone`, `.telegram`, `.email` | string | Стать дилером |
| `contacts.support.phone`, `.telegram`, `.email` | string | Footer |

Set `settings.showDynamicLabels` to `false` in `src/content/site.ts` to hide the labels. It must be `false` at launch.

## To fill before launch

| Item | Where in `site.ts` |
| --- | --- |
| App Store link | `settings.stores.appStore` |
| Web login address (until set, «Войти» opens the download section) | `settings.loginUrl` |
| Dealer phone, Telegram, e-mail | `settings.contacts.dealer` |
| Support phone, Telegram, e-mail | `settings.contacts.support` |
| 6 category photos | `settings.categoryPhotos` |
| Screenshot of the Работа section | `settings.screens.jobs` |

Also before launch:

- Set `settings.showDynamicLabels` to `false`.
- Remove `<meta name="robots" content="noindex">` from `src/pages/index.astro`.
- Add the Kinetika font files if licensed. Montserrat is the Cyrillic stand-in for now.
- Configure hosting to run `npm run build` and publish `dist/`.
