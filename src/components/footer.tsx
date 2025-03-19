import Image from "next/image";
import Link from "next/link";
import { FaAnglesUp, FaEnvelope, FaPhoneVolume } from "react-icons/fa6";

const LinkList1 = [
    { name: "About", href: "#" },
    { name: "Our Team", href: "#" },
    { name: "Locations", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Blog", href: "#" },
].map((n, idx) => ({ ...n, key: `footer-link1-${idx}` }));

const LinkList2 = [
    { name: "Makeover", href: "#" },
    { name: "Specialists", href: "#" },
    { name: "Makeover For Men", href: "#" },
    { name: "Makeover For Women", href: "#" },
    { name: "Book An Appointment", href: "#" },
].map((n, idx) => ({ ...n, key: `footer-link2-${idx}` }));

export default function Footer() {
    return (
        <footer className="bg-gray-800 py-8 bg-cover bg-center h-auto text-footer" style={{ backgroundImage: "url('/footerbg.png')" }}>
            <div className="max-w-7xl mx-auto flex flex-col justify-start items-start">
                <div className="flex justify-center items-center w-full font-bold pt-8 space-x-8">

                </div>
                <div className="flex justify-center items-center border-t border-t-divider w-full font-bold pt-8 space-x-8">
                    <div className="flex flex-col w-1/4">
                        <figure className="flex flex-col w-full self-start">
                            <Image src="/logo.png" alt="logo" width={200} height={250} className="" />
                        </figure>
                        <p className=" mt-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, porro!</p>
                    </div>
                    <div className="flex flex-col w-1/4">
                        <h1 className="font-bold self-start text-white mb-3.5">Explore</h1>
                        <div className="flex flex-col space-y-1.5">
                            {LinkList1.map((n) => (
                                <Link key={n.key} href={n.href} className="px-6">
                                    {n.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col w-1/4">
                        <h1 className="font-bold self-start text-white mb-3.5">Services</h1>
                        <div className="flex flex-col space-y-1.5">
                            {LinkList2.map((n) => (
                                <Link key={n.key} href={n.href} className="px-6">
                                    {n.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col w-1/4">
                        <h2 className="font-bold self-start mb-3.5 uppercase">
                            Have any queries?
                        </h2>
                        <div className="flex flex-col space-y-1.5">
                            <p className="font-bold text-white">
                                Get a Quote
                            </p>
                            <a href="tel:+4511111111" className="font-bold mb-4">
                                <FaPhoneVolume className="inline-block text-base" /> <span className="">+45 11 11 11 11</span>
                            </a>
                            <p className="font-bold text-white">
                                Or email us on
                            </p>
                            <a href="mailto:sale@example.com" className="font-bold">
                                <FaEnvelope className="inline-block text-base" /> <span className="">sale@example.com</span>
                            </a>
                        </div>
                        <Link href={"/book"} type="button" className="w-fit bg-base text-black px-10 py-2 mt-4 rounded-[0_5rem_0_5rem] cursor-pointer hover:bg-opacity-80 transition duration-300 font-EBGaramond">
                            Book Now
                        </Link>
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
