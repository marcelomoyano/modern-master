import { LocationPage } from "@/components/LocationPage";

/**
 * Hillsborough is the one town page where the local evidence is strongest:
 * Geza lives and is registered here (69 Nostrand Rd), it is the origin of the
 * one-hour radius every other town is measured against, and two of the reviews
 * in docs/google-reviews.md are confirmed Hillsborough jobs — Sally Williams
 * (primary bathroom, tile and glass shower) and Sean Allen (first-floor remodel
 * including a half bath). Both are quoted verbatim below.
 *
 * Nothing here claims a Hillsborough project that is not in that file. The
 * photos carry town-free captions because the jobs in them are not confirmed
 * Hillsborough work.
 */
export default function HillsboroughPage() {
    return (
        <LocationPage
            town="Hillsborough"
            slug="hillsborough"
            h1="Bathroom & Kitchen Remodeling in Hillsborough, NJ"
            subhead="Modern Master is based in Hillsborough. The person who quotes your bathroom is the person who builds it, and he lives ten minutes away."
            metaDescription="Bathroom and kitchen remodeling in Hillsborough, NJ — the town Modern Master is based in. Owner-operated, licensed and insured."
            heroImage="/portfolio/bathrooms/19.jpg"
            heroAlt="Frameless glass shower with large-format gray tile and a mosaic accent band"
            schemaImage="/portfolio/bathrooms/19.jpg"
            bodyImage="/portfolio/bathrooms/22.jpg"
            bodyImageAlt="Bathroom remodel with a white double vanity, quartz top and a full-width mirror"
            paragraphs={[
                "Modern Master is a Hillsborough business. Geza lives here, the company is registered here at 69 Nostrand Rd, and every job the company takes is measured as a drive from this town — nothing further than an hour. Hillsborough is the one place on that map where the drive is no drive at all.",
                "That is worth more than it sounds. A bathroom remodel is three to four weeks of somebody being in your house every morning. When the contractor lives in the next neighbourhood, showing up at eight is not a logistics problem, and coming back six months later to look at something is not a favour.",
                "Hillsborough is on the list of Modern Master's last ten projects, and two of the reviews on this page are from homeowners here — a primary bathroom with tile and a glass shower door, and a first-floor remodel that included a half bath. Both are quoted below in their own words.",
                "For over 25 years, Geza has been remodeling bathrooms and kitchens across Central New Jersey. Unlike the larger firms that hand your project to whoever is free that week, he is on the job site personally. You are not hiring a salesperson and a rotating crew. You are hiring the craftsman who does the work, from the first measurement to the last fixture.",
                "Modern Master serves Hillsborough and the rest of Somerset County, fully licensed and insured in New Jersey. Every estimate starts the same way: Geza comes to the house, stands in the room, and the number comes after he has seen it.",
            ]}
            services={[
                "Bathroom remodeling",
                "Kitchen remodeling",
                "Basement finishing",
                "Custom carpentry & trim work",
            ]}
            nearby={[
                { name: "Montgomery" },
                { name: "Branchburg" },
                { name: "Bridgewater" },
                { name: "Flemington" },
                { name: "Princeton", href: "/princeton" },
                { name: "Warren", href: "/warren" },
                { name: "Franklin Park", href: "/franklin-park" },
            ]}
            reviews={[
                {
                    quote: "Geza Papp did an excellent job of giving our primary bathroom a beautiful spa-like feel with expertly installed tiles and glass door in the shower.. His workmanship and attention to detail are top notch and we will definitely use him again for future projects.",
                    name: "Sally Williams",
                    source: "Google review",
                },
                {
                    quote: "Geza and his team do great work. Did a near total 1st floor remodel, including kitchen and half bath. Attentive to every detail and completely reliable and easy to work with. Showed up every day bright and early throughout the job and did exactly what he said he would do. Highly recommend.",
                    name: "Sean Allen",
                    source: "Google review",
                },
            ]}
            photos={[
                { src: "/portfolio/bathrooms/04.jpg", alt: "Freestanding tub under a vaulted ceiling, with textured wave tile, a black matte filler tap and a tiled niche" },
                { src: "/portfolio/bathrooms/31.jpg", alt: "Freestanding tub beside a dark double vanity, with stone-look tile wainscot and twin framed mirrors" },
                { src: "/portfolio/kitchens/01.jpg", alt: "Kitchen renovation with custom cabinetry" },
            ]}
        />
    );
}
