import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Github,
  Linkedin,
  Youtube,
  Instagram,
  Music2,
  Mail,
  Bot,
  Code2,
  ShieldCheck,
  Terminal,
  ExternalLink,
  Award,
  Phone,
  Server,
  Database,
  Cpu,
  Layers,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARRAFI NUR HAFIZ // TACTICAL TELEMETRY & FULL-STACK ENG" },
      {
        name: "description",
        content:
          "System Dossier & Technical Portfolio: Arrafi Nur Hafiz. Full-Stack Web Architecture, AppSec, Autonomous AI Swarms, and Linux/DevOps Systems.",
      },
      { property: "og:title", content: "ARRAFI NUR HAFIZ [ENG // SEC // AI]" },
      {
        property: "og:description",
        content: "Industrial Brutalism & Tactical Telemetry System.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700;800&family=Space+Grotesk:wght@500;700;900&display=swap",
      },
    ],
  }),
  component: Index,
});

const navigation = [
  { id: "telemetry", label: "00 // STATUS" },
  { id: "profile", label: "01 // DOSSIER" },
  { id: "capabilities", label: "02 // MODULES" },
  { id: "projects", label: "03 // DEPLOYMENTS" },
  { id: "timeline", label: "04 // TIMELINE" },
  { id: "awards", label: "05 // CITATIONS" },
  { id: "comms", label: "06 // COMMS" },
];

const socialLinks = [
  { icon: Github, label: "GH", href: "https://github.com/ArrafiNurHafiz" },
  { icon: Linkedin, label: "IN", href: "https://www.linkedin.com/in/arrafi-nur-hafiz-06b7083a1" },
  { icon: Youtube, label: "YT", href: "https://www.youtube.com/@RapyTech" },
  { icon: Instagram, label: "IG", href: "https://www.instagram.com/affiizzz/" },
  { icon: Music2, label: "TK", href: "https://www.tiktok.com/@arrafinurhz" },
  { icon: Mail, label: "EM", href: "mailto:arrafinur3@gmail.com" },
];

function HeaderBlock({ code, title, tag }: { code: string; title: string; tag?: string }) {
  return (
    <div className="border-b border-[#222733] pb-3 mb-6 flex flex-wrap items-end justify-between gap-2">
      <div>
        <p className="font-mono text-xs tracking-widest text-[#ff2a2a]">
          [ SECTION_INDEX :: {code} ]
        </p>
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#e4e7eb]">
          {title}
        </h2>
      </div>
      {tag && (
        <span className="font-mono text-[11px] px-2 py-0.5 border border-[#333a4d] bg-[#14171d] text-[#818a99]">
          {tag}
        </span>
      )}
    </div>
  );
}

function Index() {
  const [timestamp, setTimestamp] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimestamp(now.toISOString().replace("T", " // ").substring(0, 22) + " UTC");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

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
      { threshold: 0.05, rootMargin: "0px 0px -10px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-[100dvh] bg-[#090a0c] text-[#e4e7eb] font-sans selection:bg-[#ff2a2a] selection:text-white">
      {/* CRT Scanline Overlay */}
      <div className="crt-overlay fixed inset-0 z-50 pointer-events-none opacity-40" />

      {/* Top Telemetry Diagnostic Bar */}
      <div className="border-b border-[#222733] bg-[#0c0d10] px-4 py-1.5 font-mono text-[11px] text-[#818a99] flex flex-wrap justify-between items-center z-40 relative">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[#e4e7eb] font-bold">
            <span className="inline-block h-2 w-2 bg-[#39e53d] animate-pulse" />
            SYS_ONLINE // UNIT-AR-01
          </span>
          <span className="hidden sm:inline text-[#333a4d]">|</span>
          <span className="hidden sm:inline">LOC: YOGYAKARTA, ID (UTDI / KWaS)</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline font-mono">{timestamp || "INITIALIZING..."}</span>
          <span className="text-[#333a4d]">|</span>
          <span className="text-[#ff2a2a] font-bold">MODE: INDUSTRIAL_BRUTALISM</span>
        </div>
      </div>

      {/* Primary Sticky Header */}
      <header className="sticky top-0 z-30 border-b border-[#222733] bg-[#090a0c]/95 backdrop-blur-none px-4 py-3">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <a
            href="#telemetry"
            className="flex items-center gap-2 font-mono text-lg font-black tracking-tighter text-[#e4e7eb] hover:text-[#ff2a2a] transition-colors"
          >
            <span className="bg-[#ff2a2a] text-black px-1.5 py-0.5 text-xs font-black">AR</span>
            <span>ARRAFI.SYS</span>
          </a>

          <nav className="hidden lg:flex items-center gap-1 font-mono text-xs">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-3 py-1 text-[#818a99] hover:text-[#e4e7eb] hover:bg-[#14171d] border border-transparent hover:border-[#222733] transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#comms" className="brutal-btn text-xs py-1.5 px-3">
            INIT_CONTACT &gt;&gt;
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 space-y-16">
        {/* HERO SECTION // MISSION TELEMETRY */}
        <section id="telemetry" className="border border-[#222733] bg-[#0f1115]">
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#222733]">
            {/* Left Telemetry Spec */}
            <div className="lg:col-span-8 p-6 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#222733]">
              <div>
                <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#818a99]">
                  <span className="border border-[#ff2a2a] text-[#ff2a2a] px-2 py-0.5 font-bold">
                    SPEC_V3.8
                  </span>
                  <span>SECURITY_CLEARANCE: OPEN</span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-[#e4e7eb] leading-[0.9]">
                  SECURE CODE.
                  <br />
                  <span className="text-[#ff2a2a]">HARDENED</span> SYSTEMS.
                  <br />
                  AI MULTI-AGENT.
                </h1>

                <p className="mt-6 max-w-2xl text-sm sm:text-base text-[#818a99] leading-relaxed">
                  Full-Stack Developer Intern di <strong className="text-[#e4e7eb]">CV Karya Wahana Sentosa (KWaS)</strong> &amp; Mahasiswa Sistem Informasi <strong className="text-[#e4e7eb]">UTDI</strong>. Mengembangkan arsitektur aplikasi tangguh, Zero-Knowledge cryptographic privacy, dan otomasi AI swarm tanpa kompromi performa.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="brutal-btn-primary">
                  [ 01 // INSPECT_DEPLOYMENTS ]
                </a>
                <a
                  href="/CV_Arrafi_Nur_Hafiz.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn"
                >
                  <ExternalLink size={13} />
                  [ SPEC_DOCS // CV.PDF ]
                </a>
              </div>
            </div>

            {/* Right Telemetry Terminal Matrix */}
            <div className="lg:col-span-4 p-6 bg-[#0a0b0e] flex flex-col justify-between font-mono text-xs">
              <div>
                <div className="border-b border-[#222733] pb-2 mb-4 flex justify-between items-center text-[#818a99]">
                  <span>// RUNTIME_MANIFEST</span>
                  <span className="text-[#39e53d]">STATUS_OK</span>
                </div>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-[#818a99]">OPERATOR_ID:</dt>
                    <dd className="font-bold text-[#e4e7eb]">ARRAFI NUR HAFIZ</dd>
                  </div>
                  <div>
                    <dt className="text-[#818a99]">PRIMARY_DISCIPLINE:</dt>
                    <dd className="text-[#ff2a2a]">FULL-STACK &amp; APP_SECURITY</dd>
                  </div>
                  <div>
                    <dt className="text-[#818a99]">ACADEMIC_BASE:</dt>
                    <dd className="text-[#e4e7eb]">UNIVERSITAS TEKNOLOGI DIGITAL INDONESIA</dd>
                  </div>
                  <div>
                    <dt className="text-[#818a99]">CURRENT_POST:</dt>
                    <dd className="text-[#e4e7eb]">DEV INTERN @ CV KARYA WAHANA SENTOSA</dd>
                  </div>
                  <div>
                    <dt className="text-[#818a99]">KEY_PRIMITIVES:</dt>
                    <dd className="text-[#818a99]">ZKP (SEMAPHORE), TOPSIS, DOCKER, REST</dd>
                  </div>
                </dl>
              </div>

              <div className="mt-6 pt-4 border-t border-[#222733] text-[11px] text-[#818a99]">
                <span>HASH: 8f4a1c0d9e... verified</span>
              </div>
            </div>
          </div>

            {/* Sub-strip Barcode / Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#222733] font-mono text-xs">
            <div className="p-4 bg-[#0c0e12]">
              <span className="text-[#818a99] block text-[10px]">PRODUCTION ARCH</span>
              <span className="font-bold text-[#e4e7eb]">REACT // NEXT.JS // NODE</span>
            </div>
            <div className="p-4 bg-[#0c0e12]">
              <span className="text-[#818a99] block text-[10px]">SECURITY DEFENSE</span>
              <span className="font-bold text-[#e4e7eb]">RBAC // ZKP // APPSEC</span>
            </div>
            <div className="p-4 bg-[#0c0e12]">
              <span className="text-[#818a99] block text-[10px]">AI INFRA</span>
              <span className="font-bold text-[#e4e7eb]">MULTI-AGENT // SWARM</span>
            </div>
            <div className="p-4 bg-[#0c0e12]">
              <span className="text-[#818a99] block text-[10px]">BASE ENVIRONMENT</span>
              <span className="font-bold text-[#39e53d]">LINUX // CONTAINERIZED</span>
            </div>
          </div>
        </section>

        {/* SECTION 01 // PROFILE & DOSSIER */}
        <section id="profile" data-reveal>
          <HeaderBlock code="01" title="OPERATOR DOSSIER & IDENTITY" tag="BIO_DATA" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Visual Target Container with Technical Crosshairs */}
            <div className="lg:col-span-4 border border-[#222733] bg-[#0c0d10] p-4 flex flex-col justify-between crosshair-corner">
              <div className="border border-[#222733] relative overflow-hidden aspect-[4/5] bg-black">
                <img
                  src={portrait}
                  alt="Operator Arrafi Nur Hafiz"
                  className="h-full w-full object-cover grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute top-2 left-2 font-mono text-[10px] bg-black/80 px-1.5 py-0.5 border border-[#333a4d] text-[#ff2a2a]">
                  ID_CAM // OPERATOR
                </div>
              </div>
              <div className="mt-3 font-mono text-[11px] text-[#818a99] flex justify-between">
                <span>INDEX: P-0881</span>
                <span>STATUS: VERIFIED</span>
              </div>
            </div>

            {/* Dossier Text Block */}
            <div className="lg:col-span-8 border border-[#222733] bg-[#0f1115] p-6 md:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-block border border-[#ff2a2a] px-2 py-0.5 font-mono text-xs text-[#ff2a2a]">
                  EXECUTIVE_SUMMARY
                </div>
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[#e4e7eb]">
                  Rekayasa piranti lunak dengan ketelitian teknis, arsitektur modular, dan pertahanan berlapis.
                </h3>
                <p className="text-sm text-[#818a99] leading-relaxed">
                  Aktif memimpin eksekusi teknis sebagai Full-Stack Developer Intern di CV Karya Wahana Sentosa (KWaS), berfokus pada integrasi sistem operasional MRP, backend RESTful, dan tata kelola basis data relasional. Menempuh studi formal Sistem Informasi di UTDI Yogyakarta dengan fokus riset pada algoritma optimasi, kriptografi privasi anonim, dan pertahanan siber.
                </p>
                <p className="text-sm text-[#818a99] leading-relaxed">
                  Selain pembangunan kode internal, aktif membagikan eksplorasi Linux sistemik, otomasi AI swarm, dan rekayasa web melalui kanal digital untuk membentuk ekosistem teknis yang terdidik dan berdampak nyata.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-[#222733] grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                <div className="border border-[#222733] p-3 bg-[#0c0d10]">
                  <span className="text-[#818a99] block text-[10px]">CAMPUS</span>
                  <span className="font-bold text-[#e4e7eb]">UTDI Yogyakarta</span>
                  <span className="text-[#818a99] block text-[10px] mt-1">SI (S1) · 2024–Pres.</span>
                </div>
                <div className="border border-[#222733] p-3 bg-[#0c0d10]">
                  <span className="text-[#818a99] block text-[10px]">INDUSTRY ROLE</span>
                  <span className="font-bold text-[#e4e7eb]">KWaS Intern</span>
                  <span className="text-[#818a99] block text-[10px] mt-1">Full-Stack MRP Eng</span>
                </div>
                <div className="border border-[#222733] p-3 bg-[#0c0d10]">
                  <span className="text-[#818a99] block text-[10px]">BASE REGION</span>
                  <span className="font-bold text-[#e4e7eb]">Yogyakarta</span>
                  <span className="text-[#818a99] block text-[10px] mt-1">GMT+7 / Special Region</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02 // CAPABILITIES & MODULES */}
        <section id="capabilities" data-reveal>
          <HeaderBlock code="02" title="TECHNICAL CAPABILITIES & SUBSYSTEMS" tag="STACK_MATRIX" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-[#222733] border border-[#222733]">
            {/* Front-End Subsystem */}
            <div className="bg-[#0f1115] p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center font-mono text-xs text-[#818a99] pb-3 border-b border-[#222733]">
                  <span>[ MOD_01 ]</span>
                  <Code2 size={16} className="text-[#ff2a2a]" />
                </div>
                <h3 className="mt-3 text-lg font-bold uppercase text-[#e4e7eb]">Client Interface &amp; Web</h3>
                <p className="mt-2 text-xs text-[#818a99] leading-relaxed">
                  Pengembangan antarmuka responsif performa tinggi, validasi skema ketat, state terisolasi, dan arsitektur komponen modular.
                </p>
                <div className="mt-4 space-y-2 font-mono text-xs">
                  {["React 19 & Next.js", "TypeScript (Strict)", "Tailwind CSS Architecture", "TanStack Suite"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-[#d2d7df]">
                      <span className="text-[#ff2a2a]">&gt;</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-[#222733] font-mono text-[10px] text-[#818a99]">
                TARGET: ZERO-RUNTIME-DEFECT
              </div>
            </div>

            {/* Back-End & Data Subsystem */}
            <div className="bg-[#0f1115] p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center font-mono text-xs text-[#818a99] pb-3 border-b border-[#222733]">
                  <span>[ MOD_02 ]</span>
                  <Server size={16} className="text-[#ff2a2a]" />
                </div>
                <h3 className="mt-3 text-lg font-bold uppercase text-[#e4e7eb]">Backend &amp; Relational DB</h3>
                <p className="mt-2 text-xs text-[#818a99] leading-relaxed">
                  Perancangan API RESTful deterministik, integritas transaksi data relasional, pengolahan otentikasi aman dan RBAC.
                </p>
                <div className="mt-4 space-y-2 font-mono text-xs">
                  {["Node.js & Express.js", "PHP & Laravel Framework", "MySQL & PostgreSQL", "FastAPI (Python)"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-[#d2d7df]">
                      <span className="text-[#ff2a2a]">&gt;</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-[#222733] font-mono text-[10px] text-[#818a99]">
                TARGET: ATOMIC_PERSISTENCE
              </div>
            </div>

            {/* Security, AI & DevOps */}
            <div className="bg-[#0f1115] p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center font-mono text-xs text-[#818a99] pb-3 border-b border-[#222733]">
                  <span>[ MOD_03 ]</span>
                  <ShieldCheck size={16} className="text-[#ff2a2a]" />
                </div>
                <h3 className="mt-3 text-lg font-bold uppercase text-[#e4e7eb]">AppSec, AI &amp; Infrastructure</h3>
                <p className="mt-2 text-xs text-[#818a99] leading-relaxed">
                  Penerapan kriptografi Zero-Knowledge (ZKP), simulasi patching otonom multi-agent AI, serta containerisasi lingkungan Linux.
                </p>
                <div className="mt-4 space-y-2 font-mono text-xs">
                  {["ZKP Privacy (Semaphore)", "Autonomous Swarm Agents", "Docker & Docker Compose", "Linux Core Workflows"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-[#d2d7df]">
                      <span className="text-[#ff2a2a]">&gt;</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-[#222733] font-mono text-[10px] text-[#818a99]">
                TARGET: AUDITABLE_HARDENING
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03 // DEPLOYMENTS & PROJECTS */}
        <section id="projects" data-reveal>
          <HeaderBlock code="03" title="TACTICAL PROJECT DEPLOYMENTS" tag="CODE_ARTIFACTS" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: "DEP-01",
                img: p1,
                title: "NUTRI-SHARE",
                domain: "DSS // LOGISTICS",
                tags: ["REACT", "TOPSIS", "ENTROPY"],
                desc: "Sistem pendukung keputusan komputasi distribusi makanan surplus dan foodbank menggunakan normalisasi Entropy-TOPSIS terintegrasi.",
                link: "https://nutrishare.web.id",
              },
              {
                id: "DEP-02",
                img: p2,
                title: "RUANG AMAN",
                domain: "APPSEC // PRIVACY",
                tags: ["ZKP", "SEMAPHORE", "CRYPTO"],
                desc: "Aplikasi whistleblowing pelaporan perundungan anonim dengan verifikasi kriptografi Zero-Knowledge Proof tanpa kebocoran identitas pelapor.",
                link: "https://ruang.rapsdev.web.id",
              },
              {
                id: "DEP-03",
                img: hero,
                title: "AUTOSEC-PATCH",
                domain: "AI // OFFENSIVE SEC",
                tags: ["SWARM", "AUTONOMOUS", "CVE"],
                desc: "Adversarial Co-Evolution Multi-Agent Swarm untuk penemuan celah keamanan kode otomatis dan pengujian patch defensif.",
                link: "https://github.com/ArrafiNurHafiz/AutoSec-Patch",
              },
            ].map((p) => (
              <article
                key={p.id}
                className="border border-[#222733] bg-[#0f1115] flex flex-col justify-between hover:border-[#ff2a2a] transition-all"
              >
                <div>
                  <div className="border-b border-[#222733] bg-[#0c0e12] px-3 py-1.5 font-mono text-[11px] text-[#818a99] flex justify-between">
                    <span>UNIT :: {p.id}</span>
                    <span className="text-[#ff2a2a]">{p.domain}</span>
                  </div>

                  <div className="border-b border-[#222733] aspect-video w-full overflow-hidden bg-black relative">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-full w-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-300"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="font-mono text-lg font-black uppercase text-[#e4e7eb]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#818a99] leading-relaxed">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-1 font-mono text-[10px]">
                      {p.tags.map((t) => (
                        <span key={t} className="border border-[#222733] bg-[#14171d] px-2 py-0.5 text-[#d2d7df]">
                          [{t}]
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-btn w-full justify-between"
                  >
                    <span>LAUNCH_TARGET</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION 04 // TIMELINE & ROLES */}
        <section id="timeline" data-reveal>
          <HeaderBlock code="04" title="OPERATIONAL TIMELINE" tag="SERVICE_HISTORY" />

          <div className="border border-[#222733] bg-[#0f1115] divide-y divide-[#222733]">
            {[
              {
                period: "2026.08 — PRESENT",
                role: "FULL-STACK DEVELOPER INTERN",
                unit: "CV KARYA WAHANA SENTOSA (KWAS)",
                duty: "Pembangunan modul Material Requirements Planning (MRP), integrasi flow frontend-backend, tata kelola skema data, serta transfer pengetahuan teknis.",
              },
              {
                period: "2024.09 — PRESENT",
                role: "STUDENT & RESEARCHER // S1 SISTEM INFORMASI",
                unit: "UNIVERSITAS TEKNOLOGI DIGITAL INDONESIA",
                duty: "Kajian komputasi rekayasa perangkat lunak, sistem pendukung keputusan multikriteria, kriptografi terapan, dan keamanan jaringan.",
              },
              {
                period: "2025.01 — PRESENT",
                role: "TECHNICAL EDUCATOR & CREATOR",
                unit: "YOUTUBE @RAPYTECH // TIKTOK",
                duty: "Diseminasi materi arsitektur Linux, automasi agentik AI, tutorial web engineering, dan kesadaran AppSec untuk publik teknologi.",
              },
            ].map((t) => (
              <div key={t.role} className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-3 font-mono text-xs text-[#ff2a2a] font-bold">
                  {t.period}
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-bold uppercase text-sm text-[#e4e7eb]">{t.role}</h3>
                  <p className="font-mono text-xs text-[#818a99] mt-0.5">{t.unit}</p>
                </div>
                <div className="md:col-span-5 text-xs text-[#818a99] leading-relaxed">
                  {t.duty}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 05 // CITATIONS & COMPETITION */}
        <section id="awards" data-reveal>
          <HeaderBlock code="05" title="VERIFIED CITATIONS &amp; HONORS" tag="COMPETITIONS" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                year: "2026",
                title: "COMPSPHERE 12 // HACKSPHERE",
                rank: "TOP 30 FINALIST",
                org: "International Web3 Hackathon (Devpost)",
              },
              {
                year: "2026",
                title: "GAYATAMA 2026",
                rank: "FINALIS WEB TECHNOLOGY",
                org: "Universitas Negeri Surabaya",
              },
              {
                year: "2026",
                title: "IEEE YESIST12",
                rank: "INTERNATIONAL FINALIST",
                org: "IEEE Indonesia Section & UNM",
              },
              {
                year: "2026",
                title: "INDO-SG ESSAY FORUM",
                rank: "RANK 100 / 314",
                org: "Seamplified Media Pte. Ltd.",
              },
            ].map((a) => (
              <div
                key={a.title}
                className="border border-[#222733] bg-[#0f1115] p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center font-mono text-xs text-[#ff2a2a] pb-2 border-b border-[#222733]">
                    <span>{a.year}</span>
                    <Award size={14} />
                  </div>
                  <h3 className="mt-3 font-bold text-sm uppercase text-[#e4e7eb]">{a.title}</h3>
                  <div className="mt-2 inline-block border border-[#ff2a2a] bg-[#14171d] px-2 py-0.5 font-mono text-[10px] text-[#ff2a2a] font-bold">
                    {a.rank}
                  </div>
                </div>
                <p className="mt-3 text-[11px] text-[#818a99]">{a.org}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 06 // COMMS DISPATCH */}
        <section id="comms" data-reveal>
          <HeaderBlock code="06" title="COMMUNICATIONS &amp; DISPATCH" tag="DIRECT_CHANNEL" />

          <div className="border border-[#222733] bg-[#0f1115] p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl md:text-2xl font-black uppercase text-[#e4e7eb]">
                Inisiasi Saluran Komunikasi Langsung
              </h3>
              <p className="text-xs sm:text-sm text-[#818a99] leading-relaxed">
                Tersedia untuk rekayasa piranti lunak end-to-end, audit keamanan aplikasi web, implementasi otomasi otonom, dan kolaborasi inovasi teknis.
              </p>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#d2d7df]">
                  <Mail size={14} className="text-[#ff2a2a]" />
                  <a href="mailto:arrafinur3@gmail.com" className="hover:text-[#ff2a2a]">
                    arrafinur3@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-[#d2d7df]">
                  <Phone size={14} className="text-[#ff2a2a]" />
                  <a
                    href="https://wa.me/6285927274835"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ff2a2a]"
                  >
                    +62 859-2727-4835 [WHATSAPP_ENDPOINT]
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3 font-mono text-xs">
              <a href="mailto:arrafinur3@gmail.com" className="brutal-btn-primary w-full text-center">
                SEND_DISPATCH_EMAIL &gt;&gt;
              </a>
              <a
                href="https://wa.me/6285927274835"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn w-full text-center"
              >
                WHATSAPP_CHANNEL &gt;&gt;
              </a>
              <a
                href="/CV_Arrafi_Nur_Hafiz.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn w-full text-center"
              >
                DOWNLOAD_VERIFIED_CV.PDF &gt;&gt;
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Industrial Footer */}
      <footer className="border-t border-[#222733] bg-[#090a0c] px-4 py-8 mt-20 font-mono text-xs text-[#818a99]">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span className="font-bold text-[#e4e7eb]">ARRAFI NUR HAFIZ</span> // 2026 INDUSTRIAL BRUTALISM
            <p className="text-[10px] text-[#818a99] mt-0.5">DISCIPLINE: SWISS-GRID-TELEMETRY // NO SOFT GRADIENTS</p>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="border border-[#222733] bg-[#14171d] px-2.5 py-1 text-[#818a99] hover:text-[#ff2a2a] hover:border-[#ff2a2a] transition-colors"
                title={label}
              >
                <span className="text-[10px] font-bold">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
