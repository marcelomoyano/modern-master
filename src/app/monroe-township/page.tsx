import { LocationPage } from "@/components/LocationPage";

/**
 * Built on two customers who have hired Modern Master more than once: Bob
 * Bilotta (Google review; Geza confirmed on 2 September 2026 the jobs were
 * bathrooms, molding and wood trim, and a complete renovation of a home in a
 * 55+ community) and Robin Mandel (written testimonial, Concordia, named by
 * Geza on 2 September 2026). Sources in docs/google-reviews.md.
 *
 * No photos on this page are from Monroe Township — none have been placed
 * here yet — so every alt text describes the room and names no town. Also
 * none are from the two Monmouth Junction bathrooms (photos/after/*, and
 * portfolio/bathrooms 01, 02, 04, 05, 06, 11): a page for one town should not
 * lead with a job we know was in another.
 * "Monroe Township" is also a town in Gloucester County, NJ; the copy says
 * Middlesex County on purpose.
 */
export default function MonroeTownshipPage() {
    return (
        <LocationPage
            town="Monroe Township"
            slug="monroe-township"
            h1="Bathroom Remodeling in Monroe Township, NJ"
            subhead="Repeat work across Monroe Township, Middlesex County — including Concordia, where one homeowner designed her own bathroom and then brought us back for the rest."
            metaDescription="Bathroom remodeling in Monroe Township, Middlesex County — repeat work in Concordia and 55+ communities, reviewed by Monroe Township homeowners."
            heroImage="/portfolio/bathrooms/20.jpg"
            heroAlt="Remodeled bathroom with a freestanding tub, porcelain tile and mosaic accent bands"
            schemaImage="/portfolio/bathrooms/20.jpg"
            bodyImage="/portfolio/bathrooms/24.jpg"
            bodyImageAlt="Walk-in shower with a fold-down teak seat and a handheld shower"
            paragraphs={[
                "Monroe Township, in Middlesex County, is where Modern Master has some of its longest-standing customers. It is on the list of our last ten projects, and it is home to two people who have each hired us more than once.",
                "One of them lives in Concordia, one of the township's 55-and-over communities. She designed her primary bathroom herself, and Geza built it exactly to her specifications — including adjusting several features to suit her height. The following year she brought us back to build the rest of the bathrooms she had designed. While we were there, the high ceilings that had left her living room dark for years got new ceiling fans and light fixtures, along with the small jobs she had been putting off.",
                "The other has used us several times over a couple of years: bathroom remodeling, molding and wood trim, and a complete renovation of a home in a 55-and-over community. In his own review he offers to speak to anyone thinking of hiring us.",
                "Remodeling a home someone is living in is its own kind of job, and more so when that someone wants the bathroom to be safer as well as better-looking. We have done that before: one longtime customer had us rebuild a bathroom specifically to make it, in his words, “senior citizen proof.” And we work to keep the house livable throughout: covers down on the stairs before the first tool comes out, dust vacuumed and the work area cleared at the end of every day.",
                "Monroe Township is about thirty-five minutes from Geza's home in Hillsborough, inside the one-hour radius every job is held to. Every project starts with Geza in the room, and the number comes after he has seen it. Fully licensed and insured in New Jersey.",
            ]}
            services={[
                "Bathroom remodeling",
                "Safer bathrooms for older homeowners",
                "Molding, trim & custom carpentry",
                "Whole-home renovation",
            ]}
            nearby={[
                { name: "Monmouth Junction", href: "/monmouth-junction" },
                { name: "Princeton", href: "/princeton" },
                { name: "Franklin Park", href: "/franklin-park" },
            ]}
            reviews={[
                {
                    quote: "Last year, I designed our master bathroom myself, and Geza brought my vision to life with incredible craftsmanship and attention to detail. We were so impressed that we had him return this year to complete the labor for my other personally designed bathrooms. Everything was completed exactly to my specifications. He even customized several features to accommodate my height (I'm only 5 feet tall), which I truly appreciated. We also have very high ceilings in Concordia, and he had no problem replacing our ceiling fans, installing light fixtures, and taking care of all the projects we'd been putting off.",
                    name: "Robin Mandel",
                    source: "Written testimonial",
                },
                {
                    quote: "I have used modern master remodeling several times over the last couple of years, they've always been prompt, clean and provided quality and impeccable service. Everyone that works for modern master remodeling is friendly, easy to work with and extremely professional. I would recommend them for any home construction project, no matter how big or small. In fact, if anybody would like to speak to me about their service, I would be happy to give you a verbal review.",
                    name: "Bob Bilotta",
                    source: "Google review",
                },
            ]}
            photos={[
                { src: "/portfolio/bathrooms/21.jpg", alt: "Walk-in shower with a pebble mosaic floor, recessed niche and handheld shower" },
                { src: "/portfolio/bathrooms/03.jpg", alt: "Walk-in shower with a built-in corner seat, sliding glass door and shower panel" },
                { src: "/portfolio/bathrooms/14.jpg", alt: "White double vanity with a marble top and oval mirrors" },
            ]}
        />
    );
}
