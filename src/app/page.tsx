import { Button } from '@/components/ui/button';
import React from 'react';

const Home = async () => {
  // fetch(
  //   `https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&access_token=ya29.a0AfB_byD45RmSpj2eL_wkeDTxdOGxwDTB_TBYLPfSqm6DPrgfF17G2a1GDVEpvOWSS8SjzKJ8g-PgUL3oYMvX3cUZdpohhewGlCjgQiljVZDcCSrkc8PCCXE4zvGZcyKl86o6rdurXezrr8mjefzSOLbIbEFpiCZKC4xUaCgYKAScSARISFQHGX2MivDvJZWwMrJUOrVBNmWJS7A0171`
  // ).then(async (res) => {
  //   const data = await res.json();
  //   console.log(data);
  // });

  return (
    <div className="text-center text-2xl font-bold">
      Home
      <Button>Button</Button>
    </div>
  );
};

export default Home;
