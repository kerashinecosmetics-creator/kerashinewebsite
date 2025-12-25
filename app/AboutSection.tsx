"use client";

import { motion } from "framer-motion";
import Image from 'next/image';

const AboutSection = () => {
  const videos = [
    { src: "/about/clip1.mp4" },
    { src: "/about/clip2.mp4" },
    { src: "/about/clip3.mp4" },
  ];

  return (
    <section
      id="about"
      className="relative py-28 bg-gradient-to-br from-pink-50 via-white to-pink-100 overflow-hidden"
    >
      {/* Decorative Background Blob */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side – Founder Image & Quote */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center"
        >
          <div className="relative w-full max-w-sm overflow-hidden rounded-3xl shadow-xl border-4 border-white/70">
            <Image
              src="/about/founder.png"
              alt="Founder"
              className="object-cover object-top w-full h-[420px]"
              width={420}      // required
              height={420}     // required (aprox. height)
            />
            <span className="absolute bottom-4 left-4 bg-pink-600 text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-md">
              Founder & Visionary
            </span>
          </div>
          <p className="mt-6 italic text-gray-700 text-lg text-center max-w-md">
            “Beauty is not just about appearance, it&apos;s about the confidence and
            elegance you carry every day.”
          </p>
          <p className="mt-4 font-signature text-pink-600 text-2xl">— Kerashine</p>
        </motion.div>

        {/* Right Side – Story & Floating Video Edits */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            The Story of <br />
            <span className="text-pink-600">KERASHINE</span>
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-lg">
            What started at{" "}
            <span className="font-semibold text-pink-600">Umani Beauty Salon </span> 
            has now become a movement in haircare. With passion and expertise,
            our founder created a brand that empowers individuals to shine
            everyday — with elegance, confidence, and grace.
          </p>

          {/* Floating Video Edits */}
          <div className="mt-12 flex gap-6 flex-wrap">
            {videos.map((vid, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden w-40 h-52"
              >
                <video
                  src={vid.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
