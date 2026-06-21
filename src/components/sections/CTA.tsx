import Link from 'next/link';

interface CTAProps {
  heading: string;
  subheading?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTA({
  heading,
  subheading,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTAProps) {
  return (
    <section className="bg-primary text-white py-14">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
        {subheading && (
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            {subheading}
          </p>
        )}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="px-6 py-3 bg-accent text-white rounded-md font-semibold hover:bg-green transition-colors"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="px-6 py-3 bg-white text-primary rounded-md font-semibold hover:bg-gray-100"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}