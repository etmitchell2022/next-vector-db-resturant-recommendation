import { Radio, RadioGroup, Rating, FormControlLabel } from '@mui/material';
import React from 'react';
import { Button } from '../button';
import { Label } from '../label';
import { Input } from '../input';

type ReviewFormTypes = {
  rating: number;
  setRating: (value: number) => void;
};

export const ReviewForm: React.FC<ReviewFormTypes> = ({
  rating,
  setRating,
}) => {
  return (
    <div className='flex flex-col w-full'>
      <div>
        <h1 className='text-lg font-bold'>Rate your lunch:</h1>
      </div>
      <div className='flex h-1/6 flex-row items-center py-3'>
        <div className='mr-2'>
          <p className='font-medium text-lg'>{rating}</p>
        </div>
        <Rating
          size='large'
          name='half-rating'
          defaultValue={2.5}
          precision={0.5}
          onChange={(event, newValue) => {
            if (newValue) {
              setRating(newValue);
            }
          }}
        />
        <p className='font-medium text-md ml-2'>(4 Reviews)</p>
      </div>
      <div className='py-2 h-2/6'>
        <h1 className='text-md font-medium'>Would you go back?</h1>
        <RadioGroup
          row
          aria-labelledby='demo-row-radio-buttons-group-label'
          name='row-radio-buttons-group'
          className='m-0'
        >
          <FormControlLabel value={true} control={<Radio />} label='Yes' />
          <FormControlLabel value={false} control={<Radio />} label='No' />
        </RadioGroup>
      </div>
      <div className='flex h-1/6'>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label className='text-md font-medium'>Enter Name</Label>
          <Input id='name' type='text' placeholder='Name...' />
        </div>
      </div>
      <div className='flex w-full h-2/6 justify-start items-end '>
        <Button variant='default'>Submit Lunch Review</Button>
      </div>
    </div>
  );
};
