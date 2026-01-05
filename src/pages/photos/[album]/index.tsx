import { Link } from 'waku';
import type { PageProps } from 'waku/router';

// TODO: see https://github.com/wakujs/waku/blob/main/examples/03_demo/src/pages/%5Bslug%5D.tsx

export default async function AlbumPage({ album }: PageProps<'/photos/[album]'>) {
  const data = await getData(album);

  return (
    <div>
      <title>{data.title}</title>
      <h1>{data.headline}</h1>
      <p>{data.body}</p>
      <p>Album {album}</p>
      {data.photos.map((photo) => (
        <Link key={photo} to={`/photos/${album}/${photo}`}>
          {photo}
        </Link>
      ))}
      <Link to="/">
        Return home
      </Link>
    </div>
  );
}

const getData = async (album: string) => {
  const data = {
    title: 'Photos',
    headline: 'Photos page',
    body: 'Some photos page contents here...',
    photos: ['photo1', 'photo2'] as const,
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
    staticPaths: ['album1', 'album2'],
  } as const;
};
