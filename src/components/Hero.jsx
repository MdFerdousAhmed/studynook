import { Card } from '@heroui/react';
import React from 'react';
import { CgNotes } from 'react-icons/cg';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { LuBookCheck } from 'react-icons/lu';

const Hero = () => {
  return (
    <Card>
      <h2 className='text-4xl font-bold text-center'>Why StudyNook?</h2>
      <p className='text-center'>Build around the way real students study --quiet,focused,and on your schedule</p>
      <div className='grid grid-cols-1 xl:grid-cols-3  gap-4 p-4'>
        <Card className='border'>
          <LuBookCheck />
          <h3 className='text-xl font-bold'>Easy Booking</h3>
          <p>Pick a data, choose an hour,see the cost --done. <br /> No back-and-forth emails or paperwork.</p>
        </Card>
        <Card className='border'>
          <IoShieldCheckmarkOutline />
          <h3 className='text-xl font-bold'>Conflict-Free Scheduling</h3>
          <p>Smart overlip detection prevents double-bookings,<br />so the room you reserve is the room you get.</p>
        </Card>
        <Card className='border'>
          <CgNotes />
          <h3 className='text-xl font-bold'>Manage Your Listing</h3>
          <p>Own a room? List it,set your hourly rate, and keep <br /> full control from your deshbord.</p>
        </Card>
      </div>
    </Card>
  );
};

export default Hero;