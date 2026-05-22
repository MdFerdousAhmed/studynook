import { BookOpen } from "lucide-react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";

const Footer = () => {
    return (
        <footer className=" border-t border-slate-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-blue-600 rounded-xl group-hover:rotate-12 transition-transform">
                                <BookOpen className="w-6 h-6 text-white" />
                            </div>

                            <h2 className="font-extrabold text-2xl tracking-tight">
                                studynook
                            </h2>

                        </div>
                        <p className="text-slate-600">Quiet study rooms,booked by the hour.Built for student,<br />scholars and lifelong learners</p>

                    </div>

                    <div className="flex items-center gap-8 text-sm text-slate-600">

                        <ul>
                            <li className="text-xl font-semibold">Useable Links</li>
                            <Link href={"/"}><li>Home</li></Link>
                            <Link href={"/rooms"}><li>Rooms</li></Link>
                            <li>About</li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-8 text-sm text-slate-600">

                        <ul>
                            <li className="text-xl font-semibold">Contact</li>
                            <li className="flex justify-center items-center gap-2"><MdMailOutline />mdferdousahmed31122003@gmail.com</li>
                            <li className="flex justify-start items-center gap-2"><IoCall />(+880) 177 790 6923</li>

                        </ul>
                    </div>
                    <div className="flex items-center gap-8 text-sm  text-slate-600">

                        <ul>
                            <li className="text-xl font-semibold">Follow</li>
                            <div className="flex gap-3">
                                <li className="border rounded-full p-1"><FaFacebook /></li>
                                <li className="border rounded-full p-1"><FaLinkedin /></li>
                                <li className="border rounded-full p-1"><FaInstagram /></li>
                                <li className="border rounded-full p-1"><FaXTwitter /></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t m-4">
                <p className="text-sm text-slate-500  text-center">© 2026 StudyNook Inc. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;