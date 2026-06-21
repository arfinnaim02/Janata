import Image from 'next/image';
import { Facility } from '@/types/facility';

interface FacilityGridProps {
  facilities: Facility[];
}

export default function FacilityGrid({ facilities }: FacilityGridProps) {
  return (
    <section className="py-12 bg-light">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((facility) => (
          <div
            key={facility.id}
            className="bg-white shadow-sm rounded-lg overflow-hidden flex flex-col"
          >
            <div className="relative h-32">
              <Image
                src={facility.image}
                alt={facility.title}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-primary mb-2">
                {facility.title}
              </h3>
              <p className="text-sm text-gray-600 flex-grow">
                {facility.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}