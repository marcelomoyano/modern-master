import { LocationPage } from "@/components/LocationPage";

export default function PrincetonPage() {
    return (
        <LocationPage
            town="Princeton"
            county="Mercer County"
            schemaServiceArea="Princeton, NJ"
            h1="Bathroom & Kitchen Remodeling in Princeton, NJ"
            intro="Princeton homes carry real history — and a remodel here has to respect that. Modern Master is an owner-operated remodeling firm based in nearby Hillsborough, serving Princeton homeowners who want renovations done at a craftsmanship standard, not a production-builder pace."
            paragraphs={[
                "Princeton's housing stock spans most of the last century — pre-war colonials and stone Tudors closer to the university, mid-century ranches and split-levels in the residential pockets, and newer construction toward Princeton Junction and Montgomery. Each era has its own quirks: plaster walls that crumble at the wrong drill bit, original plumbing stacks that need careful re-routing, century-old framing that's never quite plumb. Doing this work well means slowing down, opening walls carefully, and planning for what's actually behind them rather than what the drawings say.",
                "The remodel briefs we get from Princeton-area homeowners tend toward understated luxury — natural stone over engineered slabs, custom cabinetry with inset doors over big-box flat-pack, warm woods over high-gloss lacquer. The kind of work where the goal is a finished space that feels like it was always meant to be there. That fits how we work: Geza is on the job site personally, every day, from demo through punch list.",
                "On the practical side: Princeton remodels typically require permits through the Princeton Combined Planning Department, and properties inside a historic district may need Historic Preservation Commission review for any exterior changes. We handle the permitting end-to-end and coordinate scheduling around the realities of life in Princeton — school calendars, university events, the busy weeks around graduation and reunions.",
                "If you're weighing a remodel — whether it's a single primary bath, a kitchen reconfiguration, or a whole-floor renovation — we'd be glad to walk through the house with you and talk through what's realistic. Free in-home consultations, no pressure, and an honest read on scope and budget before anything is committed to paper. Modern Master is fully licensed and insured in New Jersey and BBB A+ accredited.",
            ]}
            trustSignals={[
                { value: "20+", label: "Years Remodeling" },
                { value: "Licensed", label: "& Fully Insured" },
                { value: "A+", label: "BBB Accredited" },
                { value: "5★", label: "Google Reviews" },
            ]}
            photos={[
                { src: "/portfolio/bathrooms/01.jpg", alt: "Custom bathroom remodel with natural stone and freestanding tub by Modern Master, serving Princeton, NJ" },
                { src: "/portfolio/kitchens/01.jpg", alt: "Kitchen renovation with custom cabinetry by Modern Master, serving Princeton, NJ" },
                { src: "/portfolio/carpentry/01.jpg", alt: "Custom trim and millwork by Modern Master, serving Princeton, NJ" },
            ]}
        />
    );
}
