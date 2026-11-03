# Brightly

The microsite linking together all the Brightly records, projects, and related services. Brightly is my band.

Status: active
Live: https://wewerebrightly.com

## Related projects

|                     | Repo                    | Description                   | Client                                                               | Server                                   |
| ------------------- | ----------------------- | ----------------------------- | -------------------------------------------------------------------- | ---------------------------------------- |
| ![!img-rugby]       | **Rugby**                   | Love letter to the humble GIF | [rugby][rugby]                                                       | [rugby-server][rugby-server]             |
| ![!img-tweetflight] | **Tweetflight**             | Twitter karaoke               | [tweetflight][tweetflight] ([archive][tweetflight-archive])          | [tweetflight-server][tweetflight-server] |
| ![!img-true]        | **True**                    | Immersive lyric video         | [true][true] ([archive][true-archive])                               | N/A                                      |
| ![!img-iwnlyg]      | **I Will Never Let You Go** | WebGL webcam mashup           | [i-will-never-let-you-go][iwnlyg] ([archive][iwnlyg-archive])        | N/A                                      |
| ![!img-beginnings]  | **Beginnings & Endings**    | Musical pyramid scheme        | [beginnings-and-endings][beginnings] ([archive][beginnings-archive]) | N/A                                      |

## Running it

```bash
npm install
npm run dev       # local dev server
npm run preview   # build for Cloudflare and preview locally
npm run deploy    # build and deploy to Cloudflare Workers
npm run previews  # refresh link previews in data/link-previews.json
```

Local config lives in `.dev.vars`, which sets `NEXTJS_ENV`.

## How it works

It's a Next.js app deployed to Cloudflare Workers with OpenNext. The home page is assembled from sections in `app/sections/`, and longer write-ups (`/ten-years` and `/lysterfield-lake`) are MDX pages. The press and blog links in `data/articles.json` get link previews from `data/link-previews.json`, so the home page renders without any network calls. To refresh them, run `npm run previews` and commit the updated file. If a link fails, the script keeps its last good preview and records the error under `failures`. An article with no preview still shows its title and publication.

[rugby]: https://github.com/superhighfives/rugby
[rugby-server]: https://github.com/superhighfives/rugby-server
[true]: https://github.com/superhighfives/true
[true-archive]: https://github.com/superhighfives/true-archive
[tweetflight]: https://github.com/superhighfives/tweetflight
[tweetflight-archive]: https://github.com/superhighfives/tweetflight-archive
[tweetflight-server]: https://github.com/superhighfives/tweetflight-server
[iwnlyg]: https://github.com/superhighfives/i-will-never-let-you-go
[iwnlyg-archive]: https://github.com/superhighfives/i-will-never-let-you-go-archive
[beginnings]: https://github.com/superhighfives/beginnings-and-endings
[beginnings-archive]: https://github.com/superhighfives/beginnings-and-endings-archive
[!img-rugby]: https://user-images.githubusercontent.com/449385/218269348-f5671333-47bb-499e-83b6-89fa57fef3c0.svg
[!img-tweetflight]: https://user-images.githubusercontent.com/449385/218269463-b2c95682-4870-445a-947f-79ff60a08f03.svg
[!img-true]: https://user-images.githubusercontent.com/449385/218269406-82420e40-2ef1-4f2d-b696-78a8f2e10fde.svg
[!img-iwnlyg]: https://user-images.githubusercontent.com/449385/218269536-9ad50c4e-85f1-463c-923d-996ddd2e6686.svg
[!img-beginnings]: https://user-images.githubusercontent.com/449385/218269766-ebb5a6f5-e78e-4125-bb84-ebee65152007.svg
