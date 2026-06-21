import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Briefcase,
  Cog,
  Headphones,
  Mail,
  Phone,
  Settings,
  ShieldCheck,
  Ship,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Marine Engineering & Ship Repair in Chattogram | Janata Engineering",
  description:
    "Janata Electric & Engineering Workshop provides marine mechanical, electrical, automation, hydraulic and pipeline services in Chattogram since 1995.",
};

const statistics = [
  {
    title: "Since",
    value: "1995",
    subtitle: "Serving Marine Industry",
    icon: BadgeCheck,
  },
  {
    title: "",
    value: "8+",
    subtitle: "Engineers",
    icon: Users,
  },
  {
    title: "",
    value: "15+",
    subtitle: "Technicians",
    icon: Briefcase,
  },
  {
    title: "",
    value: "All Types",
    subtitle: "of Ships",
    icon: Ship,
  },
  {
    title: "",
    value: "24/7",
    subtitle: "Emergency Support",
    icon: Headphones,
  },
];

const benefits = [
  {
    title: "One-Stop Solution",
    description: "All marine engineering services under one roof.",
    icon: Settings,
  },
  {
    title: "Experienced Team",
    description: "Skilled engineers and technicians you can rely on.",
    icon: Users,
  },
  {
    title: "Advanced Technology",
    description: "Modern tools and equipment for precision and efficiency.",
    icon: Bot,
  },
  {
    title: "Quality Assurance",
    description: "Committed to safety, quality and long-term reliability.",
    icon: ShieldCheck,
  },
];

const services = [
  {
    title: "Engine Overhauling",
    description:
      "Main Engine, Auxiliary Engine, Gearbox, Turbocharger, Governor and more.",
    href: "/services/mechanical",
    image: "/images/services/engine-overhauling.jpg",
    icon: Wrench,
  },
  {
    title: "Pipeline Services",
    description:
      "All types of pipeline renewal, repair and fabrication including Cu-Ni and SS.",
    href: "/services/pipeline",
    image: "/images/services/pipeline-services.jpg",
    icon: Settings,
  },
  {
    title: "Electrical & Automation",
    description:
      "PLC, control systems, switchboard repairs, sensors and alarm systems.",
    href: "/services/electrical",
    image: "/images/services/electrical-automation.jpg",
    icon: Zap,
  },
  {
    title: "Hydraulic Services",
    description:
      "Hydraulic system repairs, pumps, valves, rams, drums and grabs.",
    href: "/services/hydraulic",
    image: "/images/services/hydraulic-services.jpg",
    icon: Cog,
  },
  {
    title: "Ship Repair & Maintenance",
    description:
      "Support for bulk carriers, tankers, tugs, dredgers and fishing vessels.",
    href: "/services",
    image: "/images/services/ship-repair.jpg",
    icon: Ship,
  },
];

const clients = [
  {
    title: "Bangladesh Fisheries",
    subtitle: "Development Corporation (BFDC)",
    image: "/images/clients/bfdc.png",
  },
  {
    title: "Chittagong Port",
    subtitle: "Marine Projects",
    image: "/images/clients/chittagong-port.png",
  },
  {
    title: "Bengal Shipping",
    subtitle: "",
    image: "/images/clients/bengal-shipping.png",
  },
  {
    title: "Continental Liner",
    subtitle: "",
    image: "/images/clients/continental-liner.png",
  },
  {
    title: "Fishing Vessel Maintenance",
    subtitle: "General Fleet",
    image: "/images/clients/fishing-vessel.png",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[680px] overflow-hidden bg-[#03111f] text-white lg:min-h-[720px]">
        <Image
          src="/images/home.jpg"
          alt="Marine engineer working beside a vessel at Chattogram Port"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#03111f]/95 via-[#03111f]/68 to-[#03111f]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03111f]/75 via-transparent to-transparent" />

        <div className="site-container relative z-10 flex min-h-[610px] items-center pb-36 pt-20 lg:min-h-[650px] lg:pb-40">
          <div className="max-w-[670px]">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
              <Ship size={15} className="text-[#53aa43]" />
              Marine Engineering Since 1995
            </p>

            <h1 className="max-w-[650px] text-[43px] font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-[52px] lg:text-[67px]">
              Your One-Stop
              <span className="mt-1 block text-[#4da73d]">
                Marine Engineering
              </span>
              Solution
            </h1>

            <p className="mt-7 max-w-[560px] text-base font-medium leading-7 text-slate-100 sm:text-lg">
              Delivering reliable repair, maintenance and overhaul services for
              all types of marine mechanical, electrical, automation and
              hydraulic systems since 1995.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/services" className="primary-button">
                Our Services
                <ArrowRight size={18} />
              </Link>

              <Link href="/contact" className="outline-light-button">
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20">
          <div className="site-container">
            <div className="grid overflow-hidden rounded-t-xl border border-white/15 bg-[#071a35]/90 shadow-2xl backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-5">
              {statistics.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={`${stat.value}-${index}`}
                    className={`flex min-h-[108px] items-center gap-4 px-6 py-5 ${
                      index !== statistics.length - 1
                        ? "border-b border-white/15 lg:border-b-0 lg:border-r"
                        : ""
                    }`}
                  >
                    <Icon
                      size={38}
                      strokeWidth={1.6}
                      className="shrink-0 text-[#72bb58]"
                    />

                    <div>
                      {stat.title && (
                        <p className="text-[11px] font-medium text-slate-300">
                          {stat.title}
                        </p>
                      )}

                      <p className="text-[22px] font-extrabold leading-none text-white">
                        {stat.value}
                      </p>

                      <p className="mt-1 text-[11px] font-medium text-slate-300">
                        {stat.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="section-padding bg-white">
        <div className="site-container">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.25fr] lg:gap-20">
            <div>
              <p className="section-eyebrow">About Us</p>

              <h2 className="section-title max-w-[430px]">
                Experience. Expertise. Excellence.
              </h2>

              <p className="mt-6 max-w-[520px] text-[15px] leading-7 text-slate-600">
                Janata Electric &amp; Engineering Workshop, established in
                1995, is a trusted marine engineering firm with more than three
                decades of industry experience. We provide comprehensive
                solutions to ensure the operational excellence and reliability
                of vessels and industrial equipment.
              </p>

              <Link href="/about" className="primary-button mt-8">
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article
                    key={benefit.title}
                    className="group flex min-h-[138px] gap-5 rounded-md border border-slate-200 bg-white p-7 shadow-[0_8px_28px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#62ad4a]/50 hover:shadow-[0_16px_40px_rgba(15,23,42,0.10)]"
                  >
                    <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border-2 border-[#58a942] text-[#3b9635] transition group-hover:bg-[#edf8ea]">
                      <Icon size={25} strokeWidth={1.7} />
                    </div>

                    <div>
                      <h3 className="text-[15px] font-extrabold text-[#071a35]">
                        {benefit.title}
                      </h3>

                      <p className="mt-2 text-[13px] leading-5 text-slate-600">
                        {benefit.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-[#03111f] via-[#061a31] to-[#071e39] text-white">
        <div className="site-container">
          <div className="mb-9 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-eyebrow">Our Core Services</p>

              <h2 className="max-w-[500px] text-3xl font-extrabold leading-tight tracking-[-0.035em] text-white md:text-[38px]">
                Complete Marine
                <br />
                Engineering Services
              </h2>
            </div>

            <Link href="/services" className="outline-light-button">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="service-home-card group"
                >
                  <div className="relative h-[188px] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#03111f]/50 to-transparent" />
                  </div>

                  <div className="relative px-5 pb-6 pt-9">
                    <div className="absolute -top-7 left-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-[#071a35] text-white shadow-lg">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <h3 className="text-[16px] font-extrabold leading-5 text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-[12px] leading-5 text-slate-300">
                      {service.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f7f9fc]">
        <div className="site-container">
          <div className="text-center">
            <p className="section-eyebrow">Our Projects</p>

            <h2 className="section-title">
              Trusted by Leading Organizations
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {clients.map((client) => (
              <article
                key={client.title}
                className="flex min-h-[155px] flex-col items-center justify-center rounded-md border border-slate-200 bg-white px-5 py-6 text-center shadow-[0_8px_25px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-16 w-full">
                  <Image
                    src={client.image}
                    alt={client.title}
                    fill
                    sizes="220px"
                    className="object-contain"
                  />
                </div>

                <h3 className="mt-3 text-[13px] font-extrabold leading-4 text-[#071a35]">
                  {client.title}
                </h3>

                {client.subtitle && (
                  <p className="mt-1 text-[11px] leading-4 text-slate-500">
                    {client.subtitle}
                  </p>
                )}
              </article>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link href="/projects" className="primary-button">
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#09243e] py-9 text-white">
        <Image
          src="/images/emergency-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />

        <div className="absolute inset-0 bg-[#071a35]/80" />

        <div className="site-container relative z-10 grid items-center gap-8 lg:grid-cols-[1.1fr_1.8fr_auto]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#68b84d]">
              Need Immediate Assistance?
            </p>

            <h2 className="mt-2 text-2xl font-extrabold leading-tight sm:text-3xl">
              We&apos;re Available{" "}
              <span className="text-[#68b84d]">24/7</span>
              <br />
              for Your Support
            </h2>

            <p className="mt-3 text-sm text-slate-300">
              Our expert team is always ready to serve you anytime, anywhere.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <a
              href="tel:+8801919319350"
              className="flex items-start gap-3 rounded-lg p-2 transition hover:bg-white/5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#58a942]/50 text-[#6abc4c]">
                <Phone size={20} />
              </span>

              <span>
                <span className="block text-[11px] text-slate-300">
                  Call Us
                </span>
                <span className="mt-1 block text-sm font-extrabold">
                  01919-319350
                  <br />
                  01819-319350
                </span>
              </span>
            </a>

            <a
              href="https://wa.me/8801819319350"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 rounded-lg p-2 transition hover:bg-white/5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#58a942]/50 text-[#6abc4c]">
                <Headphones size={20} />
              </span>

              <span>
                <span className="block text-[11px] text-slate-300">
                  WhatsApp
                </span>
                <span className="mt-1 block text-sm font-extrabold">
                  01819-319350
                </span>
              </span>
            </a>

            <a
              href="mailto:janata.electric.engineering1990@gmail.com"
              className="flex items-start gap-3 rounded-lg p-2 transition hover:bg-white/5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#58a942]/50 text-[#6abc4c]">
                <Mail size={20} />
              </span>

              <span className="min-w-0">
                <span className="block text-[11px] text-slate-300">
                  Email Us
                </span>
                <span className="mt-1 block break-all text-xs font-extrabold">
                  janata.electric.engineering1990@gmail.com
                </span>
              </span>
            </a>
          </div>

          <a
            href="tel:+8801819319350"
            className="flex min-w-[165px] items-center justify-center gap-2 rounded-md bg-[#4ca53a] px-6 py-4 text-sm font-extrabold text-white shadow-lg transition hover:bg-[#5ab548]"
          >
            <Phone size={18} />
            <span>
              Emergency Call
              <span className="block text-[10px] font-medium text-white/80">
                24/7 Support
              </span>
            </span>
          </a>
        </div>
      </section>

      <a
        href="https://wa.me/8801819319350"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#27a844] text-white shadow-2xl transition duration-300 hover:scale-110 hover:bg-[#20933a]"
      >
        <Headphones size={25} />
      </a>
    </>
  );
}