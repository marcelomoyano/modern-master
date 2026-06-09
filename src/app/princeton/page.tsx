import { LocationPage } from "@/components/LocationPage";

export default function PrincetonPage() {
    return (
        <LocationPage
            town="Princeton"
            h1="Bathroom & Kitchen Remodeling in Princeton, NJ"
            subhead="Premium, owner-operated remodeling for Princeton homeowners who expect craftsmanship in every detail."
            metaDescription="Premium bathroom and kitchen remodeling for Princeton, NJ homeowners. Owner-operated craftsmanship, fully licensed and insured."
            heroImage="/photos/after/bathroom-after-1.jpg"
            schemaImage="/photos/after/bathroom-after-1.jpg"
            bodyImage="/photos/after/bathroom-after-3.jpg"
            bodyImageAlt="Custom bathroom remodel by Modern Master, serving Princeton, NJ"
            paragraphs={[
                "Princeton homes carry a standard. Whether it's a center-hall colonial near the university, a renovated farmhouse, or a newer build out toward Montgomery, the homeowners here know the difference between work that's merely finished and work that's genuinely done right. That's the only kind of work Modern Master does.",
                "For over 20 years, Geza has been remodeling bathrooms and kitchens across Central New Jersey — and unlike the larger firms that hand your project off to whoever's available, he's on the job site personally. When you hire Modern Master, you're not getting a salesperson and a rotating crew. You're getting a craftsman who oversees and executes the work himself, from the first measurement to the final fixture.",
                "For Princeton homeowners, that matters. A premium remodel is a high-trust project — you're letting someone into your home for weeks, and the details are unforgiving. Tile that lines up. Trim that's tight. A finished space that looks like it was always meant to be there. That's what Modern Master is built around: not volume, but getting every corner, cut, and finish exactly right.",
                "Modern Master serves Princeton and the surrounding communities. Every project is fully licensed and insured, and every estimate starts with an honest conversation about your space — no pressure, no disappearing after the contract's signed.",
            ]}
            services={[
                "Luxury bathroom remodeling",
                "Kitchen remodeling",
                "Basement finishing",
                "Custom carpentry & trim work",
            ]}
            surroundingCommunities="Hillsborough, Montgomery, Lawrence, and Hopewell"
            photos={[
                { src: "/portfolio/bathrooms/01.jpg", alt: "Custom bathroom remodel with natural stone by Modern Master, serving Princeton, NJ" },
                { src: "/portfolio/kitchens/01.jpg", alt: "Kitchen renovation with custom cabinetry by Modern Master, serving Princeton, NJ" },
                { src: "/portfolio/carpentry/01.jpg", alt: "Custom trim and millwork by Modern Master, serving Princeton, NJ" },
            ]}
        />
    );
}
