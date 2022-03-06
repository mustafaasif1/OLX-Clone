import React from 'react';
import { AdLongCard } from '../../Units/AdLongCard/AdLongCard';

export const ListViewCards = () => {
  const ads = 10;

  return (
    <>
      {[...Array(ads)].map((_, index) => (
        <AdLongCard key={index} />
      ))}
    </>
  );
};
