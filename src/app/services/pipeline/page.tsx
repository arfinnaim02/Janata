"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Gauge,
  ShieldCheck,
  Wrench,
  AlertTriangle,
  Phone,
  Droplets,
  Flame,
  Ship,
  Search,
  ClipboardCheck,
  Settings,
  Headphones,
} from "lucide-react";

export default function PipelinePage() {

  /* =========================
     DATA
  ==========================*/

  const keyStats = [
    { value: "30+", label: "Years Experience", icon: Factory },
    { value: "24/7", label: "Emergency Support", icon: Headphones },
    { value: "100%", label: "Leak Testing Focus", icon: Gauge },
    { value: "All Types", label: "Marine Pipelines", icon: Ship },
  ];

  const capabilities = [
    {
      title: "Marine Pipeline Fabrication",
      desc: "Custom fabrication of seawater, fuel, oil, hydraulic and fire line systems using marine-grade materials.",
      icon: Factory,
    },
    {
      title: "Precision Pipe Bending",
      desc: "Accurate pipe forming and alignment for complex shipboard layouts and engine room systems.",
      icon: Wrench,
    },
    {
      title: "Leak Detection & Repair",
      desc: "Advanced fault detection and emergency repair for pipeline leakage or rupture systems onboard.",
      icon: AlertTriangle,
    },
    {
      title: "Pressure Testing Systems",
      desc: "Hydrostatic and pneumatic pressure testing before final commissioning and handover.",
      icon: Gauge,
    },
  ];

  const services = [
    "Sea Water Pipeline Renewal",
    "Fresh Water Pipeline Systems",
    "Fire Fighting Line Repair",
    "Fuel Oil Pipeline Systems",
    "Lube Oil Pipeline Systems",
    "Hydraulic Pipeline Installation",
    "Cu-Ni Pipeline Fabrication",
    "Stainless Steel Pipeline Work",
    "Cast Iron Pipeline Replacement",
    "Sea Chest Strainer Cleaning",
    "Dredger Suction & Discharge Lines",
    "Pipe Fabrication & Workshop Bending",
  ];

  const process = [
    {
      step: "01",
      title: "System Inspection",
      desc: "We inspect pipeline condition, leakage points, corrosion damage and system performance.",
      icon: Search,
    },
    {
      step: "02",
      title: "Technical Assessment",
      desc: "Engineering evaluation of repair or replacement scope based on vessel requirements.",
      icon: ClipboardCheck,
    },
    {
      step: "03",
      title: "Fabrication & Repair",
      desc: "Pipe cutting, bending, welding, flange fitting and assembly using marine standards.",
      icon: Wrench,
    },
    {
      step: "04",
      title: "Pressure Testing",
      desc: "Hydrostatic and operational pressure testing ensures system safety and leak-free operation.",
      icon: Gauge,
    },
    {
      step: "05",
      title: "Final Handover",
      desc: "Complete system inspection and operational approval before vessel return to service.",
      icon: Settings,
    },
  ];

  const problems = [
    {
      title: "Pipeline Leakage",
      desc: "Seawater, fuel or oil leakage due to corrosion, joint failure or material damage.",
      icon: Droplets,
    },
    {
      title: "Fire Line Failure",
      desc: "Emergency fire line system malfunction affecting vessel safety compliance.",
      icon: Flame,
    },
    {
      title: "Corrosion Damage",
      desc: "Pipe deterioration due to seawater exposure and long-term usage.",
      icon: Factory,
    },
    {
      title: "Pressure Drop",
      desc: "Reduced system efficiency due to blockage, leakage or internal damage.",
      icon: Gauge,
    },
  ];

  const vesselTypes = [
    "Bulk Carrier",
    "Container Vessel",
    "Oil Tanker",
    "Tug Boat",
    "Dredger",
    "Fishing Vessel",
    "Offshore Vessel",
    "Government Fleet",
  ];

  /* =========================
     UI
  ==========================*/

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[620px] text-white overflow-hidden">

        <Image
          src="/images/services/pipeline/pipeline-hero.jpg"
          alt="Marine pipeline fabrication and repair"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#03111f]/95 via-[#03111f]/70 to-transparent" />

        <div className="site-container relative z-10 flex min-h-[620px] items-center">

          <div className="max-w-[780px]">

            <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#7ed957]">
              <Factory size={16} />
              Pipeline Engineering Division
            </p>

            <h1 className="mt-4 text-5xl font-extrabold leading-tight">
              Marine Pipeline
              <span className="block text-[#39a85a]">
                Renewal & Fabrication
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-200">
              Complete shipboard pipeline engineering solutions including seawater,
              fuel, hydraulic, lubrication and fire-fighting systems with precision fabrication and testing.
            </p>

            <div className="mt-8 flex gap-4">
              <Link href="/contact" className="primary-button">
                Request Pipeline Service <ArrowRight size={18} />
              </Link>

              <a href="tel:+8801819319350" className="outline-light-button">
                <Phone size={18} />
                Emergency Call
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="section-padding bg-white">
        <div className="site-container">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

            {keyStats.map((s, i) => {
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

        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="section-padding bg-[#f6f8fb]">
        <div className="site-container grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="section-eyebrow">Service Overview</p>

            <h2 className="section-title">
              Critical Marine Pipeline Systems Engineering
            </h2>

            <p className="mt-6 text-slate-600 leading-7">
              Marine pipeline systems carry essential fluids such as seawater,
              fuel oil, lubrication oil and fire suppression agents. Failure of
              any pipeline can directly impact vessel operation and safety.
            </p>

            <p className="mt-4 text-slate-600 leading-7">
              We provide complete pipeline installation, repair, fabrication,
              modification and testing services for all types of marine vessels.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Leak detection & emergency repair",
                "Full pipeline renewal onboard vessels",
                "Workshop fabrication & bending",
                "Pressure & hydro testing",
                "Marine alloy specialization (Cu-Ni, SS)",
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
              src="/images/services/pipeline/pipeline-overview.jpg"
              alt="Marine pipeline inspection"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="section-padding bg-white">
        <div className="site-container">

          <h2 className="section-title text-center">
            Pipeline Engineering Capabilities
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

      {/* ================= SERVICES LIST ================= */}
      <section className="section-padding bg-[#071a35] text-white">
        <div className="site-container">

          <h2 className="section-title text-white">
            Complete Pipeline Services
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

      {/* ================= PROCESS ================= */}
      <section className="section-padding bg-[#f6f8fb]">
        <div className="site-container">

          <h2 className="section-title text-center">
            Pipeline Work Process
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

      {/* ================= PROBLEMS ================= */}
      <section className="section-padding bg-white">
        <div className="site-container">

          <h2 className="section-title text-center">
            Common Pipeline Issues We Solve
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

      {/* ================= CTA ================= */}
      <section className="section-padding bg-[#071a35] text-white text-center">

        <div className="site-container">

          <h2 className="section-title text-white">
            Need Pipeline Repair or Fabrication?
          </h2>

          <p className="mt-4 text-slate-300">
            Contact our marine engineering team for immediate technical support.
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