import { Industry } from '@/types/industry';

interface IndustriesGridProps {
  industries: Industry[];
}

export default function IndustriesGrid({ industries }: IndustriesGridProps) {
  return (
    <section className="py-12 bg-light">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry) => (
          <div key={industry.id} className="bg-white shadow-sm p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-primary mb-2">
              {industry.name}
            </h3>
            <p className="text-sm text-gray-600">{industry.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}