import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Github, Linkedin, Youtube, Instagram, Music2, Mail, Bot, Code2, ShieldCheck, Terminal,
  GraduationCap, MapPin, Quote, ChevronLeft, ChevronRight, ArrowUp, Atom, Server, Database, Container, GitBranch, Figma, Boxes, FileCode2,
  Briefcase, Award, ExternalLink, Phone,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arrafi Nur Hafiz — Full-Stack Developer & Security Enthusiast" },
      { name: "description", content: "Portofolio Arrafi Nur Hafiz: Full-Stack Web Development, Cybersecurity, Otomasi AI, dan DevOps. Mahasiswa Sistem Informasi UTDI & Developer Intern KWaS." },
      { property: "og:title", content: "Arrafi Nur Hafiz — Portofolio & Karya" },
      { property: "og:description", content: "Building secure digital experiences: Web, Security, AI, DevOps." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Caveat:wght@500&family=JetBrains+Mono&display=swap" },
    ],
  }),
  component: Index,
});

const nav = ["Beranda", "Tentang", "Keahlian", "Proyek", "Pengalaman", "Prestasi", "Kontak"];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/ArrafiNurHafiz" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/arrafi-nur-hafiz-06b7083a1" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@RapyTech" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/affiizzz/" },
  { icon: Music2, label: "TikTok", href: "https://www.tiktok.com/@arrafinurhz" },
  { icon: Mail, label: "Email", href: "mailto:arrafinur3@gmail.com" },
];

function Label({ n, t }: { n: string; t: string }) {
  return <p className="font-mono text-xs tracking-widest text-accent">// {n}. {t}</p>;
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
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Scroll Progress Bar */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-primary via-accent to-primary z-[60] origin-left pointer-events-none transition-all duration-75 shadow-[0_0_10px_var(--accent)]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header — Transparan & Membaur Halus di Atas Hero */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/30 border-b border-border/10 transition-colors">
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between py-4">
          <a href="#beranda" className="text-3xl font-extrabold tracking-tighter text-gradient transition-transform hover:scale-105">AR</a>
          <nav className="hidden gap-1 text-sm md:flex">
            {nav.map((n, i) => (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                className={`rounded-full px-4 py-1.5 transition-all duration-200 ${i === 0 ? "glass" : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"}`}
              >
                {n}
              </a>
            ))}
          </nav>
          <a href="#kontak" className="btn-outline flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all hover:scale-105 active:scale-95">
            Mari Terhubung <ArrowRight size={14} />
          </a>
        </div>
      </header>

      {/* Hero Section — Aliran Alami Tanpa Garis Kaku */}
      <section id="beranda" className="relative isolate overflow-hidden min-h-[82vh] flex items-center -mt-[69px] pt-[69px]">
        {/* Gambar Latar dengan Soft Mask & Bleed */}
        <img
          src={hero}
          alt="Workspace developer di malam hari"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-30 h-full w-full object-cover object-[65%_center] md:object-[80%_center]"
        />

        {/* Gradasi Lembut Menghilangkan Batas Kaku Atas & Bawah */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-40 -z-10 bg-gradient-to-b from-background via-background/60 to-transparent pointer-events-none" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/90 to-background/25 pointer-events-none" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-48 -z-10 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
        <div aria-hidden="true" className="absolute -bottom-16 left-1/2 -z-10 h-44 w-3/4 max-w-4xl rounded-full bg-accent/10 blur-3xl pointer-events-none animate-pulse-glow" />
        
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24 relative">
          <div data-reveal className="max-w-2xl">
            <span className="glass inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              Available for Opportunities
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              Building Secure Digital <span className="text-gradient">Experiences.</span>
            </h1>
            <p className="mt-5 max-w-lg text-sm sm:text-base text-muted-foreground leading-relaxed">
              Mahasiswa Sistem Informasi Universitas Teknologi Digital Indonesia (UTDI) &amp; Full-Stack Developer Intern di CV Karya Wahana Sentosa. Berfokus pada rekayasa web modern, keamanan aplikasi, dan otomatisasi berbasis AI.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a href="#proyek" className="btn-primary flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all hover:scale-105 active:scale-95">
                Jelajahi Proyek <ArrowRight size={16} />
              </a>
              <a href="/CV_Arrafi_Nur_Hafiz.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all hover:scale-105 active:scale-95">
                Lihat CV <ExternalLink size={15} />
              </a>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span>Terhubung di:</span>
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  title={label}
                  className="glass grid h-9 w-9 place-items-center transition-all duration-200 hover:scale-110 hover:text-accent hover:border-accent/40"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <p className="absolute top-1/2 -translate-y-1/2 right-6 md:right-12 lg:right-16 hidden font-script text-2xl md:text-3xl leading-tight text-muted-foreground/90 md:block select-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] animate-float-script">
            Build<br />
            Learn<br />
            Share<br />
            <span className="text-accent font-semibold">Make an Impact</span>
          </p>
        </div>
      </section>

      {/* Konten Utama — Mengalir Lembut Menjembatani Hero */}
      <div className="mx-auto max-w-6xl px-6 relative z-10 -mt-6 sm:-mt-10">
        {/* Overview Cards — Floating Halus di Atas Transisi Bawah */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          [Code2, "Full-Stack Web", "Frontend modern React & Next.js, backend REST API, serta basis data relasional terstruktur."],
          [ShieldCheck, "Application Security", "Penerapan fundamental AppSec, Zero-Knowledge Proof (Semaphore), dan RBAC."],
          [Bot, "AI & Otomasi", "Pengembangan multi-agent AI swarm, Decision Support System (TOPSIS), dan automasi."],
          [Terminal, "Linux & DevOps", "Workflow Linux harian, Docker & Docker Compose, server setup, dan deployment."],
        ].map(([Icon, title, desc]: any, i: number) => (
          <div
            key={title}
            data-reveal
            style={{ transitionDelay: `${i * 80}ms` }}
            className="glass flex gap-4 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[var(--shadow-glow)]"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-accent transition-transform duration-300 group-hover:scale-110">
              <Icon size={22} />
            </div>
            <div>
              <h3 className="text-sm font-semibold">{title}</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Tentang Saya Section */}
      <section id="tentang" className="grid gap-6 py-16 lg:grid-cols-[1.2fr_1.1fr_1.1fr]">
        <div data-reveal style={{ transitionDelay: "0ms" }} className="flex flex-col justify-between">
          <div>
            <Label n="01" t="TENTANG SAYA" />
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Hai, saya<br /><span className="text-gradient">Arrafi Nur Hafiz</span> 👋
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Mahasiswa Sistem Informasi di Universitas Teknologi Digital Indonesia (UTDI) yang saat ini aktif sebagai Full-Stack Developer Intern di CV Karya Wahana Sentosa (KWaS). Berpengalaman merancang dan membangun aplikasi web end-to-end, mulai dari antarmuka pengguna responsif, backend REST API, hingga struktur basis data relasional.
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Saya memiliki minat mendalam pada keamanan aplikasi, sistem otomasi kecerdasan buatan, dan gemar membagikan wawasan teknis melalui konten edukasi digital.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/CV_Arrafi_Nur_Hafiz.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all hover:scale-105 active:scale-95"
            >
              Unduh CV <ArrowRight size={14} />
            </a>
            <a
              href="https://porto.rapydev.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all hover:scale-105 active:scale-95"
            >
              Portofolio Lengkap <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Foto Potret Bersih — Bebas Halangan Teks */}
        <div data-reveal style={{ transitionDelay: "120ms" }} className="relative min-h-[380px] overflow-hidden rounded-2xl border border-accent/20 bg-secondary/30 shadow-xl group">
          <img
            src={portrait}
            alt="Arrafi Nur Hafiz"
            loading="lazy"
            width={1086}
            height={1090}
            className="h-full w-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Kolom Kanan: Kutipan + Status Info */}
        <div data-reveal style={{ transitionDelay: "240ms" }} className="flex flex-col justify-between gap-4">
          <div className="glass relative rounded-2xl border border-accent/20 p-5 shadow-lg transition-all duration-300 hover:border-accent/40">
            <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-accent" />
            <Quote aria-hidden="true" size={32} strokeWidth={1.5} className="text-accent mb-2" />
            <blockquote className="text-base font-semibold leading-relaxed sm:text-lg">
              <p>
                Selalu penasaran,<br />
                selalu belajar,<br />
                <span className="text-muted-foreground">mengubah ide menjadi</span>{" "}
                <span className="text-accent">dampak nyata.</span>
              </p>
            </blockquote>
            <div className="mt-4 flex items-center justify-between border-t border-accent/20 pt-3">
              <p className="font-script text-2xl leading-tight text-foreground">Arrafi Nur Hafiz</p>
              <div aria-hidden="true" className="flex gap-1.5">
                <span className="h-1 w-6 rounded-full bg-accent" />
                <span className="h-1 w-1.5 rounded-full bg-accent/40" />
                <span className="h-1 w-1.5 rounded-full bg-accent/20" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="glass flex items-center gap-3 p-3.5 text-xs sm:text-sm transition-all duration-200 hover:border-accent/40">
              <GraduationCap className="text-accent shrink-0" size={20} />
              <div>
                <span className="font-semibold text-foreground">Universitas Teknologi Digital Indonesia</span>
                <br />
                <span className="text-xs text-muted-foreground">Sistem Informasi (S1) · 2024 – Sekarang</span>
              </div>
            </div>
            <div className="glass flex items-center gap-3 p-3.5 text-xs sm:text-sm transition-all duration-200 hover:border-accent/40">
              <Briefcase className="text-accent shrink-0" size={18} />
              <div>
                <span className="font-semibold text-foreground">CV Karya Wahana Sentosa (KWaS)</span>
                <br />
                <span className="text-xs text-muted-foreground">Full-Stack Developer Intern</span>
              </div>
            </div>
            <div className="glass flex items-center gap-3 p-3.5 text-xs sm:text-sm transition-all duration-200 hover:border-accent/40">
              <MapPin size={18} className="text-accent shrink-0" />
              <span>Yogyakarta, Indonesia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Keahlian / Tech Stack */}
      <section id="keahlian" className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_0.65fr]">
        <div data-reveal className="lg:col-span-4">
          <Label n="02" t="KEAHLIAN" />
          <h2 className="mt-1 text-3xl font-bold">Tech Stack &amp; Kompetensi</h2>
        </div>
        {[
          ["Frontend", [[Atom, "React"], [Boxes, "Next.js"], [FileCode2, "TypeScript"], [Code2, "JavaScript"]]],
          ["Backend", [[Server, "Node.js"], [Terminal, "Express.js"], [Code2, "PHP & Laravel"], [Code2, "FastAPI"]]],
          ["Database & Tools", [[Database, "MySQL & PG"], [Container, "Docker"], [Terminal, "Linux"], [GitBranch, "Git & GitHub"]]],
        ].map(([title, items]: any, idx: number) => (
          <div
            key={title}
            data-reveal
            style={{ transitionDelay: `${idx * 80}ms` }}
            className="glass p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-[var(--shadow-glow)] hover:-translate-y-1"
          >
            <h3 className="text-sm font-semibold">{title}</h3>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {items.map(([Icon, name]: any) => (
                <div key={name} className="group flex flex-col items-center gap-1.5 text-center text-xs text-muted-foreground transition-all duration-200 hover:-translate-y-1 hover:text-accent">
                  <Icon className="text-accent transition-transform duration-200 group-hover:scale-115" size={20} />
                  <span className="truncate max-w-full">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <pre data-reveal style={{ transitionDelay: "240ms" }} className="glass p-4 font-mono text-[11px] text-accent flex flex-col justify-center transition-all duration-300 hover:border-accent/40 hover:shadow-[var(--shadow-glow)]">{`const rafi = {
  role: "Full-Stack Dev",
  campus: "UTDI Yogyakarta",
  stack: ["React", "Node", "PHP", "Docker"],
  security: "AppSec & ZKP",
  impact: true
};`}</pre>
      </section>

      {/* Proyek Pilihan */}
      <section id="proyek" className="py-16">
        <div data-reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Label n="03" t="PROYEK PILIHAN" />
            <h2 className="mt-1 text-3xl font-bold">Proyek Unggulan</h2>
          </div>
          <a
            href="https://github.com/ArrafiNurHafiz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-accent hover:underline font-medium transition-all hover:translate-x-1"
          >
            Lihat Semua di GitHub <ArrowRight size={14} />
          </a>
        </div>
        
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              img: p1,
              title: "Nutri-Share",
              tags: ["Web App", "DSS", "Entropy-TOPSIS"],
              desc: "Sistem pendukung keputusan berbasis web untuk optimalisasi distribusi makanan surplus dan foodbank dengan metode Hybrid Entropy-TOPSIS.",
              link: "https://nutrishare.web.id",
            },
            {
              img: p2,
              title: "RUANG AMAN",
              tags: ["Web App", "Zero-Knowledge Proof", "Semaphore"],
              desc: "Aplikasi pelaporan perundungan anonim yang menjamin kerahasiaan identitas pelapor menggunakan kriptografi Zero-Knowledge Proof.",
              link: "https://ruang.rapsdev.web.id",
            },
            {
              img: hero,
              title: "AutoSec-Patch",
              tags: ["AI Multi-Agent", "Cybersecurity", "Autonomous"],
              desc: "Adversarial Co-Evolution Multi-Agent Swarm untuk penemuan kerentanan kode otomatis dan penambalan patch keamanan secara otonom.",
              link: "https://github.com/ArrafiNurHafiz/AutoSec-Patch",
            },
          ].map((item, idx: number) => (
            <article
              key={item.title}
              data-reveal
              style={{ transitionDelay: `${idx * 120}ms` }}
              className="glass overflow-hidden transition-all duration-400 hover:shadow-[var(--shadow-glow)] hover:-translate-y-2 hover:border-accent/40 flex flex-col justify-between group"
            >
              <div>
                <div className="overflow-hidden aspect-video w-full">
                  <img src={item.img} alt={item.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108" />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h3 className="font-bold text-base group-hover:text-accent transition-colors">{item.title}</h3>
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-between rounded-xl border border-border/80 bg-background/50 px-4 py-2.5 text-xs font-medium text-foreground transition-all hover:border-accent hover:text-accent hover:bg-secondary/40"
                >
                  <span>Buka Proyek</span>
                  <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pengalaman & Perjalanan */}
      <section id="pengalaman">
        <div data-reveal className="flex items-end justify-between">
          <div>
            <Label n="04" t="PENGALAMAN &amp; PERJALANAN" />
            <h2 className="mt-1 text-3xl font-bold">Perjalanan &amp; Karier</h2>
          </div>
        </div>
        <div className="mt-6 grid gap-6 border-t border-border pt-6 md:grid-cols-4">
          {[
            ["Agu 2026 – Sekarang", "Full-Stack Developer Intern", "CV Karya Wahana Sentosa (KWaS)", "Mengembangkan sistem pendukung Material Requirements Planning (MRP), frontend, backend, integrasi modul, dan transfer pengetahuan teknis."],
            ["2024 – Sekarang", "S1 Sistem Informasi", "Universitas Teknologi Digital Indonesia", "Mendalami rekayasa perangkat lunak, sistem basis data, algoritma pendukung keputusan, dan keamanan siber."],
            ["2025 – Sekarang", "Tech Content Creator", "YouTube @RapyTech & TikTok", "Membagikan konten edukasi, tips Linux, web development, dan implementasi otomasi AI untuk komunitas teknologi."],
            ["Visi Berkelanjutan", "Continuous Learning", "Web, Security & AI", "Terus berevolusi menciptakan perangkat lunak aman, andal, dan memberikan dampak nyata bagi masyarakat luas."],
          ].map(([period, role, place, detail], idx: number) => (
            <div
              key={role}
              data-reveal
              style={{ transitionDelay: `${idx * 100}ms` }}
              className="relative transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="absolute -top-[31px] h-3 w-3 rounded-full bg-primary shadow-[var(--shadow-glow)] animate-pulse" />
              <p className="text-xs font-mono font-semibold text-accent">{period}</p>
              <h3 className="mt-1 text-sm font-bold text-foreground">{role}</h3>
              <p className="text-xs font-medium text-muted-foreground">{place}</p>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prestasi & Penghargaan */}
      <section id="prestasi" className="py-16">
        <div data-reveal>
          <Label n="05" t="PRESTASI &amp; PENGHARGAAN" />
          <h2 className="mt-1 text-3xl font-bold">Kompetisi &amp; Pencapaian</h2>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              year: "2026",
              title: "COMPSPHERE 12 — HACKSPHERE 2026",
              role: "Top 30 Finalist",
              desc: "International Web3 Hackathon (compsphere12.devpost.com).",
            },
            {
              year: "Oktober 2026",
              title: "GAYATAMA 2026",
              role: "Finalis Kompetisi Web",
              desc: "International Web Technology Competition di Universitas Negeri Surabaya. Tim 'Bismillah Menang'.",
            },
            {
              year: "Oktober 2026",
              title: "IEEE YESIST12 2026",
              role: "Finalist",
              desc: "Universitas Nusa Mandiri, IEEE Indonesia Section, & iExplore Foundation.",
            },
            {
              year: "Juni 2026",
              title: "Indonesia–Singapore Essay 2026",
              role: "Peringkat 100 / 314",
              desc: "Seamplified Media Pte. Ltd. bersama PT. Mentor Karya Remaja.",
            },
          ].map((item, idx: number) => (
            <div
              key={item.title}
              data-reveal
              style={{ transitionDelay: `${idx * 90}ms` }}
              className="glass p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[var(--shadow-glow)]"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-accent">
                  <span>{item.year}</span>
                  <Award size={16} />
                </div>
                <h3 className="mt-2 text-sm font-bold text-foreground">{item.title}</h3>
                <p className="mt-1 inline-block rounded-md bg-secondary/80 px-2 py-0.5 text-[11px] font-semibold text-accent">
                  {item.role}
                </p>
                <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kontak Section */}
      <section id="kontak" data-reveal className="glass grid items-center gap-8 p-8 md:grid-cols-[1.2fr_auto_1fr] rounded-3xl border border-accent/20 transition-all duration-300 hover:border-accent/40 hover:shadow-[var(--shadow-glow)]">
        <div>
          <h2 className="text-3xl font-bold">Mari Berkolaborasi</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Terbuka untuk diskusi proyek rekayasa web, eksplorasi keamanan aplikasi, peluang kerja, maupun kolaborasi konten teknologi.
          </p>
          <div className="mt-4 flex flex-col gap-2 text-xs sm:text-sm text-muted-foreground font-mono">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-accent shrink-0" />
              <a href="mailto:arrafinur3@gmail.com" className="hover:text-accent transition-colors">arrafinur3@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-accent shrink-0" />
              <a href="https://wa.me/6285927274835" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">+62 859-2727-4835 (WhatsApp)</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-accent shrink-0" />
              <span>Yogyakarta, Indonesia</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-3">
          <a
            href="mailto:arrafinur3@gmail.com"
            className="btn-primary flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition-all hover:scale-105 active:scale-95"
          >
            Kirim Email <ArrowRight size={16} />
          </a>
          <a
            href="https://wa.me/6285927274835"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition-all hover:scale-105 active:scale-95"
          >
            WhatsApp <ExternalLink size={15} />
          </a>
          <a
            href="/CV_Arrafi_Nur_Hafiz.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition-all hover:scale-105 active:scale-95"
          >
            Unduh CV (PDF) <ExternalLink size={15} />
          </a>
        </div>

        <div className="text-left md:text-right border-t md:border-t-0 md:border-l border-border/60 pt-4 md:pt-0 md:pl-6">
          <p className="text-sm italic text-muted-foreground">
            &quot;Teknologi akan lebih bermakna ketika digunakan untuk membantu lebih banyak orang.&quot;
          </p>
          <p className="mt-2 font-script text-2xl text-accent">Arrafi Nur Hafiz</p>
          <p className="text-xs text-muted-foreground mt-1">Full-Stack Developer &amp; Security Enthusiast</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border py-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-extrabold text-gradient">AR</span>
          <div>
            <p className="font-semibold text-foreground">Arrafi Nur Hafiz</p>
            <p className="text-xs">Student · Developer · Creator · Cyber Enthusiast</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              title={label}
              className="glass grid h-8 w-8 place-items-center transition-all hover:scale-110 hover:text-accent hover:border-accent/40"
            >
              <Icon size={15} />
            </a>
          ))}
          <a
            href="#beranda"
            aria-label="Kembali ke atas"
            className="grid h-8 w-8 place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition-all hover:scale-110 ml-2"
          >
            <ArrowUp size={15} />
          </a>
        </div>
      </footer>
    </div>
  </div>
  );
}
