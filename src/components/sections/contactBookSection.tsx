import Link from "next/link";
import Button from "../button";
import { FloatingLabelInput, FloatingLabelTextarea } from "../floatinglabel";

export default async function ContactBookSection() {

    return (
        <div className="flex flex-col justify-end h-full">
            <section className="bg-white py-8 h-1/4 text-black flex flex-col justify-center items-center">
                <h1 className="font-bold text-5xl py-3.5 font-EBGaramond capitalize text-[#2b3132] tracking-tighter">We're available for home services too!</h1>
                <p className="text[#737879] text-lg">
                    Te obtinuit ut adepto satis somno. Aliisque institoribus iter deliciae vivet vita. Nam exempli gratia, quotiens ego vadam
                </p>
                <Button text="Book Now" className="" />
            </section>
            <section className="bg-white py-8 h-full text-black flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/contactbg.png')" }}>
                <div className="flex flex-col w-1/6 justify-center items-start ml-96">
                    <p className="font-bold tracking-[4px] uppercase py-0.5 px-1 bg-[#232730] text-base text-sm">
                        Quick estimate
                    </p>
                    <h1 className="font-bold mb-3.5 text-5xl py-3.5 font-EBGaramond -px-6 capitalize text-[#2b3132] tracking-tighter">Get a free quote now</h1>
                </div>
                <div className="flex flex-col w-2/3 justify-center items-center">
                    <form action="" className="flex w-full h-auto justify-center items-center">
                        <div className="flex flex-col w-2/3 justify-center items-start mr-60">
                            <FloatingLabelInput id="name" name="name" type="text" placeholder=" " label="Name" className="mb-8" />
                            <FloatingLabelInput id="email" name="email" type="email" placeholder=" " label="Email" className="mb-8" />
                            <FloatingLabelInput id="phone" name="phone" type="tel" placeholder=" " label="Phone" className="mb-8" />
                            <FloatingLabelTextarea id="message" name="message" placeholder=" " label="Message" className="mb-8" />
                            <Button text="Send Message" className="bg-[#2b3132] text-white px-10 py-2 rounded-[0_5rem_0_5rem] cursor-pointer hover:bg-opacity-80 transition duration-300 font-EBGaramond h-12" />
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
