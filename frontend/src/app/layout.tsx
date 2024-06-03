import React from 'react';
import Link from 'next/link';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <Link href="/">
            <p className="text-2xl font-bold">Book App</p>
          </Link>
        </div>
      </header>
      <main className="container mx-auto p-4 flex-grow">{children}</main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Book App</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
