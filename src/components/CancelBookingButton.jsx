"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export function CancelBookingButton({ id, name }) {
  const handelDelete = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
    const data = await res.json()
    if (res.ok) {
      toast.success("Room cancel successfully!");
      redirect("/my-bookings");
    } else {
      toast.error("Failed to cancel room!");
    }
    console.log(data)
  }
  return (
    <AlertDialog>
      <Button variant="danger">Cancel booking</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel booking permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently cancel <strong>{name}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button onClick={handelDelete} slot="close" variant="danger">
                Cancel booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}