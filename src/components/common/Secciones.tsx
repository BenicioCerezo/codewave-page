import React from "react";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className=" py-16 px-4 relative shadow-lg">
      <div className="absolute inset-0 
        "></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl text-center text-gray-300 font-bold mb-8">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};