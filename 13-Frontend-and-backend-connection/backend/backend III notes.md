### Backend III

### CORS
- Cross-Origin Resource Sharing.
- Allow browsers to block request from one origin or domain to a different origin unless server explicitly allows it.
- Like calling backend API from frontend, won't be allowed to do so.
- By default, don't allow to pass any credential details from any domain.
- To use.
```js
app.use(cors()); // for all domains

// for specific domain
app.use(cors({
    origin: 'http://localhost:3000/',
    credentials: true // allows to pass cookies, authorization bearer<token> from that domain
}));
```