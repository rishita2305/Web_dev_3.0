import React, { useState, useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const team2025 = [
  {
    name: "Sumito Deo",
    role: "Marketing Head",
    img: "/images/sumito.jpg",
    instagram: "https://instagram.com/sumito",
    github: "https://github.com/sumito",
    linkedin: "https://linkedin.com/in/sumito",
  },
  {
    name: "Kaytie Ferro",
    role: "Content and Script",
    img: "/images/kaytie.jpg",
    instagram: "https://instagram.com/kaytie",
    github: "https://github.com/kaytie",
    linkedin: "https://linkedin.com/in/kaytie",
  },
  {
    name: "Nergish Lee",
    role: "Head of Gaming",
    img: "/images/nergish.jpg",
    instagram: "https://instagram.com/nergish",
    github: "https://github.com/nergish",
    linkedin: "https://linkedin.com/in/nergish",
  },
  {
    name: "Riya Sharma",
    role: "Lead Designer",
    img: "/images/riya.jpg",
    instagram: "https://instagram.com/riya.sharma",
    github: "https://github.com/riyasharma",
    linkedin: "https://linkedin.com/in/riyasharma",
  },
  {
    name: "Aman Gupta",
    role: "Full Stack Developer",
    img: "/images/aman.jpg",
    instagram: "https://instagram.com/aman.gupta",
    github: "https://github.com/amangupta",
    linkedin: "https://linkedin.com/in/amangupta",
  },
  {
    name: "Priya Verma",
    role: "UI/UX Specialist",
    img: "/images/priya.jpg",
    instagram: "https://instagram.com/priyaverma",
    github: "https://github.com/priyaverma",
    linkedin: "https://linkedin.com/in/priyaverma",
  },
];

// Example 2026 team (replace with real data as needed)
const team2026 = [
  {
    name: "Rohan Singh",
    role: "President",
    img: "/images/rohan.jpg",
    instagram: "https://instagram.com/rohan.singh",
    github: "https://github.com/rohansingh",
    linkedin: "https://linkedin.com/in/rohansingh",
  },
  {
    name: "Aisha Patel",
    role: "Vice President",
    img: "/images/aisha.jpg",
    instagram: "https://instagram.com/aisha.patel",
    github: "https://github.com/aishapatel",
    linkedin: "https://linkedin.com/in/aishapatel",
  },
  {
    name: "Vikram Rao",
    role: "Tech Lead",
    img: "/images/vikram.jpg",
    instagram: "https://instagram.com/vikram.rao",
    github: "https://github.com/vikramrao",
    linkedin: "https://linkedin.com/in/vikramrao",
  },
  {
    name: "Sara Khan",
    role: "Design Head",
    img: "/images/sara.jpg",
    instagram: "https://instagram.com/sara.khan",
    github: "https://github.com/sarakhan",
    linkedin: "https://linkedin.com/in/sarakhan",
  },
  {
    name: "Dev Mehta",
    role: "Developer",
    img: "/images/dev.jpg",
    instagram: "https://instagram.com/dev.mehta",
    github: "https://github.com/devmehta",
    linkedin: "https://linkedin.com/in/devmehta",
  },
  {
    name: "Priya Sharma",
    role: "Content Head",
    img: "/images/priyasharma.jpg",
    instagram: "https://instagram.com/priyasharma",
    github: "https://github.com/priyasharma",
    linkedin: "https://linkedin.com/in/priyasharma",
  },
];
const TeamPage = () => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [carouselApi, setCarouselApi] = useState(null);
  const teamMembers = selectedYear === "2025" ? team2025 : team2026;

  // When the year changes, reset carousel to first slide
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setTimeout(() => {
      if (carouselApi && typeof carouselApi.scrollTo === "function") {
        carouselApi.scrollTo(0);
      }
    }, 0);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!carouselApi) return;
    const interval = setInterval(() => {
      if (carouselApi && typeof carouselApi.scrollNext === "function") {
        // If at end, go to first
        if (!carouselApi.canScrollNext()) {
          carouselApi.scrollTo(0);
        } else {
          carouselApi.scrollNext();
        }
      }
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, [carouselApi, selectedYear]);

  return (
    <section className="flex justify-center items-center min-h-screen bg-hero-pattern bg-cover bg-no-repeat bg-center py-12 px-2">
      <div className="w-full max-w-5xl bg-[#18181b] rounded-3xl shadow-2xl px-6 py-10 md:px-12 md:py-14 relative">
        <div className="flex items-center justify-between mb-4 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-0">
            Our team
          </h2>
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="bg-[#232329] text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="2025">2025 Team</option>
            <option value="2026">2026 Team</option>
          </select>
        </div>
        <p className="text-gray-300 mb-8 max-w-2xl">
          Presenting to you EMR TEAM!!
        </p>
        <div className="relative">
          <Carousel
            opts={{ align: "start" }}
            className="w-full"
            setApi={setCarouselApi}
          >
            <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 flex opacity-100" />
            <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 flex opacity-100" />
            <CarouselContent>
              {teamMembers.map((member) => (
                <CarouselItem
                  key={member.name}
                  className="pl-2 pr-2 sm:basis-1/2 md:basis-1/3 flex justify-center"
                >
                  <div className="bg-[#232329] rounded-2xl shadow-lg flex flex-col items-center p-0 w-[260px] h-[370px] overflow-hidden group transition-all duration-300">
                    <div className="relative w-full h-[65%] flex items-center justify-center overflow-hidden">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                    </div>
                    <div className="flex flex-col items-start justify-end w-full h-[35%] px-5 pb-4 pt-3">
                      <span className="text-lg font-bold text-white leading-tight">
                        {member.name}
                      </span>
                      <span className="text-gray-300 text-sm mt-1">
                        {member.role}
                      </span>
                      <div className="flex gap-3 mt-3">
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                        >
                          <img
                            src="/src/assets/instagram.svg"
                            alt="Instagram"
                            className="w-5 h-5 hover:scale-110 transition-transform"
                          />
                        </a>
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                        >
                          <img
                            src="/src/assets/github.png"
                            alt="GitHub"
                            className="w-5 h-5 hover:scale-110 transition-transform"
                          />
                        </a>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <img
                            src="/src/assets/linkedin.png"
                            alt="LinkedIn"
                            className="w-5 h-5 hover:scale-125 transition-transform"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Mobile arrows overlay (now always visible for better UX) */}
            <div className="flex justify-between absolute w-full top-1/2 -translate-y-1/2 px-2 z-20 md:hidden opacity-100">
              <CarouselPrevious className="!static opacity-100" />
              <CarouselNext className="!static opacity-100" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
