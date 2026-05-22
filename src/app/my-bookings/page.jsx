
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

import { Button, Chip } from "@heroui/react";

import { auth } from "@/lib/auth";
import { CancelBookingButton } from "@/components/CancelBookingButton";


export default async function MyBookingsPage() {

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
        <div className="w-full md:w-1/4">
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

        {/* Booking Section */}
        <div className="w-full md:w-3/4">
          <h1 className="text-3xl font-bold mb-6">
            My Booking Rooms
          </h1>

          {bookings?.length === 0 ? (
            <div className="p-12 text-center  border rounded-2xl">
              <p className="mb-4 text-slate-600">
                No bookings yet
              </p>

              <Link href="/rooms">
                <Button color="primary">
                  Browse Rooms
                </Button>
              </Link>
            </div>
          ) : (
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

                    <div className="flex justify-between items-center mt-4">
                      <Chip color="success" size="sm">
                        Active
                      </Chip>
                      <CancelBookingButton name={booking?.roomName} id={booking?._id}/>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}