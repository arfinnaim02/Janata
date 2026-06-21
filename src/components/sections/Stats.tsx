interface Stat {
  label: string;
  value: string;
}

interface StatsProps {
  stats: Stat[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="bg-light py-12">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {stat.value}
            </span>
            <span className="text-sm text-gray-600">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}