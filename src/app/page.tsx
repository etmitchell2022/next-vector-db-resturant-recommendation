'use client';

import { TripTable } from '@/components/ui/dashboard/tripTable';
import { useState } from 'react';
import { ReviewForm } from '@/components/ui/dashboard/reviewForm';
import { AttendeesList } from '@/components/ui/dashboard/attendeesList';
import Image from 'next/image';
import { Rating } from '@mui/material';
import { Countdown } from '@/components/ui/dashboard/countdown';
import { Button } from '@/components/ui/button';
import { DateVoteTable } from '@/components/ui/dashboard/dateVoteTable';

import { AddDateDialog } from '@/components/ui/dashboard/addDateDialog';

export default function Home() {
  const [rating, setRating] = useState<number>(2);
  const [date, setDate] = useState<Date>();

  const trips = [
    {
      Date: '2023-01-15',
      Restaurant: 'The Green Terrace',
      type: 'Vegetarian',
      Rating: 4.5,
      Status: 'Upcoming',
      wouldReturn: true,
    },
    {
      Date: '2023-01-22',
      Restaurant: "Ocean's Delight",
      type: 'Seafood',
      Rating: 4.0,
      Status: 'Upcoming',
      wouldReturn: true,
    },
    {
      Date: '2023-01-30',
      Restaurant: 'Spicy Fusion',
      type: 'Indian',
      Rating: 3.5,
      Status: 'Visited',
      wouldReturn: false,
    },
    {
      Date: '2023-02-05',
      Restaurant: 'Bella Italia',
      type: 'Italian',
      Rating: 4.8,
      Status: 'Visited',
      wouldReturn: true,
    },
    {
      Date: '2023-02-12',
      Restaurant: 'Tokyo Sushi',
      type: 'Japanese',
      Rating: 4.2,
      Status: 'Visited',
      wouldReturn: true,
    },
    {
      Date: '2023-02-19',
      Restaurant: 'Grill King',
      type: 'Barbecue',
      Rating: 3.8,
      Status: 'Visited',
      wouldReturn: true,
    },
  ];

  const attendees = [
    { name: 'Evan', rating: '4.5' },
    { name: 'John', rating: '4' },
    { name: 'Test', rating: '3' },
    { name: 'User', rating: '3.5' },
  ];

  const voteDates = [
    { date: 'Friday, March 8', votes: 4 },
    { date: 'Monday, March 11', votes: 2 },
    { date: 'Tuesday, March 12', votes: 1 },
  ];
  return (
    <div className=' flex flex-row w-screen h-auto relative pl-24'>
      <div className='flex flex-col gap-4 m-4 w-4/6'>
        <div className='w-full flex justify-center content-center border-2 border-gray-200 min-h-72 rounded-md'>
          <div className='w-full'>
            <TripTable trips={trips} />
          </div>
        </div>
        <div className='flex flex-col h-6/12 gap-4'>
          <div className='flex w-6/12 border-2 border-gray-200 min-h-48 rounded-md p-2'>
            <Countdown targetDate='2024-12-31T00:00:00' />
          </div>
          <div className='flex flex-col w-6/12 border-2 border-gray-200 min-h-48 rounded-md p-2'>
            <div className='flex flex-col h-4-6 w-full bg-gray-200 rounded-md'>
              <DateVoteTable dateItems={voteDates} />
            </div>
            <div className='flex flex-col h-2/6'>
              <div className='flex flex-row w-full justify-center p-2 '>
                <div className='flex w-5/12 justify-end items-center'>
                  <hr className='border-0 w-full border-t border-gray-200' />
                </div>
                <div className='flex w-1/12 justify-center items-center'>
                  <p className='text-sm'>Or</p>
                </div>
                <div className='flex w-5/12 justify-start items-center'>
                  <hr className='border-0 w-full border-t border-gray-200' />
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='flex'>
                  <AddDateDialog setDateToAdd={setDate} dateToAdd={date}>
                    <Button className='h-8 text-sm' size='sm'>
                      Add date
                    </Button>
                  </AddDateDialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center m-4 w-2/6 h-full border-2 border-gray-200 rounded-md overflow-auto'>
        <div className='flex w-5/6 h-2/6 p-4 m-2 bg-gray-200 rounded-md'>
          <div className='flex flex-col h-full w-full'>
            <div className='flex mb-1'>
              <h1 className='text-lg font-bold'>Last Visit</h1>
            </div>
            <div className='flex h-4/6 w-full'>
              <Image
                className='rounded-md'
                src='/food.jpg'
                width={300}
                height={300}
                alt='Picture of the restaurant'
              />
            </div>
            <div className='flex flex-row items-center mt-2'>
              <h1 className='font-medium text-lg'>Gallery Pastry shop</h1>
              <p className='font-regular text-sm ml-2 text-gray-500'>
                0.67 miles
              </p>
            </div>
            <div className='flex flex-row items-center'>
              <p className='font-sm mr-1'>4.5</p>
              <Rating
                defaultValue={4.5}
                precision={0.5}
                size='small'
                readOnly
              />
            </div>
            <div className='flex flex-row items-center'>
              <p className='text-xs text-gray-500'>
                $$ | Breakfast & Brunch | Cocktail Bars | New American
              </p>
            </div>
          </div>
        </div>
        <div className='flex w-5/6 h-auto p-4 m-2 bg-gray-200 rounded-md'>
          <div className='flex flex-col h-full w-full overflow-auto'>
            <AttendeesList attendees={attendees} />
          </div>
        </div>
        <div className='flex w-5/6 h-auto p-4 m-2 bg-gray-200 rounded-md'>
          <ReviewForm rating={rating} setRating={setRating} />
        </div>
      </div>
    </div>
  );
}
