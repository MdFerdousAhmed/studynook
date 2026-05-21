
"use client";

import { Button } from "@heroui/react";
import { useSession, authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function BookingButton({ room }) {
    console.log(room)
    const { data: session } = useSession();
    console.log(session)
    const router = useRouter();

    const handleBook = async () => {
        const { data: jwtData } = await authClient.token();
        console.log(jwtData)
        const token = jwtData?.token;

        if (!token) {
            toast.error("Authentication failed. Booking not added.");
            return;
        }

        const updatedData = {
            userId: session?.user?.id,
            name: session?.user?.name,
            email: session?.user?.email,
            roomName: room?.name,
            description: room?.description,
            roomImage: room?.image,
            roomId: room?.userId,
           
        };
        console.log(updatedData)

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/bookings/${room?._id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(updatedData),
            }
        );

        const data = await res.json();

        if (!data) {
            toast.error("Something went wrong");
            return;
        }

        toast.success("Booking successful");

        router.push("/my-bookings");
    };

    return (
        <Button
            color="primary"
            size="lg"
            className="w-full font-bold shadow-lg mt-4"
            onPress={handleBook}
        >
            Book Now
        </Button>
    );
}