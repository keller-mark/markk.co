import { Link } from 'waku';
import { readFileSync } from 'fs';
import Gallery from '../../components/Gallery.jsx';

// TODO: see https://github.com/wakujs/waku/blob/main/examples/03_demo/src/pages/%5Bslug%5D.tsx

export default async function PhotosIndexPage() {
  const data = await getData();
  const photoList = JSON.parse(readFileSync('./private/photo_list.json', 'utf8'));

  return (
    <div style={{ backgroundColor: 'rgb(33, 33, 36)', height:'100vh' }}>
      <title>{data.title}</title>
      <Gallery photoList={photoList} />
    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Photos | Mark',
    headline: 'Photos page',
    body: 'Some photos page contents here...',
    albums: ['album1', 'album2'] as const,
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
