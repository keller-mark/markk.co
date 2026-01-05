import '../styles.css';

import type { ReactNode } from 'react';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <div className="layout-container">
      <meta name="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />

      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

const getData = async () => {
  const data = {
    description: 'Personal website.',
    icon: '/images/mark-08909fe4.png',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
