import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaBookOpen } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/book.jpg"
            width={30}
            height={30}
            alt="Picture of the author"
            className="rounded-lg"
          />
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">StudyNook</h1>
        </div>
        <ul className="flex gap-3">
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/rooms"}>Rooms</Link></li>
          <li><Link href={"/add-room"}>Add Room</Link></li>
          <li><Link href={"/my-listings"}>My Listings</Link></li>
          <li><Link href={"/my-bookings"}>My Bookings</Link></li>
        </ul>
        <div >
          <ul className="flex gap-3">
            <li>
              <Link href={"/profile"}>Profile</Link>
            </li>
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/register"}>Register</Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
