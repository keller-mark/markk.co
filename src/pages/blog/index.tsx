import { Link } from 'waku';
import { getBlogPosts } from '../../lib';

export default async function BlogIndexPage() {
  const posts = await getBlogPosts();

  return (
    <div className="blog-list padded-content">
      <title>Blog | Mark</title>
      <h1>Blog</h1>
      <p className="blog-list-tagline">Not just sparkling words; these have come from the <a href="https://en.wikipedia.org/wiki/Broca%27s_area">Broca region</a> of my brain.</p>

      <div className="blog-list-items">
        {posts.map(({ slug, title }) => {
          const dateMatch = slug.match(/^(\d{4})-(\d{2})-(\d{2})/);
          const date = dateMatch
            ? new Date(+dateMatch[1], +dateMatch[2] - 1, +dateMatch[3])
                .toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
            : null;
          return (
            <Link key={slug} to={`/blog/${slug}`} className="blog-list-item">
              {date && <span className="blog-list-date">{date}</span>}
              <span className="blog-list-title">{title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
