import { LocationPage } from "@/components/LocationPage";

export default function NorthBrunswickPage() {
    return (
        <LocationPage
            town="North Brunswick"
            h1="Bathroom & Kitchen Remodeling in North Brunswick, NJ"
            subhead="The same craftsman who quotes your bathroom is the one who builds it — start to finish, no rotating crews."
            metaDescription="Bathroom and kitchen remodeling for North Brunswick, NJ homeowners. Owner-operated, licensed and insured. Honest pricing, one craftsman start to finish."
            heroImage="/photos/after/bathroom-after-3.jpg"
            schemaImage="/photos/after/bathroom-after-3.jpg"
            bodyImage="/photos/after/bathroom-after-1.jpg"
            bodyImageAlt="Full bathroom remodel by Modern Master, serving North Brunswick, NJ"
            paragraphs={[
                "Most homes in North Brunswick were built between the 1960s and the 1990s — colonials, split-levels, and the townhome developments off Route 1 and Georges Road. They were built well, but the bathrooms are showing their age: builder-grade vanities, a tub nobody has taken a bath in for a decade, tile that was fashionable three owners ago. The bones are good. What is on top of them is tired.",
                "That is the work Modern Master does best. Geza has spent over 20 years remodeling homes across Central New Jersey, and he runs the company on a principle that has become rare: the person who walks through your house and quotes the job is the person doing the work. Not a salesperson who signs you and disappears. Not a crew you meet for the first time on day one.",
                "For a house you actually live in, that matters more than it sounds. A bathroom remodel means someone is in your home for weeks, sharing your hallway, working around your family. It means the difference between a shower that is waterproofed properly behind the tile and one that quietly fails in four years. One craftsman who owns the outcome is the whole point.",
                "Modern Master is based in Hillsborough and serves North Brunswick and the surrounding towns. Every project is fully licensed and insured, and every one starts the same way — a walk through your space and an honest conversation about what it will take and what it will cost. No pressure, and no vanishing after the contract is signed.",
            ]}
            services={[
                "Full bathroom remodeling",
                "Kitchen remodeling",
                "Basement finishing",
                "Custom carpentry & trim work",
            ]}
            surroundingCommunities="Milltown, East Brunswick, South Brunswick, Kendall Park, and Franklin Township"
            photos={[
                { src: "/portfolio/bathrooms/01.jpg", alt: "Full bathroom remodel with tiled walk-in shower by Modern Master, serving North Brunswick, NJ" },
                { src: "/portfolio/kitchens/03.jpg", alt: "Kitchen renovation with custom cabinetry by Modern Master, serving North Brunswick, NJ" },
                { src: "/portfolio/basements/02.jpg", alt: "Finished basement with custom built-ins by Modern Master, serving North Brunswick, NJ" },
            ]}
        />
    );
}
