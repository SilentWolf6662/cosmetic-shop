import Image from "next/image";

type Stat = {
    id: string;
    title: string;
    value: number;
    icon: string;
}

export default async function StatsSection() {
    const res = await fetch('http://localhost:3000/api/stats', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();
    return (
        <div className="flex flex-col justify-end h-full">
            <section className="bg-white py-32 h-full text-black flex justify-center items-center gap-20" style={{ backgroundImage: "url('/counterbg.png')" }}>
                {
                    data.stats.map((stat: Stat) => (
                        <div key={`stat-#${stat.id}`} className="flex justify-center items-center">
                            <div className="flex flex-col justify-center items-center">
                                <p className="font-bold text-5xl font-EBGaramond capitalize text-white tracking-tighter mb-3.5">
                                    {stat.value}
                                </p>
                                <p className="tracking-[4px] uppercase py-0.5 px-1 bg-base text-black font-medium text-sm">
                                    {stat.title}
                                </p>
                            </div>
                            <figure className="flex flex-col w-full self-center px-3 mx-5">
                                <Image src={stat.icon} alt="counter1" width={60} height={60} />
                            </figure>
                        </div>
                    ))}
            </section>
        </div>
    )
}
