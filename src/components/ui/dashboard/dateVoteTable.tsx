import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { CheckIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';

type DateVoteTableTypes = {
  dateItems: { date: string; votes: number }[];
};

export const DateVoteTable: React.FC<DateVoteTableTypes> = ({ dateItems }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Rank</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Votes</TableHead>
          <TableHead className='text-right'></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className='py-10'>
        {dateItems.map((dateItem) => (
          <TableRow>
            <TableCell className='font-medium'>1</TableCell>
            <TableCell className='font-medium'>{dateItem.date}</TableCell>
            <TableCell className='font-medium'>{dateItem.votes}</TableCell>
            <TableCell className='text-right'>
              <Button className='h-6 bg-green-500 hover:bg-green-600'>
                <CheckIcon className='h-4 w-4' /> Vote
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
