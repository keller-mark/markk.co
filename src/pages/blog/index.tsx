import { Link } from 'waku';

// TODO: see https://github.com/wakujs/waku/blob/main/examples/03_demo/src/pages/%5Bslug%5D.tsx

export default async function BlogIndexPage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1>{data.headline}</h1>
      <p>{data.body}</p>

      {/*
        <p>TODO: link to posts in blog repo?</p>
        <p>TODO: embed some bluesky posts?</p>
        <p>TODO: link to old vitessce posts?</p>
      */}
      {data.articles.map((article) => (
        <Link key={article} to={`/blog/${article}`}>
          {article}
        </Link>
      ))}

    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Blog | Mark',
    headline: 'Blog page',
    body: 'Some blog page contents here...',
    articles: ['post1', 'post2'] as const,
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
