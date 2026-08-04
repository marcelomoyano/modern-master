/**
 * Bathroom pricing — supplied by Geza (owner), 3 August 2026, in his own
 * numbers. This file replaces the invented price bands the design mockup
 * shipped with ($38–52k / $55–85k / $95k+), which were roughly double his real
 * top tier and are now deleted.
 *
 * He gave TWO sheets, and they are not the same offer at two prices:
 *
 *   PACKAGE_ROOMS  — fixed-scope packages. One number, three levels of finish.
 *   ESTIMATE_ROOMS — the budgets he actually works at today, quoted as a
 *                    starting point that the homeowner adds to à la carte.
 *
 * They reconcile: $12,500 (budget full bath) + the four add-ons homeowners
 * usually pick ($900 + $1,600 + $900 + $400 = $3,800) = $16,300, which lands on
 * the $15,500 fixed package. Different buying mechanic, same finished bathroom.
 * That is why the two pages can both exist without one undercutting the other.
 *
 * EVERY number here excludes finish materials. That exclusion is not fine
 * print — it is the single most important line on both pages.
 */

export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

/** Verbatim from Geza, repeated after every one of his three package blocks. */
export const MATERIALS_NOTE = "Finish materials are not included.";

export const MATERIALS_DETAIL =
  "Tile, stone, vanity, faucets, lighting, the toilet — you buy those and you own the choice. What is priced here is the build: demo, framing, waterproofing, plumbing, electrical, setting, grout and trim.";

/**
 * Geza: "We always can provide better pricing when they want to sign up two or
 * more bathrooms." He has not set a discount, so no percentage is published —
 * the pages surface it as a conversation, and the form flags the lead.
 */
export const MULTI_BATH_NOTE =
  "Two or more bathrooms booked as one build come in under the sum of the parts — one mobilisation, one set of shared trades. Tell me how many and I will price it as a whole.";

/* ------------------------------------------------------------------ */
/* Sheet 1 — fixed-scope packages                                      */
/* ------------------------------------------------------------------ */

export interface PackageTier {
  id: string;
  name: string;
  price: number;
  body: string;
}

export interface PackageRoom {
  id: string;
  label: string;
  short: string;
  qualifier: string;
  tiers: PackageTier[];
}

/**
 * Geza's own tier names were "Most common / base package", "Full Custom /
 * additional half wall tiles upgraded trim work/ wallpaper or other additional
 * requirements" and "Designer involved / we will bring and pay you the designer
 * to create your bathroom look". He wrote "you can change the words if they are
 * not sound right" — these are the rewrites. The substance is unchanged.
 */
const TIER_COPY = [
  {
    id: "base",
    name: "Base build",
    body: "The one most people choose. Stripped out, rebuilt, waterproofed properly, tile set by hand, fixtures in, trim finished. Nothing decorative layered on top.",
  },
  {
    id: "custom",
    name: "Full custom",
    body: "The base build plus the choices that actually change the room — half-wall tile, upgraded trim work, wallpaper, whatever you have been saving pictures of.",
  },
  {
    id: "designer",
    name: "Designer led",
    body: "I bring the designer and I pay them. They draw the room with you, I build exactly that. You never see a separate invoice from them.",
  },
];

const room = (
  id: string,
  label: string,
  short: string,
  qualifier: string,
  prices: [number, number, number],
): PackageRoom => ({
  id,
  label,
  short,
  qualifier,
  tiers: TIER_COPY.map((t, i) => ({ ...t, price: prices[i] })),
});

export const PACKAGE_ROOMS: PackageRoom[] = [
  room(
    "half",
    "Half bathroom",
    "Half bath",
    "Powder room — toilet and vanity, no tub or shower",
    [7500, 13500, 19500],
  ),
  room(
    "full",
    "Full bathroom",
    "Full bath",
    "One tub or one shower, standard footprint",
    [15500, 24500, 35500],
  ),
  room(
    "primary",
    "Primary bathroom",
    "Primary",
    "Large layout with both a shower and a separate tub",
    [26500, 38500, 52500],
  ),
];

/* ------------------------------------------------------------------ */
/* Sheet 2 — starting budgets + add-ons                                */
/* ------------------------------------------------------------------ */

export interface EstimateRoom {
  id: string;
  label: string;
  qualifier: string;
  base: number;
}

/**
 * Geza: "This is the budgets what we actually work with right now." Each is a
 * floor, not a quote — the add-ons below are what gets stacked on top during
 * the in-home consultation.
 */
export const ESTIMATE_ROOMS: EstimateRoom[] = [
  {
    id: "half",
    label: "Half bathroom",
    qualifier: "Toilet and vanity, no tub or shower",
    base: 5800,
  },
  {
    id: "full",
    label: "Full bathroom",
    qualifier: "With a tub or a shower",
    base: 12500,
  },
  {
    id: "primary",
    label: "Large primary bathroom",
    qualifier: "Shower and tub, bigger footprint",
    base: 18500,
  },
];

export interface AddOn {
  id: string;
  label: string;
  note: string;
  price: number;
}

/** The four Geza named as the ones homeowners usually add. */
export const ADD_ONS: AddOn[] = [
  {
    id: "niche",
    label: "Recessed niche",
    note: "A built-in shelf inside the shower wall — framed, waterproofed and tiled, not a hang-on caddy.",
    price: 900,
  },
  {
    id: "shower-base",
    label: "Custom shower base",
    note: "Built and sloped on site instead of dropping in a stock pan, so the shower can be any shape you want.",
    price: 1600,
  },
  {
    id: "fan",
    label: "New exhaust fan",
    note: "For a bathroom with none. Includes the wiring run and ducting all the way outside — not into the attic.",
    price: 900,
  },
  {
    id: "mirror",
    label: "Lighted mirror",
    note: "Hardwired, so there is no cord down the wall.",
    price: 400,
  },
];

/**
 * Geza: "we have some other things we usually go through with the homeowner
 * when I do the home consultation" — the list above is not exhaustive and the
 * page must not pretend otherwise.
 */
export const ADD_ONS_PARTIAL_NOTE =
  "These are the four people ask for most. There are always a few more we walk through together in the room.";

/* ------------------------------------------------------------------ */
/* Still open — Geza to confirm                                        */
/* ------------------------------------------------------------------ */

/**
 * UNVERIFIED — what separates the two sheets, in writing.
 * The package prices and the starting budgets differ by 23–30% for the same
 * room. The reconciliation at the top of this file is inferred from his add-on
 * list, not stated by him. Before either page takes paid traffic he needs to
 * confirm what the fixed package includes that the starting budget does not.
 */
export const PACKAGE_SCOPE_CONFIRMED = false;

/**
 * UNVERIFIED — materials allowance.
 * Every price here is labour and build only. A homeowner reading "$12,500"
 * will hear "that is what my bathroom costs" unless they are told what tile,
 * stone and fixtures typically run on top. No allowance figure exists yet, so
 * the pages say materials are excluded loudly and give no number.
 */
export const MATERIALS_ALLOWANCE: string | null = null;
