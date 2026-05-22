
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

import { Button, Chip } from "@heroui/react";

import { auth } from "@/lib/auth";
import { CancelBookingButton } from "@/components/CancelBookingButton";


export default async function MyListingPage() {

  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log(session)

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(token)

  if (!session?.user || !token) {
    redirect("/login");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/bookings/${session?.user?.id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );
  console.log(res)

  let bookings = [];
  console.log(bookings)

  if (res.ok) {
    bookings = await res.json();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Profile Section */}
        <div className="w-full md:w-1/3">
          <div className="p-6  border rounded-2xl shadow-sm">
            <Image
              src={session?.user?.image || "/default-avatar.png"}
              alt="profile"
              width={96}
              height={96}
              className="w-24 h-24 rounded-full object-cover"
            />

            <h2 className="text-xl font-bold mt-4">
              {session?.user?.name}
            </h2>

            <p className="text-sm text-slate-500">
              {session?.user?.email}
            </p>
          </div>
        </div>
        <div className="space-y-4">
          {bookings?.map((booking) => (
            <div
              key={booking?._id}
              className="flex flex-col md:flex-row gap-4 p-4 border rounded-xl shadow-sm"
            >
              <Image
                src={booking?.roomImage || "/room-placeholder.jpg"}
                alt={booking?.name || "Room"}
                width={120}
                height={90}
                className="rounded-lg object-cover"
              />

              <div className="flex flex-col grow justify-between">
                <div>
                  <h3 className="font-bold text-lg">
                    {booking?.roomName}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    {booking?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}