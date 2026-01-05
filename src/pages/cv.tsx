import { Link } from 'waku';

export default async function CvPage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1>{data.headline}</h1>
      <p>{data.body}</p>
      <Link to="/">
        Return home
      </Link>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Mark Keller',
    headline: 'CV page',
    body: 'Some cv page contents here...',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
