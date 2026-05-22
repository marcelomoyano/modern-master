import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
};

export function ShowerIcon(props: IconProps) {
    return (
        <svg {...baseProps} {...props}>
            {/* Wall pipe + arm */}
            <path d="M4 3 V8" />
            <path d="M4 8 H10" />
            <path d="M10 8 L13 5" />
            {/* Shower head (angled oval) */}
            <ellipse cx="16" cy="7" rx="4.5" ry="2" transform="rotate(-30 16 7)" />
            {/* Water drops */}
            <path d="M11 13 V14.5" />
            <path d="M14 14 V15.5" />
            <path d="M17 13 V14.5" />
            <path d="M12.5 17 V18.5" />
            <path d="M15.5 17 V18.5" />
        </svg>
    );
}

export function StoveIcon(props: IconProps) {
    return (
        <svg {...baseProps} {...props}>
            {/* Outer body */}
            <rect x="3" y="3" width="18" height="18" rx="1" />
            {/* Control panel divider */}
            <path d="M3 8 H21" />
            {/* 4 knobs */}
            <circle cx="6.5" cy="5.5" r="0.8" />
            <circle cx="10.5" cy="5.5" r="0.8" />
            <circle cx="14.5" cy="5.5" r="0.8" />
            <circle cx="18.5" cy="5.5" r="0.8" />
            {/* Oven door handle */}
            <path d="M6 11 H18" />
            {/* Oven window */}
            <rect x="6" y="13.5" width="12" height="5.5" rx="0.5" />
        </svg>
    );
}

export function StairsIcon(props: IconProps) {
    return (
        <svg {...baseProps} {...props}>
            {/* 4-step staircase profile */}
            <path d="M3 21 H8 V16 H13 V11 H18 V6 H22" />
            {/* Ground line under stairs */}
            <path d="M3 21 H22" strokeOpacity="0.4" />
        </svg>
    );
}

export function HammerAxeIcon(props: IconProps) {
    return (
        <svg {...baseProps} {...props}>
            {/* Hammer — handle running bottom-left to top-right */}
            <path d="M4.5 19.5 L13 11" />
            {/* Hammer head */}
            <path d="M11.5 9.5 L15 6 L18 9 L14.5 12.5 Z" />

            {/* Axe — handle running bottom-right to top-left */}
            <path d="M19.5 19.5 L11 11" />
            {/* Axe blade (curved) */}
            <path d="M9.5 12.5 Q5 11 6 6 Q10 5.5 12.5 9.5" />
        </svg>
    );
}
