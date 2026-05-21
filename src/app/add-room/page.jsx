"use client"

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

// import { ObjectId } from "mongodb";

const AddRoomPage = () => {

  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault()
    const fromData = new FormData(e.currentTarget);
    const addRoom = Object.fromEntries(fromData.entries());

    const res = await fetch('http://localhost:5000/rooms', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(addRoom),

    })
    const data = await res.json()
    if (res.ok) {
      toast.success("Room added successfully!");
      router.push("/");
    } else {
      toast.error("Failed to add room!");
    }

    console.log(data)
  }
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4">Add room</h1>
      <form onSubmit={onSubmit} className="space-y-4 max-w-xl mx-auto p-6 border rounded-xl shadow">

        {/* Room Name */}
        <div>
          <label className="block mb-1 font-medium">Room Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter room name"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Room Image */}
        <div>
          <label className="block mb-1 font-medium">Room Image URL</label>
          <input
            type="text"
            name="image"
            placeholder="Enter image URL"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            placeholder="Enter short description"
            rows="4"
            className="w-full border rounded-lg px-4 py-2"
          ></textarea>
        </div>

        {/* Floor */}
        <div>
          <label className="block mb-1 font-medium">Floor</label>
          <input
            type="text"
            name="floor"
            placeholder="Floor 3"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Capacity */}
        <div>
          <label className="block mb-1 font-medium">Seat Capacity</label>
          <input
            type="text"
            name="capacity"
            placeholder="2–4 people"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Rate */}
        <div>
          <label className="block mb-1 font-medium">Hourly Rate</label>
          <input
            type="text"
            name="rate"
            placeholder="$5/hr"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Amenities */}
        <div>
          <label className="block mb-1 font-medium">
            Amenities (comma separated)
          </label>
          <input
            type="text"
            name="amenities"
            placeholder="WiFi, Whiteboard, AC"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Submit Button */}
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