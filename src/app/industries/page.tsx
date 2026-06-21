import { Metadata } from 'next';
import { industries } from '@/data/industries';
import IndustriesGrid from '@/components/sections/IndustriesGrid';
import SectionHeading from '@/components/ui/SectionHeading';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Industries – Janata Electric & Engineering Workshop',
  description:
    'Discover the range of vessel and industry types supported by our marine engineering services.',
};

export default function IndustriesPage() {
  return (
    <div>
      <section className="relative h-60 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
          Industries We Serve
        </h1>
      </section>
      <section className="py-12 bg-light">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Expertise Across Diverse Sectors"
            subtitle="We provide engineering solutions for a wide spectrum of vessel types and industrial applications."
            align="left"
          />
        </div>
        <IndustriesGrid industries={industries} />
      </section>
      <CTA
        heading="Unsure if we can help you?"
        subheading="Contact us to discuss your specific industry and requirements."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Call Us"
        secondaryHref="tel:+8801919319350"
      />
    </div>
  );
}