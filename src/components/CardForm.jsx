import React from 'react';

const CardForm = () => {
  return (
    <div>
      <form className="space-y-4 max-w-xl mx-auto p-6 border rounded-xl shadow">
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

export default CardForm;