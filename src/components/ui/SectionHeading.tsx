interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

export default function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right';
  return (
    <div className={`mb-8 ${alignment}`}> 
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-md md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}