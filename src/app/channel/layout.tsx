import React from 'react';
import Navbar from './_components/navbar/navbar';
import Sidebar from './_components/sidebar/sidebar';
import Container from './_components/container';

const ChannelLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Container>{children}</Container>
    </div>
  );
};

export default ChannelLayout;
