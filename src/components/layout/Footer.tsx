import Image from "next/image";
import Link from "next/link";

import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

const quickLinks: FooterLink[] = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Our Services",
    href: "/services",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Facilities",
    href: "/facilities",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

const serviceLinks: FooterLink[] = [
  {
    label: "Engine Overhauling",
    href: "/services/mechanical",
  },
  {
    label: "Pipeline Services",
    href: "/services/pipeline",
  },
  {
    label: "Electrical & Automation",
    href: "/services/electrical",
  },
  {
    label: "Hydraulic Services",
    href: "/services/hydraulic",
  },
  {
    label: "Ship Repair & Maintenance",
    href: "/services",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#03111f] text-white">
      <div className="site-container grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.35fr_0.65fr_0.9fr_1.15fr]">
        <div>
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="relative h-14 w-14 shrink-0">
              <Image
                src="/images/logo.png"
                alt="Janata Electric and Engineering Workshop"
                fill
                sizes="56px"
                className="object-contain"
              />
            </div>

            <p className="text-[16px] font-extrabold uppercase leading-[1.07]">
              Janata Electric &amp;
              <br />
              Engineering Workshop
            </p>
          </Link>

          <p className="mt-6 max-w-[335px] text-[13px] leading-6 text-slate-300">
            Your trusted partner in marine engineering
            solutions since 1995. Quality, reliability and
            customer satisfaction are our commitment.
          </p>

          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="footer-social-link"
            >
              <Facebook size={16} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="footer-social-link"
            >
              <Linkedin size={16} />
            </a>

            <a
              href="https://wa.me/8801819319350"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="footer-social-link"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="footer-heading">
            Quick Links
          </h3>

          <ul className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="footer-link"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">
            Our Services
          </h3>

          <ul className="mt-5 space-y-3">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="footer-link"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">
            Contact Info
          </h3>

          <ul className="mt-5 space-y-4">
            <li className="flex items-start gap-3 text-[13px] leading-5 text-slate-300">
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-[#67b94c]"
              />

              <span>
                62, Strand Road, Bangla Bazar,
                <br />
                Chattogram, Bangladesh
              </span>
            </li>

            <li>
              <a
                href="tel:+8801919319350"
                className="flex items-start gap-3 text-[13px] leading-5 text-slate-300 transition hover:text-white"
              >
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-[#67b94c]"
                />

                <span>
                  01919-319350
                  <br />
                  01819-319350
                </span>
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/8801819319350"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-[13px] text-slate-300 transition hover:text-white"
              >
                <MessageCircle
                  size={18}
                  className="shrink-0 text-[#67b94c]"
                />

                01819-319350
              </a>
            </li>

            <li>
              <a
                href="mailto:janata.electric.engineering1990@gmail.com"
                className="flex items-start gap-3 text-[12px] leading-5 text-slate-300 transition hover:text-white"
              >
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-[#67b94c]"
                />

                <span className="break-all">
                  janata.electric.engineering1990@gmail.com
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#318b2f] to-[#57a93d]">
        <div className="site-container flex min-h-[48px] flex-col items-center justify-between gap-2 py-3 text-center text-[11px] text-white sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Janata Electric
            &amp; Engineering Workshop. All Rights Reserved.
          </p>

          <p>
            Designed with{" "}
            <span className="text-red-200">♥</span> for
            Marine Industry
          </p>
        </div>
      </div>
    </footer>
  );
}