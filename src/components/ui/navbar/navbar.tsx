import Link from 'next/link';
import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';

type NavBarTypes = {
  className?: string;
};

export const NavBar: React.FC<NavBarTypes> = ({ className }) => {
  return (
    <div className={`${className} fixed top-0 left-0 h-full z-10 w-24`}>
      <div className='flex flex-col items-center bg-gray-100 text-grey-900 shadow h-full'>
        <div className='h-16 flex items-center justify-center w-full'>
          <LocalDiningRoundedIcon fontSize='large' className='text-cyan-500' />
        </div>
        <ul className='w-full mt-6'>
          <li className='hover:bg-gray-200 my-2'>
            <Link href={'/'}>
              <div className='h-16 px-6 flex justify-center items-center w-full cursor-pointer'>
                <HomeRoundedIcon fontSize='large' />
              </div>
            </Link>
          </li>
          <li className='hover:bg-gray-200 my-2'>
            <Link href={'/map'}>
              <div className='h-16 px-6 flex justify-center items-center w-full cursor-pointer'>
                <MapRoundedIcon fontSize='large' />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
