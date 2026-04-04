import { Link } from 'waku';
import type { PageProps } from 'waku/router';
import { getBlogPostPaths, getBlogPost, getBlogPosts } from '../../lib';

export default async function BlogArticlePage({ slug }: PageProps<'/blog/[slug]'>) {
  const posts = (await getBlogPosts()).toReversed();
  const { title, html } = await getBlogPost(slug);

  const postIndex = posts.findIndex(p => p.slug === slug);
  const prevPost = posts.at(postIndex - 1);
  const nextPost = posts.at(postIndex + 1);

  return (
    <div className="blog-article padded-content">
      <title>{title}</title>
      <Link to="/blog" className="blog-back-link">
        &larr; Blog
      </Link>
      <article className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
      <div className="blog-prev-next-footer">
        {prevPost ? (
          <Link to={`/blog/${prevPost.slug}`} className="blog-back-link">
            &larr; {prevPost.title}
          </Link>
        ) : (
          <Link to="/blog" className="blog-back-link">
            &larr; Blog
          </Link>
        )}
        {nextPost ? (
          <Link to={`/blog/${nextPost.slug}`} className="blog-back-link">
            {nextPost.title} &rarr;
          </Link>
          ) : null}
        </div>
    </div>
  );
}

export const getConfig = async () => {
  const postPaths = await getBlogPostPaths();
  return {
    render: 'static',
    staticPaths: postPaths,
  } as const;
};
