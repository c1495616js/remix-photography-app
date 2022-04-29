import type { FC } from 'react';

import Nav from './nav';

const HomeLayout: FC = ({ children }) => {
  return (
    <div className="pt-[60px] h-screen">
      {/* nav */}
      <Nav />
      <main className="max-h-full">{children}</main>
    </div>
  );
};

export default HomeLayout;
