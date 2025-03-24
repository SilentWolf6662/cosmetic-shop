import Image from "next/image";
import Link from "next/link";

export default async function GoalSection() {
    return (
        <section className="bg-white py-8 h-auto text-black flex justify-center items-start bg-cover bg-center" style={{ backgroundImage: "url('/goalbg.png')" }}>
            <div className="flex flex-col w-1/2 h-full justify-start items-center mb-10">
                <div className="bg-base w-full h-full relative">
                    <Image src={"/goal-image.png"} alt={""} width={600} height={650} className="relative bottom-12 right-12" />
                </div>
            </div>
            <div className="flex flex-col w-1/2 h-full justify-start items-start mb-10 ml-50">
                <p className="font-bold bg-base tracking-[4px] uppercase py-0.5 px-3 text-[#232730] text-sm">
                    Our Goal
                </p>
                <h1 className="font-bold mb-3.5 text-5xl py-3.5 font-EBGaramond capitalize text-[#2b3132] tracking-tighter">
                    Providing you with the prime is what we stand for!
                </h1>
                <p className="w-2/3">
                    Te obtinuit ut adepto satis somno. Aliisque institoribus iter deliciae vivet vita. Nam exempli gratia, quotiens ego vadam
                </p>
            </div>
        </section>
    );
}
