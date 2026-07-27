import { useState, useEffect, useRef } from "react";
import { 
  ArrowRight, 
  Menu, 
  X, 
  Check, 
  Shield, 
  Target, 
  TrendingUp,
  Users,
  FileText,
  Lightbulb,
  Scale,
  Clock,
  Building2
} from "lucide-react";

// Design tokens - 8-point spacing system base
const NAVY = "#183C62";
const GOLD = "#A88E4B";
const IVORY = "#F2F2F2";
const IVORY_MUTED = "#F2F2F2";
const IVORY_BORDER = "rgba(24,60,98,0.12)";
const TEXT_MUTED = "rgba(24, 60, 98, 0.65)";
const SPACING_UNIT = 8;

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

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["About", "Services", "Founder"];

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(24,60,98,0.95)" : "rgba(24,60,98,0.7)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(168,142,75,0.2)" : "1px solid rgba(255,255,255,0.05)",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.1)" : "none"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between" style={{
        height: scrolled ? "72px" : "80px",
        transition: "height 300ms"
      }}>
        
        <a href="#" className="flex items-center gap-3 group" aria-label="Neutral Advisory Home">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105" style={{
            background: `linear-gradient(135deg, ${GOLD}, #8a7038)`,
            boxShadow: "0 2px 8px rgba(168,142,75,0.3)"
          }}>
            <Scale size={20} className="text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span
              className="text-white font-semibold tracking-tight text-base"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Neutral Advisory
            </span>
            
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="relative text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium group uppercase"
              style={{ fontFamily: "Inter, sans-serif", letterSpacing: "0.08em" }}
              aria-label={`Navigate to ${l}`}
            >
              {l.toUpperCase()}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: GOLD }} />
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105 uppercase"
            style={{
              backgroundColor: GOLD,
              color: NAVY,
              fontFamily: "Inter, sans-serif",
              borderRadius: "6px",
              letterSpacing: "0.08em"
            }}
            aria-label="Schedule confidential consultation"
          >
            Confidential Consultation
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="lg:hidden border-t backdrop-blur-xl"
          style={{ 
            backgroundColor: "rgba(24,60,98,0.98)", 
            borderColor: "rgba(168,142,75,0.2)" 
          }}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-6 py-6 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-white/80 hover:text-white py-3 text-base border-b transition-colors duration-200 uppercase"
                style={{ borderColor: "rgba(255,255,255,0.05)", fontFamily: "Inter, sans-serif", letterSpacing: "0.08em" }}
                onClick={() => setMobileOpen(false)}
              >
                {l.toUpperCase()}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 text-center py-3 px-6 text-base font-semibold rounded transition-all duration-300 uppercase"
              style={{ backgroundColor: GOLD, color: NAVY, fontFamily: "Inter, sans-serif", letterSpacing: "0.08em" }}
              onClick={() => setMobileOpen(false)}
            >
              Confidential Consultation
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
      style={{ backgroundColor: NAVY, minHeight: "85vh" }}
    >
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pt-24 lg:pt-32 relative">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center pb-20">

          {/* Left — Enterprise messaging */}
          <div className="space-y-8">
            
            {/* Trust badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border" 
              style={{ 
                backgroundColor: "rgba(168,142,75,0.1)", 
                borderColor: "rgba(168,142,75,0.3)"
              }}>
              <Shield size={14} style={{ color: GOLD }} />
              <span className="text-xs" style={{ color: GOLD, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.08em", fontWeight: 500 }}>
                STRATEGIC NEGOTIATION & DISPUTE ADVISORY
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="text-white leading-[1.08]"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontWeight: 500,
                fontSize: "clamp(2.5rem, 4.8vw, 3.85rem)",
                letterSpacing: "-0.02em",
                maxWidth: "18ch"
              }}
            >
              When the Stakes Are Too High, Strategy Matters
            </h1>

            {/* Supporting copy - Golden box with white text */}
            <div
              className="leading-relaxed max-w-[65ch] p-6 border-l-4"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#fff",
                fontSize: "1rem",
                lineHeight: "1.7",
                fontWeight: 500,
                backgroundColor: GOLD,
                borderColor: "#8a7038"
              }}
            >
              High-stake strategic negotiation and commercial dispute advisory, helping organizations navigate complex institutional red tape and achieve resolution through objective thinking, disciplined strategy, and informed decision-making.
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-medium tracking-wide border transition-all duration-300 hover:bg-white/10 hover:gap-4"
                style={{ 
                  borderColor: "rgba(255,255,255,0.2)", 
                  color: "#fff", 
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500
                }}
                aria-label="Schedule a confidential discussion"
              >
                Schedule Confidential Discussion
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide border transition-all duration-300 hover:bg-white/10"
                style={{ 
                  borderColor: "rgba(255,255,255,0.2)", 
                  color: "#fff", 
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500
                }}
                aria-label="Learn about our approach"
              >
                Our Approach
              </a>
            </div>
          </div>

          {/* Right — Executive visual */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden border" style={{
              background: `linear-gradient(160deg, rgba(255,255,255,0.08) 0%, rgba(24,60,98,0.6) 100%)`,
              borderColor: "rgba(168,142,75,0.3)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)"
            }}>
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2" style={{ borderColor: GOLD }} />
              
              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t backdrop-blur-sm" 
                style={{ 
                  borderColor: "rgba(168,142,75,0.3)",
                  background: `linear-gradient(to top, ${NAVY}cc, transparent)` 
                }}>
                <div className="text-white font-medium text-base mb-1" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
                  Shrivatsan Balagopal
                </div>
                <div className="text-xs tracking-[0.14em] uppercase font-medium" style={{ color: GOLD, fontFamily: "'IBM Plex Mono', monospace" }}>
                  Founder & Principal Advisor
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
    <div className="flex items-center justify-center w-full py-4">
      <svg width="480" height="300" viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Dashed circle connecting all points */}
        <circle cx="240" cy="150" r="105" stroke={GOLD} strokeWidth="1.5" strokeDasharray="5 5" fill="none" opacity="0.35" />

        {/* Center - NEUTRAL with checkmark */}
        <g>
          <circle cx="240" cy="150" r="30" fill={GOLD} />
          <circle cx="240" cy="150" r="25" fill="white" />
          <path d="M232 150 L238 156 L249 144" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="240" y="196" textAnchor="middle" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", fontWeight: 600, fill: NAVY, letterSpacing: "0.12em" }}>
            NEUTRAL
          </text>
        </g>

        {/* Top Left - BIAS */}
        <g>
          <circle cx="135" cy="65" r="17" fill={NAVY} opacity="0.85" />
          <text x="135" y="45" textAnchor="middle" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", fontWeight: 600, fill: NAVY, letterSpacing: "0.06em" }}>
            BIAS
          </text>
          <line x1="150" y1="74" x2="213" y2="132" stroke={GOLD} strokeWidth="1" strokeDasharray="3 3" opacity="0.45" />
        </g>

        {/* Top Right - MYOPIC */}
        <g>
          <circle cx="345" cy="65" r="17" fill={NAVY} opacity="0.85" />
          <text x="345" y="45" textAnchor="middle" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", fontWeight: 600, fill: NAVY, letterSpacing: "0.06em" }}>
            MYOPIC
          </text>
          <line x1="330" y1="74" x2="267" y2="132" stroke={GOLD} strokeWidth="1" strokeDasharray="3 3" opacity="0.45" />
        </g>

        {/* Bottom Left - EMOTION */}
        <g>
          <circle cx="135" cy="235" r="17" fill={NAVY} opacity="0.85" />
          <text x="135" y="262" textAnchor="middle" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", fontWeight: 600, fill: NAVY, letterSpacing: "0.06em" }}>
            EMOTION
          </text>
          <line x1="150" y1="226" x2="213" y2="168" stroke={GOLD} strokeWidth="1" strokeDasharray="3 3" opacity="0.45" />
        </g>

        {/* Bottom Right - IMPASSE */}
        <g>
          <circle cx="345" cy="235" r="17" fill={NAVY} opacity="0.85" />
          <text x="345" y="257" textAnchor="middle" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "8.5px", fontWeight: 600, fill: NAVY, letterSpacing: "0.04em" }}>
            POSITIONAL
          </text>
          <text x="345" y="268" textAnchor="middle" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "8.5px", fontWeight: 600, fill: NAVY, letterSpacing: "0.04em" }}>
            LOCK-IN
          </text>
          <line x1="330" y1="226" x2="267" y2="168" stroke={GOLD} strokeWidth="1" strokeDasharray="3 3" opacity="0.45" />
        </g>
      </svg>
    </div>
  );
}

function AboutSection() {
  const perspectivePoints = [
    {
      label: "Objectivity",
      body: "We hold no position in your dispute and no stake in the outcome — only in the quality of the analysis that gets you there.",
    },
    {
      label: "Clarity",
      body: "Complex commercial situations are reduced to the facts, incentives, and leverage that actually determine what happens next.",
    },
    {
      label: "Balance",
      body: "Every side of a negotiation is understood on its own terms before a strategy is built, so the plan survives contact with the other room.",
    },
    {
      label: "Fact-Based Thinking",
      body: "Positions are tested against evidence and precedent, not assumption, emotion, or the momentum of a prior disagreement.",
    },
    {
      label: "Multiple Perspectives",
      body: "We model how counterparties, regulators, and institutions are likely to read the situation — before you are in the room with them.",
    },
  ];

  return (
    <section id="about" className="overflow-hidden">

      {/* ============ SECTION 1 — WHY "NEUTRAL" ============ */}
      <div className="py-16 lg:py-20" style={{ backgroundColor: "#F8F8F8" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* Left: heading + explanation as one cohesive editorial block */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8" style={{
                backgroundColor: "rgba(168,142,75,0.1)",
                border: "1px solid rgba(168,142,75,0.25)"
              }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
                <span className="text-xs font-medium" style={{ color: GOLD, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.14em" }}>
                  ABOUT US
                </span>
              </div>

              <h2
                className="font-medium leading-[1.08] mb-8"
                style={{ fontFamily: "'Fraunces', Georgia, serif", color: NAVY, fontSize: "clamp(2.25rem, 4.2vw, 3.25rem)", letterSpacing: "-0.01em" }}
              >
                Why &ldquo;Neutral&rdquo;
              </h2>

              <div className="h-px w-16 mb-8" style={{ backgroundColor: GOLD }} />

              <div className="space-y-5 max-w-[52ch]">
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", color: NAVY, fontSize: "1.0625rem", lineHeight: "1.75", fontWeight: 500 }}
                >
                  Successful negotiations are built on facts, preparation, commercial understanding, and disciplined execution.
                </p>

                <p
                  className="leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", color: "rgba(24,60,98,0.75)", fontSize: "0.9375rem", lineHeight: "1.8", fontWeight: 400 }}
                >
                  Being neutral enables better analysis, relevant negotiation strategy, and more sustainable commercial outcomes — rather than the biased, myopic, and stuck-in-impasse thinking that so often takes over once an organization is inside its own dispute.
                </p>

                <p
                  className="leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", color: "rgba(24,60,98,0.75)", fontSize: "0.9375rem", lineHeight: "1.8", fontWeight: 400 }}
                >
                  The name is the mandate: an independent advisor, retained precisely because it stands outside the dispute, brought in to see what the parties inside it no longer can.
                </p>
              </div>
            </div>

            {/* Right: refined image placeholder */}
            <div className="relative">
              <div
                className="relative w-full aspect-[4/5] overflow-hidden rounded-lg border"
                style={{
                  background: `linear-gradient(165deg, rgba(24,60,98,0.06) 0%, rgba(168,142,75,0.14) 100%)`,
                  borderColor: "rgba(168,142,75,0.25)",
                  boxShadow: "0 20px 50px rgba(24,60,98,0.1)"
                }}
              >
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2" style={{ borderColor: GOLD }} />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2" style={{ borderColor: GOLD }} />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <span className="text-xs uppercase mb-3 font-medium" style={{ color: GOLD, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.16em" }}>
                    Brand Image
                  </span>
                  <span className="text-sm" style={{ color: "rgba(24,60,98,0.45)", fontFamily: "Inter, sans-serif" }}>
                    1200 × 1500 px
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ============ SECTION 2 — THE MEANING BEHIND THE NAME "NEUTRAL" ============ */}
      <div className="py-16 lg:py-20" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Heading */}
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-medium block mb-3" style={{ color: GOLD, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.14em" }}>
              THE MEANING BEHIND THE NAME &ldquo;NEUTRAL&rdquo;
            </span>
            <h2
              className="font-medium leading-[1.1]"
              style={{ fontFamily: "'Fraunces', Georgia, serif", color: NAVY, fontSize: "clamp(2rem, 3.6vw, 2.75rem)", letterSpacing: "-0.01em" }}
            >
              The Neutral Perspective
            </h2>
          </div>

          {/* Philosophy callout — directly under the heading */}
          <div className="max-w-3xl mb-10">
            <div className="p-6 lg:p-8 rounded-lg border-l-4" style={{ borderColor: GOLD, backgroundColor: "rgba(168,142,75,0.05)" }}>
              <span className="text-xs uppercase tracking-wider block mb-3 font-medium" style={{ color: GOLD, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.14em" }}>
                Philosophy
              </span>
              <p
                className="leading-relaxed italic"
                style={{ fontFamily: "'Fraunces', Georgia, serif", color: NAVY, fontSize: "1.1875rem", lineHeight: "1.55", fontWeight: 400 }}
              >
                &ldquo;It is wise to choose a dedicated expert partner to handle disputes and resolve them — rather than businesses facing them in-house, exhausting time and money, and absorbing stress within the organization.&rdquo;
              </p>
            </div>
          </div>

          {/* Diagram + intro copy — side by side, same section */}
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center mb-10">
            <div>
              <div className="text-center mb-1">
                <p
                  className="italic"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", color: NAVY, fontSize: "1rem", lineHeight: "1.5", fontWeight: 400 }}
                >
                  The name &ldquo;Neutral&rdquo; reflects our core belief.
                </p>
              </div>
              <BalanceDiagram />
            </div>

            <div>
              <p
                className="leading-relaxed max-w-[56ch]"
                style={{ fontFamily: "Inter, sans-serif", color: "rgba(24,60,98,0.75)", fontSize: "0.9375rem", lineHeight: "1.75" }}
              >
                A negotiation conducted from inside a dispute is rarely a clear-eyed one. Neutrality is the discipline of stepping outside it — replacing bias, short-term thinking, emotion, and entrenched positions with five habits of mind.
              </p>
            </div>
          </div>

          {/* Five habits of mind — one row of cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {perspectivePoints.map((pt, i) => (
              <div
                key={pt.label}
                className="p-6 rounded-lg border transition-all duration-300 hover:border-[#A88E4B] hover:shadow-lg"
                style={{ borderColor: "rgba(24,60,98,0.1)", backgroundColor: "#F8F8F8" }}
              >
                <span
                  className="text-xs block mb-4"
                  style={{ color: GOLD, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.06em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4
                  className="font-medium mb-2 leading-snug"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", color: NAVY, fontSize: "1.0625rem" }}
                >
                  {pt.label}
                </h4>
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", color: "rgba(24,60,98,0.65)", fontSize: "0.8125rem", lineHeight: "1.6" }}
                >
                  {pt.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============ SECTION 3 — THE NEUTRAL METHOD ============ */}
      <div id="method" style={{ backgroundColor: NAVY }} className="py-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4" style={{
              backgroundColor: "rgba(168,142,75,0.1)",
              border: "1px solid rgba(168,142,75,0.3)"
            }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
              <span className="text-xs font-medium" style={{ color: GOLD, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.14em" }}>
                PROPRIETARY FRAMEWORK
              </span>
            </div>
            <h2
              className="text-white font-medium leading-[1.08] mb-4"
              style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(2.25rem, 4.2vw, 3.5rem)", letterSpacing: "-0.01em" }}
            >
              The Neutral Method
            </h2>
            <p
              className="text-lg leading-relaxed max-w-[65ch]"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.7)", lineHeight: "1.7" }}
            >
              Focused preparation, a dedicated partner in high stakes, implementing proprietary techniques and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="p-8 bg-white/95 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 relative group rounded"
              >
                <div
                  className="text-3xl font-medium mb-4"
                  style={{ color: GOLD, fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  {p.step}
                </div>
                <div
                  className="h-px w-8 mb-6"
                  style={{ backgroundColor: GOLD, opacity: i === 0 ? 1 : 0.4 }}
                />
                <h4
                  className="font-semibold mb-3 text-lg tracking-wide"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", color: NAVY }}
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
  const serviceIcons = [Target, FileText, Building2, Shield, Lightbulb, Users];
  
  return (
    <section id="services" className="py-24" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{
            backgroundColor: "rgba(168,142,75,0.1)",
            border: "1px solid rgba(168,142,75,0.2)"
          }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
            <span className="text-xs font-medium" style={{ color: GOLD, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.14em" }}>
              SERVICES
            </span>
          </div>
          
          <h2
            className="font-medium leading-tight mb-6"
            style={{ fontFamily: "'Fraunces', Georgia, serif", color: NAVY, fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.01em" }}
          >
            Advisory Services
          </h2>
          
          <p className="text-lg leading-relaxed max-w-[65ch]" style={{ fontFamily: "Inter, sans-serif", color: TEXT_MUTED, lineHeight: "1.7" }}>
            Neutral Advisory provides structured strategic support across complex commercial issues. Each engagement is configured to the specific dynamics, stakeholders, and objectives of the situation.
          </p>
        </div>

        {/* Horizontal scrollable carousel */}
        <div className="relative -mx-6 lg:-mx-12">
          <div 
            className="overflow-x-auto px-6 lg:px-12 pb-6" 
            style={{ 
              scrollbarWidth: "thin",
              scrollbarColor: `${GOLD} transparent`
            }}
          >
            <div className="flex gap-6" style={{ minWidth: "max-content" }}>
              {services.map((s, idx) => {
                const Icon = serviceIcons[idx];
                return (
                  <div
                    key={s.number}
                    className="flex-shrink-0 group bg-white p-8 rounded-lg border hover:border-[#A88E4B] transition-all duration-300 hover:shadow-xl"
                    style={{ 
                      width: "380px",
                      borderColor: "rgba(24,60,98,0.1)",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
                    }}
                  >
                    {/* Icon + Number */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{
                        background: `linear-gradient(135deg, rgba(168,142,75,0.1), rgba(168,142,75,0.05))`,
                        border: "1px solid rgba(168,142,75,0.2)"
                      }}>
                        <Icon size={24} style={{ color: GOLD }} />
                      </div>
                      <span className="text-xs font-medium" style={{ color: TEXT_MUTED, fontFamily: "'IBM Plex Mono', monospace" }}>
                        {s.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-medium mb-4 leading-snug group-hover:text-[#A88E4B] transition-colors duration-300"
                      style={{ fontFamily: "'Fraunces', Georgia, serif", color: NAVY, fontSize: "1.1875rem", minHeight: "3.5rem" }}
                    >
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="leading-relaxed mb-6"
                      style={{ fontFamily: "Inter, sans-serif", color: TEXT_MUTED, fontSize: "0.9375rem", lineHeight: "1.7", minHeight: "8rem" }}
                    >
                      {s.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: "rgba(24,60,98,0.08)" }}>
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200"
                          style={{
                            backgroundColor: "rgba(24,60,98,0.05)",
                            color: TEXT_MUTED,
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="text-center mt-6 mb-12">
          <p className="text-xs" style={{ color: TEXT_MUTED, fontFamily: "Inter, sans-serif" }}>
            ← Scroll to view all services →
          </p>
        </div>

        {/* CTA below services */}
        <div className="text-center p-8 rounded-lg" style={{ 
          backgroundColor: "rgba(24,60,98,0.02)",
          border: "1px dashed rgba(24,60,98,0.15)"
        }}>
          <p className="text-base font-medium mb-4" style={{ color: NAVY, fontFamily: "Inter, sans-serif" }}>
            Need guidance on a specific commercial matter?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: NAVY, color: "#fff", fontFamily: "Inter, sans-serif" }}
          >
            Schedule a Consultation
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function WhenEngage() {
  return (
    <section style={{ backgroundColor: "#F5F5F5" }} className="py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header section - Two column layout */}
        <div className="grid lg:grid-cols-[500px_1fr] gap-12 items-start mb-12">
          {/* Left - Heading */}
          <div>
            <div className="h-px w-16 mb-8" style={{ backgroundColor: GOLD }} />
            <h2
              className="font-medium leading-[1.2]"
              style={{ 
                fontFamily: "'Fraunces', Georgia, serif", 
                color: NAVY, 
                fontSize: "2.5rem",
                letterSpacing: "-0.01em"
              }}
            >
              When do businesses engage Neutral Advisory?
            </h2>
          </div>
          
          {/* Right - Description */}
          <div className="pt-12">
            <p
              className="leading-relaxed mb-4"
              style={{ 
                fontFamily: "Inter, sans-serif", 
                color: "rgba(24,60,98,0.7)", 
                fontSize: "0.9375rem",
                lineHeight: "1.8",
                fontWeight: 400
              }}
            >
              Organizations typically seek our support when commercial issues require strategic negotiation beyond routine business discussions.
            </p>
            <p
              className="italic"
              style={{ 
                fontFamily: "'Fraunces', Georgia, serif", 
                color: NAVY, 
                fontSize: "1.0625rem",
                lineHeight: "1.8",
                fontWeight: 400
              }}
            >
              &ldquo;Here are the types of situations where that support becomes relevant.&rdquo;
            </p>
          </div>
        </div>

        {/* Horizontal gold line separator */}
        <div className="h-px w-full mb-12" style={{ backgroundColor: GOLD }} />

        {/* Scenario list — horizontally scrollable on mobile/tablet, full grid on desktop */}
        <div className="-mx-6 lg:mx-0">
          <div
            className="flex lg:grid lg:grid-cols-6 gap-0 overflow-x-auto lg:overflow-visible px-6 lg:px-0 pb-4 lg:pb-0 scrollbar-none"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {engagementScenarios.map((item, idx) => (
              <div
                key={idx}
                className="bg-transparent p-6 border-r border-b pt-8 pb-12 flex-shrink-0 w-[220px] min-w-[220px] lg:w-auto lg:min-w-0"
                style={{
                  scrollSnapAlign: "start",
                  borderRightColor: idx === engagementScenarios.length - 1 ? "transparent" : "rgba(24,60,98,0.08)",
                  borderBottomColor: "transparent"
                }}
              >
                <div className="mb-4">
                  <span 
                    className="text-xs font-medium"
                    style={{ 
                      color: GOLD,
                      fontFamily: "'IBM Plex Mono', monospace",
                      letterSpacing: "0.05em",
                      fontSize: "0.6875rem",
                      fontWeight: 500
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}.
                  </span>
                </div>
                
                <p 
                  className="leading-relaxed"
                  style={{ 
                    fontFamily: "Inter, sans-serif", 
                    color: NAVY, 
                    fontSize: "0.8125rem", 
                    lineHeight: "1.65",
                    fontWeight: 500
                  }}
                >
                  {item}
                </p>
                
                <div className="mt-6">
                  <ArrowRight size={12} style={{ color: GOLD, opacity: 0.4 }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint - mobile/tablet only */}
        <div className="text-center mt-2 lg:hidden">
          <p className="text-xs" style={{ color: TEXT_MUTED, fontFamily: "Inter, sans-serif" }}>
            ← Scroll to view all scenarios →
          </p>
        </div>
      </div>
    </section>
  );
}

function CommercialScenarios() {
  return (
    <section id="scenarios" className="py-24 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{
            backgroundColor: "rgba(168,142,75,0.1)",
            border: "1px solid rgba(168,142,75,0.2)"
          }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
            <span className="text-xs font-medium" style={{ color: GOLD, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.14em" }}>
              COMMERCIAL SCENARIOS
            </span>
          </div>
          <h2
            className="font-medium leading-tight mb-6"
            style={{ fontFamily: "'Fraunces', Georgia, serif", color: NAVY, fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.01em" }}
          >
            Recognize Your Situation
          </h2>
          <p
            className="text-lg leading-relaxed max-w-[65ch] mx-auto"
            style={{ fontFamily: "Inter, sans-serif", color: TEXT_MUTED, lineHeight: "1.7" }}
          >
            These are the moments where structured preparation and an independent perspective can change the outcome.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((s) => (
            <div
              key={s.number}
              className="group bg-white p-8 rounded-lg border hover:border-[#A88E4B] transition-all duration-300 hover:shadow-xl flex flex-col justify-between h-full"
              style={{ borderColor: "rgba(24,60,98,0.1)" }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium" style={{ 
                    backgroundColor: "rgba(168,142,75,0.1)", 
                    color: GOLD,
                    fontFamily: "'IBM Plex Mono', monospace" 
                  }}>
                    {s.number}
                  </span>
                  <span className="text-[10px] font-medium tracking-widest uppercase px-2 py-1 rounded" style={{ 
                    fontFamily: "'IBM Plex Mono', monospace", 
                    color: TEXT_MUTED,
                    backgroundColor: "rgba(24,60,98,0.05)"
                  }}>
                    {s.category}
                  </span>
                </div>
                <h4
                  className="font-medium leading-snug mb-4 group-hover:text-[#A88E4B] transition-colors duration-300"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", color: NAVY, fontSize: "1.125rem" }}
                >
                  {s.title}
                </h4>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "Inter, sans-serif", color: TEXT_MUTED, lineHeight: "1.7" }}
                >
                  {s.description}
                </p>
              </div>
              <div
                className="mt-auto pt-6 border-t"
                style={{ borderColor: "rgba(24,60,98,0.08)" }}
              >
                <span className="text-[10px] uppercase tracking-wider block mb-2 font-medium" style={{ color: GOLD, fontFamily: "'IBM Plex Mono', monospace" }}>
                  How We Help
                </span>
                <p
                  className="text-sm leading-relaxed italic"
                  style={{ fontFamily: "Inter, sans-serif", color: NAVY, lineHeight: "1.7" }}
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
              &ldquo;Whatever commercial situation you are facing, there may be a structured negotiation or advisory pathway to move it forward.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryExperience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{
              backgroundColor: "rgba(168,142,75,0.1)",
              border: "1px solid rgba(168,142,75,0.2)"
            }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
              <span className="text-xs font-medium" style={{ color: GOLD, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.14em" }}>
                EXPERIENCE
              </span>
            </div>
            <h2
              className="font-medium leading-tight"
              style={{ fontFamily: "'Fraunces', Georgia, serif", color: NAVY, fontSize: "clamp(1.75rem, 3vw, 2.25rem)", letterSpacing: "-0.01em" }}
            >
              Experience Across Complex Commercial Environments
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {industryExperience.map((ind) => (
              <div key={ind.title} className="bg-[#F8F8F8] p-8 rounded-lg border hover:shadow-lg transition-all duration-300" style={{ borderColor: "rgba(24,60,98,0.08)" }}>
                <h4 className="font-medium text-base mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", color: NAVY }}>
                  {ind.title}
                </h4>
                <div className="h-0.5 w-8 mb-6" style={{ backgroundColor: GOLD }} />
                <ul className="flex flex-col gap-3">
                  {ind.items.map((item, i) => (
                    <li key={i} className="text-sm leading-relaxed flex items-start gap-3" style={{ fontFamily: "Inter, sans-serif", color: TEXT_MUTED, lineHeight: "1.7" }}>
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
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
    <section id="founder" className="py-24 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
          {/* Left: Founder Portrait Placeholder */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden border" style={{
              background: `linear-gradient(160deg, rgba(24,60,98,0.08) 0%, rgba(168,142,75,0.12) 100%)`,
              borderColor: "rgba(24,60,98,0.15)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)"
            }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <span className="text-xs tracking-wider uppercase mb-2 font-medium" style={{ color: GOLD, fontFamily: "'IBM Plex Mono', monospace" }}>
                  Image Placeholder
                </span>
                <span className="text-base font-medium mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", color: NAVY }}>
                  Shrivatsan Balagopal
                </span>
                <span className="text-xs max-w-xs leading-relaxed" style={{ color: TEXT_MUTED, fontFamily: "Inter, sans-serif" }}>
                  Founder & Principal Advisor<br />
                  900 × 1100 px
                </span>
              </div>
              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2" style={{ borderColor: GOLD }} />
            </div>
          </div>

          {/* Right: Story */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{
              backgroundColor: "rgba(168,142,75,0.1)",
              border: "1px solid rgba(168,142,75,0.2)"
            }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
              <span className="text-xs font-medium" style={{ color: GOLD, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.14em" }}>
                LEADERSHIP
              </span>
            </div>
            
            <h2
              className="font-medium leading-tight mb-2"
              style={{ fontFamily: "'Fraunces', Georgia, serif", color: NAVY, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.01em" }}
            >
              Founder & Principal
            </h2>
            <div className="text-xl font-medium mb-8" style={{ fontFamily: "'Fraunces', Georgia, serif", color: GOLD }}>
              Shrivatsan Balagopal
            </div>

            <div className="flex flex-col gap-6">
              <div className="p-8 rounded-lg bg-white border" style={{ borderColor: "rgba(24,60,98,0.1)" }}>
                <h4 className="text-xs uppercase tracking-wider mb-4 font-medium" style={{ color: GOLD, fontFamily: "'IBM Plex Mono', monospace" }}>
                  Biography
                </h4>
                <p className="text-sm font-medium leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: NAVY, lineHeight: "1.7" }}>
                  [FOUNDER BIOGRAPHY PLACEHOLDER]
                </p>
              </div>

              <div className="p-8 rounded-lg bg-white border" style={{ borderColor: "rgba(24,60,98,0.1)" }}>
                <h4 className="text-xs uppercase tracking-wider mb-4 font-medium" style={{ color: GOLD, fontFamily: "'IBM Plex Mono', monospace" }}>
                  Expertise
                </h4>
                <p className="text-sm font-medium leading-relaxed" style={{ fontFamily: "Inter, sans-serif", color: NAVY, lineHeight: "1.7" }}>
                  [FOUNDER EXPERTISE PLACEHOLDER]
                </p>
              </div>

              <div className="p-8 rounded-lg bg-white border-l-4" style={{ borderColor: GOLD, backgroundColor: "rgba(168,142,75,0.03)" }}>
                <h4 className="text-xs uppercase tracking-wider mb-4 font-medium" style={{ color: GOLD, fontFamily: "'IBM Plex Mono', monospace" }}>
                  Endorsement
                </h4>
                <p className="text-sm font-medium leading-relaxed italic" style={{ fontFamily: "Inter, sans-serif", color: NAVY, lineHeight: "1.7" }}>
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: NAVY }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{
              backgroundColor: "rgba(168,142,75,0.15)",
              border: "1px solid rgba(168,142,75,0.3)"
            }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
              <span className="text-xs font-medium" style={{ color: GOLD, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.14em" }}>
                CONTACT
              </span>
            </div>
            <h2
              className="text-white font-medium leading-tight mb-8"
              style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.01em" }}
            >
              Schedule a Confidential Discussion
            </h2>
            <p
              className="text-base leading-relaxed mb-12 max-w-[55ch]"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.7)", lineHeight: "1.7" }}
            >
              All inquiries are handled directly by Shrivatsan Balagopal and are treated with complete discretion. We respond to qualified engagements within 24 hours.
            </p>

            <div className="flex flex-col gap-8 p-8 rounded-lg border" style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(168,142,75,0.2)" }}>
              {[
                { label: "Direct Contact", value: "shrivatsan@neutraladvisory.com" },
                { label: "Engagements", value: "Confidential Advisory" },
              ].map((c) => (
                <div key={c.label}>
                  <span className="text-xs uppercase tracking-wider block mb-2 font-medium" style={{ color: GOLD, fontFamily: "'IBM Plex Mono', monospace" }}>
                    {c.label}
                  </span>
                  <span
                    className="text-base font-medium"
                    style={{ fontFamily: "Inter, sans-serif", color: "#fff" }}
                  >
                    {c.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full py-20 px-12 bg-white rounded-lg">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "rgba(168,142,75,0.1)" }}>
                  <Check size={32} style={{ color: GOLD }} />
                </div>
                <h3
                  className="text-3xl font-medium mb-4"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", color: NAVY }}
                >
                  Thank You
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", color: TEXT_MUTED, lineHeight: "1.7" }}
                >
                  Your inquiry has been received. Shrivatsan will respond personally within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8 p-12 bg-white rounded-lg shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {[
                    { key: "name", label: "Full Name", placeholder: "James Whitmore" },
                    { key: "title", label: "Title / Role", placeholder: "Chief Executive Officer" },
                    { key: "organization", label: "Organization", placeholder: "Acme Corporation" },
                    { key: "email", label: "Email Address", placeholder: "james@acme.com" },
                  ].map(({ key, label, placeholder }) => (
                    <div key={key}>
                      <label className="text-xs uppercase tracking-wider block mb-2 font-medium" style={{ color: TEXT_MUTED, fontFamily: "Inter, sans-serif" }}>
                        {label}
                      </label>
                      <input
                        type={key === "email" ? "email" : "text"}
                        placeholder={placeholder}
                        value={formData[key]}
                        onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:border-[#A88E4B] focus:outline-none"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.9375rem",
                          color: NAVY,
                          backgroundColor: "#F8F8F8",
                          borderColor: "rgba(24,60,98,0.1)"
                        }}
                        required
                        aria-label={label}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider block mb-2 font-medium" style={{ color: TEXT_MUTED, fontFamily: "Inter, sans-serif" }}>
                    Nature of Matter
                  </label>
                  <select
                    value={formData.matter}
                    onChange={(e) => setFormData({ ...formData, matter: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:border-[#A88E4B] focus:outline-none"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.9375rem",
                      color: NAVY,
                      backgroundColor: "#F8F8F8",
                      borderColor: "rgba(24,60,98,0.1)",
                      cursor: "pointer"
                    }}
                    required
                    aria-label="Nature of Matter"
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
                  <label className="text-xs uppercase tracking-wider block mb-2 font-medium" style={{ color: TEXT_MUTED, fontFamily: "Inter, sans-serif" }}>
                    Brief Description
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Please share as much or as little as you are comfortable with at this stage. All information is held in strict confidence."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:border-[#A88E4B] focus:outline-none resize-none"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.9375rem",
                      color: NAVY,
                      backgroundColor: "#F8F8F8",
                      borderColor: "rgba(24,60,98,0.1)"
                    }}
                    required
                    aria-label="Brief Description"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                    style={{ 
                      backgroundColor: GOLD, 
                      color: NAVY, 
                      fontFamily: "Inter, sans-serif",
                      borderRadius: "8px"
                    }}
                    aria-label="Submit confidential inquiry"
                  >
                    Submit Confidential Inquiry
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <p className="text-xs text-center mt-4" style={{ fontFamily: "Inter, sans-serif", color: TEXT_MUTED }}>
                    All communications are protected by client confidentiality
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
    <footer style={{ backgroundColor: NAVY }} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 pb-12 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{
                background: `linear-gradient(135deg, ${GOLD}, #8a7038)`,
                boxShadow: "0 2px 8px rgba(168,142,75,0.3)"
              }}>
                <Scale size={20} className="text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-white font-semibold tracking-tight text-base"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  Neutral Advisory
                </span>
                <span
                  className="text-[10px] tracking-[0.18em] uppercase font-medium mt-1"
                  style={{ color: GOLD, fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  Strategic Advisory
                </span>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.5)", lineHeight: "1.7" }}
            >
              An independent strategic negotiation and dispute resolution advisory firm delivering objective counsel in complex commercial matters.
            </p>
          </div>

          <div>
            <h4
              className="text-xs uppercase tracking-wider mb-6 font-medium"
              style={{ color: GOLD, fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Services
            </h4>
            {["Strategic Negotiation", "Commercial Dispute", "Banking & Finance", "Insurance Claims", "TMT Policy", "Executive Support"].map((l) => (
              <a
                key={l}
                href="#services"
                className="block text-sm mb-3 hover:text-white transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "Inter, sans-serif" }}
                aria-label={`Navigate to ${l} service`}
              >
                {l}
              </a>
            ))}
          </div>

          <div>
            <h4
              className="text-xs uppercase tracking-wider mb-6 font-medium"
              style={{ color: GOLD, fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Firm
            </h4>
            {["About", "Services", "Founder", "Contact"].map((l) => (
              <a
                key={l}
                href={l === "Contact" ? "#contact" : `#${l.toLowerCase()}`}
                className="block text-sm mb-3 hover:text-white transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "Inter, sans-serif" }}
                aria-label={`Navigate to ${l}`}
              >
                {l}
              </a>
            ))}
          </div>

          <div>
            <h4
              className="text-xs uppercase tracking-wider mb-6 font-medium"
              style={{ color: GOLD, fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Office
            </h4>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "Inter, sans-serif", lineHeight: "1.7" }}
            >
              Park Avenue South<br />
              New York, NY 10016<br />
              United States
            </p>
          </div>
        </div>

        <div className="pt-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
          <p
            className="text-xs max-w-2xl"
            style={{ color: "rgba(255,255,255,0.35)", fontFamily: "Inter, sans-serif", lineHeight: "1.6" }}
          >
            © {new Date().getFullYear()} Neutral Advisory LLC. All rights reserved. Neutral Advisory is not a law firm and does not provide legal services.
          </p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Engagement"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs hover:text-white/60 transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.35)", fontFamily: "Inter, sans-serif" }}
                aria-label={l}
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
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
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