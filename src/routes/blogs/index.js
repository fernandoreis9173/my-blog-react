import { h } from 'preact';
import { Link } from 'preact-router';
import { usePrerenderData } from '@preact/prerender-data-provider';
import style from './style';

const blogs = (props) => {
	const [data, isLoading] = usePrerenderData(props);
	return (
		<div class={style.pageBlogs}>
			<h1 class={style.pageTitle}>Meu Blog</h1>
			{getBlogsListing(data, isLoading)}
		</div>
	);
};

function getBlogsListing(data, isLoading) {
	if (isLoading) {
		return (
			<article class={style.loadingPlaceholder}>
				<h2 class={`${style.blogtitle} loading`}>&nbsp;</h2>
				<div class={`${style.loadingBody} loading`}>&nbsp;</div>
				<div class={`${style.loadingBody} loading`}>&nbsp;</div>
				<div class={`${style.loadingBody} loading`}>&nbsp;</div>
			</article>
		);
	}
	if (data && data.data) {
		const { data: blogs } = data;
		return (
			<>
				{blogs.edges.map(blog => (
					<Link href={`/blog/${blog.id}`}>
						<article>
							<h2>{blog.details.title}</h2>
							<div>
								{
									(blog.details.tags.substr(1, blog.details.tags.length - 2).split(',') || []).map(tag => <span class={style.tag}>{tag}</span>)
								}
							</div>
							<p class={style.preview}>
								{blog.preview}
							</p>
						</article>
						<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
						<a href="https://wa.me/5592999845104?text=Adorei%20seu%20Portfolio" style="position:fixed;width:60px;height:60px;bottom:40px;right:40px;background-color:#25d366;color:#FFF;border-radius:50px;text-align:center;font-size:30px;box-shadow: 1px 1px 2px #888;
  			z-index:1000;" target="_blank">
							<i style="margin-top:16px" class="fa fa-whatsapp"></i>
						</a>
					</Link>
				))}
			</>
		);
	}
}

export default blogs;
