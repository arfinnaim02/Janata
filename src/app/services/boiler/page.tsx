"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Flame,
  Thermometer,
  Gauge,
  AlertTriangle,
  Phone,
  Settings,
  Activity,
  Wrench,
  ShieldCheck,
  Headphones,
  Factory,
  Zap,
} from "lucide-react";

export default function BoilerPage() {

  const stats = [
    { value: "30+", label: "Years Experience", icon: Activity },
    { value: "High Temp", label: "Thermal Systems Expertise", icon: Thermometer },
    { value: "24/7", label: "Emergency Support", icon: Headphones },
    { value: "Marine", label: "Boiler Systems", icon: Factory },
  ];

  const capabilities = [
    {
      title: "Marine Boiler Repair",
      desc: "Complete inspection, repair and overhaul of marine boilers and steam generation systems.",
      icon: Factory,
    },
    {
      title: "Heat Exchanger Service",
      desc: "Cleaning, repair and performance restoration of heat exchangers and cooling systems.",
      icon: Thermometer,
    },
    {
      title: "Steam System Maintenance",
      desc: "Steam pipeline, valves and pressure system inspection and servicing.",
      icon: Gauge,
    },
    {
      title: "Radiator & Cooling Systems",
      desc: "Repair of radiators, condensers and marine cooling systems for engines.",
      icon: Zap,
    },
  ];

  const services = [
    "Marine Boiler Inspection & Repair",
    "Boiler Tube Replacement",
    "Steam System Maintenance",
    "Heat Exchanger Cleaning & Repair",
    "Condenser Overhaul",
    "Radiator Repair & Fabrication",
    "Pressure Vessel Inspection",
    "Steam Valve Repair",
    "Thermal System Troubleshooting",
    "Boiler Efficiency Optimization",
    "Cooling System Maintenance",
    "Emergency Boiler Repair",
  ];

  const problems = [
    {
      title: "Boiler Failure",
      desc: "Loss of steam generation or boiler malfunction affecting vessel operation.",
      icon: Flame,
    },
    {
      title: "Heat Loss",
      desc: "Reduced thermal efficiency due to exchanger or insulation issues.",
      icon: Thermometer,
    },
    {
      title: "Pressure Drop",
      desc: "Steam or thermal pressure instability in system operation.",
      icon: Gauge,
    },
    {
      title: "Leakage Issues",
      desc: "Steam, water or cooling fluid leakage in boiler systems.",
      icon: AlertTriangle,
    },
  ];

  const process = [
    {
      step: "01",
      title: "System Inspection",
      desc: "We inspect boiler and heat transfer systems for faults and efficiency loss.",
      icon: Activity,
    },
    {
      step: "02",
      title: "Thermal Analysis",
      desc: "Evaluate pressure, temperature and heat transfer performance.",
      icon: Thermometer,
    },
    {
      step: "03",
      title: "Repair & Fabrication",
      desc: "Boiler tubes, exchangers, valves and thermal components are repaired.",
      icon: Wrench,
    },
    {
      step: "04",
      title: "Pressure Testing",
      desc: "Controlled pressure and thermal testing ensures system safety.",
      icon: Gauge,
    },
    {
      step: "05",
      title: "Final Commissioning",
      desc: "System is verified and approved for safe marine operation.",
      icon: Settings,
    },
  ];

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative min-h-[620px] text-white overflow-hidden">

        <Image
          src="/images/services/boiler/boiler-hero.jpg"
          alt="Marine boiler and heat transfer systems"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#03111f]/95 via-[#03111f]/70 to-transparent" />

        <div className="site-container relative z-10 flex min-h-[620px] items-center">

          <div className="max-w-[780px]">

            <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#7ed957]">
              <Flame size={16} />
              Boiler & Heat Transfer Division
            </p>

            <h1 className="mt-4 text-5xl font-extrabold leading-tight">
              Marine Boiler
              <span className="block text-[#39a85a]">
                & Heat Systems
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-200">
              Complete boiler repair, heat exchanger service, steam system maintenance
              and marine thermal engineering solutions for vessel efficiency and safety.
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

            <p className="section-eyebrow">Thermal Engineering Expertise</p>

            <h2 className="section-title">
              High Temperature Marine Boiler Systems
            </h2>

            <p className="mt-6 text-slate-600 leading-7">
              Boilers and heat transfer systems are essential for steam generation,
              heating and operational efficiency onboard vessels.
            </p>

            <p className="mt-4 text-slate-600 leading-7">
              We provide complete boiler inspection, repair, cleaning and heat exchanger
              servicing for marine applications.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Boiler inspection & repair",
                "Heat exchanger servicing",
                "Steam system maintenance",
                "Radiator & condenser repair",
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
              src="/images/services/boiler/boiler-overview.jpg"
              alt="Marine boiler system inspection"
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
            Boiler & Heat Transfer Capabilities
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
            Complete Boiler Services
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
            Boiler Repair Process
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
            Common Boiler Issues We Solve
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
            Need Boiler or Heat System Support?
          </h2>

          <p className="mt-4 text-slate-300">
            Contact our marine thermal engineers for inspection and repair support.
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