import Link from 'next/link';
import Image from 'next/image';
import { ServiceCategory } from '@/types/service';

interface ServiceGridProps {
  categories: ServiceCategory[];
}

export default function ServiceGrid({ categories }: ServiceGridProps) {
  return (
    <section className="py-12 bg-light">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.slug}
            className="bg-white shadow-sm rounded-lg overflow-hidden flex flex-col"
          >
            <div className="relative h-40">
              <Image
                src={category.heroImage}
                alt={category.title}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-primary mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-gray-600 flex-grow">
                {category.description}
              </p>
              <div className="mt-4">
                <Link
                  href={`/services/${category.slug}`}
                  className="text-accent font-medium hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}