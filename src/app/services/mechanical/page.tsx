import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Cog,
  Factory,
  Gauge,
  Headphones,
  Phone,
  Search,
  Settings,
  ShieldCheck,
  Ship,
  Users,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mechanical & Engine Services",

  description:
    "Professional marine engine overhaul, turbocharger, governor, gearbox, compressor, pump, cooler and valve repair services in Chattogram, Bangladesh.",

  keywords: [
    "Marine Engine Overhaul Chattogram",
    "Main Engine Repair Bangladesh",
    "Auxiliary Engine Overhaul",
    "Turbocharger Overhaul Chittagong",
    "Marine Gearbox Repair",
    "Generator Overhauling Bangladesh",
    "Marine Mechanical Services",
  ],

  openGraph: {
    title: "Mechanical & Engine Services | Janata Engineering",
    description:
      "Complete marine mechanical repair, engine overhaul, inspection, testing and onboard technical support since 1995.",
    type: "website",
    images: [
      {
        url: "/images/services/mechanical/hero-mechanical.jpg",
        width: 1200,
        height: 630,
        alt: "Marine engine overhaul and mechanical repair services",
      },
    ],
  },
};

const keyStatistics = [
  {
    value: "30+",
    label: "Years Experience",
    icon: Clock3,
  },
  {
    value: "8",
    label: "Engineers",
    icon: Users,
  },
  {
    value: "15",
    label: "Technicians",
    icon: Wrench,
  },
  {
    value: "24/7",
    label: "Emergency Support",
    icon: Headphones,
  },
];

const serviceCapabilities = [
  {
    title: "Main Engine Overhauling",
    description:
      "Complete dismantling, inspection, measurement, repair, component replacement, reassembly and operational testing of marine main engines.",
    icon: Cog,
  },
  {
    title: "Auxiliary Engine & Generator",
    description:
      "Overhaul and maintenance of auxiliary engines and diesel generators to improve reliability and power availability onboard.",
    icon: Settings,
  },
  {
    title: "Turbocharger Overhauling",
    description:
      "Inspection, cleaning, bearing replacement, rotor checking, balancing support and performance restoration.",
    icon: Gauge,
  },
  {
    title: "Governor Overhauling",
    description:
      "Troubleshooting, calibration, repair and overhaul of mechanical and hydraulic engine governors.",
    icon: Wrench,
  },
  {
    title: "Gearbox Overhauling",
    description:
      "Inspection and repair of marine gearboxes, bearings, shafts, gears, seals and lubrication systems.",
    icon: Cog,
  },
  {
    title: "Pump, Cooler & Valve Services",
    description:
      "Repair and overhaul of pumps, coolers, compressors, valves and associated marine machinery.",
    icon: Factory,
  },
];

const detailedServices = [
  "Main engine complete overhauling",
  "Auxiliary engine overhauling",
  "Diesel generator overhauling",
  "Cylinder head servicing",
  "Piston and connecting rod inspection",
  "Crankshaft and bearing inspection",
  "Cylinder liner measurement and replacement",
  "Fuel pump and injector servicing",
  "Turbocharger overhauling",
  "Governor overhauling",
  "Gearbox overhauling",
  "Air compressor overhauling",
  "Sea water pump overhauling",
  "Freshwater pump overhauling",
  "Fuel oil pump overhauling",
  "Lube oil pump overhauling",
  "Cooler overhauling",
  "Heat exchanger servicing",
  "Valve overhauling",
  "Mechanical troubleshooting",
];

const commonProblems = [
  {
    title: "Loss of Engine Power",
    description:
      "Reduced performance caused by fuel, air, compression, turbocharger or internal mechanical problems.",
  },
  {
    title: "High Temperature",
    description:
      "Cooling-system, lubrication, combustion or heat-transfer faults causing abnormal operating temperatures.",
  },
  {
    title: "Abnormal Noise & Vibration",
    description:
      "Bearing wear, alignment issues, loose components, damaged gears or rotating machinery problems.",
  },
  {
    title: "Oil or Water Leakage",
    description:
      "Seal, gasket, pipeline, cooler or component failure resulting in leakage and reduced reliability.",
  },
  {
    title: "Excessive Smoke",
    description:
      "Fuel injection, turbocharging, combustion, air supply or engine-condition problems.",
  },
  {
    title: "Starting Failure",
    description:
      "Mechanical, fuel, compression, air-start or control-system issues preventing reliable engine starting.",
  },
];

const workProcess = [
  {
    step: "01",
    title: "Initial Inspection",
    description:
      "Our engineers inspect the engine, machinery and operating condition to identify faults and define the required repair scope.",
    icon: Search,
  },
  {
    step: "02",
    title: "Dismantling & Measurement",
    description:
      "Components are dismantled, cleaned, visually inspected and measured using suitable precision instruments.",
    icon: Gauge,
  },
  {
    step: "03",
    title: "Repair & Replacement",
    description:
      "Damaged or worn components are repaired, machined, serviced or replaced according to technical requirements.",
    icon: Wrench,
  },
  {
    step: "04",
    title: "Reassembly & Alignment",
    description:
      "The machinery is reassembled using controlled procedures, correct clearances, torque values and alignment checks.",
    icon: Settings,
  },
  {
    step: "05",
    title: "Testing & Handover",
    description:
      "The repaired engine or machinery is tested, monitored and inspected before final handover to the client.",
    icon: ClipboardCheck,
  },
];

const qualityChecks = [
  "Visual inspection and condition assessment",
  "Precision measurement of critical components",
  "Bearing and clearance verification",
  "Torque-controlled assembly",
  "Alignment and rotation checks",
  "Lubrication and cooling-system verification",
  "No-load and operational testing",
  "Final technical inspection before handover",
];

const vesselTypes = [
  "Bulk Carriers",
  "Container Vessels",
  "Tankers",
  "Tug Boats",
  "Dredgers",
  "Fishing Vessels",
  "Offshore Support Vessels",
  "Government Marine Craft",
];

const relatedServices = [
  {
    title: "Pipeline Renewal",
    description:
      "Seawater, freshwater, fuel, lube oil, hydraulic, Cu-Ni and stainless-steel pipeline services.",
    href: "/services/pipeline",
    image: "/images/services/pipeline-services.jpg",
  },
  {
    title: "Electrical & Automation",
    description:
      "PLC, switchboards, alarms, sensors, motors, controls and marine automation support.",
    href: "/services/electrical",
    image: "/images/services/electrical-services.jpg",
  },
  {
    title: "Hydraulic Systems",
    description:
      "Hydraulic pumps, valves, rams, motors, grabs and CPP hydraulic-system repair.",
    href: "/services/hydraulic",
    image: "/images/services/hydraulic-services.jpg",
  },
];

export default function MechanicalServicesPage() {
  return (
    <>
      {/* HERO */}

      <section className="relative min-h-[610px] overflow-hidden bg-[#03111f] text-white">
        <Image
          src="/images/services/mechanical/hero-mechanical.jpg"
          alt="Marine engine overhaul and mechanical repair"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#03111f]/96 via-[#03111f]/80 to-[#03111f]/25" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#03111f]/75 via-transparent to-transparent" />

        <div className="site-container relative z-10 flex min-h-[610px] items-center py-20">
          <div className="max-w-[760px]">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <Wrench size={15} className="text-[#67b94c]" />
              Marine Mechanical Engineering
            </p>

            <h1 className="text-[42px] font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-[52px] lg:text-[64px]">
              Mechanical &amp;
              <span className="mt-2 block text-[#58ad43]">
                Engine Services
              </span>
            </h1>

            <p className="mt-7 max-w-[680px] text-base leading-7 text-slate-200 sm:text-lg">
              Complete overhaul, repair, inspection and maintenance support for
              marine engines, generators, turbochargers, gearboxes, pumps,
              compressors, coolers and mechanical systems.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="primary-button">
                Request Mechanical Service
                <ArrowRight size={18} />
              </Link>

              <a href="tel:+8801819319350" className="outline-light-button">
                <Phone size={18} />
                Emergency Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS */}

      <section className="relative z-20 -mt-1 bg-white">
        <div className="site-container">
          <div className="grid overflow-hidden rounded-b-xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.10)] sm:grid-cols-2 lg:grid-cols-4">
            {keyStatistics.map((statistic, index) => {
              const Icon = statistic.icon;

              return (
                <article
                  key={statistic.label}
                  className={`flex min-h-[130px] items-center gap-5 px-7 py-6 ${
                    index !== keyStatistics.length - 1
                      ? "border-b border-slate-200 sm:border-r lg:border-b-0"
                      : ""
                  }`}
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#edf7ed] text-[#3e9838]">
                    <Icon size={26} strokeWidth={1.7} />
                  </span>

                  <div>
                    <p className="text-[29px] font-extrabold leading-none text-[#071a35]">
                      {statistic.value}
                    </p>

                    <p className="mt-2 text-sm font-bold text-slate-600">
                      {statistic.label}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}

      <section className="section-padding bg-white">
        <div className="site-container">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div>
              <p className="section-eyebrow">Service Overview</p>

              <h2 className="section-title max-w-[610px]">
                Dependable Mechanical Support for Critical Vessel Machinery
              </h2>

              <div className="mt-7 space-y-5 text-[15px] leading-7 text-slate-600">
                <p>
                  Marine engines and rotating machinery are critical to vessel
                  safety, propulsion and power generation. Any mechanical fault
                  can lead to operational delays, increased fuel consumption or
                  complete vessel downtime.
                </p>

                <p>
                  Janata Electric &amp; Engineering Workshop provides complete
                  inspection, overhaul, repair, maintenance and troubleshooting
                  support for marine engines and associated machinery.
                </p>

                <p>
                  Our engineers and technicians support both planned overhaul
                  projects and urgent breakdown repairs at the workshop, port,
                  shipyard, dry dock or onboard the vessel.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Complete engine dismantling and inspection",
                  "Precision component measurement",
                  "Repair and replacement of worn parts",
                  "Reassembly, alignment and testing",
                  "Workshop and onboard support",
                  "Emergency mechanical troubleshooting",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
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

            <div className="relative min-h-[540px] overflow-hidden rounded-xl">
              <Image
                src="/images/services/mechanical/mechanical-overview.jpg"
                alt="Marine engineers inspecting a diesel engine"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#03111f]/65 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/15 bg-[#03111f]/85 p-6 text-white backdrop-blur-sm">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#72bd57]">
                  Mechanical Expertise
                </p>

                <h3 className="mt-2 text-xl font-extrabold">
                  Inspection, overhaul, testing and recommissioning
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Comprehensive technical support designed to restore machinery
                  reliability and reduce vessel downtime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}

      <section className="section-padding bg-[#f6f8fb]">
        <div className="site-container">
          <div className="text-center">
            <p className="section-eyebrow">Core Capabilities</p>

            <h2 className="section-title">
              Complete Marine Mechanical Engineering Services
            </h2>

            <p className="mx-auto mt-5 max-w-[780px] text-[15px] leading-7 text-slate-600">
              Our mechanical services cover major engines, auxiliary machinery,
              rotating equipment and essential vessel systems.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCapabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="rounded-xl border border-slate-200 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#62ad4a]/50 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#edf7ed] text-[#3e9838]">
                    <Icon size={27} strokeWidth={1.7} />
                  </span>

                  <h3 className="mt-6 text-lg font-extrabold text-[#071a35]">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {capability.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DETAILED SERVICE LIST */}

      <section className="section-padding bg-[#071a35] text-white">
        <div className="site-container">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
            <div className="relative min-h-[600px] overflow-hidden rounded-xl">
              <Image
                src="/images/services/mechanical/engine-overhaul.jpg"
                alt="Marine engine being overhauled in a workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#03111f]/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/15 bg-[#03111f]/85 p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <Wrench
                    size={30}
                    className="shrink-0 text-[#72bd57]"
                  />

                  <div>
                    <h3 className="text-lg font-extrabold">
                      Complete Overhaul Capability
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Dismantling, inspection, repair, replacement, assembly and
                      operational testing under one service scope.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="section-eyebrow">Detailed Scope</p>

              <h2 className="max-w-[610px] text-[31px] font-extrabold leading-[1.1] tracking-[-0.035em] text-white sm:text-[38px]">
                Mechanical Services We Provide
              </h2>

              <p className="mt-6 text-[15px] leading-7 text-slate-300">
                Our team can support individual machinery repairs or complete
                overhaul projects, depending on the vessel’s requirements.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {detailedServices.map((service) => (
                  <div key={service} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#72bd57]"
                    />

                    <span className="text-sm leading-6 text-slate-200">
                      {service}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="primary-button mt-8">
                Request Service Assessment
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON PROBLEMS */}

      <section className="section-padding bg-white">
        <div className="site-container">
          <div className="text-center">
            <p className="section-eyebrow">Problems We Solve</p>

            <h2 className="section-title">
              Mechanical Faults Requiring Professional Attention
            </h2>

            <p className="mx-auto mt-5 max-w-[760px] text-[15px] leading-7 text-slate-600">
              Early diagnosis and repair can prevent serious machinery damage,
              extended downtime and increased operating costs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {commonProblems.map((problem) => (
              <article
                key={problem.title}
                className="rounded-xl border border-slate-200 bg-[#f8fafc] p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff3e8] text-[#d86b17]">
                  <AlertTriangle size={23} />
                </span>

                <h3 className="mt-5 text-lg font-extrabold text-[#071a35]">
                  {problem.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {problem.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="section-padding bg-[#f6f8fb]">
        <div className="site-container">
          <div className="text-center">
            <p className="section-eyebrow">Our Repair Process</p>

            <h2 className="section-title">
              A Controlled Engine Overhaul Procedure
            </h2>

            <p className="mx-auto mt-5 max-w-[760px] text-[15px] leading-7 text-slate-600">
              Every overhaul is completed through a clear sequence of
              inspection, measurement, repair, assembly and testing.
            </p>
          </div>

          <div className="relative mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            <div className="absolute left-[10%] right-[10%] top-[35px] hidden h-px bg-slate-300 lg:block" />

            {workProcess.map((process) => {
              const Icon = process.icon;

              return (
                <article
                  key={process.step}
                  className="relative rounded-xl border border-slate-200 bg-white p-6 text-center shadow-[0_8px_25px_rgba(15,23,42,0.04)]"
                >
                  <div className="relative z-10 mx-auto flex h-[70px] w-[70px] items-center justify-center rounded-full border-4 border-[#f6f8fb] bg-[#071a35] text-white shadow-lg">
                    <Icon size={26} />
                  </div>

                  <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#3e9838]">
                    Step {process.step}
                  </p>

                  <h3 className="mt-2 text-base font-extrabold text-[#071a35]">
                    {process.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {process.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUALITY */}

      <section className="section-padding bg-white">
        <div className="site-container">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div>
              <p className="section-eyebrow">Quality & Testing</p>

              <h2 className="section-title max-w-[600px]">
                Precision Inspection Before Final Handover
              </h2>

              <p className="mt-6 text-[15px] leading-7 text-slate-600">
                Mechanical repair requires accurate measurement, correct
                assembly and controlled testing. Our team checks critical
                components and operating conditions before the machinery is
                returned to service.
              </p>

              <div className="mt-7 space-y-4">
                {qualityChecks.map((check) => (
                  <div key={check} className="flex items-start gap-3">
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#3e9838]"
                    />

                    <span className="text-sm font-semibold leading-6 text-[#071a35]">
                      {check}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="primary-button mt-8">
                Discuss Your Engine Requirement
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative min-h-[520px] overflow-hidden rounded-xl">
              <Image
                src="/images/services/mechanical/mechanical-testing.jpg"
                alt="Marine engineer measuring and testing engine components"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#03111f]/55 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* VESSEL TYPES */}

      <section className="section-padding bg-[#f6f8fb]">
        <div className="site-container">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div className="relative min-h-[460px] overflow-hidden rounded-xl">
              <Image
                src="/images/services/mechanical/vessels-supported.jpg"
                alt="Commercial vessels supported by Janata Engineering"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#03111f]/60 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#72bd57]">
                  Vessel Support
                </p>

                <h3 className="mt-2 text-2xl font-extrabold text-white">
                  Mechanical services for all major vessel types
                </h3>
              </div>
            </div>

            <div>
              <p className="section-eyebrow">Vessels Supported</p>

              <h2 className="section-title max-w-[570px]">
                Mechanical Services for Commercial and Working Vessels
              </h2>

              <p className="mt-6 text-[15px] leading-7 text-slate-600">
                Our engineering team supports different vessel categories,
                machinery brands and operational environments.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {vesselTypes.map((vessel) => (
                  <div
                    key={vessel}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3"
                  >
                    <Ship size={18} className="shrink-0 text-[#3e9838]" />

                    <span className="text-sm font-bold text-[#071a35]">
                      {vessel}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY SUPPORT */}

      <section className="section-padding bg-[#071a35] text-white">
        <div className="site-container">
          <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-[#03111f] lg:grid-cols-2">
            <div className="relative min-h-[440px]">
              <Image
                src="/images/services/mechanical/emergency-mechanical.jpg"
                alt="Emergency marine engine repair team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#03111f]/25" />

              <div className="absolute left-6 top-6 rounded-lg bg-[#4ca53a] px-4 py-3 text-white shadow-lg">
                <p className="text-xl font-extrabold">24/7</p>

                <p className="text-[10px] font-bold uppercase tracking-[0.12em]">
                  Emergency Support
                </p>
              </div>
            </div>

            <div className="flex items-center p-8 sm:p-12 lg:p-14">
              <div>
                <p className="section-eyebrow">Emergency Mechanical Repair</p>

                <h2 className="text-[30px] font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-[38px]">
                  Rapid Support for Machinery Breakdown and Engine Failure
                </h2>

                <p className="mt-6 text-[15px] leading-7 text-slate-300">
                  Our team is available for urgent mechanical inspection,
                  troubleshooting and repair support when vessel downtime
                  requires immediate technical action.
                </p>

                <div className="mt-7 space-y-4">
                  {[
                    "Emergency engine fault diagnosis",
                    "Onboard mechanical troubleshooting",
                    "Temporary and permanent repair solutions",
                    "Pump, valve and compressor breakdown repair",
                    "Turbocharger and governor troubleshooting",
                    "Port-side and shipyard technical support",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[#72bd57]"
                      />

                      <span className="text-sm leading-6 text-slate-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a href="tel:+8801819319350" className="primary-button">
                    <Phone size={18} />
                    Emergency Call
                  </a>

                  <a
                    href="https://wa.me/8801819319350"
                    target="_blank"
                    rel="noreferrer"
                    className="outline-light-button"
                  >
                    <Headphones size={18} />
                    WhatsApp Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}

      <section className="section-padding bg-white">
        <div className="site-container">
          <div className="text-center">
            <p className="section-eyebrow">Related Services</p>

            <h2 className="section-title">
              Additional Marine Engineering Support
            </h2>

            <p className="mx-auto mt-5 max-w-[760px] text-[15px] leading-7 text-slate-600">
              Mechanical repair projects often require support from pipeline,
              electrical and hydraulic engineering teams.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#03111f]/65 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-[#071a35]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#318b2f]">
                    Explore Service
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="relative overflow-hidden bg-[#03111f] py-16 text-white">
        <Image
          src="/images/services/mechanical/mechanical-cta.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-200"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#03111f]/95 to-[#071a35]/80" />

        <div className="site-container relative z-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#72bd57]">
                Marine Mechanical Support
              </p>

              <h2 className="mt-3 max-w-[760px] text-3xl font-extrabold leading-tight sm:text-[40px]">
                Need Engine Overhaul or Emergency Mechanical Repair?
              </h2>

              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-slate-300">
                Send us the engine model, vessel details, fault description,
                photographs or repair scope. Our engineering team will review
                the requirement and respond with a suitable technical solution.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link href="/contact" className="primary-button">
                Request a Quotation
                <ArrowRight size={18} />
              </Link>

              <a href="tel:+8801819319350" className="outline-light-button">
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