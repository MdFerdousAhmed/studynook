"use client";

import { Envelope } from "@gravity-ui/icons";
import { PencilToSquare } from '@gravity-ui/icons';
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { BiEdit } from "react-icons/bi";

export function EditModal({ room }) {
  const { _id, name, image, floor, description, rate, capacity, amenities } = room;

  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault()
    const fromData = new FormData(e.currentTarget);
    const addRoom = Object.fromEntries(fromData.entries());

    console.log(addRoom)

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(addRoom),

    })
    const data = await res.json()
    if (res.ok) {
      toast.success("Room updated successfully!");
      router.push("/rooms");
    } else {
      toast.error("Failed to update room!");
    }

    console.log(data)
  }
  return (
    <Modal>
      <Button className={`rounded-md`} variant='outline'><BiEdit />Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <PencilToSquare className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Room</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="space-y-4 max-w-xl mx-auto p-6 border rounded-xl shadow">

                  {/* Room Name */}
                  <div>
                    <label className="block mb-1 font-medium">Room Name</label>
                    <input
                      defaultValue={name}
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
                      defaultValue={image}
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
                      defaultValue={description}
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
                      defaultValue={floor}
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
                      defaultValue={capacity}
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
                      defaultValue={rate}
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
                      defaultValue={amenities}
                      type="text"
                      name="amenities"
                      placeholder="WiFi, Whiteboard, AC"
                      className="w-full border rounded-lg px-4 py-2"
                    />
                  </div>

                  {/* Submit Button */}
                  <Modal.Footer>
                    <Button type="submit" slot="close">Save</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}