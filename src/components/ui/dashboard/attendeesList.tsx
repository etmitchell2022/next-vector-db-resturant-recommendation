import React from 'react';
import { Avatar } from '@mui/material';
import { StarFilledIcon } from '@radix-ui/react-icons';

type AttendeesListTypes = {
  attendees: any[];
};

export const AttendeesList: React.FC<AttendeesListTypes> = ({ attendees }) => {
  return (
    <div className='flex flex-col h-full w-full overflow-auto'>
      <div className='flex h-1/6'>
        <h1 className='font-medium text-lg'>Attendees</h1>
      </div>
      {attendees.map((attendee, index) => (
        <div key={index} className='flex flex-row items-center w-full my-2 '>
          <div className='w-1/6'>
            <Avatar
              sx={{ width: 30, height: 30 }}
              className='bg-red-500 text-sm'
            >
              {attendee.name.split('')[0]}
            </Avatar>
          </div>
          <div className='w-2/6'>
            <h1>{attendee.name}</h1>
          </div>
          <div className='w-3/6 flex flex-row items-center justify-end'>
            <h1>{attendee.rating}</h1>
            <StarFilledIcon className='text-yellow-500 ml-1' />
          </div>
        </div>
      ))}
    </div>
  );
};
