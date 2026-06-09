import { LocationPage } from "@/components/LocationPage";

export default function WarrenPage() {
    return (
        <LocationPage
            town="Warren"
            county="Somerset County"
            schemaServiceArea="Warren, NJ"
            h1="Home Remodeling in Warren Township, NJ"
            intro="Warren Township is one of those rare places where you can have a five-bedroom home on a wooded acre and still be a short drive from a commuter rail. Modern Master is an owner-operated remodeling firm based in Hillsborough, just down Route 78 — close enough to be on a Warren job site early and stay late."
            paragraphs={[
                "Warren's housing leans heavy on custom builds from the 1980s and '90s — a lot of homes in the 4,000–6,000 square foot range with finishes that are starting to feel dated. The bones are usually good, but the kitchens have honey oak cabinets and granite from the early 2000s, the primary baths have oversized jetted tubs no one uses, and basements are often unfinished or roughed-in with builder-grade carpet and a single recessed light.",
                "The remodel scope that comes up most often in homes like this: open the kitchen to the family room with a structural beam where the wall used to be, swap the jetted tub for a walk-in shower and freestanding soaker, and turn the basement into a real entertainment floor — home theater, wet bar, a guest bedroom with egress window, dedicated workout space. That last one matters more than people expect; suburban Warren clients tend to want serious gym space without paying a club membership.",
                "Practical notes for Warren remodels: many of the larger lots have wells and septic, so plumbing work needs to account for fixture-unit loads and septic capacity. We coordinate with the Warren Township Health Department early when that's relevant. Tree preservation is taken seriously around here, so deliveries and equipment access get planned around root zones. Permits go through the Warren Township Construction Department, and tight scheduling matters for jobs running into winter.",
                "If you've been living with a tired kitchen, an unfinished basement, or a primary bath that hasn't been touched since the house was built, we'd be glad to walk through it and talk about what's possible. Free consultation, honest scoping, and a clear written estimate before any work starts. Geza is on every job personally — no rotating crews, no salesperson-then-handoff. Fully licensed and insured in New Jersey and BBB A+ accredited.",
            ]}
            trustSignals={[
                { value: "20+", label: "Years Remodeling" },
                { value: "Licensed", label: "& Fully Insured" },
                { value: "A+", label: "BBB Accredited" },
                { value: "5★", label: "Google Reviews" },
            ]}
            photos={[
                { src: "/portfolio/basements/01.jpg", alt: "Finished basement with custom built-ins by Modern Master, serving Warren Township, NJ" },
                { src: "/portfolio/kitchens/02.jpg", alt: "Open-concept kitchen renovation by Modern Master, serving Warren Township, NJ" },
                { src: "/portfolio/bathrooms/03.jpg", alt: "Primary bathroom remodel with walk-in shower by Modern Master, serving Warren Township, NJ" },
            ]}
        />
    );
}
