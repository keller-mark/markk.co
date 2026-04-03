import { Link } from 'waku';
import type { PageProps } from 'waku/router';
import { getBlogPostPaths, getBlogPost } from '../../lib';

export default async function BlogArticlePage({ slug }: PageProps<'/blog/[slug]'>) {
  const { title, html } = await getBlogPost(slug);

  return (
    <div>
      <title>{title}</title>
      <article dangerouslySetInnerHTML={{ __html: html }} />
      <Link to="/blog">
        Return to blog
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
