import React from 'react';
import Navbar from './_components/navbar/navbar';
import Sidebar from './_components/sidebar/sidebar';
import Container from './_components/container';

const ChannelLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </div>
  );
};

export default ChannelLayout;
