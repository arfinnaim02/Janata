import { ReactNode } from 'react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  children?: ReactNode;
}

export default function Hero({ title, subtitle, imageUrl, children }: HeroProps) {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          fill
          priority
          className="object-cover object-center -z-10 opacity-70"
        />
      )}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl mb-6 mx-auto text-gray-200">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}