import { LocationPage } from "@/components/LocationPage";

export default function MorristownPage() {
    return (
        <LocationPage
            town="Morristown"
            h1="Bathroom & Kitchen Remodeling in Morristown, NJ"
            subhead="Craftsmanship that respects your home's character — and elevates it."
            metaDescription="Premium remodeling for Morristown, NJ homeowners — from historic homes to modern renovations. Owner-operated, licensed and insured."
            heroImage="/photos/after/bathroom-after-4.jpg"
            schemaImage="/photos/after/bathroom-after-4.jpg"
            bodyImage="/photos/after/bathroom-after-1.jpg"
            bodyImageAlt="Custom bathroom remodel by Modern Master, serving Morristown, NJ"
            paragraphs={[
                "Morristown is a town with history in its bones. From the period homes around the Green to the renovated colonials and newer luxury builds throughout Morris County, many of these properties carry architectural character that a remodel should honor, not erase. That takes a different kind of contractor — one who understands that updating a bathroom or kitchen in a home like this is as much about respecting what's already there as it is about what's new.",
                "That's where Geza comes in. Over more than 20 years remodeling homes across the region, he's built Modern Master around a single idea: your home deserves a craftsman, not a contractor. He doesn't run a volume operation with crews rotating between job sites. He's there himself, personally overseeing and executing the work — which is the only way to get the kind of detail an older or high-end Morristown home demands.",
                "Whether you're modernizing a primary bath, reworking a dated kitchen, or finishing a lower level, the difference shows up in the details that are easy to get wrong: how new tile meets old floor, how trim wraps an irregular wall, how a finished space feels cohesive instead of bolted-on. Modern Master gets those right because one person owns the work from start to finish.",
                "Modern Master serves Morristown and the surrounding Morris County communities. Every project is fully licensed and insured, and every one begins with an honest, no-pressure conversation about your vision for the space.",
            ]}
            services={[
                "Luxury bathroom remodeling",
                "Kitchen remodeling",
                "Basement finishing",
                "Custom carpentry & trim work",
            ]}
            surroundingCommunities="Morris Township, Madison, Chatham, and Mendham"
            photos={[
                { src: "/portfolio/carpentry/02.jpg", alt: "Custom millwork and trim restoration by Modern Master, serving Morristown, NJ" },
                { src: "/portfolio/bathrooms/05.jpg", alt: "Bathroom remodel in a historic Morristown, NJ home by Modern Master" },
                { src: "/portfolio/kitchens/03.jpg", alt: "Kitchen renovation by Modern Master, serving Morristown, NJ" },
            ]}
        />
    );
}
