import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import {
  Anchor,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Cog,
  Factory,
  Flame,
  Gauge,
  Hammer,
  Headphones,
  MapPin,
  Phone,
  Search,
  Settings,
  ShieldCheck,
  Ship,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Marine Engineering Services",

  description:
    "Explore professional marine engineering, ship repair, engine overhaul, pipeline renewal, electrical automation, hydraulic, propulsion and boiler services in Chattogram.",

  keywords: [
    "Marine Engineering Services Bangladesh",
    "Ship Repair Services Chattogram",
    "Marine Engine Overhaul Bangladesh",
    "Marine Pipeline Renewal",
    "Marine Electrical Automation",
    "Hydraulic Repair Chattogram",
    "Boiler Repair Bangladesh",
    "Propeller Shaft Repair",
  ],

  openGraph: {
    title: "Marine Engineering Services | Janata Engineering",
    description:
      "Complete marine mechanical, pipeline, electrical, hydraulic, propulsion and boiler services since 1995.",
    type: "website",
    images: [
      {
        url: "/images/services/hero-services.jpg",
        width: 1200,
        height: 630,
        alt: "Janata Electric and Engineering marine services",
      },
    ],
  },
};

const serviceCategories = [
  {
    title: "Mechanical & Engine Services",
    shortTitle: "Mechanical Services",
    description:
      "Professional overhaul, repair, inspection and maintenance of marine engines, generators, turbochargers, gearboxes, pumps and machinery.",
    image: "/images/services/mechanical-services.jpg",
    href: "/services/mechanical",
    icon: Wrench,
    services: [
      "Main Engine Overhauling",
      "Auxiliary Engine & Generator Overhauling",
      "Turbocharger Overhauling",
      "Governor Overhauling",
      "Gearbox Overhauling",
      "Pump, Cooler & Valve Overhauling",
    ],
  },
  {
    title: "Pipeline Renewal & Fabrication",
    shortTitle: "Pipeline Services",
    description:
      "Complete marine pipeline renewal, fabrication, installation and testing using steel, stainless steel, copper and Cu-Ni materials.",
    image: "/images/services/pipeline-services.jpg",
    href: "/services/pipeline",
    icon: Settings,
    services: [
      "Seawater & Freshwater Pipeline",
      "Fireline & Fuel Oil Pipeline",
      "Lube Oil & Hydraulic Pipeline",
      "Cu-Ni & Stainless Steel Pipeline",
      "Copper & Cast Iron Pipeline",
      "Dredge Suction & Discharge Pipeline",
    ],
  },
  {
    title: "Electrical & Automation",
    shortTitle: "Electrical Services",
    description:
      "Marine electrical troubleshooting, control system repairs, automation integration, motor services and alarm system maintenance.",
    image: "/images/services/electrical-services.jpg",
    href: "/services/electrical",
    icon: Zap,
    services: [
      "PLC & Automation Systems",
      "Engine Sensors & Alarm Systems",
      "Switchboard Repair",
      "Motor Controller & Inverter Drives",
      "Motor Repair & Rewinding",
      "Radar & Gyro Installation",
    ],
  },
  {
    title: "Hydraulic Systems",
    shortTitle: "Hydraulic Services",
    description:
      "Inspection, troubleshooting, repair and overhaul of marine hydraulic systems, pumps, valves, rams, drums and grabs.",
    image: "/images/services/hydraulic-services.jpg",
    href: "/services/hydraulic",
    icon: Cog,
    services: [
      "Hydraulic Pump Repair",
      "Hydraulic Valve Repair",
      "Hydraulic Ram Overhauling",
      "Hydraulic Drum Repair",
      "Hydraulic Grab Overhauling",
      "CPP Hydraulic System Support",
    ],
  },
  {
    title: "Propulsion & Steering",
    shortTitle: "Propulsion Services",
    description:
      "Specialized maintenance and repair of propulsion systems, propeller shafts, rudders, steering gears and bow thrusters.",
    image: "/images/services/propulsion-services.jpg",
    href: "/services/propulsion",
    icon: Anchor,
    services: [
      "Controllable Pitch Propeller",
      "Propeller & Shaft Overhauling",
      "Rudder, Bush & Bearing Repair",
      "Steering Gear Repair",
      "Steering Control Systems",
      "Bow Thruster Maintenance",
    ],
  },
  {
    title: "Boiler & Heat Transfer",
    shortTitle: "Boiler Services",
    description:
      "Professional repair, fabrication, tube replacement, pressure testing and maintenance of marine boilers and heat transfer equipment.",
    image: "/images/services/boiler-services.jpg",
    href: "/services/boiler",
    icon: Flame,
    services: [
      "Boiler Repair",
      "Boiler Tube Replacement",
      "Condenser Repair & Fabrication",
      "Heat Exchanger Repair",
      "Radiator Repair",
      "Cooler Overhauling",
    ],
  },
];

const dredgerServices = [
  "Dredge suction pipeline renewal",
  "Dredge discharge pipeline renewal",
  "Dredge pump suction line repair",
  "Hydraulic grab overhauling",
  "Hydraulic pump and valve repairs",
  "Pipeline fabrication and pressure testing",
];

const workProcess = [
  {
    step: "01",
    title: "Inspection",
    description:
      "Our engineers inspect the vessel, equipment or system to identify faults, damage and repair requirements.",
    icon: Search,
  },
  {
    step: "02",
    title: "Technical Assessment",
    description:
      "We prepare the repair scope, manpower requirements, material list and estimated work schedule.",
    icon: ClipboardCheck,
  },
  {
    step: "03",
    title: "Repair & Fabrication",
    description:
      "Approved mechanical, electrical, hydraulic or fabrication work is completed by our technical team.",
    icon: Hammer,
  },
  {
    step: "04",
    title: "Testing",
    description:
      "Repaired equipment and systems are inspected, tested and checked before commissioning.",
    icon: Gauge,
  },
  {
    step: "05",
    title: "Delivery & Support",
    description:
      "We complete handover and remain available for operational support and follow-up requirements.",
    icon: CheckCircle2,
  },
];

const reasons = [
  {
    title: "Serving Since 1995",
    description:
      "More than three decades of practical marine engineering and ship repair experience.",
    icon: Clock3,
  },
  {
    title: "Multidisciplinary Team",
    description:
      "Eight engineers and fifteen technicians supporting mechanical, electrical and hydraulic projects.",
    icon: Users,
  },
  {
    title: "One-Stop Solution",
    description:
      "Multiple repair disciplines handled through one reliable marine engineering contractor.",
    icon: Settings,
  },
  {
    title: "Workshop & Onboard Support",
    description:
      "Repair, fabrication and testing support available in our workshop and onboard vessels.",
    icon: Factory,
  },
  {
    title: "Quality & Safety Focus",
    description:
      "Controlled inspection, repair, testing and handover procedures for dependable results.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Technical Response",
    description:
      "Quick mobilization to minimize vessel downtime and support urgent repair requirements.",
    icon: Headphones,
  },
];

const coverageLocations = [
  "Chattogram Port",
  "Mongla Port",
  "Shipyards",
  "Dry Docks",
  "Fishing Harbours",
  "Port Service Areas",
  "Industrial Facilities",
  "Onboard Vessel Support",
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

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}

      <section className="relative min-h-[570px] overflow-hidden bg-[#03111f] text-white">
        <Image
          src="/images/services/hero-services.jpg"
          alt="Marine engineering and ship repair services at Chattogram Port"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#03111f]/95 via-[#03111f]/78 to-[#03111f]/25" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#03111f]/75 via-transparent to-transparent" />

        <div className="site-container relative z-10 flex min-h-[570px] items-center py-20">
          <div className="max-w-[730px]">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              <Wrench size={15} className="text-[#67b94c]" />
              Complete Marine Engineering Services
            </p>

            <h1 className="text-[42px] font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-[52px] lg:text-[64px]">
              One Trusted Partner for
              <span className="mt-2 block text-[#58ad43]">
                Complete Vessel Support
              </span>
            </h1>

            <p className="mt-7 max-w-[660px] text-base leading-7 text-slate-200 sm:text-lg">
              From engine overhaul and pipeline renewal to electrical
              automation, hydraulic systems, propulsion and boiler repair, our
              team provides reliable engineering support for all major vessel
              types.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="#service-categories" className="primary-button">
                Explore Services
                <ArrowRight size={18} />
              </Link>

              <Link href="/contact" className="outline-light-button">
                Request a Quotation
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE INTRODUCTION */}

      <section className="section-padding bg-white">
        <div className="site-container">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div>
              <p className="section-eyebrow">Service Overview</p>

              <h2 className="section-title max-w-[600px]">
                Marine Repair and Engineering Support Under One Roof
              </h2>

              <div className="mt-7 space-y-5 text-[15px] leading-7 text-slate-600">
                <p>
                  Janata Electric &amp; Engineering Workshop provides complete
                  marine engineering services for vessel owners, ship managers,
                  port authorities, dredging companies, fishing fleets and
                  industrial clients.
                </p>

                <p>
                  Our engineering team supports planned maintenance, emergency
                  repairs, workshop fabrication, onboard troubleshooting,
                  machinery overhaul and system modernization. This allows
                  clients to coordinate complex projects through one reliable
                  technical partner.
                </p>

                <p>
                  Every project begins with a technical inspection and is
                  completed through controlled repair, testing and handover
                  procedures designed to improve safety, reliability and vessel
                  availability.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Mechanical and engine overhaul",
                  "Marine pipeline renewal",
                  "Electrical and automation support",
                  "Hydraulic system repair",
                  "Propulsion and steering maintenance",
                  "Boiler and heat transfer services",
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

            <div className="relative min-h-[520px] overflow-hidden rounded-xl">
              <Image
                src="/images/services/services-overview.jpg"
                alt="Marine engineers inspecting vessel machinery"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#03111f]/65 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/15 bg-[#03111f]/85 p-6 text-white backdrop-blur-sm">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#72bd57]">
                  Engineering Capability
                </p>

                <h3 className="mt-2 text-xl font-extrabold">
                  Workshop and onboard technical support
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Our engineers and technicians are prepared to support vessel
                  repairs at the workshop, port, shipyard, dry dock or onboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CATEGORIES */}

      <section
        id="service-categories"
        className="section-padding bg-[#f6f8fb]"
      >
        <div className="site-container">
          <div className="text-center">
            <p className="section-eyebrow">Our Capabilities</p>

            <h2 className="section-title">
              Complete Marine Engineering Service Categories
            </h2>

            <p className="mx-auto mt-5 max-w-[780px] text-[15px] leading-7 text-slate-600">
              Select a service category to explore our technical capabilities,
              detailed scope of work and repair process.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {serviceCategories.map((category) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.href}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1.5 hover:border-[#5eaa47]/50 hover:shadow-[0_20px_55px_rgba(15,23,42,0.12)]"
                >
                  <Link href={category.href} className="block">
                    <div className="relative h-[235px] overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#03111f]/75 via-[#03111f]/10 to-transparent" />

                      <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-[#071a35] text-white shadow-xl">
                        <Icon size={25} strokeWidth={1.8} />
                      </div>
                    </div>

                    <div className="p-7">
                      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#3e9838]">
                        {category.shortTitle}
                      </p>

                      <h3 className="mt-2 text-xl font-extrabold text-[#071a35]">
                        {category.title}
                      </h3>

                      <p className="mt-4 text-sm leading-6 text-slate-600">
                        {category.description}
                      </p>

                      <ul className="mt-5 space-y-2.5">
                        {category.services.map((service) => (
                          <li
                            key={service}
                            className="flex items-start gap-3 text-[13px] leading-5 text-slate-600"
                          >
                            <CheckCircle2
                              size={16}
                              className="mt-0.5 shrink-0 text-[#3e9838]"
                            />

                            {service}
                          </li>
                        ))}
                      </ul>

                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#318b2f]">
                        View Service Details
                        <ArrowRight
                          size={17}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DREDGER SECTION */}

      <section className="section-padding bg-white">
        <div className="site-container">
          <div className="grid overflow-hidden rounded-2xl bg-[#071a35] text-white lg:grid-cols-2">
            <div className="relative min-h-[450px]">
              <Image
                src="/images/services/dredger-services.jpg"
                alt="Dredger repair and pipeline renewal services"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#071a35]/35" />
            </div>

            <div className="flex items-center p-8 sm:p-12 lg:p-14">
              <div>
                <p className="section-eyebrow">Specialized Capability</p>

                <h2 className="text-[30px] font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-[38px]">
                  Dredger Repair and Pipeline Specialists
                </h2>

                <p className="mt-6 text-[15px] leading-7 text-slate-300">
                  Dredging vessels operate under demanding conditions and
                  require strong pipeline, pump and hydraulic systems. Our team
                  provides repair, fabrication and maintenance support for
                  dredgers and dredging equipment.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {dredgerServices.map((service) => (
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

                <Link
                  href="/services/pipeline"
                  className="primary-button mt-8"
                >
                  Explore Pipeline Services
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK PROCESS */}

      <section className="section-padding bg-[#f6f8fb]">
        <div className="site-container">
          <div className="text-center">
            <p className="section-eyebrow">Our Work Process</p>

            <h2 className="section-title">
              From Inspection to Successful Handover
            </h2>

            <p className="mx-auto mt-5 max-w-[740px] text-[15px] leading-7 text-slate-600">
              We follow a clear technical process to maintain project control,
              improve communication and deliver reliable engineering results.
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

      {/* WHY CHOOSE US */}

      <section className="section-padding bg-[#03111f] text-white">
        <div className="site-container">
          <div className="text-center">
            <p className="section-eyebrow">Why Choose Janata</p>

            <h2 className="text-[31px] font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-[38px]">
              Marine Engineering Support Built Around Reliability
            </h2>

            <p className="mx-auto mt-5 max-w-[760px] text-[15px] leading-7 text-slate-300">
              Our experience, workshop capability and multidisciplinary team
              allow us to support both routine maintenance and complex vessel
              repair projects.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="rounded-xl border border-white/15 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#67b94c]/60 hover:bg-white/[0.07]"
                >
                  <span className="flex h-13 w-13 items-center justify-center rounded-full border border-[#67b94c]/50 bg-[#67b94c]/10 text-[#72bd57]">
                    <Icon size={25} />
                  </span>

                  <h3 className="mt-6 text-lg font-extrabold text-white">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {reason.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* COVERAGE AND VESSELS */}

      <section className="section-padding bg-white">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="section-eyebrow">Service Coverage</p>

              <h2 className="section-title max-w-[560px]">
                Engineering Support Where Your Vessel Needs It
              </h2>

              <p className="mt-6 text-[15px] leading-7 text-slate-600">
                Our team can support repair and maintenance activities at port,
                shipyard, dry dock, workshop or onboard the vessel, depending on
                the project requirements.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {coverageLocations.map((location) => (
                  <div
                    key={location}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 bg-[#f8fafc] px-4 py-3"
                  >
                    <MapPin
                      size={18}
                      className="shrink-0 text-[#3e9838]"
                    />

                    <span className="text-sm font-bold text-[#071a35]">
                      {location}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="section-eyebrow">Vessel Types</p>

              <h2 className="section-title max-w-[560px]">
                Supporting All Major Commercial and Marine Vessels
              </h2>

              <p className="mt-6 text-[15px] leading-7 text-slate-600">
                Our engineering capabilities are suitable for a broad range of
                commercial vessels, working craft, dredgers and government
                marine fleets.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {vesselTypes.map((vessel) => (
                  <div
                    key={vessel}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 bg-[#f8fafc] px-4 py-3"
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

      {/* QUALITY SECTION */}

      <section className="section-padding bg-[#f6f8fb]">
        <div className="site-container">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div className="relative min-h-[480px] overflow-hidden rounded-xl">
              <Image
                src="/images/services/services-quality.jpg"
                alt="Marine engineer testing repaired machinery"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#03111f]/55 to-transparent" />
            </div>

            <div>
              <p className="section-eyebrow">Quality & Testing</p>

              <h2 className="section-title max-w-[590px]">
                Professional Inspection, Testing and Technical Handover
              </h2>

              <p className="mt-6 text-[15px] leading-7 text-slate-600">
                Repair work is only complete when the system or equipment has
                been inspected and tested. Depending on the project scope, our
                quality process may include measurement, pressure testing,
                electrical testing, alignment checks, operational testing and
                final inspection.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Initial condition and fault inspection",
                  "Material and component verification",
                  "Controlled repair or fabrication procedures",
                  "Pressure, electrical or operational testing",
                  "Final inspection and client handover",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#3e9838]"
                    />

                    <span className="text-sm font-semibold leading-6 text-[#071a35]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="primary-button mt-8">
                Discuss Your Requirements
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="relative overflow-hidden bg-[#071a35] py-16 text-white">
        <Image
          src="/images/services/services-cta.jpg"
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
                24/7 Marine Engineering Support
              </p>

              <h2 className="mt-3 max-w-[760px] text-3xl font-extrabold leading-tight sm:text-[40px]">
                Need Reliable Technical Support for Your Vessel?
              </h2>

              <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-slate-300">
                Send us your repair scope, vessel details, technical drawings,
                photographs or equipment information. Our team will review the
                requirement and respond with a suitable engineering solution.
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