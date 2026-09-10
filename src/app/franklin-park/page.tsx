import { LocationPage } from "@/components/LocationPage";

/**
 * Built on Mark Berk's Google review (Franklin Park 08823, matched by the
 * deep-link Geza sent): four projects in one townhouse, most recently the
 * kitchen. Source in docs/google-reviews.md.
 *
 * No photos here are from Franklin Park, so no alt text names the town.
 * Deliberately left out: "working in Franklin Park now". True in August 2026,
 * false by the time this page ranks.
 */
export default function FranklinParkPage() {
    return (
        <LocationPage
            town="Franklin Park"
            slug="franklin-park"
            h1="Bathroom & Kitchen Remodeling in Franklin Park, NJ"
            subhead="One Franklin Park family has hired us for four projects in the same townhouse. The kitchen was the latest. The deck is next."
            metaDescription="Bathroom and kitchen remodeling in Franklin Park, NJ. One Franklin Park family has hired us for four projects in their townhouse. Licensed and insured."
            heroImage="/portfolio/kitchens/02.jpg"
            heroAlt="Remodeled kitchen with white shaker cabinets, a wood range hood, herringbone tile backsplash and granite counters"
            schemaImage="/portfolio/kitchens/02.jpg"
            bodyImage="/portfolio/kitchens/07.jpg"
            bodyImageAlt="Open-plan kitchen remodel with a large wood island, white cabinetry and a tile floor"
            paragraphs={[
                "Franklin Park is a section of Franklin Township in Somerset County, about half an hour from Geza's home in Hillsborough. It is one of the places where Modern Master has done the most work for a single household.",
                "One Franklin Park family has now hired us for four separate projects in their townhouse. The most recent was their kitchen, where the harder part of the job was not the carpentry but the coordination: the cabinets came from an outside company, and keeping that supplier and the build in step fell to Geza. In their words, there is not much he hasn't upgraded in that townhouse. They have already told us the deck is next.",
                "Townhouse remodels come with their own constraints — tighter rooms, shared walls, and neighbors on the other side of the work. A good result depends on planning as much as craftsmanship: knowing what arrives when, keeping noise and dust contained, and leaving the house clean at the end of each day so the family can keep living in it.",
                "That is the standard every job is held to. Covers go down on the stairs before the first tool comes out, and the dust is vacuumed before we leave. We deliberately take on only about two bathrooms a month, so a project is never waiting behind six others.",
                "Every project starts with Geza in the room, talking it through with you, and the number comes after he has seen it. Modern Master is fully licensed and insured in New Jersey.",
            ]}
            services={[
                "Bathroom remodeling",
                "Kitchen remodeling",
                "Townhouse renovations",
                "Custom carpentry & trim work",
            ]}
            nearby={[
                { name: "Monmouth Junction", href: "/monmouth-junction" },
                { name: "Princeton", href: "/princeton" },
                { name: "Hillsborough" },
                { name: "Bridgewater" },
            ]}
            reviews={[
                {
                    quote: "Quality and coordination excellent. Used them for 3 projects. Trust them for all of our renovations. They always go the extra mile to do the project right. Can't say enough good things about them. Looking forward to our next project with them. Update - Geza just finished our 4th project - redoing our kitchen. Another great job. Coordination was difficult with our cabinet company but Geza handled it well. There is not much he hasn't upgraded in our townhouse, and we will look forward to having him update our deck. Thanks for a great job. Couldn't be happier.",
                    name: "Mark Berk",
                    source: "Google review",
                },
            ]}
            photos={[
                { src: "/portfolio/kitchens/03.jpg", alt: "Kitchen with glass-front display cabinets, open shelving and a stone backsplash" },
                { src: "/portfolio/kitchens/10.jpg", alt: "Kitchen remodel with dark wood cabinets, granite peninsula and stainless appliances" },
                { src: "/portfolio/bathrooms/12.jpg", alt: "Compact bathroom remodel with a glass shower, white vanity and gray tile floor" },
            ]}
        />
    );
}
