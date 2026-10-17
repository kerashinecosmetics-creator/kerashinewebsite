import { Quote } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { clients, testimonials } from "@/lib/data";
import SectionHeading from "./SectionHeading";

function Track({ children, duration, reverse = false }: { children: ReactNode; duration: number; reverse?: boolean }) {
  return (
    <div className={`marquee overflow-hidden ${reverse ? "marquee-reverse" : ""}`}>
      <div className="marquee-track" style={{ "--marquee-duration": `${duration}s` } as CSSProperties}>
        {children}
        {/* identical copy for a seamless loop */}
        <div aria-hidden="true" className="flex">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const logos = (
    <div className="flex">
      {clients.map((c) => (
        <span key={c} className="whitespace-nowrap px-10 font-serif text-3xl italic text-ink/35 transition-colors duration-300 hover:text-gold md:text-4xl">
          {c}
        </span>
      ))}
    </div>
  );
  const cards = (
    <div className="flex gap-6 pr-6">
      {testimonials.map((t) => (
        <figure
          key={t.name}
          className="w-[22rem] shrink-0 rounded-[2.5rem] border border-ink/5 bg-white p-8 shadow-soft transition-transform duration-500 hover:-translate-y-2 md:w-[26rem]"
        >
          <Quote className="text-gold" size={28} />
          <blockquote className="mt-4 leading-relaxed text-ink/75">{t.quote}</blockquote>
          <figcaption className="mt-6">
            <p className="font-serif text-lg text-ink">{t.name}</p>
            <p className="text-sm text-ink/50">{t.role}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="section-pad overflow-hidden bg-white/50 px-0 md:px-0">
      <div className="px-5 md:px-10">
        <div className="container-x">
          <SectionHeading center kicker="Clients" title="Trusted by salons, retailers and brands." />
        </div>
      </div>
      <div className="mt-16 space-y-12">
        <Track duration={45}>{logos}</Track>
        <Track duration={70} reverse>
          {cards}
        </Track>
      </div>
    </section>
  );
}
