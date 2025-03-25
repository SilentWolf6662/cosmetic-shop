import Link from "next/link";

type Event = {
    id: string;
    title: string;
    description: string;
    date: string;
    image: string;
}

// Format date to Time in format like "12:00 PM" (DK: "12:00")
function FormatTime(date: string) {
    const d = new Date(date);
    return new Intl.DateTimeFormat('da-DK', { hour: 'numeric', minute: 'numeric', hourCycle: 'h24' }).format(d).replace('.', ':');
}

// Format Date to format like "Oct 14 2025" (DK: "14. okt 2025")
function FormatDate(date: string) {
    const d = new Date(date);
    return new Intl.DateTimeFormat('da-DK', { month: 'short', day: 'numeric', year: 'numeric' }).format(d);
}

export default async function EventSection() {
    const res = await fetch('http://localhost:3000/api/events', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();
    return (
        <section className="bg-white py-8 h-auto text-black flex flex-col justify-center items-center pb-20">
            <div className="flex flex-col w-1/2 justify-center items-center mb-10">
                <p className="font-bold bg-base tracking-[4px] uppercase py-0.5 px-3 text-muted text-sm">Our Events</p>
                <h1 className="font-bold mb-3.5 text-5xl py-3.5 font-EBGaramond px-6 capitalize text-[#2b3132] tracking-tighter">Upcoming Events</h1>
                <p className="text-center w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consequatur cum voluptatibus odit sequi reiciendis repudiandae culpa rerum?</p>
            </div>
            <div className="flex w-full h-auto justify-center items-center space-x-6">
                {
                    data.events.map((event: Event) => (
                        <div key={event.id} className="flex flex-col border border-black/30 justify-center items-center peer relative w-sm ">
                            <div className="absolute left-3 -top-2 w-10 h-18 bg-base text-center flex items-center justify-center">
                                <p className="text-wrap font-EBGaramond font-bold capitalize">{FormatDate(event.date)}</p>
                            </div>
                            <div className="absolute right-3 -top-2 w-10 h-18 bg-base text-center flex items-center justify-center">
                                <p className="text-wrap font-EBGaramond font-bold">{FormatTime(event.date)}</p>
                            </div>
                            <figure className="w-full">
                                <img src={event.image} alt="event1" className="w-full h-auto" />
                            </figure>
                            <h2 className="font-bold text-2xl font-EBGaramond capitalize my-2">{event.title}</h2>
                            <p className="text-center h-16">{event.description}</p>
                            <Link href={"#"} className="text-black px-2 py-2 hover:bg-opacity-80 cursor-pointer transition duration-300 font-EBGaramond underline font-bold text-lg">Read More</Link>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
