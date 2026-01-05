import { Link } from 'waku';
import type { PageProps } from 'waku/router';

// TODO: see https://github.com/wakujs/waku/blob/main/examples/03_demo/src/pages/%5Bslug%5D.tsx
// Also see "Segment routes" part of docs https://waku.gg/#segment-routes

export default async function BlogArticlePage({ slug }: PageProps<'/blog/[slug]'>) {
  const data = await getData(slug);

  return (
    <div>
      <title>{data.title}</title>
      <h1>{data.headline} - {slug}</h1>
      <p>{data.body}</p>
      <Link to="/">
        Return home
      </Link>
    </div>
  );
}

const getData = async (slug: string) => {
  const data = {
    title: 'Blog',
    headline: 'Blog page',
    body: 'Some blog page contents here...',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
    staticPaths: ['post1', 'post2'],
  } as const;
};
