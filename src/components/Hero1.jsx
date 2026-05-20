import { Button, Card } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { CiSearch } from 'react-icons/ci';

const Hero1 = () => {
  return (
    <Card>
      <h2 className='text-4xl font-bold text-center'>How It Works</h2>
      <p className='text-center'>From browsing to blocked in under a minute.</p>
      <div className='grid grid-cols-1 xl:grid-cols-3  gap-4 p-4'>
        <Card className='grid justify-center items-center text-center'>
          <p>STEP 1</p>
          <h3 className='text-xl font-bold'>Browse Rooms</h3>
          <p>Filter by floor, amenities, or hourly rate to find your fit.</p>

        </Card>
        <Card className='grid justify-center items-center text-center'>
          <p>STEP 2</p>
          <h3 className='text-xl font-bold'>Pick a Time</h3>
          <p>Choose a date and an open time slot --we'll prevent any conflict</p>

        </Card>
        <Card className='grid justify-center items-center text-center'>
          <p>STEP 3</p>
          <h3 className='text-xl font-bold'>Study Peacefully</h3>
          <p>Get a confirmation, show up,and focus.manage everything from your deshboard</p>

        </Card>

      </div>
      <Link href={'/'} className={`text-center`}><Button>Start Browsing</Button></Link>
      
    </Card>
  );
};

export default Hero1;