import { useState, useEffect } from "react";
import { ArrowRight, ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";

const NAVY = "#06101E"; // Original deeper, formal navy color
const GOLD = "#A88E4B"; // Muted, sophisticated bronze-gold
const GOLD_LIGHT = "#C3A65A";
const OFF_WHITE = "#FAFAFA";

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

const whyNeutralAdvisory = [
  { title: "Independent Perspective", desc: "Objective analysis free from institutional conflicts of interest." },
  { title: "Founder-Led Engagement", desc: "Direct, personal involvement of principal advisor on every matter." },
  { title: "Strategic Negotiation Expertise", desc: "Decades of experience structuring deals and resolving deadlocks." },
  { title: "Commercially Focused Advice", desc: "Protecting business value and prioritizing practical outcomes." },
  { title: "Experience Across Highly Regulated Industries", desc: "Navigating complex financial, insurance, and telecom frameworks." },
  { title: "Confidential & Objective Advisory", desc: "Complete discretion with a strict focus on facts and preparation." }
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
        backgroundColor: scrolled ? "rgba(11,31,58,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16 flex items-center justify-between h-20">
        <a href="#" className="flex flex-col leading-none gap-0.5">
          <span
            className="text-white font-semibold tracking-[0.12em] text-sm uppercase"
            style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "0.14em" }}
          >
            Neutral Advisory
          </span>
          <span
            className="text-xs tracking-widest uppercase font-mono"
            style={{ color: GOLD, fontSize: "8px", letterSpacing: "0.2em" }}
          >
            Negotiation & Commercial Resolution
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-white/70 hover:text-white transition-colors duration-200 text-sm tracking-wide"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[13px] px-7 py-3 border transition-all duration-300 tracking-wide bg-white/0 hover:bg-white hover:text-[#06101E]"
            style={{
              borderColor: "rgba(255,255,255,0.3)",
              color: "#fff",
              fontFamily: "Inter, sans-serif",
              letterSpacing: "0.05em"
            }}
          >
            Confidential Consultation
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
          style={{ backgroundColor: "#0B1F3A", borderColor: "rgba(255,255,255,0.1)" }}
        >
          <div className="px-8 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-white/80 hover:text-white py-2 text-sm tracking-wide border-b"
                style={{ borderColor: "rgba(255,255,255,0.07)", fontFamily: "Inter, sans-serif" }}
                onClick={() => setMobileOpen(false)}
              >
                {l}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 text-sm py-3 text-center border tracking-wide"
              style={{ borderColor: GOLD, color: GOLD, fontFamily: "Inter, sans-serif" }}
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
      className="relative min-h-screen flex items-stretch overflow-hidden"
      style={{ backgroundColor: NAVY }}
    >
      <div className="relative max-w-screen-xl mx-auto w-full px-8 lg:px-16 grid lg:grid-cols-2 gap-0 min-h-screen pt-20">
        {/* Left: Text */}
        <div className="flex flex-col justify-center py-24 lg:py-12 pr-0 lg:pr-16">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px w-8" style={{ backgroundColor: GOLD }} />
            <span
              className="text-xs uppercase tracking-[0.25em]"
              style={{ color: GOLD, fontFamily: "Inter, sans-serif" }}
            >
              Strategic Negotiation
            </span>
          </div>

          <h1
            className="text-white leading-[1.08] mb-8"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.4rem, 4.2vw, 3.8rem)",
              letterSpacing: "-0.02em",
            }}
          >
            When the Stakes Are Too High, Strategy Matters.
          </h1>

          <div className="h-px w-full max-w-sm mb-8 opacity-20" style={{ backgroundColor: "#fff" }} />

          <p
            className="text-white/60 leading-relaxed mb-12 max-w-md"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1.02rem", lineHeight: "1.75" }}
          >
            High-stakes strategic negotiation and commercial dispute advisory, helping organizations achieve resolution while navigating complex, institutional red tape.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 px-9 py-4 text-sm font-medium tracking-wide transition-all duration-400 hover:gap-6"
              style={{
                backgroundColor: "white",
                color: NAVY,
                fontFamily: "Inter, sans-serif",
              }}
            >
              Schedule a Confidential Discussion
              <ArrowRight size={16} className="transition-transform duration-400 group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-3 px-9 py-4 text-sm tracking-wide border text-white/70 hover:text-white transition-all duration-400 hover:border-white/50"
              style={{ borderColor: "rgba(255,255,255,0.15)", fontFamily: "Inter, sans-serif" }}
            >
              Explore Our Approach
            </a>
          </div>
        </div>

        {/* Right: Founder Portrait Placeholder */}
        <div className="hidden lg:flex items-end justify-end relative">
          {/* Gold accent line */}
          <div
            className="absolute left-0 top-32 bottom-0 w-px"
            style={{ backgroundColor: GOLD, opacity: 0.3 }}
          />

          <div className="relative w-full h-full max-h-screen flex items-end">
            <div
              className="absolute inset-x-16 top-24 bottom-0 bg-[#0F1E36]/80 border border-dashed border-[#A88E4B]/40 flex flex-col items-center justify-center p-6 text-center"
              style={{ clipPath: "inset(0 0 0 0)" }}
            >
              <span className="text-[#A88E4B] text-[10px] tracking-[0.2em] uppercase mb-2 font-mono">Image Placeholder</span>
              <span className="text-white/80 font-medium text-sm max-w-xs" style={{ fontFamily: "Manrope, sans-serif" }}>
                [IMAGE PLACEHOLDER — FOUNDER PORTRAIT]
              </span>
              <span className="text-white/40 text-[11px] mt-2 font-mono max-w-xs leading-relaxed">
                Shrivatsan Balagopal
                <br />
                Founder & Principal Advisor
                <br />
                Dimensions: 900 × 1100 px (Grayscale placeholder)
              </span>
              {/* Bottom gradient */}
              <div
                className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
                style={{ background: `linear-gradient(to top, ${NAVY}, transparent)` }}
              />
            </div>

            {/* Founder nameplate */}
            <div
              className="absolute bottom-12 left-28 z-10 border-l-2 pl-5 py-2"
              style={{ borderColor: GOLD }}
            >
              <div
                className="text-white font-semibold text-lg leading-tight"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Shrivatsan Balagopal
              </div>
              <div
                className="text-xs tracking-widest uppercase mt-1"
                style={{ color: GOLD, fontFamily: "Inter, sans-serif" }}
              >
                Founder & Principal Advisor
              </div>
            </div>

            {/* Gold corner accent */}
            <div
              className="absolute right-8 top-16 w-16 h-16 border-t-2 border-r-2"
              style={{ borderColor: GOLD, opacity: 0.5 }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <ChevronDown size={16} className="text-white/30 animate-bounce" />
        <span className="text-white/20 text-xs tracking-widest uppercase" style={{ fontFamily: "Inter, sans-serif", fontSize: "9px" }}>
          Scroll
        </span>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
          {/* Left: Image placeholder */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <div
                className="w-full bg-gray-100 border border-dashed border-[#A88E4B]/40 flex flex-col items-center justify-center p-8 text-center"
                style={{ height: "540px" }}
              >
                <span className="text-[#A88E4B] text-[10px] tracking-[0.2em] uppercase mb-2 font-mono">Image Placeholder</span>
                <span className="text-[#06101E] font-medium text-base mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>
                  [IMAGE PLACEHOLDER — ABOUT IMAGE]
                </span>
                <span className="text-gray-400 text-xs font-mono max-w-xs leading-relaxed">
                  Strategic Advisory representation (900 × 600 px)
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
              className="text-4xl font-bold leading-tight mb-3"
              style={{ fontFamily: "Manrope, sans-serif", color: "#06101E", letterSpacing: "-0.02em" }}
            >
              About Neutral Advisory
            </h2>
            <h3
              className="text-xl italic font-light mb-8"
              style={{ fontFamily: "Manrope, sans-serif", color: GOLD }}
            >
              Strategy Before Escalation.
            </h3>
            <div
              className="text-base leading-relaxed text-[#6B7280] flex flex-col gap-6"
              style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.85" }}
            >
              <p>
                Many commercial disputes become unnecessarily prolonged because they begin without a structured negotiation strategy.
              </p>
              <p>
                Neutral Advisory was established to provide organizations with independent strategic advice before commercial disagreements evolve into expensive operational or reputational challenges.
              </p>
              <p>
                Our work is founded on three principles:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2 font-medium text-[#06101E]">
                <li>Objectivity</li>
                <li>Commercial Thinking</li>
                <li>Structured Negotiation</li>
              </ul>
              <p>
                We assist organizations in preparing for negotiations, engaging with institutional stakeholders, managing complex commercial discussions, and pursuing practical business outcomes.
              </p>
            </div>

            {/* Strategic Mandate callout */}
            <div className="mt-8 p-8 border-l-4 bg-[#F7F8FA]" style={{ borderColor: GOLD }}>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#A88E4B] block mb-2 font-bold">Strategic Mandate</span>
              <p className="text-sm font-medium text-[#06101E] italic leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                "It is wise to choose a dedicated expert partner to handle disputes and resolve rather than businesses facing in-house by exhausting time, money and developing stress within the organization."
              </p>
            </div>
          </div>
        </div>

        {/* Why Neutral Advisory grid */}
        <div className="pt-20 border-t" style={{ borderColor: "rgba(11,31,58,0.08)" }}>
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: GOLD, fontFamily: "Inter, sans-serif" }}>
              Our Values
            </span>
            <h3 className="text-3xl font-bold mt-2" style={{ fontFamily: "Manrope, sans-serif", color: "#06101E" }}>
              Why Neutral Advisory
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyNeutralAdvisory.map((item) => (
              <div key={item.title} className="bg-[#F8F9FA] p-8 border border-gray-100 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="h-px w-8 bg-[#A88E4B] mb-6" />
                <h4 className="font-semibold text-base mb-3" style={{ fontFamily: "Manrope, sans-serif", color: "#06101E" }}>
                  {item.title}
                </h4>
                <p className="text-xs text-[#6B7280] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyNeutral() {
  return (
    <section id="why-neutral" className="py-24 bg-[#F7F8FA] border-y" style={{ borderColor: "rgba(11,31,58,0.08)" }}>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <GoldRule className="mb-6" />
            <h2
              className="text-4xl font-bold leading-tight"
              style={{ fontFamily: "Manrope, sans-serif", color: "#06101E", letterSpacing: "-0.02em" }}
            >
              Why “Neutral”
            </h2>
          </div>
          <div className="lg:col-span-7">
            <div className="border-l-4 pl-8 py-2" style={{ borderColor: GOLD }}>
              <p
                className="text-lg font-medium leading-relaxed mb-4"
                style={{ fontFamily: "Manrope, sans-serif", color: "#06101E" }}
              >
                Neutral represents an objective perspective.
              </p>
              <p
                className="text-sm leading-relaxed text-[#6B7280]"
                style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.8" }}
              >
                Successful negotiations are built on facts, preparation, commercial understanding, and disciplined execution.
                <br /><br />
                Being neutral enables better analysis, relevant negotiation strategy, and more sustainable commercial outcomes rather than being biased, myopic, and stuck in impasse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ThreePillars() {
  return (
    <section id="pillars" style={{ backgroundColor: "#06101E" }} className="py-32 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-6">
            <GoldRule className="mb-6" />
            <h2
              className="text-4xl font-bold leading-tight text-white mb-6"
              style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.02em" }}
            >
              The Neutral Method
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.6)", lineHeight: "1.85" }}
            >
              Focused preparation, dedicated partner in high stakes implementing proprietary techniques and expertise.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="p-8 border border-white/10 hover:border-white/20 transition-colors duration-300"
              style={{ backgroundColor: "#06101E" }}
            >
              <div
                className="text-4xl font-light text-white/10 mb-8 select-none"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                {p.step}
              </div>
              <div
                className="h-px w-8 mb-6"
                style={{ backgroundColor: GOLD, opacity: i === 0 ? 1 : 0.4 }}
              />
              <h4
                className="font-semibold text-white mb-4 leading-snug text-lg"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                {p.title}
              </h4>
              <p
                className="text-xs leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.5)", lineHeight: "1.8" }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-20">
          <div className="lg:col-span-5">
            <GoldRule className="mb-6" />
            <h2
              className="text-4xl font-bold leading-tight"
              style={{ fontFamily: "Manrope, sans-serif", color: "#06101E", letterSpacing: "-0.02em" }}
            >
              Advisory
              <br />
              Services
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-14">
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", color: "#6B7280", lineHeight: "1.85" }}
            >
              Neutral Advisory provides structured strategic support across complex commercial issues. Each engagement is configured to the specific dynamics, stakeholders, and objectives of the situation.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.number}
              className="group bg-white p-8 border border-gray-100 hover:bg-[#F7F8FA] hover:shadow-sm transition-all duration-300 cursor-default flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-8">
                  <span
                    className="text-xs tracking-widest font-mono"
                    style={{ color: GOLD }}
                  >
                    {s.number}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: GOLD }}
                  />
                </div>
                <h3
                  className="text-lg font-semibold mb-4 leading-snug"
                  style={{ fontFamily: "Manrope, sans-serif", color: "#06101E", letterSpacing: "-0.01em" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-xs leading-relaxed mb-8 text-[#6B7280]"
                  style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.75" }}
                >
                  {s.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2.5 py-1 border whitespace-nowrap"
                    style={{
                      borderColor: "rgba(11, 31, 58, 0.12)",
                      color: "rgba(11, 31, 58, 0.6)",
                      fontFamily: "Inter, sans-serif",
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
    <section className="py-24 bg-[#F8F9FA] border-y" style={{ borderColor: "rgba(11,31,58,0.08)" }}>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-16">
          <div className="lg:col-span-5">
            <GoldRule className="mb-6" />
            <h2
              className="text-3xl font-bold leading-tight"
              style={{ fontFamily: "Manrope, sans-serif", color: "#06101E", letterSpacing: "-0.02em" }}
            >
              When Businesses Engage Neutral Advisory
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-8">
            <p
              className="text-base leading-relaxed text-[#6B7280]"
              style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.8" }}
            >
              Organizations typically seek our support when commercial issues require strategic negotiation beyond routine business discussions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engagementScenarios.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 border hover:shadow-sm transition-all duration-300"
              style={{ borderColor: "rgba(11,31,58,0.08)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-semibold text-white" style={{ backgroundColor: GOLD }}>
                  {idx + 1}
                </div>
                <div className="h-px flex-1" style={{ backgroundColor: "rgba(11,31,58,0.1)" }} />
              </div>
              <p
                className="text-xs text-[#06101E] leading-relaxed font-medium"
                style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.8" }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommercialScenarios() {
  return (
    <section id="scenarios" className="py-32 bg-white border-t" style={{ borderColor: "rgba(11,31,58,0.06)" }}>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-20">
          <GoldRule className="mx-auto mb-6" />
          <h2
            className="text-4xl font-bold leading-tight text-[#06101E] mb-6"
            style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "-0.02em" }}
          >
            Recognize Your Situation.
          </h2>
          <p
            className="text-lg leading-relaxed text-[#6B7280] max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            These are the moments where structured preparation and an independent perspective can change the outcome.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scenarios.map((s) => (
            <div
              key={s.number}
              className="bg-[#F8F9FA] p-8 border border-gray-100 flex flex-col justify-between hover:bg-white hover:shadow-sm transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold" style={{ color: GOLD }}>
                    {s.number}
                  </span>
                  <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
                    {s.category}
                  </span>
                </div>
                <h4
                  className="font-bold text-[#06101E] leading-snug mb-4 text-base"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {s.title}
                </h4>
                <p
                  className="text-xs leading-relaxed text-[#6B7280] mb-6"
                  style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.8" }}
                >
                  {s.description}
                </p>
              </div>
              <div
                className="mt-auto pt-6 border-t"
                style={{ borderColor: "rgba(11,31,58,0.08)" }}
              >
                <span className="text-[10px] uppercase font-mono tracking-widest block text-[#A88E4B] mb-2 font-bold">
                  How we help
                </span>
                <p
                  className="text-xs text-[#06101E] leading-relaxed italic"
                  style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.7" }}
                >
                  {s.howWeHelp}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion / Takeaway Callout */}
        <div className="mt-20 text-center">
          <div className="inline-block px-8 py-6 bg-[#F7F8FA] border border-dashed border-[#A88E4B]/40 max-w-2xl">
            <p className="text-sm font-medium text-[#06101E]" style={{ fontFamily: "Inter, sans-serif" }}>
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
    <section id="experience" className="py-24 bg-[#F7F8FA] border-y" style={{ borderColor: "rgba(11,31,58,0.06)" }}>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4">
            <GoldRule className="mb-6" />
            <h2
              className="text-3xl font-bold leading-tight"
              style={{ fontFamily: "Manrope, sans-serif", color: "#06101E", letterSpacing: "-0.02em" }}
            >
              Experience Across Complex Commercial Environments
            </h2>
          </div>
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
            {industryExperience.map((ind) => (
              <div key={ind.title} className="bg-white p-8 border" style={{ borderColor: "rgba(11,31,58,0.06)" }}>
                <h4 className="font-bold text-base mb-4 text-[#06101E]" style={{ fontFamily: "Manrope, sans-serif" }}>
                  {ind.title}
                </h4>
                <div className="h-px w-6 bg-[#A88E4B] mb-4" />
                <ul className="flex flex-col gap-2">
                  {ind.items.map((item, i) => (
                    <li key={i} className="text-xs text-[#6B7280] leading-relaxed flex items-start gap-2">
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
    <section id="founder" className="py-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Founder Portrait Placeholder */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <div
                className="w-full bg-[#0F1E36] border border-dashed border-[#A88E4B]/40 flex flex-col items-center justify-center p-8 text-center"
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
              style={{ fontFamily: "Manrope, sans-serif", color: "#06101E", letterSpacing: "-0.02em" }}
            >
              Founder & Principal
            </h2>
            <div className="mt-2 text-xl font-bold" style={{ fontFamily: "Manrope, sans-serif", color: GOLD }}>
              Shrivatsan Balagopal
            </div>

            <div className="flex flex-col gap-6 mt-10">
              <div className="p-8 border border-dashed border-[#A88E4B]/40 bg-[#F7F8FA]">
                <h4 className="text-xs uppercase tracking-widest mb-3 font-mono text-[#A88E4B] font-bold">Biography</h4>
                <p className="text-xs font-medium text-[#06101E] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  [FOUNDER BIOGRAPHY PLACEHOLDER]
                </p>
              </div>

              <div className="p-8 border border-dashed border-[#A88E4B]/40 bg-[#F7F8FA]">
                <h4 className="text-xs uppercase tracking-widest mb-3 font-mono text-[#A88E4B] font-bold">Expertise</h4>
                <p className="text-xs font-medium text-[#06101E] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  [FOUNDER EXPERTISE PLACEHOLDER]
                </p>
              </div>

              <div className="p-8 border border-dashed border-[#A88E4B]/40 bg-[#F7F8FA]">
                <h4 className="text-xs uppercase tracking-widest mb-3 font-mono text-[#A88E4B] font-bold">Endorsement</h4>
                <p className="text-xs font-medium text-[#06101E] leading-relaxed italic" style={{ fontFamily: "Inter, sans-serif" }}>
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
    color: "#06101E",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: `1px solid rgba(11,31,58,0.2)`,
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
    color: "#9CA3AF",
    display: "block",
    marginBottom: "4px",
  };

  return (
    <section id="contact" className="py-32" style={{ backgroundColor: "#F7F8FA" }}>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <GoldRule className="mb-6" />
            <h2
              className="text-4xl font-bold leading-tight mb-8"
              style={{ fontFamily: "Manrope, sans-serif", color: "#06101E", letterSpacing: "-0.02em" }}
            >
              Schedule a
              <br />
              Confidential
              <br />
              Discussion
            </h2>
            <p
              className="text-sm leading-relaxed mb-10"
              style={{ fontFamily: "Inter, sans-serif", color: "#6B7280", lineHeight: "1.85" }}
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
                    style={{ fontFamily: "Inter, sans-serif", color: "#06101E" }}
                  >
                    {c.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <div
                className="w-full bg-white border border-dashed border-[#06101E]/10 flex flex-col items-center justify-center p-6 text-center"
                style={{ height: "200px" }}
              >
                <span className="text-[#A88E4B] text-[9px] tracking-[0.2em] uppercase mb-1 font-mono">Image Placeholder</span>
                <span className="text-[#06101E] font-medium text-sm" style={{ fontFamily: "Manrope, sans-serif" }}>
                  [IMAGE PLACEHOLDER — ADVISORY VISUAL]
                </span>
                <span className="text-gray-400 text-[10px] font-mono mt-1 leading-relaxed">
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
                  style={{ fontFamily: "Manrope, sans-serif", color: "#06101E" }}
                >
                  Thank you.
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", color: "#6B7280" }}
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
                      backgroundColor: "#06101E",
                      color: "white",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Submit Inquiry
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                  <p
                    className="mt-4 text-xs"
                    style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif" }}
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
    <footer style={{ backgroundColor: "#06101E" }} className="pt-20 pb-10">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
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
              className="text-xs tracking-widest uppercase mb-6 font-mono"
              style={{ color: GOLD, fontSize: "8px" }}
            >
              Negotiation & Commercial Resolution
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.35)", lineHeight: "1.8" }}
            >
              An independent strategic negotiation and commercial resolution advisory firm.
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
    <div className="min-h-screen selection:bg-[#A88E4B] selection:text-white" style={{ fontFamily: "Inter, sans-serif", backgroundColor: OFF_WHITE }}>
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(6,16,30,0.15); border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(6,16,30,0.3); }
        input::placeholder, textarea::placeholder { color: rgba(6,16,30,0.3); }
        input:focus, textarea:focus, select:focus { border-bottom-color: ${NAVY} !important; }
        select option { color: ${NAVY}; background: white; }
        .service-card:hover h3 { color: ${GOLD}; }
      `}</style>
      <NavBar />
      <Hero />
      <AboutSection />
      <WhyNeutral />
      <ThreePillars />
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
