import { useState, useEffect, useRef } from "react";
import { ArrowRight, Menu, X, ArrowLeft } from "lucide-react";

const NAVY = "#183C62";
const GOLD = "#A88E4B";
const IVORY = "#F2F2F2";
const IVORY_MUTED = "#F2F2F2";
const IVORY_BORDER = "rgba(24,60,98,0.12)";
const TEXT_MUTED = "rgba(24, 60, 98, 0.65)";

const advisoryScenarios = [
  "Banking and lending disputes involving post-closure obligations or documentation.",
  "Complex insurance claim negotiations.",
  "Commercial disagreements where negotiations have reached an impasse.",
];

const services = [
  {
    number: "01",
    title: "Strategic Negotiation Advisory",
    description: "Developing negotiation strategies for commercially significant matters before, during, and after negotiations.",
    tags: ["Strategy Development", "Process Mapping", "Outcome Alignment"],
  },
  {
    number: "02",
    title: "Commercial Dispute Strategy",
    description: "Supporting organizations in resolving complex commercial disputes and conflicts before they escalate to litigation.",
    tags: ["Dispute Resolution", "Interest Alignment", "Risk Mitigation"],
  },
  {
    number: "03",
    title: "Banking & Financial Institution Advisory",
    description: "Advising businesses on strategic negotiations involving financial institutions, including loan closures, security documentation, post-settlement obligations, restructuring discussions, and institutional engagement.",
    tags: ["Loan Closure Support", "Security Release", "Institutional Negotiations"],
  },
  {
    number: "04",
    title: "Insurance Claims & Settlement Advisory",
    description: "Providing strategic negotiation and dispute resolution support for organizations managing commercial insurance claim negotiations, settlement discussions, policy interpretation, and claim resolution.",
    tags: ["Claim Valuation", "Policy Analysis", "Settlement Strategy"],
  },
  {
    number: "05",
    title: "Tech, Media & Telecom Regulation and Policy Consultation",
    description: "Helping organizations navigate regulatory frameworks, compliance environments, customer/enterprise negotiations, and strategic policy consultation where commercial outcomes depend on structured engagement and informed negotiation.",
    tags: ["TMT Policy", "Regulatory Compliance", "Structured Agreements"],
  },
  {
    number: "06",
    title: "Executive Negotiation Support",
    description: "Enabling boardroom preparation for managerial negotiation, supporting founders, executives, and boards in resolving commercial disputes before becoming litigation.",
    tags: ["Boardroom Preparation", "Managerial Negotiation", "Discretion assured"],
  },
];

const pillars = [
  {
    step: "I",
    title: "Prepare",
    body: "Establish alignment, map stakes, and construct facts-based preparation criteria.",
  },
  {
    step: "II",
    title: "Strategize",
    body: "Build a customized strategy blueprint containing concession logic and objective targets.",
  },
  {
    step: "III",
    title: "Execute",
    body: "Work directly alongside leadership, implementing proprietary techniques under high pressure.",
  },
  {
    step: "IV",
    title: "Resolve",
    body: "Secure sustainable commercial agreements and structured resolutions.",
  },
];

const processSteps = [
  {
    title: "PREPARE",
    description: "Establishing commercial context, aligning stakeholder positions, and defining objective targets."
  },
  {
    title: "STRATEGIZE",
    description: "Designing concession pathways, mapping options, and preparing tactical preparation files."
  },
  {
    title: "EXECUTE",
    description: "Operating directly alongside leadership in high-stakes boardroom negotiations."
  },
  {
    title: "RESOLVE",
    description: "Finalizing agreement structures, securing releases, and restoring momentum."
  }
];

const engagementScenarios = [
  "Banking and lending disputes involving post-closure obligations or documentation.",
  "Complex insurance claim negotiations.",
  "Commercial disagreements where negotiations have reached an impasse.",
  "Regulatory or institutional challenges affecting business operations.",
  "High-value commercial settlements requiring structured negotiation.",
  "Multi-stakeholder negotiations where strategic coordination is essential."
];

const scenarios = [
  {
    number: "01",
    category: "BANKING",
    title: "Post-Closure Banking Dispute",
    description: "Loan obligations have been repaid, but unresolved documentation, security releases, or institutional processes continue to delay commercial closure.",
    howWeHelp: "We structure the engagement strategy, align stakeholders, clarify outstanding issues, and negotiate an efficient path to resolution."
  },
  {
    number: "02",
    category: "INSURANCE",
    title: "Insurance Claim Under Dispute",
    description: "A significant loss has occurred, but disagreements over policy interpretation, valuation, documentation, or settlement timelines are delaying resolution.",
    howWeHelp: "We prepare the commercial position, coordinate stakeholder engagement, and support a structured path toward settlement."
  },
  {
    number: "03",
    category: "COMMERCIAL STRATEGY",
    title: "High-Value Negotiation Stalled",
    description: "The relationship still matters, but both sides are entrenched and the gap between positions has become difficult to bridge.",
    howWeHelp: "We identify viable negotiation pathways that protect commercial value while moving the relationship toward a workable resolution."
  },
  {
    number: "04",
    category: "REGULATORY",
    title: "Regulatory Process Creating Commercial Harm",
    description: "Delayed approvals, institutional processes, or unclear channels of engagement are beginning to affect business operations.",
    howWeHelp: "We structure the engagement strategy, prepare key communications, and help navigate the institutional environment effectively."
  },
  {
    number: "05",
    category: "STAKEHOLDER ALIGNMENT",
    title: "Multi-Party Deadlock",
    description: "Lenders, insurers, partners, suppliers, customers, or regulators have competing priorities. Progress has stalled and internal bandwidth is under pressure.",
    howWeHelp: "We create a negotiation framework that surfaces common ground, aligns stakeholders, and restores commercial momentum."
  },
  {
    number: "06",
    category: "EXECUTIVE ADVISORY",
    title: "CEO or Board Facing a Critical Negotiation",
    description: "The stakes are high, the other side is prepared, and leadership needs an independent perspective before making consequential decisions.",
    howWeHelp: "We provide confidential preparation and strategic advisory before and throughout critical negotiations—enabling decisions to be made with clarity, discipline, and control."
  }
];

const industryExperience = [
  {
    title: "Banking & Financial Services",
    items: [
      "Commercial lending",
      "Loan closure processes",
      "Institutional negotiations",
      "Settlement discussions",
      "Documentation disputes"
    ]
  },
  {
    title: "Insurance",
    items: [
      "Commercial claims",
      "Claims settlement negotiations",
      "Coverage interpretation",
      "Institutional engagement"
    ]
  },
  {
    title: "Telecommunications",
    items: [
      "Commercial contracts",
      "Regulatory environments",
      "Customer and enterprise negotiations",
      "Product-related commercial matters"
    ]
  },
  {
    title: "Highly Regulated Industries",
    items: [
      "Organizations operating within complex regulatory frameworks requiring structured engagement with multiple stakeholders."
    ]
  }
];

function GoldRule({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px w-12 ${className}`}
      style={{ backgroundColor: GOLD }}
    />
  );
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["About", "Services", "Founder"];

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(24,60,98,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between h-[72px] lg:h-20">
        <a href="#" className="flex flex-col leading-none gap-1">
          <span
            className="text-white font-semibold tracking-[0.12em] text-sm uppercase"
            style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "0.14em" }}
          >
            Neutral Advisory
          </span>
          <span
            className="text-xs tracking-widest uppercase font-mono font-bold"
            style={{ color: GOLD, fontSize: "8px", letterSpacing: "0.2em" }}
          >
            STRATEGIC NEGOTIATION & DISPUTE ADVISORY
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-12">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="relative text-white/65 hover:text-white transition-colors duration-300 text-[11px] font-semibold uppercase tracking-[0.18em] py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white/40 after:transition-all after:duration-300 hover:after:w-full"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {l.toUpperCase()}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[11px] px-6 py-2.5 transition-all duration-300 tracking-[0.16em] uppercase font-semibold hover:brightness-110"
            style={{
              backgroundColor: GOLD,
              color: NAVY,
              fontFamily: "Inter, sans-serif",
            }}
          >
            CONFIDENTIAL CONSULTATION
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{ backgroundColor: NAVY, borderColor: "rgba(255,255,255,0.1)" }}
        >
          <div className="px-6 py-6 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-white/75 hover:text-white py-3 text-xs uppercase tracking-[0.18em] border-b transition-colors duration-200"
                style={{ borderColor: "rgba(255,255,255,0.07)", fontFamily: "Inter, sans-serif" }}
                onClick={() => setMobileOpen(false)}
              >
                {l.toUpperCase()}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 text-xs py-3 text-center border tracking-[0.16em] uppercase font-semibold transition-all duration-300 hover:bg-white/5"
              style={{ borderColor: GOLD, color: GOLD, fontFamily: "Inter, sans-serif" }}
              onClick={() => setMobileOpen(false)}
            >
              CONFIDENTIAL CONSULTATION
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: NAVY }}
    >
      <div className="max-w-screen-xl mx-auto w-full px-8 lg:px-16 pt-[72px] lg:pt-20">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10 lg:gap-16 items-center min-h-[calc(100vh-72px)] lg:min-h-[calc(100vh-80px)] pt-0 pb-10 lg:pt-0 lg:pb-12">

          {/* Left — content */}
          <div className="hero-reveal flex flex-col justify-center order-1">

            {/* Gold rule only — label removed */}
            <div className="mb-6">
              <div className="h-px w-8" style={{ backgroundColor: GOLD }} />
            </div>

            {/* Main heading */}
            <h1
              className="text-white mb-6"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                letterSpacing: "-0.025em",
                lineHeight: "1.12",
              }}
            >
              When the Stakes Are
              <br />Too High, Strategy
              <br />Matters.
            </h1>

            {/* Body copy — solid gold highlight, white bold text */}
            <div
              className="mb-8 max-w-[520px] p-5 border-l-4"
              style={{
                backgroundColor: GOLD,
                borderColor: "#8a7038",
              }}
            >
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#ffffff",
                  fontSize: "14px",
                  lineHeight: "1.8",
                  fontWeight: 700,
                }}
              >
                High-stake strategic negotiation and commercial dispute advisory, helping organizations navigate complex institutional red tape and achieve resolution through objective thinking, disciplined strategy, and informed decision-making.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 text-sm font-semibold tracking-wide border transition-all duration-300 hover:gap-4 hover:bg-white/5"
                style={{ backgroundColor: "transparent", borderColor: "rgba(255,255,255,0.25)", color: "#fff", fontFamily: "Inter, sans-serif" }}
              >
                Schedule a Confidential Discussion
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm tracking-wide border transition-all duration-300 hover:bg-white/5"
                style={{ borderColor: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.65)", fontFamily: "Inter, sans-serif" }}
              >
                Explore Our Approach
              </a>
            </div>

          </div>

          {/* Right — founder portrait placeholder */}
          <div className="hero-reveal hero-reveal-delay relative order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] lg:max-w-none">
              <div
                className="relative aspect-[4/5] w-full overflow-hidden"
                style={{
                  background: `linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(24,60,98,0.4) 100%)`,
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${NAVY} 0%, transparent 45%)` }}
                />
                <div
                  className="absolute top-0 left-0 w-12 h-12 border-t border-l"
                  style={{ borderColor: "rgba(168,142,75,0.45)" }}
                />
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-5 border-l-2"
                style={{ borderColor: GOLD, background: `linear-gradient(to top, ${NAVY}, transparent)` }}
              >
                <div className="text-white font-semibold text-sm leading-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Shrivatsan Balagopal
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase mt-1.5 font-semibold" style={{ color: GOLD, fontFamily: "Inter, sans-serif" }}>
                  Founder &amp; Principal Advisor
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function BalanceDiagram() {
  return (
    <div className="relative w-full aspect-square max-w-[320px] mx-auto flex items-center justify-center">
      <div className="absolute w-[78%] h-[2px]" style={{ backgroundColor: IVORY_BORDER }} />
      <div className="absolute w-4 h-4 rounded-full border-2 bg-white" style={{ borderColor: GOLD }} />
      <div className="absolute h-[78%] w-px border-l border-dashed" style={{ borderColor: IVORY_BORDER }} />

      <div className="absolute left-4 -translate-y-7 flex flex-col items-center">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "rgba(24,60,98,0.35)" }} />
        <span className="text-[9px] font-mono tracking-[0.18em] mt-2 uppercase font-semibold" style={{ color: TEXT_MUTED }}>Bias</span>
      </div>

      <div className="absolute right-4 translate-y-7 flex flex-col items-center">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "rgba(24,60,98,0.35)" }} />
        <span className="text-[9px] font-mono tracking-[0.18em] mt-2 uppercase font-semibold" style={{ color: TEXT_MUTED }}>Impasse</span>
      </div>

      <div className="absolute top-4 flex flex-col items-center">
        <div className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] text-white" style={{ backgroundColor: GOLD }}>
          ✓
        </div>
        <span className="text-[9px] font-mono tracking-[0.18em] font-bold mt-2 uppercase" style={{ color: GOLD }}>
          Neutral Perspective
        </span>
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
        <path d="M 20 44 Q 50 15 80 56" fill="none" stroke={GOLD} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.55" />
      </svg>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="overflow-hidden">
      {/* Top section — heading + image */}
      <div className="py-16 lg:py-20" style={{ backgroundColor: IVORY }}>
        <div className="max-w-screen-xl mx-auto px-8 lg:px-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left: content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10" style={{ backgroundColor: GOLD }} />
                <span
                  className="font-bold uppercase tracking-[0.22em]"
                  style={{ fontFamily: "Manrope, sans-serif", color: GOLD, fontSize: "11px" }}
                >
                  ABOUT US
                </span>
              </div>

              <h2
                className="font-bold leading-tight mb-6"
                style={{ fontFamily: "Manrope, sans-serif", color: NAVY, fontSize: "clamp(2rem, 3vw, 2.75rem)", letterSpacing: "-0.02em" }}
              >
                Why Neutral?
              </h2>

              <div className="h-px w-10 mb-6" style={{ backgroundColor: GOLD }} />

              <p
                className="leading-relaxed mb-5 font-semibold"
                style={{ fontFamily: "Inter, sans-serif", color: NAVY, fontSize: "15px", lineHeight: "1.8" }}
              >
                Successful negotiations are built on facts, preparation, commercial understanding, and disciplined execution.
              </p>

              <p
                className="leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", color: TEXT_MUTED, fontSize: "14px", lineHeight: "1.85" }}
              >
                Being neutral enables better analysis, relevant negotiation strategy, and more sustainable commercial outcomes rather than biased, myopic, and stuck-in-impasse thinking.
              </p>
            </div>

            {/* Right: building image placeholder */}
            <div
              className="w-full aspect-[4/3] rounded"
              style={{
                background: `linear-gradient(135deg, rgba(24,60,98,0.08) 0%, rgba(168,142,75,0.12) 100%)`,
                border: "1px solid rgba(24,60,98,0.1)",
              }}
            />

          </div>
        </div>
      </div>

      {/* Middle section — white card with 3 principles */}
      <div className="py-16" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
          <div className="bg-white p-10 lg:p-12 border" style={{ borderColor: "rgba(24,60,98,0.1)" }}>
            
            <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
              {/* Left: card heading */}
              <div className="border-l-4 pl-6" style={{ borderColor: GOLD }}>
                <h3
                  className="font-bold leading-tight mb-2"
                  style={{ fontFamily: "Manrope, sans-serif", color: NAVY, fontSize: "15px", letterSpacing: "0.02em" }}
                >
                  THE MEANING BEHIND
                  <br />THE NAME "NEUTRAL"
                </h3>
                <p className="text-xs" style={{ fontFamily: "Inter, sans-serif", color: TEXT_MUTED, lineHeight: "1.7" }}>
                  The name "Neutral" reflects our core belief.
                </p>
              </div>

              {/* Right: 3 principle columns */}
              <div className="grid md:grid-cols-3 gap-8">
                {/* Principle 1 */}
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 flex items-center justify-center" style={{ borderColor: GOLD }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2 text-xs uppercase tracking-wider" style={{ fontFamily: "Manrope, sans-serif", color: NAVY }}>
                    NOT TAKING SIDES,
                    <br />TAKING THE RIGHT PATH
                  </h4>
                  <p className="text-xs" style={{ fontFamily: "Inter, sans-serif", color: TEXT_MUTED, lineHeight: "1.7" }}>
                    We are not aligned to one side.
                  </p>
                </div>

                {/* Principle 2 */}
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 flex items-center justify-center" style={{ borderColor: GOLD }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2 text-xs uppercase tracking-wider" style={{ fontFamily: "Manrope, sans-serif", color: NAVY }}>
                    CLARITY OVER
                    <br />CONFLICT
                  </h4>
                  <p className="text-xs" style={{ fontFamily: "Inter, sans-serif", color: TEXT_MUTED, lineHeight: "1.7" }}>
                    Neutrality allows us to see clearly, analyze deeply, and advise wisely.
                  </p>
                </div>

                {/* Principle 3 */}
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 flex items-center justify-center" style={{ borderColor: GOLD }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2 text-xs uppercase tracking-wider" style={{ fontFamily: "Manrope, sans-serif", color: NAVY }}>
                    OUTCOMES OVER
                    <br />POSITIONING
                  </h4>
                  <p className="text-xs" style={{ fontFamily: "Inter, sans-serif", color: TEXT_MUTED, lineHeight: "1.7" }}>
                    We focus on outcomes that create long-term value, not short-term wins.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom section — quote + diagram side by side */}
      <div className="py-16" style={{ backgroundColor: IVORY }}>
        <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: quote box */}
            <div className="border-l-4 pl-8 py-6" style={{ borderColor: GOLD, backgroundColor: "rgba(255,255,255,0.5)" }}>
              <span
                className="text-[11px] uppercase font-bold tracking-[0.2em] block mb-4"
                style={{ color: GOLD, fontFamily: "Manrope, sans-serif" }}
              >
                THE NEUTRAL PERSPECTIVE-PHILOSOPHY
              </span>
              <p
                className="leading-relaxed italic"
                style={{ fontFamily: "Inter, sans-serif", color: NAVY, fontSize: "14px", lineHeight: "1.8" }}
              >
                &ldquo;It is wise to choose a dedicated expert partner to handle disputes and resolve rather than businesses facing in-house by exhausting time, money and developing stress within the organization.&rdquo;
              </p>
            </div>

            {/* Right: Neutral Perspective diagram */}
            <div className="flex flex-col items-center">
              <span
                className="text-xs uppercase font-bold tracking-[0.2em] mb-6"
                style={{ fontFamily: "Manrope, sans-serif", color: NAVY }}
              >
                NEUTRAL PERSPECTIVE
              </span>
              <BalanceDiagram />
            </div>

          </div>
        </div>
      </div>

      {/* PART 2: THE NEUTRAL METHOD */}
      <div id="method" style={{ backgroundColor: NAVY }} className="py-10 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: GOLD }} />
              <span className="text-xs uppercase tracking-[0.25em]" style={{ color: GOLD, fontFamily: "Inter, sans-serif" }}>
                Proprietary Framework
              </span>
            </div>
            <h2
              className="text-4xl font-bold leading-tight text-white mb-4"
              style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.02em" }}
            >
              The Neutral Method
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.65)" }}
            >
              Focused preparation, dedicated partner in high stakes implementing proprietary techniques and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="p-8 bg-white/95 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 relative group rounded"
              >
                <div
                  className="text-3xl font-bold mb-4 font-serif"
                  style={{ color: GOLD }}
                >
                  {p.step}
                </div>
                <div
                  className="h-px w-8 mb-6"
                  style={{ backgroundColor: GOLD, opacity: i === 0 ? 1 : 0.4 }}
                />
                <h4
                  className="font-bold mb-3 text-lg tracking-wide"
                  style={{ fontFamily: "Manrope, sans-serif", color: NAVY }}
                >
                  {p.title}
                </h4>
                <p
                  className="text-xs leading-relaxed font-medium"
                  style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.75", color: TEXT_MUTED }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" style={{ backgroundColor: IVORY }}>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16 pt-14 pb-14">

        {/* Header — single line layout */}
        <div className="flex items-center gap-16 mb-12">
          {/* Left — heading */}
          <div className="shrink-0">
            <div className="h-px w-10 mb-5" style={{ backgroundColor: GOLD }} />
            <h2
              className="font-bold leading-tight whitespace-nowrap"
              style={{ fontFamily: "Manrope, sans-serif", color: NAVY, fontSize: "1.75rem", letterSpacing: "-0.02em" }}
            >
              Services
            </h2>
          </div>
          {/* Right — description, more legible */}
          <div className="flex-1 pt-6">
            <p style={{ fontFamily: "Inter, sans-serif", color: NAVY, fontSize: "14px", lineHeight: "1.85", fontWeight: 500 }}>
              Neutral Advisory provides structured strategic support across complex commercial issues. Each engagement is configured to the specific dynamics, stakeholders, and objectives of the situation.
            </p>
          </div>
        </div>

        {/* Card grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.number}
              className="bg-white flex flex-col p-7 hover:shadow-md transition-shadow duration-200"
              style={{ border: "1px solid rgba(24,60,98,0.08)" }}
            >
              {/* Number + arrow */}
              <div className="flex items-center justify-between mb-5">
                <span style={{ fontFamily: "Inter, sans-serif", color: TEXT_MUTED, fontSize: "11px", fontVariantNumeric: "tabular-nums" }}>
                  {s.number}
                </span>
                <ArrowRight size={13} style={{ color: TEXT_MUTED, opacity: 0.4 }} />
              </div>

              {/* Title */}
              <h4
                className="font-bold mb-3 leading-snug"
                style={{ fontFamily: "Manrope, sans-serif", color: NAVY, fontSize: "15px" }}
              >
                {s.title}
              </h4>

              {/* Description */}
              <p
                className="leading-relaxed mb-6 flex-1"
                style={{ fontFamily: "Inter, sans-serif", color: TEXT_MUTED, fontSize: "12px", lineHeight: "1.8" }}
              >
                {s.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "11px",
                      color: TEXT_MUTED,
                      border: "1px solid rgba(24,60,98,0.15)",
                      padding: "3px 10px",
                      borderRadius: "2px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhenEngage() {
  return (
    <section style={{ backgroundColor: IVORY, borderTop: "1px solid rgba(24,60,98,0.06)" }}>
      {/* Intro text block */}
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16 pt-12 pb-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — heading */}
          <div>
            <div className="h-px w-10 mb-5" style={{ backgroundColor: GOLD }} />
            <h2
              className="font-bold leading-snug"
              style={{ fontFamily: "Manrope, sans-serif", color: NAVY, fontSize: "clamp(1.4rem, 2vw, 1.75rem)", letterSpacing: "-0.02em" }}
            >
              When do businesses engage Neutral Advisory?
            </h2>
          </div>
          {/* Right — equal visual weight */}
          <div className="flex flex-col gap-3">
            <p
              className="leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", color: TEXT_MUTED, fontSize: "14px", lineHeight: "1.85" }}
            >
              Organizations typically seek our support when commercial issues require strategic negotiation beyond routine business discussions.
            </p>
            <p
              className="font-semibold italic"
              style={{ fontFamily: "Inter, sans-serif", color: NAVY, fontSize: "13px" }}
            >
              &ldquo;Here are the types of situations where that support becomes relevant.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Timeline strip */}
      <div
        className="flex items-stretch border-t px-8 lg:px-16"
        style={{ minHeight: "190px", borderColor: "rgba(24,60,98,0.08)", backgroundColor: IVORY }}
      >
        <div className="flex-1 overflow-x-auto" style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}>
          <div className="flex h-full" style={{ minWidth: "max-content" }}>
            {engagementScenarios.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between pl-8 pr-6 py-8 border-r"
                style={{
                  borderColor: "rgba(24,60,98,0.08)",
                  width: "230px",
                  borderTop: `2px solid ${GOLD}`,
                }}
              >
                <div>
                  <span className="block mb-3 font-mono font-bold" style={{ color: GOLD, fontSize: "11px", letterSpacing: "0.08em" }}>
                    {String(idx + 1).padStart(2, "0")}.
                  </span>
                  <p className="font-medium leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: NAVY, fontSize: "13px", lineHeight: "1.7" }}>
                    {item}
                  </p>
                </div>
                <ArrowRight size={13} className="mt-4" style={{ color: GOLD, opacity: 0.6 }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CommercialScenarios() {
  return (
    <section id="scenarios" className="py-10 bg-[#F2F2F2] border-t" style={{ borderColor: "rgba(24,60,98,0.06)" }}>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-8">
          <GoldRule className="mx-auto mb-4" />
          <h2
            className="text-4xl font-bold leading-tight text-[#183C62] mb-4"
            style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.02em" }}
          >
            Recognize Your Situation.
          </h2>
          <p
            className="text-lg leading-relaxed text-[rgba(24, 60, 98, 0.65)] max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            These are the moments where structured preparation and an independent perspective can change the outcome.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {scenarios.map((s) => (
            <div
              key={s.number}
              className="bg-[#F2F2F2] p-5 border flex flex-col justify-between hover:bg-white hover:shadow-sm transition-all duration-300"
              style={{ borderColor: IVORY_BORDER }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold" style={{ color: GOLD }}>
                    {s.number}
                  </span>
                  <span className="text-[9px] font-bold tracking-[0.15em] uppercase" style={{ fontFamily: "Inter, sans-serif", color: TEXT_MUTED }}>
                    {s.category}
                  </span>
                </div>
                <h4
                  className="font-bold text-[#183C62] leading-snug mb-3 text-base"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {s.title}
                </h4>
                <p
                  className="text-xs leading-relaxed text-[rgba(24, 60, 98, 0.65)] mb-4"
                  style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.8" }}
                >
                  {s.description}
                </p>
              </div>
              <div
                className="mt-auto pt-4 border-t"
                style={{ borderColor: "rgba(24,60,98,0.08)" }}
              >
                <span className="text-[10px] uppercase font-mono tracking-widest block text-[#A88E4B] mb-2 font-bold">
                  How we help
                </span>
                <p
                  className="text-xs text-[#183C62] leading-relaxed italic"
                  style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.7" }}
                >
                  {s.howWeHelp}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion / Takeaway Callout */}
        <div className="mt-8 text-center">
          <div className="inline-block px-8 py-6 bg-white border border-dashed border-[#A88E4B]/40 max-w-2xl">
            <p className="text-sm font-medium text-[#183C62]" style={{ fontFamily: "Inter, sans-serif" }}>
              “Whatever commercial situation you are facing, there may be a structured negotiation or advisory pathway to move it forward.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryExperience() {
  return (
    <section id="experience" className="py-8 bg-white border-y" style={{ borderColor: "rgba(24,60,98,0.06)" }}>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4">
            <GoldRule className="mb-6" />
            <h2
              className="text-3xl font-bold leading-tight"
              style={{ fontFamily: "Manrope, sans-serif", color: "#183C62", letterSpacing: "-0.02em" }}
            >
              Experience Across Complex Commercial Environments
            </h2>
          </div>
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
            {industryExperience.map((ind) => (
              <div key={ind.title} className="bg-white p-8 border" style={{ borderColor: "rgba(24,60,98,0.06)" }}>
                <h4 className="font-bold text-base mb-4 text-[#183C62]" style={{ fontFamily: "Manrope, sans-serif" }}>
                  {ind.title}
                </h4>
                <div className="h-px w-6 bg-[#A88E4B] mb-4" />
                <ul className="flex flex-col gap-2">
                  {ind.items.map((item, i) => (
                    <li key={i} className="text-xs text-[rgba(24, 60, 98, 0.65)] leading-relaxed flex items-start gap-2">
                      <span className="text-[#A88E4B] mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section id="founder" className="py-10 bg-white">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Founder Portrait Placeholder */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <div
                className="w-full bg-[#183C62] border border-dashed border-[#A88E4B]/40 flex flex-col items-center justify-center p-8 text-center"
                style={{ height: "550px" }}
              >
                <span className="text-[#A88E4B] text-[10px] tracking-[0.2em] uppercase mb-2 font-mono">Image Placeholder</span>
                <span className="text-white/80 font-medium text-base mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>
                  [IMAGE PLACEHOLDER — FOUNDER PORTRAIT]
                </span>
                <span className="text-white/40 text-xs font-mono max-w-xs leading-relaxed mt-2">
                  Shrivatsan Balagopal
                  <br />
                  Founder & Principal Advisor
                  <br />
                  Dimensions: 900 × 1100 px (Grayscale placeholder)
                </span>
              </div>
              {/* Gold frame accent */}
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 pointer-events-none"
                style={{ borderColor: GOLD }}
              />
            </div>
          </div>

          {/* Right: Story */}
          <div className="lg:col-span-7">
            <GoldRule className="mb-6" />
            <h2
              className="text-4xl font-bold leading-tight"
              style={{ fontFamily: "Manrope, sans-serif", color: "#183C62", letterSpacing: "-0.02em" }}
            >
              Founder & Principal
            </h2>
            <div className="mt-2 text-xl font-bold" style={{ fontFamily: "Manrope, sans-serif", color: GOLD }}>
              Shrivatsan Balagopal
            </div>

            <div className="flex flex-col gap-6 mt-10">
              <div className="p-5 border border-dashed border-[#A88E4B]/40 bg-[#F2F2F2]">
                <h4 className="text-xs uppercase tracking-widest mb-3 font-mono text-[#A88E4B] font-bold">Biography</h4>
                <p className="text-xs font-medium text-[#183C62] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  [FOUNDER BIOGRAPHY PLACEHOLDER]
                </p>
              </div>

              <div className="p-5 border border-dashed border-[#A88E4B]/40 bg-[#F2F2F2]">
                <h4 className="text-xs uppercase tracking-widest mb-3 font-mono text-[#A88E4B] font-bold">Expertise</h4>
                <p className="text-xs font-medium text-[#183C62] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  [FOUNDER EXPERTISE PLACEHOLDER]
                </p>
              </div>

              <div className="p-5 border border-dashed border-[#A88E4B]/40 bg-[#F2F2F2]">
                <h4 className="text-xs uppercase tracking-widest mb-3 font-mono text-[#A88E4B] font-bold">Endorsement</h4>
                <p className="text-xs font-medium text-[#183C62] leading-relaxed italic" style={{ fontFamily: "Inter, sans-serif" }}>
                  [ENDORSEMENT PLACEHOLDER]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    organization: "",
    email: "",
    matter: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fieldStyle: React.CSSProperties = {
    fontFamily: "Inter, sans-serif",
    fontSize: "0.875rem",
    color: "#183C62",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: `1px solid rgba(24,60,98,0.2)`,
    borderRadius: 0,
    padding: "12px 0",
    width: "100%",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "Inter, sans-serif",
    fontSize: "10px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: TEXT_MUTED,
    display: "block",
    marginBottom: "4px",
  };

  return (
    <section id="contact" className="py-10 bg-[#F2F2F2]">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <GoldRule className="mb-6" />
            <h2
              className="text-4xl font-bold leading-tight mb-8"
              style={{ fontFamily: "Manrope, sans-serif", color: "#183C62", letterSpacing: "-0.02em" }}
            >
              Schedule a
              <br />
              Confidential
              <br />
              Discussion
            </h2>
            <p
              className="text-sm leading-relaxed mb-10"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(24, 60, 98, 0.65)", lineHeight: "1.85" }}
            >
              All inquiries are handled directly by Shrivatsan Balagopal and are treated with complete discretion. We respond to qualified engagements within 24 hours.
            </p>

            <div className="flex flex-col gap-6">
              {[
                { label: "Direct Contact", value: "shrivatsan@neutraladvisory.com" },
                { label: "Engagements", value: "Confidential Advisory" },
              ].map((c) => (
                <div key={c.label}>
                  <span style={{ ...labelStyle }}>{c.label}</span>
                  <span
                    className="text-sm font-medium"
                    style={{ fontFamily: "Inter, sans-serif", color: "#183C62" }}
                  >
                    {c.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <div
                className="w-full bg-white border border-dashed border-[#183C62]/10 flex flex-col items-center justify-center p-6 text-center"
                style={{ height: "200px" }}
              >
                <span className="text-[#A88E4B] text-[9px] tracking-[0.2em] uppercase mb-1 font-mono">Image Placeholder</span>
                <span className="text-[#183C62] font-medium text-sm" style={{ fontFamily: "Manrope, sans-serif" }}>
                  [IMAGE PLACEHOLDER — ADVISORY VISUAL]
                </span>
                <span className="text-[10px] font-mono mt-1 leading-relaxed" style={{ color: TEXT_MUTED }}>
                  Confidential consultation setting (900 × 600 px)
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full py-20">
                <div className="h-px w-12 mb-8" style={{ backgroundColor: GOLD }} />
                <h3
                  className="text-3xl font-bold mb-4"
                  style={{ fontFamily: "Manrope, sans-serif", color: "#183C62" }}
                >
                  Thank you.
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", color: "rgba(24, 60, 98, 0.65)" }}
                >
                  Your inquiry has been received. Shrivatsan will respond personally within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {[
                    { key: "name", label: "Full Name", placeholder: "James Whitmore" },
                    { key: "title", label: "Title / Role", placeholder: "Chief Executive Officer" },
                    { key: "organization", label: "Organization", placeholder: "Acme Corporation" },
                    { key: "email", label: "Email Address", placeholder: "james@acme.com" },
                  ].map(({ key, label, placeholder }) => (
                    <div key={key}>
                      <label style={labelStyle}>{label}</label>
                      <input
                        type={key === "email" ? "email" : "text"}
                        placeholder={placeholder}
                        value={(formData as any)[key]}
                        onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                        style={fieldStyle}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={labelStyle}>Nature of Matter</label>
                  <select
                    value={formData.matter}
                    onChange={(e) => setFormData({ ...formData, matter: e.target.value })}
                    style={{ ...fieldStyle, cursor: "pointer" }}
                  >
                    <option value="" disabled>Select one</option>
                    <option>Strategic Negotiation Advisory</option>
                    <option>Commercial Dispute Strategy</option>
                    <option>Banking & Financial Institution Advisory</option>
                    <option>Insurance Claims & Settlement Advisory</option>
                    <option>Tech, Media & Telecom Regulation and Policy Consultation</option>
                    <option>Executive Negotiation Support</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Brief Description</label>
                  <textarea
                    rows={5}
                    placeholder="Please share as much or as little as you are comfortable with at this stage. All information is held in strict confidence."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...fieldStyle, resize: "none" }}
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 px-10 py-4 text-sm font-medium tracking-wide transition-all duration-200 hover:gap-5"
                    style={{
                      backgroundColor: "#183C62",
                      color: "white",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Submit Inquiry
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                  <p
                    className="mt-4 text-xs"
                    style={{ color: TEXT_MUTED, fontFamily: "Inter, sans-serif" }}
                  >
                    All communications are held in strict confidence and are not shared with third parties.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: NAVY }} className="pt-8 pb-6">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 pb-12 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="lg:col-span-4">
            <div className="mb-2">
              <span
                className="text-white font-semibold tracking-[0.14em] text-sm uppercase"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Neutral Advisory
              </span>
            </div>
            <div
              className="text-xs tracking-widest uppercase mb-6 font-mono font-bold"
              style={{ color: GOLD, fontSize: "8px" }}
            >
              STRATEGIC NEGOTIATION & DISPUTE ADVISORY
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.35)", lineHeight: "1.8" }}
            >
              An independent strategic negotiation and dispute resolution advisory firm.
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h4
              className="text-xs uppercase tracking-widest mb-6 font-bold"
              style={{ color: GOLD, fontFamily: "Inter, sans-serif", fontSize: "10px" }}
            >
              Services
            </h4>
            {["Strategic Negotiation", "Commercial Dispute Strategy", "Banking & Finance Navigation", "Insurance Claims Advisory", "TMT Policy Navigation", "Executive Negotiation Support"].map((l) => (
              <a
                key={l}
                href="#services"
                className="block text-xs mb-3 hover:text-white transition-colors duration-150"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Inter, sans-serif" }}
              >
                {l}
              </a>
            ))}
          </div>

          <div className="lg:col-span-2">
            <h4
              className="text-xs uppercase tracking-widest mb-6 font-bold"
              style={{ color: GOLD, fontFamily: "Inter, sans-serif", fontSize: "10px" }}
            >
              Firm
            </h4>
            {["About", "Services", "Founder", "Contact"].map((l) => (
              <a
                key={l}
                href={l === "Contact" ? "#contact" : `#${l.toLowerCase()}`}
                className="block text-sm mb-3 hover:text-white transition-colors duration-150"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Inter, sans-serif" }}
              >
                {l}
              </a>
            ))}
          </div>

          <div className="lg:col-span-1">
            <h4
              className="text-xs uppercase tracking-widest mb-6 font-bold"
              style={{ color: GOLD, fontFamily: "Inter, sans-serif", fontSize: "10px" }}
            >
              Office
            </h4>
            <p
              className="text-xs leading-relaxed whitespace-nowrap"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Inter, sans-serif", lineHeight: "1.75" }}
            >
              Park Avenue South
              <br />
              New York, NY 10016
              <br />
              United States
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.25)", fontFamily: "Inter, sans-serif" }}
          >
            © {new Date().getFullYear()} Neutral Advisory LLC. All rights reserved.
            Neutral Advisory is not a law firm and does not provide legal services.
          </p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Engagement"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs hover:text-white/50 transition-colors duration-150"
                style={{ color: "rgba(255,255,255,0.25)", fontFamily: "Inter, sans-serif" }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen selection:bg-[#A88E4B] selection:text-white" style={{ fontFamily: "Inter, sans-serif", backgroundColor: IVORY }}>
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(24,60,98,0.15); border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(24,60,98,0.3); }
        input::placeholder, textarea::placeholder { color: rgba(24,60,98,0.3); }
        input:focus, textarea:focus, select:focus { border-bottom-color: ${NAVY} !important; }
        select option { color: ${NAVY}; background: white; }
        .service-card:hover h3 { color: ${GOLD}; }
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-reveal {
          animation: fadeUp 0.7s ease-out both;
        }
        .hero-reveal-delay {
          animation-delay: 0.15s;
        }
        .about-reveal {
          animation: fadeUp 0.7s ease-out both;
        }
        .about-reveal-delay {
          animation-delay: 0.12s;
        }
      `}</style>
      <NavBar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhenEngage />
      <CommercialScenarios />
      <IndustryExperience />
      <Founder />
      <Contact />
      <Footer />
    </div>
  );
}
