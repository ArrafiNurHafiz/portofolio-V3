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
  Phone,
  Briefcase,
  GraduationCap,
  Sparkles,
  Layers,
  ChevronRight,
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
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
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
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/arrafi-nur-hafiz-06b7083a1" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@RapyTech" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/affiizzz/" },
  { icon: Music2, label: "TikTok", href: "https://www.tiktok.com/@arrafinurhz" },
  { icon: Mail, label: "Email", href: "mailto:arrafinur3@gmail.com" },
];

function SectionHeader({ title, note }: { title: string; note: string }) {
  return (
    <div className="mb-4 flex items-baseline justify-between border-b border-white/5 pb-2.5">
      <h2 className="font-display text-sm font-semibold tracking-wider text-foreground uppercase">
        {title}
      </h2>
      <span className="text-[11px] font-mono text-muted-foreground/80">{note}</span>
    </div>
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
      { threshold: 0.05, rootMargin: "0px 0px -15px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-[100dvh] w-full bg-background text-foreground selection:bg-white/10 selection:text-white">
      {/* Editorial Monochrome Photography Layer */}
      <img
        src={hero}
        alt=""
        aria-hidden="true"
        className="fixed inset-0 -z-30 h-full w-full object-cover object-center filter grayscale brightness-[0.16] contrast-[1.15]"
      />

      {/* Atmospheric Neutral Vignette & Grain */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-background/85 via-background/95 to-background pointer-events-none" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none" />
      <div className="fixed inset-0 -z-10 bg-grain pointer-events-none opacity-40 mix-blend-overlay" />

      {/* Top Reading Progress Bar */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[2px] bg-white/40 z-50 origin-left pointer-events-none transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation Bar */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/60 border-b border-white/5 transition-colors">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 flex items-center justify-between py-3.5">
          <a
            href="#beranda"
            className="font-display text-lg font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity"
          >
            Arrafi Nur Hafiz
          </a>

          <nav className="hidden md:flex items-center gap-1 text-xs">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#kontak"
            className="btn-outline !py-1.5 !px-3.5 text-xs font-medium flex items-center gap-1.5"
          >
            <span>Hubungi</span>
            <ArrowUpRight size={13} className="opacity-70" />
          </a>
        </div>
      </header>

      {/* Main Content Hub */}
      <main className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 pb-24 pt-8 md:pt-14 space-y-16">
        {/* HERO / PROFILE SECTION */}
        <section id="beranda" data-reveal className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="relative rounded-full p-1.5 border border-white/10 bg-white/[0.02] shadow-2xl">
              <img
                src={portrait}
                alt="Arrafi Nur Hafiz"
                width={816}
                height={816}
                className="h-28 w-28 sm:h-32 sm:w-32 rounded-full object-cover filter contrast-[1.05]"
              />
            </div>
            <span
              className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-background bg-online shadow-sm"
              title="Available"
            />
          </div>

          <a
            href="mailto:arrafinur3@gmail.com"
            className="glass mt-5 inline-flex items-center gap-2.5 px-4 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-all !rounded-full"
          >
            <span className="h-2 w-2 rounded-full bg-online animate-pulse" />
            <span className="font-medium text-foreground">Available for projects</span>
            <span className="text-white/20">|</span>
            <span>Get in touch</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
          </a>

          <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Arrafi Nur Hafiz
          </h1>

          <p className="mt-1.5 text-xs tracking-wider text-muted-foreground uppercase font-medium">
            Student · Full-Stack Developer · Cyber Enthusiast
          </p>

          <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground/80">
            <MapPin className="h-3.5 w-3.5 text-muted-foreground/60 shrink-0" />
            <span>Yogyakarta, Indonesia · Universitas Teknologi Digital Indonesia (UTDI)</span>
          </div>

          <p className="mt-4 max-w-xl text-sm text-muted-foreground leading-relaxed">
            Mahasiswa Sistem Informasi UTDI &amp; Full-Stack Developer Intern di CV Karya Wahana Sentosa. Berfokus pada rekayasa modern web architecture, keamanan sistem terdesentralisasi, Zero-Knowledge Proofs, dan otomasi berbasis AI.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="#proyek" className="btn-primary text-xs">
              <span>Lihat Karya &amp; Proyek</span>
              <ArrowRight size={14} />
            </a>
            <a
              href="/CV_Arrafi_Nur_Hafiz.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs"
            >
              <span>Download CV</span>
              <ExternalLink size={13} className="opacity-70" />
            </a>
          </div>

          {/* Social Row */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                title={label}
                className="glass flex h-10 w-10 items-center justify-center !rounded-xl text-muted-foreground hover:text-foreground !p-0 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </section>

        {/* OVERVIEW PILLARS */}
        <section data-reveal className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
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
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="glass p-5 flex flex-col justify-between">
                <div>
                  <div className="h-9 w-9 rounded-lg bg-white/[0.04] border border-white/5 flex items-center justify-center text-foreground mb-3">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </section>

        {/* TENTANG SAYA */}
        <section id="tentang" data-reveal>
          <SectionHeader title="Tentang Saya" note="BIO & LATAR BELAKANG" />

          <div className="grid gap-6 md:grid-cols-12 items-stretch">
            <div className="md:col-span-5 glass overflow-hidden !p-2 flex flex-col justify-center">
              <img
                src={portrait}
                alt="Arrafi Nur Hafiz"
                className="w-full h-full object-cover rounded-xl filter contrast-[1.05]"
              />
            </div>

            <div className="md:col-span-7 glass p-6 md:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-xs font-mono text-muted-foreground">// INTRO_DOSSIER</span>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Mengembangkan sistem perangkat lunak yang aman, andal, dan bermanfaat nyata.
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Saya adalah mahasiswa Sistem Informasi di Universitas Teknologi Digital Indonesia (UTDI) yang saat ini aktif sebagai Full-Stack Developer Intern di CV Karya Wahana Sentosa (KWaS). Memiliki antusiasme tinggi dalam memecahkan masalah rekayasa web dari hulu ke hilir.
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Fokus eksplorasi saya meliputi pertahanan keamanan aplikasi, kriptografi desentralisasi Zero-Knowledge, dan sistem kecerdasan buatan terapan. Selain itu, saya aktif membagikan tutorial teknis melalui konten digital.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[11px] text-muted-foreground block">Pendidikan:</span>
                  <span className="font-medium text-foreground">S1 Sistem Informasi, UTDI</span>
                </div>
                <div>
                  <span className="text-[11px] text-muted-foreground block">Posisi Sekarang:</span>
                  <span className="font-medium text-foreground">Intern @ CV Karya Wahana Sentosa</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KEAHLIAN / TECH STACK */}
        <section id="keahlian" data-reveal>
          <SectionHeader title="Keahlian & Teknologi" note="TECH STACK & TOOLS" />

          <div className="grid gap-3 sm:grid-cols-3">
            {[
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
            ].map((stack) => (
              <div key={stack.category} className="glass p-5">
                <h3 className="font-display text-xs font-semibold text-foreground tracking-wider uppercase pb-2.5 border-b border-white/5">
                  {stack.category}
                </h3>
                <ul className="mt-3.5 space-y-2 text-xs text-muted-foreground">
                  {stack.items.map((tech) => (
                    <li key={tech} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                      <span className="text-foreground/90">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROYEK PILIHAN */}
        <section id="proyek" data-reveal>
          <SectionHeader title="Proyek Unggulan" note="DEPLOYMENTS & RESEARCH" />

          <div className="grid gap-4 md:grid-cols-3">
            {[
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
            ].map((project) => (
              <article key={project.title} className="glass overflow-hidden flex flex-col justify-between group">
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-black/40 border-b border-white/5">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase">
                      {project.tag}
                    </span>
                    <h3 className="font-display text-base font-bold text-foreground mt-1">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between py-2 px-3.5 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-medium text-foreground hover:bg-white/[0.08] hover:border-white/20 transition-all"
                  >
                    <span>Buka Proyek</span>
                    <ArrowUpRight size={13} className="opacity-70" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PENGALAMAN & REKAM JEJAK */}
        <section id="pengalaman" data-reveal>
          <SectionHeader title="Pengalaman &amp; Rekam Jejak" note="CAREER & ROLES" />

          <div className="glass p-6 divide-y divide-white/5">
            {[
              {
                period: "Agu 2026 – Sekarang",
                role: "Full-Stack Developer Intern",
                place: "CV Karya Wahana Sentosa (KWaS)",
                detail:
                  "Mengembangkan modul sistem pendukung Material Requirements Planning (MRP), arsitektur antarmuka, backend API, dan manajemen struktur basis data.",
              },
              {
                period: "2024 – Sekarang",
                role: "Mahasiswa S1 Sistem Informasi",
                place: "Universitas Teknologi Digital Indonesia (UTDI)",
                detail:
                  "Mendalami rekayasa sistem perangkat lunak, komputasi pendukung keputusan, kriptografi terapan, dan administrasi basis data relasional.",
              },
              {
                period: "2025 – Sekarang",
                role: "Tech Content Creator & Educator",
                place: "YouTube @RapyTech & TikTok",
                detail:
                  "Membagikan materi edukatif seputar ekosistem Linux, konfigurasi development environment, web engineering, dan otomasi kecerdasan buatan.",
              },
            ].map((exp, idx) => (
              <div key={exp.role} className={`${idx === 0 ? "pb-5" : "py-5"}`}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-sm font-semibold text-foreground">{exp.role}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-xs text-muted-foreground/90 font-medium mt-0.5">{exp.place}</p>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{exp.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRESTASI & PENGHARGAAN */}
        <section id="prestasi" data-reveal>
          <SectionHeader title="Prestasi &amp; Penghargaan" note="HONORS & CITATIONS" />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
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
            ].map((item) => (
              <div key={item.title} className="glass p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-muted-foreground pb-2 border-b border-white/5">
                    <span>{item.year}</span>
                    <Award size={14} className="text-foreground" />
                  </div>
                  <h3 className="font-display text-xs font-bold text-foreground mt-3">{item.title}</h3>
                  <span className="mt-2 inline-block px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-[10px] font-medium text-foreground">
                    {item.role}
                  </span>
                </div>
                <p className="mt-3 text-[11px] text-muted-foreground leading-relaxed">{item.org}</p>
              </div>
            ))}
          </div>
        </section>

        {/* KONTAK & HUBUNGI */}
        <section id="kontak" data-reveal>
          <SectionHeader title="Kontak & Diskusi" note="GET IN TOUCH" />

          <div className="glass p-6 md:p-8 grid gap-6 md:grid-cols-12 items-center">
            <div className="md:col-span-7 space-y-3">
              <h3 className="font-display text-2xl font-bold text-foreground">
                Mari diskusikan ide dan kolaborasi berikutnya.
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Terbuka untuk kesempatan rekayasa perangkat lunak, eksplorasi keamanan aplikasi web, riset otomasi, maupun kolaborasi konten edukatif.
              </p>

              <div className="pt-2 space-y-2 text-xs font-mono text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-foreground shrink-0" />
                  <a href="mailto:arrafinur3@gmail.com" className="hover:text-foreground transition-colors">
                    arrafinur3@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-foreground shrink-0" />
                  <a
                    href="https://wa.me/6285927274835"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    +62 859-2727-4835 (WhatsApp)
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-foreground shrink-0" />
                  <span>Yogyakarta, Indonesia</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col gap-2.5">
              <a href="mailto:arrafinur3@gmail.com" className="btn-primary text-xs w-full justify-center">
                <span>Kirim Pesan Email</span>
                <ArrowRight size={13} />
              </a>
              <a
                href="https://wa.me/6285927274835"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs w-full justify-center"
              >
                <span>WhatsApp Langsung</span>
                <ArrowUpRight size={13} className="opacity-70" />
              </a>
              <a
                href="/CV_Arrafi_Nur_Hafiz.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs w-full justify-center"
              >
                <span>Download Resume (PDF)</span>
                <ExternalLink size={13} className="opacity-70" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-4 sm:px-6 text-xs text-muted-foreground">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Arrafi Nur Hafiz. Built with modern web architecture.</p>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="hover:text-foreground transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
