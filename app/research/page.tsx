import { Nav } from "../components/nav";
import { Footer } from "../components/footer";

interface Project {
  title: string;
  description: string;
  poster?: string;
}

interface ResearchEntry {
  lab: string;
  role: string;
  period: string;
  note?: string;
  projects: Project[];
  projectsLayout?: "grid" | "stack";
}

const entries: ResearchEntry[] = [
  {
    lab: "He Lab · UC Berkeley",
    role: "Undergraduate Researcher",
    period: "Sep 2024 – Present",
    note: "Selected to present at the 2026 Undergraduate Research Forum (URF).",
    projectsLayout: "grid" as const,
    projects: [
      {
        title: "NC Domain Role in MERVL Gag RNA Binding",
        description:
          "Investigated how the nucleocapsid (NC) domain of MERVL Gag mediates RNA binding in HEK 293 cells. Used biotin-labeled RNA pulldown, Co-IP, and western blotting to establish NC-dependence of the Gag–RNA interaction and identify optimal protein concentration for sequence specificity.",
        poster: "https://docs.google.com/presentation/d/1ADM-0aoTLnVSWZHuWWnShW4R-t3lRpvyGFDLz8kb7g0/present?slide=id.p1",
      },
      {
        title: "VPS4A ATPase & ESCRT-III in 2-Cell Membrane Abscission",
        description:
          "Characterized VPS4A/B and ESCRT-III component (VPS28, IST1, CHMP1A) localization during cytokinetic abscission in early embryos. Cloned mScarlet-tagged constructs and a dominant-negative VPS4A EQ mutant to study ESCRT-III filament disassembly dynamics.",
        poster: "https://docs.google.com/presentation/d/1ADM-0aoTLnVSWZHuWWnShW4R-t3lRpvyGFDLz8kb7g0/present?slide=id.p1",
      },
    ],
  },
  {
    lab: "Chemistry Research Symposium · UC Berkeley",
    role: "Student Researcher",
    period: "Jan 2025 – May 2025",
    projects: [
      {
        title: "Nanoscale Water Filtration via Ginkgo Xylem",
        description:
          "Developed a low-cost nanoscale water filter reducing Cu²⁺ ions using Ginkgo Xylem as a filtration medium — designed for underserved communities without access to conventional water treatment. Presented to 516+ attendees.",
        poster: "https://docs.google.com/presentation/d/1g7p4mYM0z_kHxs3VRlPIK9orWGvBAO30k8rTBYH-rY0/present?slide=id.g3dd9ee3d5aa_0_62",
      },
    ],
  },
  {
    lab: "Pazzi Lab · ASDRP",
    role: "Student Researcher",
    period: "Jun 2023 – Jan 2024",
    projects: [
      {
        title: "Lipid Network Drug Delivery & Image Analysis",
        description:
          "Created lipid networks for efficient drug delivery and built fluorescence microscopy image analysis software in Python/OpenCV to quantify lipid structures. Presented at the Boston Bioprocessing Summit (1,500 attendees, 300 projects).",
        poster: "/pazziposter.png",
      },
    ],
  },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1 px-4 md:px-12 pt-24 pb-16">
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 mb-10">
          Research Experience
        </h1>

        <div className="flex flex-col gap-12">
          {entries.map((entry) => (
            <div key={entry.lab}>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4 mb-1">
                <h2 className="text-base font-semibold text-stone-900">{entry.lab}</h2>
                <span className="text-sm text-stone-400 shrink-0 italic">{entry.period}</span>
              </div>
              <p className="text-sm text-stone-500 italic mb-1">{entry.role}</p>
              {entry.note && <p className="text-sm text-stone-400 mb-4">{entry.note}</p>}
              {!entry.note && <div className="mb-4" />}

              <div className={entry.projectsLayout === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "flex flex-col gap-4"}>
                {entry.projects.map((project) => (
                  <div key={project.title} className="border border-stone-200 rounded-2xl p-6 hover:border-stone-400 hover:shadow-sm transition-all bg-white/60">
                    <h3 className="text-base font-semibold text-stone-900 mb-3">{project.title}</h3>
                    <p className="text-sm text-stone-500 leading-relaxed">{project.description}</p>
                    {project.poster ? (
                      <a href={project.poster} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-4 text-sm font-medium text-stone-900 hover:text-stone-400 transition-colors underline underline-offset-4 decoration-stone-300">
                        View Poster →
                      </a>
                    ) : (
                      <p className="mt-4 text-sm text-stone-400 italic">Poster coming soon</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
