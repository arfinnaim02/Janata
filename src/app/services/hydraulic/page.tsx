"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Gauge,
  AlertTriangle,
  Wrench,
  Phone,
  Settings,
  Ship,
  Droplets,
  Cog,
  Activity,
  ShieldCheck,
  Hammer,
} from "lucide-react";

export default function HydraulicPage() {

  const stats = [
    { value: "30+", label: "Years Experience", icon: Activity },
    { value: "High Pressure", label: "System Expertise", icon: Gauge },
    { value: "24/7", label: "Emergency Repair", icon: Phone },
    { value: "Marine", label: "Hydraulic Systems", icon: Cog },
  ];

  const capabilities = [
    {
      title: "Hydraulic System Overhaul",
      desc: "Complete inspection, repair and rebuilding of marine hydraulic systems and components.",
      icon: Wrench,
    },
    {
      title: "CPP System Maintenance",
      desc: "Controllable Pitch Propeller hydraulic system troubleshooting and repair.",
      icon: Ship,
    },
    {
      title: "Hydraulic Pump & Motor Repair",
      desc: "Repair and calibration of pumps, motors, cylinders and hydraulic power units.",
      icon: Cog,
    },
    {
      title: "Leak Detection & Sealing",
      desc: "Advanced leak detection and sealing for high-pressure marine hydraulic systems.",
      icon: Droplets,
    },
  ];

  const services = [
    "Hydraulic Pump Overhauling",
    "Hydraulic Motor Repair",
    "Hydraulic Cylinder Repair",
    "CPP System Hydraulic Maintenance",
    "Steering Gear Hydraulic Repair",
    "Winch Hydraulic System Service",
    "Grab Hydraulic System Overhaul",
    "Hydraulic Valve Repair & Replacement",
    "Hydraulic Hose Replacement",
    "High Pressure Leak Repair",
    "Hydraulic Power Unit (HPU) Service",
    "System Pressure Testing",
  ];

  const problems = [
    {
      title: "Pressure Loss",
      desc: "Hydraulic systems losing pressure due to leakage or internal wear.",
      icon: Gauge,
    },
    {
      title: "Oil Leakage",
      desc: "Hydraulic oil leakage from pipes, seals or cylinders.",
      icon: Droplets,
    },
    {
      title: "CPP Failure",
      desc: "Controllable pitch propeller hydraulic system malfunction.",
      icon: Ship,
    },
    {
      title: "System Breakdown",
      desc: "Complete hydraulic system failure affecting vessel operation.",
      icon: AlertTriangle,
    },
  ];

  const process = [
    {
      step: "01",
      title: "System Inspection",
      desc: "We inspect hydraulic system condition, pressure level and leakage points.",
      icon: Activity,
    },
    {
      step: "02",
      title: "Fault Diagnosis",
      desc: "Identify root cause of hydraulic failure using testing tools.",
      icon: AlertTriangle,
    },
    {
      step: "03",
      title: "Repair & Replacement",
      desc: "Repair pumps, cylinders, valves and replace damaged components.",
      icon: Wrench,
    },
    {
      step: "04",
      title: "Pressure Testing",
      desc: "System is tested under controlled high-pressure conditions.",
      icon: Gauge,
    },
    {
      step: "05",
      title: "Final Commissioning",
      desc: "System is verified and approved for safe vessel operation.",
      icon: Settings,
    },
  ];

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative min-h-[620px] text-white overflow-hidden">

        <Image
          src="/images/services/hydraulic/hydraulic-hero.jpg"
          alt="Marine hydraulic system repair"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#03111f]/95 via-[#03111f]/70 to-transparent" />

        <div className="site-container relative z-10 flex min-h-[620px] items-center">

          <div className="max-w-[780px]">

            <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#7ed957]">
              <Cog size={16} />
              Hydraulic Systems Division
            </p>

            <h1 className="mt-4 text-5xl font-extrabold leading-tight">
              Marine Hydraulic
              <span className="block text-[#39a85a]">
                Systems Engineering
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-200">
              High-pressure hydraulic system repair, CPP maintenance, steering gear servicing,
              pump overhaul and complete marine hydraulic engineering solutions.
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

            <p className="section-eyebrow">Hydraulic Expertise</p>

            <h2 className="section-title">
              High-Pressure Marine Hydraulic Systems
            </h2>

            <p className="mt-6 text-slate-600 leading-7">
              Hydraulic systems control critical ship operations including propulsion,
              steering, winches and cargo handling equipment.
            </p>

            <p className="mt-4 text-slate-600 leading-7">
              We provide complete repair, overhaul, testing and maintenance for all marine hydraulic systems.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Hydraulic pump & motor repair",
                "CPP system servicing",
                "Leak detection & sealing",
                "Steering gear maintenance",
                "Pressure testing & calibration",
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
              src="/images/services/hydraulic/hydraulic-overview.jpg"
              alt="Marine hydraulic system inspection"
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
            Hydraulic Engineering Capabilities
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
            Complete Hydraulic Services
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
            Hydraulic Repair Process
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
            Common Hydraulic Issues We Solve
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
            Need Hydraulic System Repair?
          </h2>

          <p className="mt-4 text-slate-300">
            Contact our marine hydraulic engineers for immediate support and troubleshooting.
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