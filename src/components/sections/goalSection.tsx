import Image from "next/image";
import Link from "next/link";
type Goal = {
    id: string;
    number: string;
    text: string;
    link: string;
}
export default async function GoalSection() {
    const res = await fetch('http://localhost:3000/api/goals', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        cache: "no-store"
    });

    const data = await res.json();
    return (
        <section className="bg-white pt-[8%] pb-[5%] h-screen text-black flex justify-center items-start bg-cover bg-center" style={{ backgroundImage: "url('/goalbg.png')" }}>
            <div className="container flex">
                <div className="flex flex-col w-1/2 h-full justify-start items-center mb-10">
                    <div className="bg-base w-auto h-auto relative">
                        <Image src={"/goal-image.png"} alt={""} width={600} height={650} className="relative bottom-12 right-12" />
                    </div>
                </div>
                <div className="flex flex-col w-1/2 h-full justify-start items-start mb-10">
                    <p className="font-bold bg-base tracking-[4px] uppercase py-0.5 px-3 text-muted text-sm">
                        Our Goal
                    </p>
                    <h1 className="font-bold mb-3.5 text-5xl py-3.5 font-EBGaramond capitalize text-[#2b3132] tracking-tighter">
                        Providing you with the prime is what we stand for!
                    </h1>
                    <p className="w-2/3 font-medium font-[#737879] opacity-60 text-lg mb-8">
                        Te obtinuit ut adepto satis somno. Aliisque institoribus iter deliciae vivet vita. Nam exempli gratia, quotiens ego vadam
                    </p>
                    <ol className="w-full flex flex-col gap-6">
                        {data.goals.map((goal: Goal) => (
                            <li key={goal.id} className="group flex w-full justify-center items-center relative">
                                <Link href={goal.link} className="flex w-full justify-center items-center relative">
                                    <p className="border-[7px] border-base w-fit h-fit rounded-full py-1 px-2 font-EBGaramond font-extrabold text-muted text-xl z-10 bg-transparent group-hover:bg-black group-hover:border-black group-hover:text-white transition-colors duration-300">
                                        {goal.number}
                                    </p>
                                    <div className="bg-white py-5 pl-11 text-[#2b3132] font-semibold text-lg w-full relative right-3 border border-transparent group-hover:border-black">
                                        {goal.text}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
