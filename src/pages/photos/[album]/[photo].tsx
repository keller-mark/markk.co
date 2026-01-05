import { Link } from 'waku';
import type { PageProps } from 'waku/router';

// TODO: see https://github.com/wakujs/waku/blob/main/examples/03_demo/src/pages/%5Bslug%5D.tsx

export default async function PhotoPage({ album, photo }: PageProps<'/photos/[album]/[photo]'>) {
  const data = await getData(album, photo);

  return (
    <div>
      <title>{data.title}</title>
      <h1>{data.headline}</h1>
      <p>{data.body}</p>
      <p>{album} - {photo}</p>
      <Link to="/">
        Return home
      </Link>
    </div>
  );
}

const getData = async (album: string, photo: string) => {
  const data = {
    title: 'Photos',
    headline: 'Photos page',
    body: 'Some photos page contents here...',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
    staticPaths: [
      ['album1', 'photo1'],
      ['album1', 'photo2'],
      ['album2', 'photo1'],
      ['album2', 'photo2'],
    ],
  } as const;
};
