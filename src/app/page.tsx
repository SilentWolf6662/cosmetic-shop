import ContactBookSection from "@/components/sections/contactBookSection";
import EventSection from "@/components/sections/eventSection";
import NewsletterSection from "@/components/sections/newsletterSection";
import StatsSection from "@/components/sections/statsSection";

export default async function Home() {
    return (
        <div className="flex flex-col justify-end h-fit">
            <StatsSection />
            <ContactBookSection />
            <EventSection />
            <NewsletterSection />
        </div>
    );
}
