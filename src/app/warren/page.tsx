import { LocationPage } from "@/components/LocationPage";

export default function WarrenPage() {
    return (
        <LocationPage
            town="Warren"
            h1="Bathroom & Kitchen Remodeling in Warren, NJ"
            subhead="Master craftsmanship for Warren's finest homes — owner-operated, start to finish."
            metaDescription="Luxury bathroom and kitchen remodeling for Warren, NJ homeowners. Owner-operated, licensed and insured."
            heroImage="/photos/after/bathroom-after-2.jpg"
            schemaImage="/photos/after/bathroom-after-2.jpg"
            bodyImage="/photos/after/bathroom-after-4.jpg"
            bodyImageAlt="Primary bathroom remodel with walk-in shower by Modern Master, serving Warren, NJ"
            paragraphs={[
                "Warren Township is one of Somerset County's most established communities — larger lots, custom and newer-construction homes, and homeowners who've invested in their property and want any remodel to match the standard of the rest of the house. A bathroom or kitchen that looks builder-grade in a home like that stands out for the wrong reasons. Modern Master exists for the homeowners who refuse to settle for that.",
                "Geza has spent over 20 years remodeling homes across Central New Jersey, and he runs Modern Master on a principle that's become rare: the person you hire is the person doing the work. He's not a sales rep who signs you and vanishes. He's on site, personally overseeing and executing every phase — which is exactly what you want when the finish work is what separates a good remodel from a great one.",
                "In a higher-end market like Warren, that hands-on approach is the whole point. The tile, the trim, the transitions, the way a space feels when you walk in — those details don't happen by accident, and they don't happen when a project gets passed between crews. They happen when one craftsman owns the outcome from the first cut to the last.",
                "Modern Master serves Warren and the neighboring communities. Every project is fully licensed and insured, and it always starts the same way — an honest, no-pressure conversation about what you want your space to become.",
            ]}
            services={[
                "Luxury bathroom remodeling",
                "Kitchen remodeling",
                "Basement finishing",
                "Custom carpentry & trim work",
            ]}
            surroundingCommunities="Watchung, Green Brook, Bridgewater, and Bernardsville"
            photos={[
                { src: "/portfolio/basements/01.jpg", alt: "Finished basement with custom built-ins by Modern Master, serving Warren, NJ" },
                { src: "/portfolio/kitchens/02.jpg", alt: "Open-concept kitchen renovation by Modern Master, serving Warren, NJ" },
                { src: "/portfolio/bathrooms/03.jpg", alt: "Primary bathroom remodel with walk-in shower by Modern Master, serving Warren, NJ" },
            ]}
        />
    );
}
