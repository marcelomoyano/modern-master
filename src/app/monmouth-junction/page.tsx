import { LocationPage } from "@/components/LocationPage";

/**
 * The strongest town page on the site, because it is the only town where we
 * have the job itself: both before/after pairs are from here, confirmed by
 * Geza on 2 September 2026 with durations. The photo set bathroom-after-1..4
 * and portfolio/bathrooms 04, 05, 06 and 11 are all the same primary bath.
 *
 * Every claim below traces to docs/google-reviews.md. Nothing time-sensitive
 * ("working there now") goes on a page meant to rank for years.
 */
export default function MonmouthJunctionPage() {
    return (
        <LocationPage
            town="Monmouth Junction"
            slug="monmouth-junction"
            h1="Bathroom Remodeling in Monmouth Junction, NJ"
            subhead="Two Monmouth Junction bathrooms, each finished in about a month. Here is what they looked like before we started."
            metaDescription="Bathroom remodeling in Monmouth Junction, NJ. Two finished Monmouth Junction bathrooms, before and after — the larger one done in four weeks."
            heroImage="/photos/after/bathroom-after-2.jpg"
            heroAlt="Primary bathroom in Monmouth Junction, NJ, remodeled by Modern Master — freestanding tub beneath an arched window and a frameless glass shower"
            schemaImage="/photos/after/bathroom-after-2.jpg"
            bodyImage="/portfolio/bathrooms/05.jpg"
            bodyImageAlt="Walk-in shower with gray porcelain tile, recessed niche and matte black fixtures, in a Monmouth Junction primary bathroom"
            paragraphs={[
                "Monmouth Junction is one of the places Modern Master has worked most recently — it is on the list of our last ten projects, and both bathrooms on this page are from here. It sits inside South Brunswick Township in Middlesex County, about half an hour from Geza's home in Hillsborough and comfortably inside the one-hour radius every job is held to.",
                "The larger of the two is a primary bathroom that was stripped to the studs and subfloor. It came back with a freestanding tub under the arched window, marble-look porcelain on the floor and walls, a double vanity and a full frameless glass shower — all set by hand. Start to finish, it took four weeks.",
                "The second was a dated bathroom with an oak double vanity and a drop-in tub. It was replaced end to end without moving a single wall, and took about a month.",
                "Four weeks matters. Anyone who has been through a remodel before is braced for three months of dust and a bathroom they cannot use. We keep a schedule like that by deliberately taking on only about two bathrooms a month, so yours is never waiting behind six other jobs — and by clearing up at the end of every day, so the rest of the house stays livable while the work goes on.",
                "Every project starts the same way: Geza comes to the house, stands in the room and talks it through with you, and the number comes after he has seen it. Modern Master is fully licensed and insured in New Jersey.",
            ]}
            services={[
                "Primary bathroom remodeling",
                "Full bathroom remodeling",
                "Walk-in showers & tile work",
                "Kitchen remodeling",
            ]}
            nearby={[
                { name: "Princeton", href: "/princeton" },
                { name: "Franklin Park", href: "/franklin-park" },
                { name: "Monroe Township", href: "/monroe-township" },
                { name: "Hillsborough" },
            ]}
            reviews={[
                {
                    quote: "From start to finish, the team was professional, responsive, and detail-oriented. They took the time to understand my requirements, explained options clearly, and delivered exactly what they promised. The quality of workmanship is outstanding — from plumbing and tiling to fixtures and finishing touches, everything was done with precision and care. What stood out most was their transparency, reliability, and commitment to doing the job right. The project stayed well-organized, communication was consistent throughout, and the final result exceeded my expectations. My bathroom now looks modern, functional, and beautifully finished.",
                    name: "Sanjay Khulbe",
                    source: "Google review",
                },
            ]}
            beforeAfter={[
                {
                    before: "/photos/before/IMG_1023.jpg",
                    after: "/photos/after/bathroom-after-2.jpg",
                    beforeAlt: "Monmouth Junction primary bathroom stripped to the studs and subfloor before the remodel",
                    afterAlt: "The same Monmouth Junction primary bathroom finished, with a freestanding tub under the arched window and a glass shower",
                    beforePosition: "center 62%",
                    caption: "Primary bath, Monmouth Junction. Same room, same arched window. Freestanding tub, marble-look porcelain and a full glass shower, set by hand — start to finish in four weeks.",
                },
                {
                    before: "/photos/before/IMG_9563.jpeg",
                    after: "/photos/after/IMG_0134.jpeg",
                    beforeAlt: "Dated Monmouth Junction bathroom with an oak double vanity and drop-in tub before the remodel",
                    afterAlt: "The same Monmouth Junction bathroom remodeled with a gray double vanity, brass fixtures and new tile",
                    caption: "Full bathroom, Monmouth Junction. The dated oak double vanity and drop-in tub replaced end to end, without moving a wall — about a month.",
                },
            ]}
            photos={[]}
        />
    );
}
