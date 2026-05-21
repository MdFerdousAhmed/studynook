"use client";

import {AlertDialog, Button} from "@heroui/react";

export function CancelBookingButton({roomId}) {
  const handelDelete = async() => {
    const res = await fetch(`http://localhost:5000/bookings/${roomId}`,{
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
    const data = await res.json()
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
                This will permanently cancel <strong>My Awesome Room</strong> and all of its
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