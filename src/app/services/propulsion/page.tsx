"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Ship,
  Cog,
  Gauge,
  AlertTriangle,
  Phone,
  Wrench,
  Settings,
  Activity,
  ShieldCheck,
  Anchor,
  Move,
  Compass,
  Headphones,
} from "lucide-react";

export default function PropulsionPage() {

  const stats = [
    { value: "30+", label: "Years Experience", icon: Activity },
    { value: "CPP Expert", label: "Hydraulic Propulsion Systems", icon: Cog },
    { value: "24/7", label: "Emergency Support", icon: Headphones },
    { value: "Global", label: "Vessel Coverage", icon: Ship },
  ];

  const capabilities = [
    {
      title: "CPP System Maintenance",
      desc: "Complete controllable pitch propeller hydraulic system inspection, repair and calibration.",
      icon: Cog,
    },
    {
      title: "Propeller & Shaft Overhaul",
      desc: "Propeller removal, inspection, balancing, repair and shaft alignment services.",
      icon: Anchor,
    },
    {
      title: "Rudder System Repair",
      desc: "Rudder blade, stock, bush and bearing inspection and full system overhaul.",
      icon: Move,
    },
    {
      title: "Steering Gear Systems",
      desc: "Hydraulic steering gear maintenance, troubleshooting and pressure testing.",
      icon: Settings,
    },
  ];

  const services = [
    "Controllable Pitch Propeller (CPP) Repair",
    "Propeller Blade Inspection & Balancing",
    "Shaft Alignment & Overhaul",
    "Rudder System Repair & Replacement",
    "Steering Gear Hydraulic Service",
    "Bow Thruster Maintenance",
    "Tailstock Bearing Repair",
    "Thrust Bearing Inspection",
    "Propulsion System Troubleshooting",
    "Hydraulic Propulsion Control Systems",
    "Vibration & Alignment Correction",
    "Emergency Propulsion Repair",
  ];

  const problems = [
    {
      title: "Loss of Propulsion",
      desc: "Failure in CPP, shaft or engine connection affecting vessel movement.",
      icon: AlertTriangle,
    },
    {
      title: "Steering Failure",
      desc: "Hydraulic steering gear malfunction or control system breakdown.",
      icon: Compass,
    },
    {
      title: "Vibration Issues",
      desc: "Unbalanced propeller or shaft misalignment causing vibration.",
      icon: Gauge,
    },
    {
      title: "Rudder Damage",
      desc: "Mechanical damage or wear in rudder system affecting control.",
      icon: Ship,
    },
  ];

  const process = [
    {
      step: "01",
      title: "System Inspection",
      desc: "Complete inspection of propulsion, shaft and steering systems onboard or dry dock.",
      icon: ShieldCheck,
    },
    {
      step: "02",
      title: "Fault Diagnosis",
      desc: "Identify mechanical, hydraulic or alignment issues affecting propulsion.",
      icon: AlertTriangle,
    },
    {
      step: "03",
      title: "Repair & Alignment",
      desc: "Repair propeller, shaft, rudder and steering components with precision alignment.",
      icon: Wrench,
    },
    {
      step: "04",
      title: "System Testing",
      desc: "Operational testing of propulsion and steering under controlled conditions.",
      icon: Gauge,
    },
    {
      step: "05",
      title: "Sea Trial Support",
      desc: "Final performance validation during vessel trial and commissioning.",
      icon: Settings,
    },
  ];

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative min-h-[620px] text-white overflow-hidden">

        <Image
          src="/images/services/propulsion/propulsion-hero.jpg"
          alt="Marine propulsion and steering system repair"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#03111f]/95 via-[#03111f]/70 to-transparent" />

        <div className="site-container relative z-10 flex min-h-[620px] items-center">

          <div className="max-w-[780px]">

            <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#7ed957]">
              <Ship size={16} />
              Propulsion & Steering Division
            </p>

            <h1 className="mt-4 text-5xl font-extrabold leading-tight">
              Marine Propulsion
              <span className="block text-[#39a85a]">
                & Steering Systems
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-200">
              Advanced propulsion system engineering including CPP, shaft alignment,
              rudder systems and steering gear maintenance for safe vessel control.
            </p>

            <div className="mt-8 flex gap-4">
              <Link href="/contact" className="primary-button">
                Request Service <ArrowRight size={18} />
              </Link>

              <a href="tel:+8801819319350" className="outline-light-button">
                <Phone size={18} />
                Emergency Call
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="section-padding bg-white">
        <div className="site-container grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="p-6 border rounded-xl text-center">
                <Icon className="mx-auto text-[#3e9838]" size={28} />
                <h3 className="mt-3 text-2xl font-extrabold text-[#071a35]">
                  {s.value}
                </h3>
                <p className="text-sm text-slate-600">{s.label}</p>
              </div>
            );
          })}

        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section-padding bg-[#f6f8fb]">
        <div className="site-container grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="section-eyebrow">Propulsion Expertise</p>

            <h2 className="section-title">
              Precision Marine Movement & Control Systems
            </h2>

            <p className="mt-6 text-slate-600 leading-7">
              Propulsion and steering systems are critical for vessel navigation,
              safety and maneuverability in all marine conditions.
            </p>

            <p className="mt-4 text-slate-600 leading-7">
              We provide full inspection, repair and overhaul services for CPP systems,
              propeller shafts, rudders and steering gear assemblies.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "CPP system inspection & repair",
                "Propeller shaft alignment",
                "Rudder system overhaul",
                "Steering gear hydraulic service",
                "Vibration correction & balancing",
              ].map((item) => (
                <div key={item} className="flex gap-2">
                  <CheckCircle2 className="text-green-600" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>

          </div>

          <div className="relative h-[520px] rounded-xl overflow-hidden">
            <Image
              src="/images/services/propulsion/propulsion-overview.jpg"
              alt="Marine propulsion system inspection"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="section-padding bg-white">
        <div className="site-container">

          <h2 className="section-title text-center">
            Propulsion Engineering Capabilities
          </h2>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="p-6 border rounded-xl">
                  <Icon className="text-[#3e9838]" />
                  <h3 className="mt-4 font-bold text-[#071a35]">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {c.desc}
                  </p>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-[#071a35] text-white">
        <div className="site-container">

          <h2 className="section-title text-white">
            Complete Propulsion Services
          </h2>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">

            {services.map((s) => (
              <div key={s} className="flex gap-2">
                <CheckCircle2 className="text-green-400" />
                <span className="text-sm text-slate-200">{s}</span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-[#f6f8fb]">
        <div className="site-container">

          <h2 className="section-title text-center">
            Propulsion Repair Process
          </h2>

          <div className="mt-12 grid md:grid-cols-5 gap-6">

            {process.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.step} className="p-6 bg-white border rounded-xl text-center">

                  <Icon className="mx-auto text-[#3e9838]" />

                  <p className="mt-3 text-xs font-bold text-[#3e9838]">
                    STEP {p.step}
                  </p>

                  <h3 className="mt-2 font-bold text-[#071a35]">
                    {p.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    {p.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* PROBLEMS */}
      <section className="section-padding bg-white">
        <div className="site-container">

          <h2 className="section-title text-center">
            Common Propulsion Issues We Solve
          </h2>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {problems.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="p-6 border rounded-xl">

                  <Icon className="text-orange-500" />

                  <h3 className="mt-4 font-bold text-[#071a35]">
                    {p.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    {p.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#071a35] text-white text-center">

        <div className="site-container">

          <h2 className="section-title text-white">
            Need Propulsion or Steering System Support?
          </h2>

          <p className="mt-4 text-slate-300">
            Contact our propulsion engineers for immediate inspection and repair support.
          </p>

          <div className="mt-8 flex justify-center gap-4">

            <Link href="/contact" className="primary-button">
              Request Quote <ArrowRight />
            </Link>

            <a href="https://wa.me/8801819319350" className="outline-light-button">
              WhatsApp Support
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}