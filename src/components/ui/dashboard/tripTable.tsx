import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '../badge';
import { InfoCircledIcon } from '@radix-ui/react-icons';

type TripTableTypes = {
  trips: any[];
};

export const TripTable: React.FC<TripTableTypes> = ({ trips }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Restaurant</TableHead>
          <TableHead>Type of Cuisine</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Would return?</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {trips.map((trip, index) => (
          <TableRow key={index}>
            <TableCell className='font-medium'>{trip.Date}</TableCell>
            <TableCell>{trip.Restaurant}</TableCell>
            <TableCell>{trip.type}</TableCell>
            <TableCell>{trip.Rating}</TableCell>
            <TableCell>
              <Badge
                className={`${
                  trip.Status === 'Visited'
                    ? 'bg-green-500 hover:bg-green-500'
                    : 'bg-yellow-500 hover:bg-yellow-500'
                }`}
              >
                {trip.Status}
              </Badge>
            </TableCell>
            <TableCell>{trip.wouldReturn ? 'Yes' : 'No'}</TableCell>
            <TableCell>
              <InfoCircledIcon
                className='w-5 h-5 cursor-pointer'
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
