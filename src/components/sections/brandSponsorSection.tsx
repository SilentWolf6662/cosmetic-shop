import Image from "next/image";
import Link from "next/link";

export default async function BrandSponsorSection() {
    return (
        <section className="bg-white py-[2%] h-fit w-full text-black flex flex-col justify-center items-center">
            <h1 className="font-bold mb-3.5 text-5xl py-3.5 font-EBGaramond px-6 capitalize text-[#2b3132] tracking-tighter">
                Partner
            </h1>
            <div className="flex justify-evenly items-center w-full">
                <Link href={"/"} className="grayscale hover:grayscale-0">
                    <Image src={"/partner1.png"} alt={"1 partner"} width={250} height={100} />
                </Link>
                <Link href={"/"} className="grayscale hover:grayscale-0">
                    <Image src={"/partner2.png"} alt={"2 partner"} width={250} height={100} />
                </Link>
                <Link href={"/"} className="grayscale hover:grayscale-0">
                    <Image src={"/partner3.png"} alt={"3 partner"} width={250} height={100} />
                </Link>
                <Link href={"/"} className="grayscale hover:grayscale-0">
                    <Image src={"/partner4.png"} alt={"4 partner"} width={250} height={100} />
                </Link>
            </div>
        </section>
    );
}
