"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

interface NavigationItem {
  label: string;
  href: string;
}

const mainNavigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
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
    label: "Why Choose Us",
    href: "/#why-us",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const serviceNavigation: NavigationItem[] = [
  {
    label: "All Services",
    href: "/services",
  },
  {
    label: "Mechanical & Engine",
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
    label: "Hydraulic Systems",
    href: "/services/hydraulic",
  },
  {
    label: "Propulsion & Steering",
    href: "/services/propulsion",
  },
  {
    label: "Boiler & Heat Transfer",
    href: "/services/boiler",
  },
];

export default function Header() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] =
    useState(false);
  const [headerScrolled, setHeaderScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    const route = href.split("#")[0];

    return route !== "/" && pathname.startsWith(route);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-slate-200 bg-white transition-all duration-300 ${
        headerScrolled
          ? "shadow-[0_8px_30px_rgba(15,23,42,0.10)]"
          : ""
      }`}
    >
      <div
        className={`site-container flex items-center justify-between transition-all duration-300 ${
          headerScrolled ? "min-h-[72px]" : "min-h-[86px]"
        }`}
      >
        <Link
          href="/"
          aria-label="Janata Electric and Engineering Workshop homepage"
          className="flex min-w-0 items-center gap-3"
        >
          <div className="relative h-14 w-14 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Janata Electric and Engineering Workshop logo"
              fill
              priority
              sizes="56px"
              className="object-contain"
            />
          </div>

          <div className="hidden min-w-0 sm:block">
            <p className="max-w-[275px] text-[15px] font-extrabold uppercase leading-[1.07] tracking-[-0.02em] text-[#071a35] lg:text-[17px]">
              Janata Electric &amp;
              <br />
              Engineering Workshop
            </p>

            <p className="mt-1 text-[10px] font-medium text-slate-500 lg:text-[11px]">
              Marine Engineering Solutions Since 1995
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {mainNavigation.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`header-nav-link ${
                isActive(item.href)
                  ? "header-nav-link-active"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="group relative">
            <Link
              href="/services"
              className={`header-nav-link flex items-center gap-1 ${
                pathname.startsWith("/services")
                  ? "header-nav-link-active"
                  : ""
              }`}
            >
              Services

              <ChevronDown
                size={15}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </Link>

            <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-4 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-[0_24px_60px_rgba(15,23,42,0.18)] transition-all duration-200 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
              {serviceNavigation.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block rounded-lg px-4 py-3 text-sm font-semibold text-[#071a35] transition hover:bg-[#edf7ed] hover:text-[#318b2f]"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {mainNavigation.slice(2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`header-nav-link ${
                isActive(item.href)
                  ? "header-nav-link-active"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+8801819319350"
          className="hidden items-center gap-3 rounded-md bg-gradient-to-r from-[#318b2f] to-[#51a63e] px-5 py-3 text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-xl lg:flex"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
            <Phone size={18} />
          </span>

          <span>
            <span className="block text-[10px] font-medium leading-none text-white/85">
              24/7 Emergency
            </span>

            <span className="mt-1 block text-[15px] font-extrabold leading-none">
              01819-319350
            </span>
          </span>
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => {
            setMobileMenuOpen((current) => !current);
          }}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-[#071a35] transition hover:border-[#318b2f] hover:text-[#318b2f] xl:hidden"
        >
          {mobileMenuOpen ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 xl:hidden ${
          mobileMenuOpen
            ? "max-h-[850px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="site-container py-4">
          {mainNavigation.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-nav-link ${
                isActive(item.href)
                  ? "mobile-nav-link-active"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={() => {
              setMobileServicesOpen((current) => !current);
            }}
            className={`mobile-nav-link flex w-full items-center justify-between ${
              pathname.startsWith("/services")
                ? "mobile-nav-link-active"
                : ""
            }`}
          >
            Services

            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${
                mobileServicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              mobileServicesOpen
                ? "max-h-[500px]"
                : "max-h-0"
            }`}
          >
            <div className="mb-2 ml-3 border-l-2 border-[#318b2f] pl-3">
              {serviceNavigation.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#edf7ed] hover:text-[#318b2f]"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {mainNavigation.slice(2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-nav-link ${
                isActive(item.href)
                  ? "mobile-nav-link-active"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}

          <a
            href="tel:+8801819319350"
            className="mt-4 flex items-center justify-center gap-3 rounded-lg bg-[#318b2f] px-5 py-4 text-sm font-bold text-white"
          >
            <Phone size={19} />

            24/7 Emergency: 01819-319350
          </a>
        </nav>
      </div>
    </header>
  );
}