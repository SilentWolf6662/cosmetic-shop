import Image from "next/image";
import Link from "next/link";
import { FaAnglesUp, FaEnvelope, FaPhoneVolume } from "react-icons/fa6";

const LinkList1 = [
    { name: "Home", href: "/" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Benefits", href: "#" },
    { name: "Events", href: "#" },
    { name: "Contact", href: "#" },
].map((n, idx) => ({ ...n, key: `header-link1-${idx}` }));

export default async function Header() {
    const res = await fetch('http://localhost:3000/api/details', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();

    console.log(data)
    return (
        <header className="">
            <div className="flex py-6 gap-6 -mt-6">
                <div>

                </div>
            </div>
        </header>
    );
}
