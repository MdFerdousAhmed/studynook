"use client"

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AddRoomPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const fromData = new FormData(e.currentTarget);
    const addRoom = Object.fromEntries(fromData.entries());

    console.log("Submitting room data:", addRoom);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(addRoom),
    });
    
    const data = await res.json();
    console.log("Server response:", data);

    if (res.ok) {
      toast.success("Room added successfully!");
      router.refresh();
      router.push("/rooms");
    } else {
      toast.error("Failed to add room!");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4">Add room</h1>
      <form onSubmit={onSubmit} className="space-y-4 max-w-xl mx-auto p-6 border rounded-xl shadow">
        <div>
          <label className="block mb-1 font-medium">Room Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter room name"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Room Image URL</label>
          <input
            type="text"
            name="image"
            placeholder="Enter image URL"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            placeholder="Enter short description"
            rows="4"
            className="w-full border rounded-lg px-4 py-2"
          ></textarea>
        </div>
        <div>
          <label className="block mb-1 font-medium">Floor</label>
          <input
            type="text"
            name="floor"
            placeholder="Floor 3"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Seat Capacity</label>
          <input
            type="text"
            name="capacity"
            placeholder="2–4 people"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Hourly Rate</label>
          <input
            type="text"
            name="rate"
            placeholder="$5/hr"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Amenities</label>
          <input
            type="text"
            name="amenities"
            placeholder="WiFi, Whiteboard, AC"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Room
        </button>
      </form>
    </div>
  );
};

export default AddRoomPage;