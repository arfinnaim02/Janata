"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Radar,
  ShieldCheck,
  Wrench,
  AlertTriangle,
  Phone,
  Settings,
  Activity,
  Gauge,
  Zap,
  Server,
  Radio,
  Bell,
} from "lucide-react";

export default function ElectricalAutomationPage() {

  const stats = [
    { value: "30+", label: "Years Experience", icon: Activity },
    { value: "24/7", label: "Emergency Support", icon: Phone },
    { value: "100%", label: "System Testing", icon: Gauge },
    { value: "Marine", label: "Automation Experts", icon: Cpu },
  ];

  const capabilities = [
    {
      title: "PLC & Control Systems",
      desc: "Advanced programmable logic controller systems for marine automation and engine control.",
      icon: Cpu,
    },
    {
      title: "Navigation Electronics",
      desc: "Installation and repair of radar, gyro compass and marine navigation systems.",
      icon: Radar,
    },
    {
      title: "Switchboard & Power Systems",
      desc: "Main and auxiliary switchboard maintenance, repair and load management systems.",
      icon: Zap,
    },
    {
      title: "Alarm & Sensor Systems",
      desc: "Fire alarms, engine alarms, tank level sensors and monitoring systems.",
      icon: Bell,
    },
  ];

  const services = [
    "PLC Programming & Troubleshooting",
    "Engine Automation Systems",
    "Main Switchboard Repair",
    "Auxiliary Switchboard Maintenance",
    "Radar System Installation",
    "Gyro Compass Calibration",
    "Sensor & Alarm System Repair",
    "Motor Control Panels",
    "Inverter & Drive Systems",
    "Tank Level Monitoring Systems",
    "Fire Detection Systems",
    "Ship Electrical Wiring & Diagnostics",
  ];

  const process = [
    {
      step: "01",
      title: "System Diagnosis",
      desc: "Complete electrical fault detection using advanced diagnostic tools.",
      icon: AlertTriangle,
    },
    {
      step: "02",
      title: "Technical Analysis",
      desc: "Identify automation or control system failure and plan repair strategy.",
      icon: Settings,
    },
    {
      step: "03",
      title: "Repair & Programming",
      desc: "PLC programming, wiring repair and component replacement.",
      icon: Wrench,
    },
    {
      step: "04",
      title: "System Testing",
      desc: "Full operational testing of automation and electrical systems.",
      icon: Gauge,
    },
    {
      step: "05",
      title: "Commissioning",
      desc: "Final system approval and handover for vessel operation.",
      icon: CheckCircle2,
    },
  ];

  const problems = [
    {
      title: "System Failure",
      desc: "Unexpected shutdown of engine automation or control systems.",
      icon: AlertTriangle,
    },
    {
      title: "Sensor Malfunction",
      desc: "Faulty readings from tank, engine or fire detection sensors.",
      icon: Bell,
    },
    {
      title: "Power Failure",
      desc: "Switchboard overload or electrical distribution issues onboard.",
      icon: Zap,
    },
    {
      title: "Navigation Error",
      desc: "Radar or gyro compass calibration and alignment issues.",
      icon: Radar,
    },
  ];

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative min-h-[620px] text-white overflow-hidden">

        <Image
          src="/images/services/electrical/electrical-hero.jpg"
          alt="Marine electrical and automation systems"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#03111f]/95 via-[#03111f]/70 to-transparent" />

        <div className="site-container relative z-10 flex min-h-[620px] items-center">

          <div className="max-w-[780px]">

            <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#7ed957]">
              <Cpu size={16} />
              Electrical & Automation Division
            </p>

            <h1 className="mt-4 text-5xl font-extrabold leading-tight">
              Marine Electrical
              <span className="block text-[#39a85a]">
                & Automation Systems
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-200">
              Advanced marine electrical systems, PLC automation, navigation electronics
              and shipboard control systems for safe and efficient vessel operation.
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

            <p className="section-eyebrow">Automation Expertise</p>

            <h2 className="section-title">
              Intelligent Marine Control & Electrical Systems
            </h2>

            <p className="mt-6 text-slate-600 leading-7">
              Modern vessels depend heavily on automation systems for safe engine control,
              navigation, fuel monitoring and emergency systems.
            </p>

            <p className="mt-4 text-slate-600 leading-7">
              We specialize in marine electrical troubleshooting, PLC programming,
              sensor systems and navigation electronics repair.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "PLC system troubleshooting & programming",
                "Radar & gyro compass servicing",
                "Switchboard maintenance",
                "Alarm & sensor calibration",
                "Full electrical diagnostics",
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
              src="/images/services/electrical/electrical-overview.jpg"
              alt="Marine electrical automation systems"
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
            Electrical & Automation Capabilities
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
            Complete Electrical Services
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
            Automation Repair Process
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
            Common Electrical Issues We Solve
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
            Need Electrical or Automation Support?
          </h2>

          <p className="mt-4 text-slate-300">
            Contact our marine automation engineers for immediate support and diagnostics.
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