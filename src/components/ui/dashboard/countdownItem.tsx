import React from 'react';

type CountdownItemTypes = {
  unit: 'hours' | 'days' | 'minutes' | 'seconds';
  value: number;
};

export const CountdownItem: React.FC<CountdownItemTypes> = ({
  unit,
  value,
}) => {
  return (
    <div className='flex flex-col w-3/12 h-full  bg-gray-200 rounded-md'>
      <div className='flex items-center justify-center h-4/6 w-full'>
        <h1 className='text-5xl font-bold'>{value}</h1>
      </div>
      <div className='flex items-center justify-center'>
        <h1 className='text-lg font-bold'>{unit.toUpperCase()}</h1>
      </div>
    </div>
  );
};
