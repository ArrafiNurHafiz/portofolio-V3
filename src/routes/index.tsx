import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Youtube,
  Instagram,
  Music2,
  Mail,
  MapPin,
  Code2,
  ShieldCheck,
  Bot,
  Terminal,
  ExternalLink,
  Award,
  ArrowRight,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arrafi Nur Hafiz — Full-Stack Developer & Security Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio & work by Arrafi Nur Hafiz: Modern Web Architecture, Application Security, Autonomous AI Swarms, and DevOps.",
      },
      { property: "og:title", content: "Arrafi Nur Hafiz — Portfolio" },
      {
        property: "og:description",
        content: "Student, developer and cyber enthusiast.",
      },
    ],
  }),
  component: Index,
});

const navigation = [
  { id: "beranda", label: "Beranda" },
  { id: "tentang", label: "Tentang" },
  { id: "keahlian", label: "Keahlian" },
  { id: "proyek", label: "Proyek" },
  { id: "pengalaman", label: "Pengalaman" },
  { id: "prestasi", label: "Prestasi" },
  { id: "kontak", label: "Kontak" },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/ArrafiNurHafiz" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arrafi-nur-hafiz-06b7083a1",
  },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@RapyTech" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/affiizzz/" },
  { icon: Music2, label: "TikTok", href: "https://www.tiktok.com/@arrafinurhz" },
  { icon: Mail, label: "Email", href: "mailto:arrafinur3@gmail.com" },
];

const pillars = [
  {
    icon: Code2,
    title: "Full-Stack Web",
    desc: "Arsitektur frontend modern React & Next.js, API RESTful tangguh, dan database relasional.",
  },
  {
    icon: ShieldCheck,
    title: "Application Security",
    desc: "Penerapan pertahanan AppSec terverifikasi, Zero-Knowledge Proof (Semaphore), dan kontrol RBAC.",
  },
  {
    icon: Bot,
    title: "AI & Otomasi",
    desc: "Eksplorasi multi-agent AI swarm, sistem pendukung keputusan (TOPSIS), dan workflow otomasi.",
  },
  {
    icon: Terminal,
    title: "Linux & DevOps",
    desc: "Pengembangan harian di lingkungan Linux murni, containerisasi Docker, dan manajemen server.",
  },
];

const stacks = [
  {
    category: "Frontend Architecture",
    items: ["React & Next.js", "TypeScript (Strict)", "Tailwind CSS", "TanStack Query/Router"],
  },
  {
    category: "Backend & Database",
    items: ["Node.js & Express", "PHP & Laravel", "FastAPI (Python)", "MySQL & PostgreSQL"],
  },
  {
    category: "Security & Infrastructure",
    items: ["Zero-Knowledge (ZKP)", "Docker & Compose", "Linux OS Core", "Git & CI/CD Pipelines"],
  },
];

const projects = [
  {
    img: p1,
    title: "Nutri-Share",
    tag: "Decision Support System",
    desc: "Sistem pendukung keputusan berbasis web untuk distribusi makanan surplus & foodbank dengan metode Hybrid Entropy-TOPSIS.",
    link: "https://nutrishare.web.id",
  },
  {
    img: p2,
    title: "RUANG AMAN",
    tag: "Zero-Knowledge Proof",
    desc: "Platform whistleblowing pelaporan perundungan anonim dengan verifikasi kriptografi Semaphore ZKP tanpa mengungkap identitas pelapor.",
    link: "https://ruang.rapsdev.web.id",
  },
  {
    img: hero,
    title: "AutoSec-Patch",
    tag: "Autonomous AI Swarm",
    desc: "Adversarial Co-Evolution Multi-Agent Swarm untuk penemuan kerentanan kode dan penambalan patch keamanan secara mandiri.",
    link: "https://github.com/ArrafiNurHafiz/AutoSec-Patch",
  },
];

const experiences = [
  {
    period: "Agu 2026 – Sekarang",
    value: "2026-08",
    role: "Full-Stack Developer Intern",
    place: "CV Karya Wahana Sentosa (KWaS)",
    detail:
      "Mengembangkan modul sistem pendukung Material Requirements Planning (MRP), arsitektur antarmuka, backend API, dan manajemen struktur basis data.",
  },
  {
    period: "2024 – Sekarang",
    value: "2024",
    role: "Mahasiswa S1 Sistem Informasi",
    place: "Universitas Teknologi Digital Indonesia (UTDI)",
    detail:
      "Mendalami rekayasa sistem perangkat lunak, komputasi pendukung keputusan, kriptografi terapan, dan administrasi basis data relasional.",
  },
  {
    period: "2025 – Sekarang",
    value: "2025",
    role: "Tech Content Creator & Educator",
    place: "YouTube @RapyTech & TikTok",
    detail:
      "Membagikan materi edukatif seputar ekosistem Linux, konfigurasi development environment, web engineering, dan otomasi kecerdasan buatan.",
  },
];

const achievements = [
  {
    year: "2026",
    title: "COMPSPHERE 12 — HACKSPHERE",
    role: "Top 30 Finalist",
    org: "International Web3 Hackathon (Devpost)",
  },
  {
    year: "2026",
    title: "GAYATAMA 2026",
    role: "Finalis Web Technology",
    org: "Universitas Negeri Surabaya",
  },
  {
    year: "2026",
    title: "IEEE YESIST12 2026",
    role: "International Finalist",
    org: "IEEE Indonesia Section & UNM",
  },
  {
    year: "2026",
    title: "Indonesia–Singapore Essay",
    role: "Peringkat 100 / 314",
    org: "Seamplified Media Pte. Ltd.",
  },
];

function SectionHead({ num, title, note }: { num: string; title: string; note: string }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-x-4 gap-y-2 border-b-2 border-ink pb-2 md:mb-10">
      <div className="flex items-center gap-3">
        <span className="bg-hazard px-1.5 py-1 font-mono text-[10px] font-bold leading-none text-white">
          §{num}
        </span>
        <h2 className="font-display text-xl uppercase leading-none tracking-[-0.02em] sm:text-2xl md:text-4xl">
          {title}
        </h2>
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint md:text-[11px]">
        [ {note} ]
      </span>
    </div>
  );
}

function Crosshair({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const pos = {
    tl: "left-1 top-1",
    tr: "right-1 top-1",
    bl: "bottom-1 left-1",
    br: "bottom-1 right-1",
  }[position];
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute ${pos} z-20 font-mono text-sm leading-none text-ink`}
    >
      +
    </span>
  );
}

function Index() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -15px 0px" },
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-[100dvh] w-full bg-paper text-ink">
      {/* Mechanical static across the sheet */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[70] bg-noise opacity-60 mix-blend-multiply"
      />

      {/* Reading progress — hazard red on carbon track */}
      <div aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-ink/15">
        <div
          className="h-full bg-hazard origin-left transition-[width] duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header: brand rail + numbered section index */}
      <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper">
        <div className="mx-auto flex h-12 max-w-[1400px] items-center justify-between px-4 sm:px-6">
          <a href="#beranda" className="flex items-center gap-2.5">
            <span aria-hidden="true" className="h-3.5 w-3.5 bg-hazard" />
            <span className="font-display text-sm uppercase tracking-[-0.01em] sm:text-base">
              Arrafi Nur Hafiz
            </span>
            <span className="hidden font-mono text-[10px] tracking-widest text-ink-faint sm:inline">
              ™
            </span>
          </a>

          <div className="flex items-center gap-3">
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.15em] text-ink-faint lg:inline">
              REV 2.6
            </span>
            <a href="#kontak" className="btn-fill !px-3 !py-1.5 !text-[11px]">
              Hubungi <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        <nav
          aria-label="Section index"
          className="flex overflow-x-auto border-t border-ink bg-paper-2"
        >
          {navigation.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex shrink-0 items-center gap-1.5 border-r border-ink px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink transition-colors last:border-r-0 hover:bg-ink hover:text-paper sm:text-[11px]"
            >
              <span className="text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {/* The sheet */}
      <main className="relative z-10 mx-auto max-w-[1400px] border-x-2 border-ink">
        <Crosshair position="tl" />
        <Crosshair position="tr" />
        <Crosshair position="bl" />
        <Crosshair position="br" />

        {/* HERO / OPERATOR PLATE */}
        <section
          id="beranda"
          data-reveal
          className="border-b-2 border-ink px-4 py-8 sm:px-6 md:px-10 md:py-12"
        >
          <div className="mb-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b border-ink/30 pb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint md:text-[11px]">
            <span>DOC-ID / ANH-PORT-2026</span>
            <span className="hidden sm:inline">LAT -7.7956° / LON 110.3695°</span>
            <span className="hidden md:inline">SHEET 01 / 01</span>
            <span className="bg-hazard px-2 py-0.5 font-bold text-white">
              STATUS: OPEN FOR WORK
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <span className="inline-block bg-hazard px-2.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                Student / Full-Stack Developer / Cyber Enthusiast
              </span>

              <h1 className="mt-5 font-display text-[clamp(3rem,10vw,8.5rem)] uppercase leading-[0.85] tracking-[-0.045em]">
                Arrafi
                <br />
                Nur
                <br />
                Hafiz
              </h1>

              <div className="mt-6 flex h-2 w-full max-w-md" aria-hidden="true">
                <div className="h-full w-1/3 bg-hazard" />
                <div className="h-full flex-1 bg-ink" />
              </div>

              <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
                Mahasiswa Sistem Informasi UTDI &amp; Full-Stack Developer. Berfokus pada rekayasa
                modern web architecture, keamanan sistem terdesentralisasi, Zero-Knowledge Proofs,
                dan otomasi berbasis AI.
              </p>

              <div className="mt-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">
                <MapPin size={13} className="shrink-0" />
                <span>Yogyakarta, Indonesia · Universitas Teknologi Digital Indonesia (UTDI)</span>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#proyek" className="btn-fill">
                  Lihat Karya &amp; Proyek <ArrowRight size={14} />
                </a>
                <a
                  href="/CV_Arrafi_Nur_Hafiz.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-line"
                >
                  Download CV <ExternalLink size={13} />
                </a>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-2 border-t border-ink/30 pt-5">
                <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-faint">
                  Channels ///
                </span>
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    title={label}
                    className="flex h-9 w-9 items-center justify-center border border-ink text-ink transition-colors hover:bg-ink hover:text-paper"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-5">
              <figure className="relative border-2 border-ink bg-paper p-2">
                <span
                  aria-hidden="true"
                  className="absolute -left-2 -top-3 font-mono text-sm leading-none text-ink"
                >
                  +
                </span>
                <span
                  aria-hidden="true"
                  className="absolute -right-2 -top-3 font-mono text-sm leading-none text-ink"
                >
                  +
                </span>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-3 -left-2 font-mono text-sm leading-none text-ink"
                >
                  +
                </span>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-3 -right-2 font-mono text-sm leading-none text-ink"
                >
                  +
                </span>

                <div className="halftone aspect-square w-full overflow-hidden border border-ink">
                  <img
                    src={portrait}
                    alt="Arrafi Nur Hafiz"
                    width={816}
                    height={816}
                    className="h-full w-full object-cover"
                  />
                </div>

                <figcaption className="mt-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em]">
                  <span className="text-ink-faint">FIG. 01 — OPERATOR / PLATE A</span>
                  <span className="flex items-center gap-1.5 font-bold text-ink">
                    <span aria-hidden="true" className="h-2 w-2 bg-hazard" />
                    Available
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* OVERVIEW PILLARS */}
        <section data-reveal className="border-b-2 border-ink px-4 py-8 sm:px-6 md:px-10 md:py-12">
          <div className="grid gap-px border-2 border-ink bg-ink sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col justify-between bg-paper p-5 transition-colors hover:bg-paper-2"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center border border-ink">
                        <Icon size={16} />
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.12em] text-ink-faint">
                        {String(idx + 1).padStart(2, "0")} / 04
                      </span>
                    </div>
                    <h3 className="font-display text-sm uppercase leading-tight tracking-[-0.01em] md:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink-soft">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* TENTANG SAYA */}
        <section
          id="tentang"
          data-reveal
          className="border-b-2 border-ink px-4 py-8 sm:px-6 md:px-10 md:py-12"
        >
          <SectionHead num="02" title="Tentang Saya" note="BIO & LATAR BELAKANG" />

          <div className="grid gap-px border-2 border-ink bg-ink md:grid-cols-12">
            <div className="bg-paper p-3 md:col-span-5">
              <div className="halftone aspect-[4/5] w-full overflow-hidden border border-ink">
                <img src={portrait} alt="Arrafi Nur Hafiz" className="h-full w-full object-cover" />
              </div>
              <div className="mt-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">
                <span>FIG. 02 — PROFILE / PLATE B</span>
                <span>816 × 816</span>
              </div>
            </div>

            <div className="bg-paper p-6 md:col-span-7 md:p-8">
              <span className="inline-block bg-hazard px-2 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                [ INTRO_DOSSIER ]
              </span>
              <h3 className="mt-3 font-display text-lg uppercase leading-[1.1] tracking-[-0.015em] md:text-2xl lg:text-3xl">
                Mengembangkan sistem perangkat lunak yang aman, andal, dan bermanfaat nyata.
              </h3>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
                <p>
                  Saya adalah mahasiswa Sistem Informasi di Universitas Teknologi Digital Indonesia
                  (UTDI) yang berfokus pada rekayasa web modern dari hulu ke hilir.
                </p>
                <p>
                  Fokus eksplorasi saya meliputi pertahanan keamanan aplikasi, kriptografi
                  desentralisasi Zero-Knowledge, dan sistem kecerdasan buatan terapan. Selain itu,
                  saya aktif membagikan tutorial teknis melalui konten digital.
                </p>
              </div>

              <dl className="mt-6 grid grid-cols-1 gap-4 border-t-2 border-ink pt-4 sm:grid-cols-2">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-faint">
                    [ Pendidikan ]
                  </dt>
                  <dd className="mt-1.5 font-display text-sm uppercase leading-tight">
                    S1 Sistem Informasi, UTDI
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-faint">
                    [ Peran ]
                  </dt>
                  <dd className="mt-1.5 font-display text-sm uppercase leading-tight">
                    Full-Stack Developer
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* KEAHLIAN / TECH STACK */}
        <section
          id="keahlian"
          data-reveal
          className="border-b-2 border-ink px-4 py-8 sm:px-6 md:px-10 md:py-12"
        >
          <SectionHead num="03" title="Keahlian & Teknologi" note="TECH STACK & TOOLS" />

          <div className="grid gap-px border-2 border-ink bg-ink sm:grid-cols-3">
            {stacks.map((stack, i) => (
              <div key={stack.category} className="flex flex-col bg-paper">
                <div className="flex items-center justify-between bg-ink px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-paper">
                  <span>{stack.category}</span>
                  <span aria-hidden="true" className="text-paper/60">
                    0{i + 1}
                  </span>
                </div>
                <ul className="flex-1 divide-y divide-ink/25">
                  {stack.items.map((tech) => (
                    <li
                      key={tech}
                      className="flex items-center gap-3 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.08em]"
                    >
                      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-hazard" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div aria-hidden="true" className="mt-6 h-8 w-full border border-ink barcode" />
        </section>

        {/* PROYEK PILIHAN */}
        <section
          id="proyek"
          data-reveal
          className="border-b-2 border-ink px-4 py-8 sm:px-6 md:px-10 md:py-12"
        >
          <SectionHead num="04" title="Proyek Unggulan" note="DEPLOYMENTS & RESEARCH" />

          <div className="grid gap-px border-2 border-ink bg-ink md:grid-cols-3">
            {projects.map((project, idx) => (
              <article key={project.title} className="group flex flex-col bg-paper">
                <div className="relative aspect-[16/10] border-b-2 border-ink">
                  <div className="halftone h-full w-full overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="absolute left-0 top-0 z-10 bg-hazard px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                    {project.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-faint">
                    UNIT / D-0{idx + 1}
                  </span>
                  <h3 className="mt-2 font-display text-lg uppercase leading-none tracking-[-0.01em] md:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-ink-soft">{project.desc}</p>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-between border-t-2 border-ink px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.12em] transition-colors group-hover:bg-hazard group-hover:text-white"
                >
                  <span>Buka Proyek</span>
                  <ArrowUpRight size={14} />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* PENGALAMAN & REKAM JEJAK */}
        <section
          id="pengalaman"
          data-reveal
          className="border-b-2 border-ink px-4 py-8 sm:px-6 md:px-10 md:py-12"
        >
          <SectionHead num="05" title="Pengalaman & Rekam Jejak" note="CAREER & ROLES" />

          <ol className="border-2 border-ink">
            {experiences.map((exp, idx) => (
              <li
                key={exp.role}
                className="grid gap-3 border-b border-ink p-5 last:border-b-0 md:grid-cols-12 md:gap-6 md:p-6"
              >
                <div className="md:col-span-3">
                  <span className="inline-block bg-ink px-1.5 py-0.5 font-mono text-[10px] font-bold tracking-[0.1em] text-paper">
                    EXP.0{idx + 1}
                  </span>
                  <data
                    value={exp.value}
                    className="mt-2 block font-mono text-xs font-bold uppercase tracking-[0.08em] text-ink"
                  >
                    {exp.period}
                  </data>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-display text-base uppercase leading-tight tracking-[-0.01em] md:text-lg">
                    {exp.role}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-ink-soft">
                    {exp.place}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-ink-soft">{exp.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* PRESTASI & PENGHARGAAN */}
        <section
          id="prestasi"
          data-reveal
          className="border-b-2 border-ink px-4 py-8 sm:px-6 md:px-10 md:py-12"
        >
          <SectionHead num="06" title="Prestasi & Penghargaan" note="HONORS & CITATIONS" />

          <div className="grid gap-px border-2 border-ink bg-ink sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-between bg-paper p-5 transition-colors hover:bg-paper-2"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <data
                      value={item.year}
                      className="font-display text-4xl leading-none tracking-[-0.03em] text-hazard"
                    >
                      {item.year}
                    </data>
                    <Award size={16} className="text-ink" />
                  </div>
                  <h3 className="mt-4 font-display text-sm uppercase leading-tight tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  <span className="mt-3 inline-block bg-ink px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-paper">
                    {item.role}
                  </span>
                </div>
                <p className="mt-4 border-t border-ink/30 pt-3 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-faint">
                  {item.org}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* KONTAK & HUBUNGI */}
        <section
          id="kontak"
          data-reveal
          className="border-b-2 border-ink px-4 py-8 sm:px-6 md:px-10 md:py-12"
        >
          <SectionHead num="07" title="Kontak & Diskusi" note="GET IN TOUCH" />

          <div className="grid gap-px border-2 border-ink bg-ink md:grid-cols-12">
            <div className="bg-paper p-6 md:col-span-7 md:p-8">
              <h3 className="font-display text-[clamp(1.6rem,4vw,3rem)] uppercase leading-[0.95] tracking-[-0.03em]">
                Mari diskusikan ide dan kolaborasi berikutnya.
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
                Terbuka untuk kesempatan rekayasa perangkat lunak, eksplorasi keamanan aplikasi web,
                riset otomasi, maupun kolaborasi konten edukatif.
              </p>

              <dl className="mt-6 space-y-3 border-t-2 border-ink pt-4 font-mono text-xs uppercase tracking-[0.06em]">
                <div className="flex gap-3">
                  <dt className="w-16 shrink-0 text-ink-faint">[ MAIL ]</dt>
                  <dd>
                    <a
                      href="mailto:arrafinur3@gmail.com"
                      className="underline decoration-ink/40 underline-offset-4 hover:decoration-hazard"
                    >
                      arrafinur3@gmail.com
                    </a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-16 shrink-0 text-ink-faint">[ TELP ]</dt>
                  <dd>
                    <a
                      href="https://wa.me/6285927274835"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-ink/40 underline-offset-4 hover:decoration-hazard"
                    >
                      +62 859-2727-4835 (WhatsApp)
                    </a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-16 shrink-0 text-ink-faint">[ LOC ]</dt>
                  <dd>Yogyakarta, Indonesia</dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-col gap-3 bg-paper p-6 md:col-span-5 md:p-8">
              <a href="mailto:arrafinur3@gmail.com" className="btn-fill w-full justify-between">
                Kirim Pesan Email <ArrowRight size={14} />
              </a>
              <a
                href="https://wa.me/6285927274835"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-line w-full justify-between"
              >
                WhatsApp Langsung <ArrowUpRight size={14} />
              </a>
              <a
                href="/CV_Arrafi_Nur_Hafiz.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-line w-full justify-between"
              >
                Download Resume (PDF) <ExternalLink size={13} />
              </a>

              <div aria-hidden="true" className="mt-auto pt-6">
                <div className="h-14 w-full border border-ink barcode" />
                <p className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">
                  <span>REF / ANH-MRP-01</span>
                  <span>REV 2.6</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer — inverted plate */}
      <footer className="relative z-10">
        <div aria-hidden="true" className="h-3 w-full hazard-band" />
        <div className="bg-ink px-4 py-8 text-paper sm:px-6 md:px-10">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-display text-xl uppercase tracking-[-0.02em]">
                Arrafi Nur Hafiz<span className="text-hazard">®</span>
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-paper/60">
                © 2026 · Built with modern web architecture · Sheet 01 / 01
              </p>
            </div>

            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  title={label}
                  className="flex h-9 w-9 items-center justify-center border border-paper/40 text-paper transition-colors hover:border-hazard hover:bg-hazard hover:text-white"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            <div aria-hidden="true" className="h-8 w-40 border border-paper/40 barcode-light" />
          </div>
        </div>
      </footer>
    </div>
  );
}
