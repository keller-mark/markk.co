import { Link } from 'waku';
import type { PageProps } from 'waku/router';
import { getBlogPostPaths, getBlogPost } from '../../lib';

export default async function BlogArticlePage({ slug }: PageProps<'/blog/[slug]'>) {
  const { title, html } = await getBlogPost(slug);

  return (
    <div className="blog-article padded-content">
      <title>{title}</title>
      <Link to="/blog" className="blog-back-link">
        &larr; Blog
      </Link>
      <article className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
      <Link to="/blog" className="blog-back-link">
        &larr; Blog
      </Link>
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
