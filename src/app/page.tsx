import ContactBookSection from "@/components/sections/contactBookSection";
import EventSection from "@/components/sections/eventSection";
import GoalSection from "@/components/sections/goalSection";
import NewsletterSection from "@/components/sections/newsletterSection";
import StatsSection from "@/components/sections/statsSection";
import TeamSection from "@/components/sections/teamSection";

export default async function Home() {
    return (
        <div className="flex flex-col justify-end h-fit">
            <GoalSection />
            <TeamSection />
            <StatsSection />
            <ContactBookSection />
            <EventSection />
            <NewsletterSection />
        </div>
    );
}
