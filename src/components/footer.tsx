import Link from "next/link";
import { FaAnglesUp, FaEnvelope, FaPhoneVolume } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-gray-800 py-8 bg-cover bg-center h-auto text-footer" style={{ backgroundImage: "url('/footerbg.png')" }}>
            <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
                <div className="flex justify-center items-center w-full font-bold pt-8 space-x-8">

                </div>
                <div className="flex justify-center items-center border-t border-t-divider w-full font-bold pt-8 space-x-8">
                    <div className="flex flex-col w-1/5">
                        <figure className="flex flex-col w-full self-start">
                            <img src="/logo.png" alt="logo" className="w-20 h-20" />
                        </figure>
                        <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, porro!</p>
                    </div>
                    <div className="flex flex-col pt-8 w-1/5">
                        <h1 className="font-bold self-start">Explore</h1>
                        <Link href="#" className="px-6">
                            About
                        </Link>
                        <Link href="#" className="px-6">
                            Our Team
                        </Link>
                        <Link href="#" className="px-6">
                            Locations
                        </Link>
                        <Link href="#" className="px-6">
                            Gallery
                        </Link>
                        <Link href="#" className="px-6">
                            Blog
                        </Link>
                    </div>
                    <div className="flex flex-col pt-8 w-1/8">

                    </div>
                    <div className="flex flex-col pt-8 w-1/5">
                        <h1 className="font-bold self-start">Services</h1>
                        <Link href="#" className="px-6">
                            Makeover
                        </Link>
                        <Link href="#" className="px-6">
                            Specialists
                        </Link>
                        <Link href="#" className="px-6">
                            Makeover For Men
                        </Link>
                        <Link href="#" className="px-6">
                            Makeover For Women
                        </Link>
                        <Link href="#" className="px-6">
                            Book An Appointment
                        </Link>
                    </div>
                    <div className="flex flex-col pt-8 w-1/5">
                        <h2 className="font-bold self-start">
                            HAVE ANY QUERIES ?
                        </h2>
                        <p className="font-bold">
                            Get a Quote
                        </p>
                        <p className="font-bold">
                            <FaPhoneVolume className="inline-block" /> <span className="opacity-70">1111111</span>
                        </p>
                        <p className="font-bold">
                            Or email us on
                        </p>
                        <p className="font-bold">
                            <FaEnvelope className="inline-block" /> <span className="opacity-70">sale@example.com</span>
                        </p>
                        <button type="button" className="bg-base text-black px-2 py-2 mt-4 rounded-[0_5rem_0_5rem] cursor-pointer hover:bg-opacity-80 transition duration-300">
                            Buy Now
                        </button>
                    </div>
                </div>
                {/* Divider with centered link */}
                <Link href="#" className="w-10 h-10 py-2.5 left-0 right-0 rounded-full -bottom-5 m-auto text-black bg-base relative flex justify-center items-center">
                    {/* Centered Link */}
                    <FaAnglesUp className="font-bold" />
                </Link>

                {/* Footer text */}
                <div className="flex flex-col justify-center items-center border-t border-t-divider w-full">
                    <p className="font-bold text-center pt-8 text-white">
                        © 2025 Fashion Stylist | All Rights Reserved
                        <span> | Created by </span>
                        <a
                            href="https://github.com/SilentWolf6662"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base hover:text-orange-400 transition duration-300"
                        >
                            SilentWolf6662
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
