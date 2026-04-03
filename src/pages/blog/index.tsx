import { Link } from 'waku';
import { getBlogPosts } from '../../lib';

export default async function BlogIndexPage() {
  const posts = await getBlogPosts();

  return (
    <div>
      <title>Blog | Mark</title>
      <h1>Blog</h1>
      <p>Not sparkling words; these have come from the Broca region of my brain.</p>

      {posts.map(({ slug, title }) => (
        <Link key={slug} to={`/blog/${slug}`}>
          {title}
        </Link>
      ))}

    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
