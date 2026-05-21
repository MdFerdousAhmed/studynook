"use client";

import { AlertDialog, Button } from "@heroui/react";
import { TrashBin } from '@gravity-ui/icons';
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

export function DeleteAlert({ room }) {
  const { name, _id } = room;

  const handelDelete = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${_id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json"
        }
      }
    )
    const data = await res.json()
    if (res.ok) {
      toast.success("Room delete successfully!");
      redirect("/rooms");
      
    } else {
      toast.error("Failed to delete room!");
    }
    console.log(data)
  }

  return (
    <AlertDialog>
      <Button className={`text-red-400 rounded-md`} variant="outline"><TrashBin />Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete room permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{name}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handelDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}