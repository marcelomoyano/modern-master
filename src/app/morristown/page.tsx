import { LocationPage } from "@/components/LocationPage";

export default function MorristownPage() {
    return (
        <LocationPage
            town="Morristown"
            county="Morris County"
            schemaServiceArea="Morristown, NJ"
            h1="Bathroom & Kitchen Remodeling in Morristown, NJ"
            intro="Morristown has a wider range of housing stock than almost anywhere we serve — Victorian and Colonial Revival homes near the Green, mid-century split-levels in the surrounding township, and newer condos and townhouses around the train station. Modern Master is an owner-operated remodeling firm that brings the same standard of craftsmanship to all three."
            paragraphs={[
                "Older Morristown homes typically have plaster walls, original hardwood, and trim profiles you can't buy at the box store. Remodeling a kitchen or bath in a house like that means matching the existing crown, baseboards, and door casings — not just the new tile or countertops. Custom milling becomes part of the job on anything pre-1940 where the original profile isn't available anymore, which is most of the time.",
                "If a property sits inside the Morristown Historic District or carries a local historic landmark designation, exterior changes typically require Morristown Historic Preservation Commission review. They're straightforward to work with when you bring them a thoughtful proposal early. Most interior kitchen and bath work doesn't need their sign-off, but window replacements, exterior carpentry, and additions do — and we plan accordingly so nothing gets stuck mid-project.",
                "On the condo side, full unit renovations in the buildings around Speedwell Avenue and downtown come with their own constraints: HOA approval, narrow elevator access for materials, quiet-hour rules, and water shutoffs that need to be coordinated with the building manager. Smaller scope on average, but the finish standard is just as high and the planning has to be tighter.",
                "Whether you're in a Victorian, a split-level out toward Convent Station, or a unit downtown, we'd be glad to walk through your space and talk about what a remodel would look like — what's realistic on budget, what permits or approvals it would need, and how long it would take. Free consultation, no pressure. Modern Master is owner-operated, fully licensed and insured in New Jersey, and BBB A+ accredited.",
            ]}
            trustSignals={[
                { value: "20+", label: "Years Remodeling" },
                { value: "Licensed", label: "& Fully Insured" },
                { value: "A+", label: "BBB Accredited" },
                { value: "5★", label: "Google Reviews" },
            ]}
            photos={[
                { src: "/portfolio/carpentry/02.jpg", alt: "Custom millwork and trim by Modern Master, serving Morristown, NJ" },
                { src: "/portfolio/bathrooms/05.jpg", alt: "Bathroom remodel by Modern Master, serving Morristown, NJ" },
                { src: "/portfolio/kitchens/03.jpg", alt: "Kitchen renovation by Modern Master, serving Morristown, NJ" },
            ]}
        />
    );
}
