"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ArrowRight,
  ShieldCheck,
  Clock,
  Users,
  Wrench,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const initialFormData = {
  name: "",
  company: "",
  vessel: "",
  phone: "",
  email: "",
  service: "Engine Overhaul",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormData);

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [responseMessage, setResponseMessage] = useState("");

  function updateField(
    event:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setResponseMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setStatus("error");
        setResponseMessage(result.message || "Failed to send request.");
        return;
      }

      setStatus("success");
      setResponseMessage(
        "Request sent successfully. Our engineer will contact you soon."
      );
      setFormData(initialFormData);
    } catch {
      setStatus("error");
      setResponseMessage(
        "Network error. Please try again or contact us on WhatsApp."
      );
    }
  }

  return (
    <div className="bg-white">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[420px] overflow-hidden text-white">
        <Image
          src="/images/contact/contact-hero.jpg"
          alt="Marine engineering support"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#03111f]/95 via-[#071a35]/70 to-transparent" />

        <div className="site-container relative z-10 flex min-h-[420px] items-center">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-[#7ed957]">
              24/7 Marine Engineering Support
            </p>

            <h1 className="mt-4 text-5xl font-extrabold leading-tight">
              Contact <span className="text-[#39a85a]">Our Engineers</span>
            </h1>

            <p className="mt-6 text-lg text-slate-200">
              Get instant support for ship repair, pipeline, electrical,
              hydraulic, propulsion and boiler systems in Chattogram Port and
              worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT CARDS ================= */}
      <section className="bg-white py-16">
        <div className="site-container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Phone,
              title: "Phone",
              text: ["+8801919319350", "+8801819319350"],
            },
            {
              icon: MessageCircle,
              title: "WhatsApp",
              text: ["24/7 Emergency Support"],
            },
            {
              icon: Mail,
              title: "Email",
              text: ["janata.electric.engineering1990@gmail.com"],
            },
            {
              icon: MapPin,
              title: "Location",
              text: ["62 Strand Road, Chattogram"],
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
                  <Icon className="text-green-600" size={22} />
                </div>

                <h3 className="mt-4 font-bold text-[#071a35]">
                  {item.title}
                </h3>

                <div className="mt-2 space-y-1 text-sm text-slate-600">
                  {item.text.map((line) => (
                    <p key={line} className="break-words">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="bg-[#f6f8fb] py-16">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#3e9838]">
              Find Us
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-[#071a35]">
              Workshop Location
            </h2>

            <p className="mt-3 text-slate-600">
              Located near Chattogram Port service area for fast marine repair
              response.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <iframe
              title="Janata Electric and Engineering Workshop location"
              src="https://maps.google.com/maps?q=62%20Strand%20Road%20Bangla%20Bazar%20Chattogram&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ================= FORM + EMERGENCY ================= */}
      <section className="bg-white py-20">
        <div className="site-container grid gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          {/* FORM */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.10)] sm:p-8 lg:p-10">
            <div className="border-b border-slate-200 pb-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#3e9838]">
                Request Assistance
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-[#071a35]">
                Request Service / Quote
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Send vessel details — our marine engineers will receive your
                request instantly through Telegram.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-7 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-slate-700">
                    Your Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    name="name"
                    value={formData.name}
                    onChange={updateField}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#2e8b57] focus:ring-2 focus:ring-[#2e8b57]/20"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700">
                    Company Name
                  </label>

                  <input
                    name="company"
                    value={formData.company}
                    onChange={updateField}
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#2e8b57] focus:ring-2 focus:ring-[#2e8b57]/20"
                    placeholder="Shipping / Company name"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-slate-700">
                    Vessel Name
                  </label>

                  <input
                    name="vessel"
                    value={formData.vessel}
                    onChange={updateField}
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#2e8b57] focus:ring-2 focus:ring-[#2e8b57]/20"
                    placeholder="e.g. MV Sea Star"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>

                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={updateField}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#2e8b57] focus:ring-2 focus:ring-[#2e8b57]/20"
                    placeholder="+8801XXXXXXXXX"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-slate-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={updateField}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#2e8b57] focus:ring-2 focus:ring-[#2e8b57]/20"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700">
                    Service Required
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={updateField}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#2e8b57] focus:ring-2 focus:ring-[#2e8b57]/20"
                  >
                    <option>Engine Overhaul</option>
                    <option>Pipeline Repair</option>
                    <option>Electrical & Automation</option>
                    <option>Hydraulic System</option>
                    <option>Propulsion & Steering</option>
                    <option>Boiler & Heat System</option>
                    <option>Emergency Repair</option>
                    <option>Other Marine Engineering Service</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700">
                  Technical Issue Description{" "}
                  <span className="text-red-500">*</span>
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={updateField}
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#2e8b57] focus:ring-2 focus:ring-[#2e8b57]/20"
                  placeholder="Describe the issue, symptoms, urgency, vessel location..."
                />
              </div>

              {responseMessage && (
                <div
                  className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-sm ${
                    status === "success"
                      ? "border-green-200 bg-green-50 text-green-700"
                      : "border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                  ) : (
                    <AlertCircle size={18} className="mt-0.5 shrink-0" />
                  )}

                  <p>{responseMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#071a35] to-[#2e8b57] py-4 text-base font-bold text-white shadow-lg transition hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={19} className="animate-spin" />
                    Sending Request...
                  </>
                ) : (
                  <>
                    Send Request
                    <Send size={18} />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-400">
                24/7 Marine Engineering Support • Chattogram Port • Since 1995
              </p>
            </form>
          </div>

          {/* EMERGENCY PANEL */}
          <div className="rounded-2xl bg-[#071a35] p-8 text-white shadow-xl sm:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#72bd57]">
              Emergency Desk
            </p>

            <h2 className="mt-2 text-3xl font-extrabold">
              Emergency Support 24/7
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Immediate response for ship breakdown, hydraulic failure,
              electrical faults, propulsion issues and boiler emergencies.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+8801819319350"
                className="flex items-center justify-center gap-2 rounded-xl bg-green-600 py-4 font-bold text-white transition hover:bg-green-700"
              >
                <Phone size={19} />
                Call Now
              </a>

              <a
                href="https://wa.me/8801819319350"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-green-500 py-4 font-bold text-green-400 transition hover:bg-green-500 hover:text-white"
              >
                <MessageCircle size={19} />
                WhatsApp Support
              </a>
            </div>

            <div className="mt-10 space-y-5 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 shrink-0 text-green-400" />
                <span>Trusted Marine Engineering Since 1995</span>
              </div>

              <div className="flex items-start gap-3">
                <Users className="mt-0.5 shrink-0 text-green-400" />
                <span>8 Engineers + 15 Technicians</span>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 shrink-0 text-green-400" />
                <span>24/7 Vessel Support</span>
              </div>

              <div className="flex items-start gap-3">
                <Wrench className="mt-0.5 shrink-0 text-green-400" />
                <span>All Marine Engineering Systems</span>
              </div>
            </div>

            <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-bold text-white">Direct Contact</p>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Phone: 01919-319350 / 01819-319350
                <br />
                WhatsApp: 01819-319350
                <br />
                Chattogram Port Service Area
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#f6f8fb] py-16 text-center">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-[#071a35]">
            Need Immediate Marine Engineering Help?
          </h2>

          <p className="mt-4 text-slate-600">
            We respond fast to all ship repair and emergency service requests.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#071a35] px-6 py-3 font-bold text-white"
            >
              View Services <ArrowRight size={18} />
            </Link>

            <a
              href="tel:+8801819319350"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-bold text-[#071a35]"
            >
              Call Engineer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}