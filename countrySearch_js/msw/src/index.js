import { setupWorker, rest } from 'msw';

const worker = setupWorker(
	rest.get('/test', (req, res, ctx) => {
		return res(ctx.json({ hello: 'word' }));
	})
);

worker.start({
	serviceWorker: {
		url: "/countrySearch_js/msw/mockServiceWorker.js"
	}
});