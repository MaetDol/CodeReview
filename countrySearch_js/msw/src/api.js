import { rest } from 'msw';
import db from './db';

function url(path) {
	return '/api' + path;
}

const searchCountry = rest.get(url`/search`, (req, res, ctx) => {
	const keyword = req
		.url.searchParams.get('keyword')
		.toString()
		.trim();
	if(!keyword.length) return res(ctx.json([]));

	return db
		.getAllCountry()
		.filter(country => country.includes(keyword));
});

export default [
	searchCountry,
];