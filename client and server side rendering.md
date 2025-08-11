- Server just sends the client browser an empty HTML page and a full bundle of JS to render the app.
- All React components are rendered on the client.

### Static Site Generation (SSG)
- Rendering method where HTML pages are generated at build time instead of on each request.
- Not only used for static content but also used for application which has some dynamic content which doesn't change on every request.
- Next.js uses it.

### How it works
1. You write your React/JS code.
2. During deployment/build, the system:
3. Runs any backend logic (getStaticProps)
4. Fetches external data (API, DB, CMS)
5. Creates pre-rendered HTML files.
6. These HTML files are stored on a CDN and served instantly to users.

### Uses
1. SEO friendly as it renders much faster w/o waiting for js to load.
2. Fast.
3. Cheap hosting as it don't need any backend server as all data is in HTML, CSS and js.

