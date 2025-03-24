import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Slider from "../slider";

type IconMap = {
    facebook: IconType;
    x: IconType;
    linkedin: IconType;
};

type Social = {
    id: string;
    link: string;
    icon: keyof IconMap;
};

type TeamMember = {
    id: string;
    title: string;
    name: string;
    link: string;
    image: string;
    socials: Social[];
};

const iconMap: IconMap = {
    facebook: FaFacebookF,
    x: FaXTwitter,
    linkedin: FaLinkedinIn,
};

export default async function TeamSection() {
    const res = await fetch('http://localhost:3000/api/teams', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    const teamMembers: TeamMember[] = data.team;

    // Group members into sets of three
    const groupedMembers = [];
    for (let i = 0; i < teamMembers.length; i += 3) {
        groupedMembers.push(teamMembers.slice(i, i + 3));
    }

    // Add id to each group
    const groupedMembersWithId = groupedMembers.map((group, index) => ({
        id: `team-group-${index}`,
        members: group,
    }));

    return (
        <section className="bg-white py-8 h-auto text-black flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/teambg.png')" }}>
            <div className="flex flex-col w-1/2 justify-center items-center mb-10">
                <p className="font-bold bg-base tracking-[4px] uppercase py-0.5 px-3 text-[#232730] text-sm">
                    Our Family
                </p>
                <h1 className="font-bold mb-3.5 text-5xl py-3.5 font-EBGaramond px-6 capitalize text-[#2b3132] tracking-tighter">
                    Meet Our Team!
                </h1>
                <p className="text-center w-2/3">
                    Te obtinuit ut adepto satis somno. Aliisque institoribus iter deliciae vivet vita. Nam exempli gratia, quotiens ego vadam
                </p>
            </div>

            {/* Slider for Team Members */}
            <Slider autoplay autoplayInterval={80000} showArrows showDots={false} className="h-auto w-full">
                {groupedMembersWithId.map((group) => (
                    <div key={group.id} className="flex justify-center gap-6">
                        {group.members.map((member) => (
                            <div key={member.id} className="flex flex-col justify-center items-center peer relative w-sm">
                                <figure className="w-full">
                                    <Image src={member.image} alt={member.name} className="w-full h-auto" width={300} height={400} />
                                </figure>
                                <div className="flex flex-col justify-center items-center w-full h-auto py-5 px-5">
                                    <Link href={member.link} className="font-bold text-2xl text-[#2b3132] border-b-[#2b3132] mb-2 border-b hover:cursor-pointer hover:text-base hover:border-b-[#2b3132]"><h2>{member.name}</h2></Link>
                                    <h3 className="font-normal text-sm text-[#737879] mb-2 uppercase tracking-[3px]">
                                        {member.title}
                                    </h3>
                                    <div className="flex justify-center items-center space-x-4 mt-4">
                                        {member.socials.map((social) => {
                                            const IconComponent = iconMap[social.icon];
                                            return (
                                                <Link key={social.id} href={social.link} className="peer h-10 w-10 flex justify-center items-center text-[#737b7b] bg-[#f4f4f1] hover:bg-base hover:text-black transition-colors duration-300 ease-in-out">
                                                    {IconComponent && <IconComponent className="text-lg" />}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </Slider>
        </section>
    );
}
