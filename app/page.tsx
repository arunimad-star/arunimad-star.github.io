import Link from "next/link";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";

const workCards = [
  {
    title: "Equity Intelligence Platform · Developer",
    blurb: "Built to surface ideas faster — 40+ non-traditional metrics across 5,000+ NASDAQ/NYSE tickers, inspired by Tiger Global and Feshbach Brothers. Automates a big chunk of the early-stage screening process.",
    href: "https://sweet-nasturtium-ea90d5.netlify.app/",
    external: true,
    bg: "#FAD4E8",
  },
  {
    title: "Berkeley Investment Group · Pod Lead",
    blurb: "Lead the Healthcare Pod at BIG's $140K student-managed fund. Written L/S pitches across healthcare, consumer & tech — including a Top 6 finish at the Point 72 Case Competition.",
    href: "/pitches",
    external: false,
    bg: "#E0D0F5",
  },
  {
    title: "Affinity Asset Advisors · Analyst",
    blurb: "L/S equity analyst at a $1.9B AUM biotech and healthcare fund. Covered the Angelman syndrome therapeutics landscape — including RARE, IONS, OVID, and PTCT.",
    href: "/pitches",
    external: false,
    bg: "#FAD4D4",
  },
];

const researchCards = [
  {
    title: "Research · He Lab",
    blurb: "Investigating the NC domain of MERVL Gag and its role in RNA binding during early mouse embryogenesis. Selected to present at the 2026 Undergraduate Research Forum.",
    href: "/research",
    bg: "#C8F0D8",
  },
  {
    title: "Research · He Lab",
    blurb: "Characterizing VPS4A ATPase and ESCRT-III machinery involved in membrane abscission during 2-cell stage division. Cloned mScarlet-tagged and dominant-negative VPS4A EQ constructs.",
    href: "/research",
    bg: "#D0EDCC",
  },
  {
    title: "Research · CHEM 4B",
    blurb: "Developed a low-cost nanoscale water filter using Ginkgo Xylem to reduce Cu²⁺ — designed for communities without access to conventional treatment. Presented to 516+ attendees.",
    href: "/research",
    bg: "#C8DCFA",
  },
  {
    title: "Research · Pazzi Lab",
    blurb: "Built lipid networks for drug delivery and wrote fluorescence microscopy image analysis software in Python/OpenCV. Presented at the Boston Bioprocessing Summit (1,500 attendees).",
    href: "/research",
    bg: "#C8E8F5",
  },
];

function Card({ title, blurb, bg }: { title: string; blurb: string; bg: string }) {
  return (
    <div
      className="rounded-2xl p-4 flex flex-col justify-between h-full hover:opacity-90 hover:shadow-sm transition-all"
      style={{ backgroundColor: bg }}
    >
      <h3 className="text-base font-semibold text-stone-800 leading-snug">{title}</h3>
      <p className="text-sm text-stone-500 leading-relaxed">{blurb}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <div className="flex-1 w-full px-12 pt-20 pb-2 flex flex-col gap-3">

        {/* Bio + Photo */}
        <div className="flex items-start justify-between gap-10">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-stone-900 mb-3 leading-tight">
              About Me
            </h1>
            <div className="text-stone-600 leading-relaxed text-sm flex flex-col gap-3">
              <p>Hi! My name is Arunima Deval and I am a student at UC Berkeley studying Economics and Chemical Biology in the College of Chemistry. I am from Seattle and Portland and I am incredibly passionate about investing.</p>
              <p>I currently work for Affinity Asset Advisors, a biotech and healthcare focused fund ($2B AUM), and lead the Healthcare Pod at Berkeley Investment Group. I was also a Top 6 finalist at the Point 72 Case Competition and have done research in several labs. I am currently an undergraduate researcher in the He Lab at UC Berkeley studying endogenous retroviruses (ancient viral sequences embedded in non coding DNA in the genome) involved in RNA binding and abscission during cell division. On the side, I&apos;ve built a stock screener that filters NASDAQ/NYSE tickers based on Feshbach, Robertson, Porter, and DiMenna strategies.</p>
              <p>Always happy to chat so please feel free to reach out!</p>
            </div>
          </div>

          <div className="w-44 self-stretch rounded-2xl overflow-hidden bg-stone-100 shrink-0 min-h-44">
            <img src="/headshot.jpg" alt="Arunima Deval" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Work cards — 3 columns */}
        <div className="grid grid-cols-3 gap-3">
          {workCards.map((card) =>
            card.external ? (
              <a key={card.title} href={card.href} target="_blank" rel="noopener noreferrer">
                <Card {...card} />
              </a>
            ) : (
              <Link key={card.title} href={card.href}>
                <Card {...card} />
              </Link>
            )
          )}
        </div>

        {/* Research cards — 2×2 */}
        <div className="grid grid-cols-2 gap-3">
          {researchCards.map((card) => (
            <Link key={card.title + card.bg} href={card.href}>
              <Card {...card} />
            </Link>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
}
