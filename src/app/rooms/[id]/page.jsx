import { Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const fetchSingleRoom = async(id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${id}`)
  const data = res.json();
  return data || {};
}

const RoomDetails = async({params}) => {
  const {id} = await params;
  const room = await fetchSingleRoom(id);
  const { _id, name, image, description, rate, capacity, amenities } = room;
  console.log(room)
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2 space-y-8">
          <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl aspect-video">
            <Image
              src={image ||'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200'}
              alt="Course Thumbnail"
              fill
              className="object-cover transform transition duration-700 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6">
              <Chip
                color="primary"
                variant="solid"
                className="font-bold shadow-xl"
              >
                Premium
              </Chip>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {name}
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              {description}
            </p>
          </div>


          <p className="text-md font-bold text-slate-400 italic">
            Capacity: {capacity}
          </p>

        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white/70 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 shadow-2xl space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Room Price</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-blue-600">${rate || 'Free'}</span>
                {rate && <span className="text-slate-400 line-through font-bold">${rate}</span>}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-slate-700 font-medium">
                <strong>Instructor:</strong>  Best Room
              </p>
              <div className="w-full h-px bg-slate-100"></div>
              <div className=" items-center gap-4 text-xs text-slate-500 font-bold">
          <h3 className='font-semibold text-xl'>Amenities</h3>
          {
            amenities.map((item, index) =>{
              
              return  <ul key={index}>
                 <li>{item}</li>

              </ul>
            })
          }
        </div>
            </div>
            <p className="text-center text-xs text-slate-500 font-bold">30-Day Money-Back Guarantee • Secure Payment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;