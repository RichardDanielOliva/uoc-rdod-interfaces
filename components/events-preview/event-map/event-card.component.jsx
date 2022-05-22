import React from 'react';
import dynamic from 'next/dynamic';
import { useGetResourcesByCategory } from '../../../hooks/locales/resources.hook';

const CustomMap = dynamic(() => import('../../custom-map/custom-map.component'), { ssr: false });

const EventMap = ({ category }) => {
  const events = useGetResourcesByCategory({ category });
  return (
   <CustomMap 
    data={events}
    latitude={40.420}
    logitude={-3.705}
    />
  );
};

export default EventMap;