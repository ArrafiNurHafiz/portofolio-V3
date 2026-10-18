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
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6">
        <header className="flex items-center justify-between py-5">
          <a href="#beranda" className="text-3xl font-extrabold tracking-tighter text-gradient">AR</a>
          <nav className="hidden gap-1 text-sm md:flex">
            {nav.map((n, i) => (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                className={`rounded-full px-4 py-1.5 transition-colors ${i === 0 ? "glass" : "text-muted-foreground hover:text-foreground"}`}
              >
                {n}
              </a>
            ))}
          </nav>
          <a href="#kontak" className="btn-outline flex items-center gap-2 px-4 py-2 text-sm font-medium">
            Mari Terhubung <ArrowRight size={14} />
          </a>
        </header>
      </div>

      {/* Hero Section — Full-Bleed Tanpa Container Box */}
      <section id="beranda" className="relative isolate overflow-hidden min-h-[78vh] flex items-center border-b border-border/40">
        <img
          src={hero}
          alt="Workspace developer di malam hari"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[65%_center] md:object-[80%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/85 to-background/60 md:bg-gradient-to-r md:from-background md:via-background/90 md:to-background/25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-background/30" />
        
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24 relative">
          <div className="max-w-2xl">
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
              <a href="#proyek" className="btn-primary flex items-center gap-2 px-6 py-3 text-sm font-semibold">
                Jelajahi Proyek <ArrowRight size={16} />
              </a>
              <a href="/CV_Arrafi_Nur_Hafiz.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2 px-6 py-3 text-sm font-semibold">
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
                  className="glass grid h-9 w-9 place-items-center transition-all duration-200 hover:scale-110 hover:text-accent"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <p className="absolute bottom-2 right-6 hidden -rotate-6 font-script text-2xl leading-6 text-muted-foreground md:right-8 md:block select-none">
            Build<br />Learn<br />Share<br />Make an Impact
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        {/* Overview Cards */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-8">
        {[
          [Code2, "Full-Stack Web", "Frontend modern React & Next.js, backend REST API, serta basis data relasional terstruktur."],
          [ShieldCheck, "Application Security", "Penerapan fundamental AppSec, Zero-Knowledge Proof (Semaphore), dan RBAC."],
          [Bot, "AI & Otomasi", "Pengembangan multi-agent AI swarm, Decision Support System (TOPSIS), dan automasi."],
          [Terminal, "Linux & DevOps", "Workflow Linux harian, Docker & Docker Compose, server setup, dan deployment."],
        ].map(([Icon, title, desc]: any) => (
          <div key={title} className="glass flex gap-4 p-5 transition-transform duration-200 hover:-translate-y-1">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-accent">
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
        <div className="flex flex-col justify-between">
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
              className="btn-outline flex items-center gap-2 px-4 py-2 text-sm font-medium"
            >
              Unduh CV <ArrowRight size={14} />
            </a>
            <a
              href="https://porto.rapydev.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2 px-4 py-2 text-sm font-medium"
            >
              Portofolio Lengkap <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Foto Potret Bersih — Bebas Halangan Teks */}
        <div className="relative min-h-[380px] overflow-hidden rounded-2xl border border-accent/20 bg-secondary/30 shadow-xl group">
          <img
            src={portrait}
            alt="Arrafi Nur Hafiz"
            loading="lazy"
            width={1086}
            height={1090}
            className="h-full w-full object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Kolom Kanan: Kutipan + Status Info */}
        <div className="flex flex-col justify-between gap-4">
          <div className="glass relative rounded-2xl border border-accent/20 p-5 shadow-lg">
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
            <div className="glass flex items-center gap-3 p-3.5 text-xs sm:text-sm">
              <GraduationCap className="text-accent shrink-0" size={20} />
              <div>
                <span className="font-semibold text-foreground">Universitas Teknologi Digital Indonesia</span>
                <br />
                <span className="text-xs text-muted-foreground">Sistem Informasi (S1) · 2024 – Sekarang</span>
              </div>
            </div>
            <div className="glass flex items-center gap-3 p-3.5 text-xs sm:text-sm">
              <Briefcase className="text-accent shrink-0" size={18} />
              <div>
                <span className="font-semibold text-foreground">CV Karya Wahana Sentosa (KWaS)</span>
                <br />
                <span className="text-xs text-muted-foreground">Full-Stack Developer Intern</span>
              </div>
            </div>
            <div className="glass flex items-center gap-3 p-3.5 text-xs sm:text-sm">
              <MapPin size={18} className="text-accent shrink-0" />
              <span>Yogyakarta, Indonesia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Keahlian / Tech Stack */}
      <section id="keahlian" className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_0.65fr]">
        <div className="lg:col-span-4">
          <Label n="02" t="KEAHLIAN" />
          <h2 className="mt-1 text-3xl font-bold">Tech Stack &amp; Kompetensi</h2>
        </div>
        {[
          ["Frontend", [[Atom, "React"], [Boxes, "Next.js"], [FileCode2, "TypeScript"], [Code2, "JavaScript"]]],
          ["Backend", [[Server, "Node.js"], [Terminal, "Express.js"], [Code2, "PHP & Laravel"], [Code2, "FastAPI"]]],
          ["Database & Tools", [[Database, "MySQL & PG"], [Container, "Docker"], [Terminal, "Linux"], [GitBranch, "Git & GitHub"]]],
        ].map(([title, items]: any) => (
          <div key={title} className="glass p-5">
            <h3 className="text-sm font-semibold">{title}</h3>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {items.map(([Icon, name]: any) => (
                <div key={name} className="flex flex-col items-center gap-1.5 text-center text-xs text-muted-foreground">
                  <Icon className="text-accent" size={20} />
                  <span className="truncate max-w-full">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <pre className="glass p-4 font-mono text-[11px] text-accent flex flex-col justify-center">{`const rafi = {
  role: "Full-Stack Dev",
  campus: "UTDI Yogyakarta",
  stack: ["React", "Node", "PHP", "Docker"],
  security: "AppSec & ZKP",
  impact: true
};`}</pre>
      </section>

      {/* Proyek Pilihan */}
      <section id="proyek" className="py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Label n="03" t="PROYEK PILIHAN" />
            <h2 className="mt-1 text-3xl font-bold">Proyek Unggulan</h2>
          </div>
          <a
            href="https://github.com/ArrafiNurHafiz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-accent hover:underline font-medium"
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
          ].map((item) => (
            <article key={item.title} className="glass overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-glow)] hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <img src={item.img} alt={item.title} loading="lazy" className="aspect-video w-full object-cover" />
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h3 className="font-bold text-base">{item.title}</h3>
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
                  className="inline-flex w-full items-center justify-between rounded-xl border border-border/80 bg-background/50 px-4 py-2.5 text-xs font-medium text-foreground transition-all hover:border-accent hover:text-accent"
                >
                  <span>Buka Proyek</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pengalaman & Perjalanan */}
      <section id="pengalaman">
        <div className="flex items-end justify-between">
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
          ].map(([period, role, place, detail]) => (
            <div key={role} className="relative">
              <span className="absolute -top-[31px] h-3 w-3 rounded-full bg-primary shadow-[var(--shadow-glow)]" />
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
        <div>
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
          ].map((item) => (
            <div key={item.title} className="glass p-5 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
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
      <section id="kontak" className="glass grid items-center gap-8 p-8 md:grid-cols-[1.2fr_auto_1fr] rounded-3xl border border-accent/20">
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
            className="btn-primary flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold"
          >
            Kirim Email <ArrowRight size={16} />
          </a>
          <a
            href="https://wa.me/6285927274835"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold"
          >
            WhatsApp <ExternalLink size={15} />
          </a>
          <a
            href="/CV_Arrafi_Nur_Hafiz.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold"
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
              className="glass grid h-8 w-8 place-items-center transition-all hover:scale-110 hover:text-accent"
            >
              <Icon size={15} />
            </a>
          ))}
          <a
            href="#beranda"
            aria-label="Kembali ke atas"
            className="grid h-8 w-8 place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors ml-2"
          >
            <ArrowUp size={15} />
          </a>
        </div>
      </footer>
    </div>
  </div>
  );
}
