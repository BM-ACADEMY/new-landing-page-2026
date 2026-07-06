import React, { useEffect, useRef } from "react";

export default function Certificate() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = containerRef.current.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const certificates = [
    { src: "/DM/cert/cert1.webp", alt: "Student Certificate 1" },
    { src: "/DM/cert/cert2.webp", alt: "Student Certificate 2" },
    { src: "/DM/cert/cert3.webp", alt: "Student Certificate 3" },
    { src: "/DM/cert/cert4.webp", alt: "Student Certificate 4" },
    { src: "/DM/cert/cert5.webp", alt: "Student Certificate 5" },
    { src: "/DM/cert/cert6.webp", alt: "Student Certificate 6" },
    { src: "/DM/cert/cert7.webp", alt: "Student Certificate 7" },
    { src: "/DM/cert/cert8.webp", alt: "Student Certificate 8" },
    { src: "/DM/cert/cert9.webp", alt: "Student Certificate 9" },
  ];

  const classImages = [
    { src: "/DM/class/class1.webp", alt: "Classroom Session 1" },
    { src: "/DM/class/class2.webp", alt: "Classroom Session 2" },
    { src: "/DM/class/class3.webp", alt: "Classroom Session 3" },
    { src: "/DM/class/class4.webp", alt: "Classroom Session 5" },
    { src: "/DM/class/class5.webp", alt: "Classroom Session 4" },
    { src: "/DM/class/class6.webp", alt: "Classroom Session 6" },
  ];

  return (
    <section className="py-[58px]">
      <div className="max-w-[1080px] mx-auto px-5 flex flex-col items-center" ref={containerRef}>
        
        {/* Live Campus/Class Section */}
        <div className="w-full text-center mb-16">
          <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-[#f7367a] block mb-2">
            // Live from our campus
          </span>
          <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-3 text-white">
            Real Students. Real Learning.
          </h2>
          <p className="text-muted-brand text-[1.02rem] mt-2 mb-8 max-w-[620px] mx-auto">
            See how our students learn through live classroom sessions, hands-on projects, and practical training at BM Academy.
          </p>

          <div className="flex flex-wrap justify-center gap-6 w-full mt-8">
            {classImages.map((img, idx) => (
              <div key={idx} className="reveal overflow-hidden rounded-2xl border border-white/10 aspect-[4/3] bg-panel-2 class-grid-item">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div className="border-t border-white/9 pt-16 w-full text-center">
          <span className="text-[0.78rem] font-bold tracking-[0.06em] uppercase text-[#f7367a] block mb-2">
            // proof of excellence
          </span>
          <h2 className="font-sora font-extrabold text-[1.5rem] sm:text-[2.2rem] leading-[1.14] tracking-[-0.02em] mt-3 mb-3 text-white">
            Learn. Practice. Get Certified.
          </h2>
          <p className="text-muted-brand text-[1.02rem] mt-2 mb-8 max-w-[620px] mx-auto">
            Our students earn recognized certifications that open doors to premium data analytics roles worldwide.
          </p>

          <div className="flex flex-wrap justify-center gap-6 w-full mt-8">
            {certificates.map((cert, idx) => (
              <div key={idx} className="reveal overflow-hidden rounded-2xl border border-white/10 aspect-[4/3] bg-panel-2 flex items-center justify-center cert-grid-item">
                <img
                  src={cert.src}
                  alt={cert.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
