import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock3,
  Cog,
  Factory,
  Gauge,
  Handshake,
  Headphones,
  MapPin,
  Phone,
  ShieldCheck,
  Ship,
  Target,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",

  description:
    "Learn about Janata Electric & Engineering Workshop, a trusted marine engineering and ship repair company serving vessels from Chattogram since 1995.",

  keywords: [
    "Marine Engineering Company Chattogram",
    "Ship Repair Company Bangladesh",
    "Janata Electric Engineering Workshop",
    "Marine Workshop Chittagong",
    "Marine Engineers Bangladesh",
    "Ship Maintenance Chattogram",
  ],

  openGraph: {
    title:
      "About Janata Electric & Engineering Workshop",
    description:
      "Trusted marine engineering, ship repair, electrical, automation, hydraulic and pipeline specialists since 1995.",
    type: "website",
    images: [
      {
        url: "/images/about/hero-about.jpg",
        width: 1200,
        height: 630,
        alt: "Janata Electric and Engineering Workshop",
      },
    ],
  },
};

const companyStatistics = [
  {
    value: "1995",
    label: "Established",
    description: "Serving the marine industry",
    icon: Award,
  },
  {
    value: "30+",
    label: "Years",
    description: "Marine engineering experience",
    icon: Clock3,
  },
  {
    value: "8",
    label: "Engineers",
    description: "Experienced technical professionals",
    icon: Users,
  },
  {
    value: "15",
    label: "Technicians",
    description: "Skilled workshop and onboard team",
    icon: Wrench,
  },
];

const coreStrengths = [
  {
    title: "One-Stop Engineering Solution",
    description:
      "Mechanical, electrical, automation, hydraulic, pipeline, propulsion and ship repair services from one reliable engineering partner.",
    icon: Cog,
  },
  {
    title: "Proven Marine Experience",
    description:
      "More than three decades of practical experience handling vessel repairs, equipment overhauls and urgent technical challenges.",
    icon: Award,
  },
  {
    title: "Specialized Technical Expertise",
    description:
      "Experience in CPP systems, PLC automation, bow thrusters, turbochargers, switchboards, alarms, radar and gyro installation.",
    icon: Zap,
  },
  {
    title: "Marine Pipeline Specialists",
    description:
      "Professional renewal and fabrication of seawater, freshwater, fireline, fuel oil, hydraulic, copper, stainless steel and Cu-Ni pipelines.",
    icon: Gauge,
  },
  {
    title: "Quality-Focused Workmanship",
    description:
      "Every project is approached with careful inspection, controlled procedures, testing and professional engineering supervision.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Response & Mobilization",
    description:
      "Quick technical response to reduce vessel downtime and support urgent repair requirements at port, shipyard or onboard.",
    icon: Headphones,
  },
];

const engineeringCapabilities = [
  {
    title: "Mechanical Engineering",
    description:
      "Main engine, auxiliary engine, generator, gearbox, turbocharger, governor, compressor, pump and valve overhauling.",
    icon: Wrench,
  },
  {
    title: "Electrical & Automation",
    description:
      "PLC systems, control panels, switchboards, alarms, sensors, motor controllers, inverter drives and navigation equipment.",
    icon: Zap,
  },
  {
    title: "Hydraulic Engineering",
    description:
      "Hydraulic pumps, motors, valves, rams, drums, grabs, CPP hydraulic systems and troubleshooting support.",
    icon: Cog,
  },
  {
    title: "Pipeline & Fabrication",
    description:
      "Marine pipeline renewal, custom fabrication, pipe bending, welding, installation, pressure testing and commissioning.",
    icon: Factory,
  },
];

const workProcess = [
  {
    step: "01",
    title: "Initial Inspection",
    description:
      "Our engineers inspect the vessel, machinery or system to identify the condition, fault and required scope of work.",
  },
  {
    step: "02",
    title: "Technical Assessment",
    description:
      "We evaluate the repair requirements, materials, manpower, equipment and estimated completion schedule.",
  },
  {
    step: "03",
    title: "Repair or Fabrication",
    description:
      "Our engineers and technicians complete the approved repair, overhaul, fabrication or installation work.",
  },
  {
    step: "04",
    title: "Testing & Quality Check",
    description:
      "Repaired systems and components are tested, inspected and verified before handover.",
  },
  {
    step: "05",
    title: "Delivery & Support",
    description:
      "We complete commissioning, provide technical support and remain available for follow-up requirements.",
  },
];

const industries = [
  "Bulk Carriers",
  "Container Vessels",
  "Oil & Chemical Tankers",
  "Tug Boats",
  "Dredgers",
  "Fishing Vessels",
  "Offshore Support Vessels",
  "Port Service Craft",
  "Government Marine Fleets",
  "Industrial Plants",
];

const workshopEquipment = [
  "Lathe Machines",
  "Welding Machines",
  "Grinding Machines",
  "Pipe Bending Machines",
  "Hydraulic Press",
  "Pressure Testing Units",
  "Electrical Diagnostic Tools",
  "Insulation Resistance Testers",
  "Digital Tachometers",
  "Calibration Equipment",
  "Hydraulic Testing Equipment",
  "Torque Wrenches",
  "Chain Blocks & Lever Hoists",
  "Precision Measuring Tools",
];

export default function AboutPage() {
  return (
    <>
      {/* HERO SECTION */}

      <section className="relative min-h-[540px] overflow-hidden bg-[#03111f] text-white">
        <Image
          src="/images/about/hero-about.jpg"
          alt="Marine engineering professionals working at a shipyard"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#03111f]/95 via-[#03111f]/75 to-[#03111f]/25" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#03111f]/70 via-transparent to-transparent" />

        <div className="site-container relative z-10 flex min-h-[540px] items-center py-20">
          <div className="max-w-[720px]">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <Ship size={15} className="text-[#67b94c]" />
              Trusted Marine Engineering Partner
            </p>

            <h1 className="text-[42px] font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-[52px] lg:text-[64px]">
              Engineering Excellence
              <span className="mt-2 block text-[#56aa42]">
                Since 1995
              </span>
            </h1>

            <p className="mt-7 max-w-[640px] text-base leading-7 text-slate-200 sm:text-lg">
              Janata Electric &amp; Engineering Workshop
              delivers dependable marine repair, maintenance,
              overhaul, fabrication and automation solutions
              for vessels operating in Bangladesh and beyond.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/services"
                className="primary-button"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="outline-light-button"
              >
                Request a Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY STATISTICS */}

      <section className="relative z-20 -mt-1 bg-white">
        <div className="site-container">
          <div className="grid overflow-hidden rounded-b-xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.10)] sm:grid-cols-2 lg:grid-cols-4">
            {companyStatistics.map(
              (statistic, index) => {
                const Icon = statistic.icon;

                return (
                  <article
                    key={statistic.label}
                    className={`flex min-h-[145px] items-center gap-5 px-7 py-6 ${
                      index !==
                      companyStatistics.length - 1
                        ? "border-b border-slate-200 sm:border-r lg:border-b-0"
                        : ""
                    }`}
                  >
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#edf7ed] text-[#3e9838]">
                      <Icon size={26} strokeWidth={1.7} />
                    </span>

                    <div>
                      <p className="text-[30px] font-extrabold leading-none text-[#071a35]">
                        {statistic.value}
                      </p>

                      <p className="mt-2 text-sm font-extrabold text-[#071a35]">
                        {statistic.label}
                      </p>

                      <p className="mt-1 text-[11px] leading-4 text-slate-500">
                        {statistic.description}
                      </p>
                    </div>
                  </article>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}

      <section className="section-padding bg-white">
        <div className="site-container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="section-eyebrow">
                Who We Are
              </p>

              <h2 className="section-title max-w-[570px]">
                A Reliable Marine Engineering Company Built
                on Experience
              </h2>

              <div className="mt-7 space-y-5 text-[15px] leading-7 text-slate-600">
                <p>
                  Janata Electric &amp; Engineering Workshop
                  was established in 1995 in Chattogram,
                  Bangladesh. Over the years, the company has
                  developed into a dependable marine
                  engineering service provider offering
                  complete repair, maintenance, overhaul,
                  fabrication and technical support.
                </p>

                <p>
                  Our team works with ship owners, vessel
                  operators, ship managers, port authorities,
                  dredging companies, fishing fleets and
                  industrial clients. We support both planned
                  maintenance and urgent repair requirements
                  with a practical, responsive and
                  quality-focused approach.
                </p>

                <p>
                  From engine overhauling and marine pipeline
                  renewal to electrical automation, hydraulic
                  repairs, propulsion systems and workshop
                  fabrication, our objective is to reduce
                  downtime and help clients maintain safe,
                  reliable vessel operations.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Marine engineering services since 1995",
                  "Onboard and workshop repair capability",
                  "Mechanical, electrical and hydraulic team",
                  "Support for all major vessel types",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#3e9838]"
                    />

                    <span className="text-sm font-semibold leading-5 text-[#071a35]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative min-h-[500px] overflow-hidden rounded-xl">
                <Image
                  src="/images/about/about-workshop.jpg"
                  alt="Janata Electric and Engineering Workshop facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#03111f]/45 to-transparent" />
              </div>

              <div className="absolute -bottom-7 -left-4 max-w-[290px] rounded-xl bg-[#071a35] p-6 text-white shadow-2xl sm:-left-7">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#4ca53a]">
                    <MapPin size={22} />
                  </span>

                  <div>
                    <p className="text-sm font-extrabold">
                      Chattogram Based
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-300">
                      62 Strand Road, Bangla Bazar,
                      Chattogram, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION VISION VALUES */}

      <section className="section-padding bg-[#f6f8fb]">
        <div className="site-container">
          <div className="text-center">
            <p className="section-eyebrow">
              Our Purpose
            </p>

            <h2 className="section-title">
              Mission, Vision &amp; Commitment
            </h2>

            <p className="mx-auto mt-5 max-w-[760px] text-[15px] leading-7 text-slate-600">
              Our company is guided by technical
              responsibility, professional conduct and a
              commitment to supporting safe and reliable
              marine operations.
            </p>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-white p-8 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#edf7ed] text-[#3e9838]">
                <Target size={27} />
              </span>

              <h3 className="mt-6 text-xl font-extrabold text-[#071a35]">
                Our Mission
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                To provide reliable, efficient and
                professional marine engineering solutions
                that improve vessel performance, safety,
                operational readiness and equipment
                reliability.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-8 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#edf7ed] text-[#3e9838]">
                <Ship size={27} />
              </span>

              <h3 className="mt-6 text-xl font-extrabold text-[#071a35]">
                Our Vision
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                To become a preferred marine engineering and
                ship repair partner for vessel owners,
                operators and industrial clients in
                Bangladesh and international markets.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-8 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#edf7ed] text-[#3e9838]">
                <Handshake size={27} />
              </span>

              <h3 className="mt-6 text-xl font-extrabold text-[#071a35]">
                Our Commitment
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                To deliver every project with honest
                communication, technical care, professional
                workmanship, safety awareness and respect
                for the client&apos;s schedule.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CORE STRENGTHS */}

      <section className="section-padding bg-[#03111f] text-white">
        <div className="site-container">
          <div className="text-center">
            <p className="section-eyebrow">
              Why Clients Choose Us
            </p>

            <h2 className="text-[31px] font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-[38px]">
              Technical Capability You Can Depend On
            </h2>

            <p className="mx-auto mt-5 max-w-[760px] text-[15px] leading-7 text-slate-300">
              We combine experience, workshop capability and
              onboard technical support to provide practical
              solutions for complex marine engineering
              requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreStrengths.map((strength) => {
              const Icon = strength.icon;

              return (
                <article
                  key={strength.title}
                  className="rounded-xl border border-white/15 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#67b94c]/60 hover:bg-white/[0.07]"
                >
                  <span className="flex h-13 w-13 items-center justify-center rounded-full border border-[#67b94c]/50 bg-[#67b94c]/10 text-[#72bd57]">
                    <Icon size={25} />
                  </span>

                  <h3 className="mt-6 text-lg font-extrabold text-white">
                    {strength.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {strength.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}

      <section className="section-padding bg-white">
        <div className="site-container">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div className="relative min-h-[560px] overflow-hidden rounded-xl">
              <Image
                src="/images/about/about-team.jpg"
                alt="Marine engineers and technicians at work"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#03111f]/60 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#72bd57]">
                  Skilled Technical Team
                </p>

                <h3 className="mt-2 max-w-[450px] text-2xl font-extrabold">
                  Engineers and technicians prepared for
                  workshop and onboard assignments
                </h3>
              </div>
            </div>

            <div>
              <p className="section-eyebrow">
                Engineering Capabilities
              </p>

              <h2 className="section-title max-w-[580px]">
                Complete Support Across Multiple Marine
                Disciplines
              </h2>

              <p className="mt-6 text-[15px] leading-7 text-slate-600">
                Our multidisciplinary team enables clients to
                coordinate complex repair projects through one
                service provider instead of managing multiple
                contractors.
              </p>

              <div className="mt-8 space-y-5">
                {engineeringCapabilities.map(
                  (capability) => {
                    const Icon = capability.icon;

                    return (
                      <article
                        key={capability.title}
                        className="flex gap-5 rounded-lg border border-slate-200 bg-white p-5 transition hover:border-[#62ad4a]/50 hover:shadow-lg"
                      >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#edf7ed] text-[#3e9838]">
                          <Icon size={23} />
                        </span>

                        <div>
                          <h3 className="text-base font-extrabold text-[#071a35]">
                            {capability.title}
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {capability.description}
                          </p>
                        </div>
                      </article>
                    );
                  },
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK PROCESS */}

      <section className="section-padding bg-[#f6f8fb]">
        <div className="site-container">
          <div className="text-center">
            <p className="section-eyebrow">
              How We Work
            </p>

            <h2 className="section-title">
              A Controlled Engineering Process
            </h2>

            <p className="mx-auto mt-5 max-w-[730px] text-[15px] leading-7 text-slate-600">
              Every project is handled through a clear
              process to improve communication, workmanship,
              safety and project control.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {workProcess.map((process) => (
              <article
                key={process.step}
                className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-[0_8px_25px_rgba(15,23,42,0.04)]"
              >
                <span className="text-[34px] font-extrabold leading-none text-[#4ca53a]/25">
                  {process.step}
                </span>

                <h3 className="mt-5 text-base font-extrabold text-[#071a35]">
                  {process.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {process.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOP FACILITIES */}

      <section className="section-padding bg-white">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <p className="section-eyebrow">
                Workshop &amp; Equipment
              </p>

              <h2 className="section-title max-w-[580px]">
                Equipped for Repair, Fabrication, Testing and
                Precision Work
              </h2>

              <p className="mt-6 text-[15px] leading-7 text-slate-600">
                Our workshop supports a wide range of marine
                mechanical, pipeline, electrical and
                hydraulic assignments. The available
                equipment allows our team to complete both
                workshop-based and onboard repair activities.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {workshopEquipment.map((equipment) => (
                  <div
                    key={equipment}
                    className="flex items-center gap-3 rounded-md bg-[#f6f8fb] px-4 py-3"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-[#3e9838]"
                    />

                    <span className="text-sm font-semibold text-[#071a35]">
                      {equipment}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/facilities"
                className="primary-button mt-8"
              >
                View Workshop Facilities
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative min-h-[560px] overflow-hidden rounded-xl">
              <Image
                src="/images/about/about-facilities.jpg"
                alt="Marine workshop machinery and fabrication equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#03111f]/50 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/15 bg-[#03111f]/85 p-6 text-white backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <Factory
                    size={30}
                    className="shrink-0 text-[#72bd57]"
                  />

                  <div>
                    <h3 className="text-lg font-extrabold">
                      In-House Fabrication Capability
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Supporting pipe fabrication, welding,
                      machining, testing and component repair
                      under controlled workshop conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}

      <section className="section-padding bg-[#f6f8fb]">
        <div className="site-container">
          <div className="text-center">
            <p className="section-eyebrow">
              Industries We Serve
            </p>

            <h2 className="section-title">
              Supporting Diverse Vessels and Marine Operators
            </h2>

            <p className="mx-auto mt-5 max-w-[760px] text-[15px] leading-7 text-slate-600">
              Our service capabilities are suitable for a wide
              range of vessel types, marine organizations and
              industrial operations.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="flex min-h-[52px] items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm"
              >
                <Ship
                  size={18}
                  className="text-[#3e9838]"
                />

                <span className="text-sm font-bold text-[#071a35]">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY & STANDARDS */}

      <section className="section-padding bg-[#071a35] text-white">
        <div className="site-container">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div>
              <p className="section-eyebrow">
                Quality &amp; Standards
              </p>

              <h2 className="max-w-[600px] text-[31px] font-extrabold leading-[1.1] tracking-[-0.035em] text-white sm:text-[38px]">
                Professional Workmanship, Safety Awareness and
                Technical Responsibility
              </h2>

              <p className="mt-6 text-[15px] leading-7 text-slate-300">
                Our team has experience working with
                class-related marine standards, technical
                requirements and inspection procedures. We do
                not claim certification or formal approval
                unless documentation is available for a
                specific project.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Project inspection and technical assessment",
                  "Material and component verification",
                  "Controlled repair and fabrication procedures",
                  "Pressure, electrical or operational testing",
                  "Final inspection before project handover",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#72bd57]"
                    />

                    <span className="text-sm leading-6 text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[470px] overflow-hidden rounded-xl">
              <Image
                src="/images/about/about-quality.jpg"
                alt="Marine engineer inspecting equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#03111f]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="relative overflow-hidden bg-[#edf7ed] py-16">
        <div className="site-container">
          <div className="rounded-2xl bg-gradient-to-r from-[#071a35] to-[#0d2d4c] px-7 py-12 text-center text-white shadow-2xl sm:px-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#72bd57]">
              Your Reliable Marine Engineering Partner
            </p>

            <h2 className="mx-auto mt-4 max-w-[760px] text-3xl font-extrabold leading-tight sm:text-[40px]">
              Looking for Professional Marine Engineering
              Support in Chattogram?
            </h2>

            <p className="mx-auto mt-5 max-w-[700px] text-[15px] leading-7 text-slate-300">
              Share your vessel requirements, repair scope,
              drawings or technical concerns with our team.
              We are ready to assess the job and provide a
              suitable engineering solution.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="primary-button"
              >
                Request a Quotation
                <ArrowRight size={18} />
              </Link>

              <a
                href="tel:+8801819319350"
                className="outline-light-button"
              >
                <Phone size={18} />
                Call 01819-319350
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}