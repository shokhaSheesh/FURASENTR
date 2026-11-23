# Fura Sentr landing page

Static one-page site built with Astro. Language: Russian, structured for Uzbek.

## Run

    npm install
    npm run dev       # development
    npm run build     # production files in dist/
    npm run preview   # serve the built site on port 4321

## Edit content

Everything editable is in `src/content/site.ts`: texts, category names and photos, store links and contacts. A `null` value shows a marked placeholder on the page.

**Replace a category photo:** put the file in `src/content/photos/` (JPG, PNG, WebP or AVIF, at least 1000 px wide, landscape 16:10), then set its name in `settings.categoryPhotos`, for example `engine: 'engine.jpg'`. Resizing and lazy loading are automatic.

**Add Uzbek:** copy `ru` to `uz` in `site.ts`, translate the values, add it to `locales`, and create `src/pages/uz/index.astro`.

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

- Remove `<meta name="robots" content="noindex">` from `src/pages/index.astro`.
- Add the Kinetika font files if licensed. Montserrat is the Cyrillic stand-in for now.
- Configure hosting to run `npm run build` and publish `dist/`.
