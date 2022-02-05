const { generateFileList } = require('./src/crawler');
const { join } = require('path');
const fs = require('fs');
const parseMD = require('parse-md').default;

const [blogs] = generateFileList(join(__dirname, 'content')).nodes;
module.exports = () => {
	const pages = [
		{
			url: '/',
			seo: {
				cover: '/assets/family.jpg'
			}
		},
		{ url: '/contact/' },
		{ url: '/contact/success' }
	];

	// adding blogs list posts page
	pages.push({
		url: '/blogs/',
		data: blogs
	});

	// adding all blog pages
	pages.push(...blogs.edges.map(fernando => {
		let data;
		if (fernando.format === 'md') {
			const { content } = parseMD(fs.readFileSync(join('content', 'fernando', fernando.id), 'utf-8'));
			data = content;
		} else {
			data = fs.readFileSync(join('content', 'fernando', fernando.id), 'utf-8').replace(/---(.*(\r)?\n)*---/, '');
		}
		return {
			url: `/fernando/${fernando.id}`,
			seo: fernando.details,
			data: {
				details: fernando.details,
				content: data
			}
		};
	}));

	return pages;
};
