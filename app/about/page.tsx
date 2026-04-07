"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, Briefcase, Wrench, Linkedin } from "lucide-react";

type Person = {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  photo: string;
  expertise: string[];
  education: { degree: string; school: string; year: string }[];
  experience: { title: string; place: string; period: string; description: string }[];
};

const team: Person[] = [
  {
    name: "Alfred Arvidsson",
    role: "Medgrundare",
    bio: "Alfred är en andrårsstudent vid Uppsala universitet med ett starkt intresse för kodning och problemlösning.",
    linkedin: "https://linkedin.com/in/arvidssonalfred",
    photo: "/images/alfred_crop.JPG",
    expertise: [
      "Webbdesign",
      "Frontendutveckling",
      "Backendutveckling",
      
    ],
    education: [
      {
        degree: "B.Sc Informationssystem",
        school: "Uppsala universitet",
        year: "2024 – nu",
      },
    ],
    experience: [
      {
        title: "DataAnnotation",
        place: "Distans",
        period: "2025 – nu",
        description: "Bygger mer tillförlitliga AI-modeller genom testning och utvärdering.",
      },
    ],
  },
  {
    name: "Linus Kammonen",
    role: "Medgrundare",
    bio: "Uppdatera detta med en kort introduktion om dig själv — vad du brinner för, vad du bidrar med till Growable och vilken typ av arbete som engagerar dig.",
    linkedin: "https://linkedin.com/in/linus-kammonen-42101314b",
    photo: "/images/linus_crop.JPG",
    expertise: [
      "Webbutveckling",
      "System & Automatisering",
      "Sökmotoroptimering - Google",
      
    ],
    education: [
      {
        degree: "B.Sc Informationssystem",
        school: "Mid-Sweden University",
        year: "2025 – nuvarande",
      },
    ],
    experience: [
      {
        title: "",
        place: "",
        period: "2007 – nu",
        description: "",
      },
    ],
  },
];

function PersonCard({ person, index }: { person: Person; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      className="glass rounded-2xl overflow-hidden border border-white/8"
    >
      {/* Header */}
      <div className="p-7 border-b border-white/6 flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white/[0.05] border border-white/10 flex-shrink-0">
            <Image
              src={person.photo}
              alt={person.name}
              width={192}
              height={192}
              quality={100}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white tracking-tight">
              {person.name}
            </h2>
            <span className="text-xs text-white/35">{person.role}</span>
          </div>
        </div>

        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${person.name} på LinkedIn`}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass border border-white/10 text-xs text-white/40 hover:text-white/70 hover:border-white/20 transition-all duration-200 cursor-pointer flex-shrink-0"
        >
          <Linkedin className="w-3.5 h-3.5" strokeWidth={1.8} />
          LinkedIn
        </a>
      </div>

      <div className="p-7 grid md:grid-cols-2 gap-8">
        {/* Left */}
        <div className="flex flex-col gap-7">
          <p className="text-sm text-white/45 leading-relaxed">{person.bio}</p>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-3.5 h-3.5 text-white/25" strokeWidth={1.8} />
              <span className="text-[11px] font-semibold tracking-wider uppercase text-white/25">
                Kompetenser
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {person.expertise.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/8 text-xs text-white/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-7">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-3.5 h-3.5 text-white/25" strokeWidth={1.8} />
              <span className="text-[11px] font-semibold tracking-wider uppercase text-white/25">
                Utbildning
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {person.education.map((ed, i) => (
                <div key={i} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-white/70">{ed.degree}</p>
                    <p className="text-xs text-white/35 mt-0.5">{ed.school}</p>
                  </div>
                  <span className="text-[11px] text-white/25 flex-shrink-0 mt-0.5">
                    {ed.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-3.5 h-3.5 text-white/25" strokeWidth={1.8} />
              <span className="text-[11px] font-semibold tracking-wider uppercase text-white/25">
                Erfarenhet
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {person.experience.map((exp, i) => (
                <div key={i}>
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <div>
                      <p className="text-sm font-medium text-white/70">{exp.title}</p>
                      <p className="text-xs text-white/35">{exp.place}</p>
                    </div>
                    <span className="text-[11px] text-white/25 flex-shrink-0 mt-0.5">
                      {exp.period}
                    </span>
                  </div>
                  {exp.description && (
                    <p className="text-xs text-white/35 leading-relaxed mt-1.5">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 overflow-hidden">
      <div
        className="pointer-events-none fixed inset-x-0 top-0 h-[400px] -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(18,43,20,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-14"
        >
          <span className="text-[11px] font-medium tracking-widest uppercase text-white/25 mb-3 block">
            Vilka vi är
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gradient leading-tight mb-4">
            Två studenter som bygger
            <br />
            <span className="text-gradient-pink">riktiga saker för riktiga företag.</span>
          </h1>
          <p className="text-sm text-white/40 max-w-md leading-relaxed">
            Growable är Alfred och Linus. Vi startade det här för att vi ville
            göra arbete som faktiskt spelar roll — hjälpa lokala och små företag
            att synas ordentligt på nätet, utan att krångla till det.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5 mb-14">
          {team.map((person, i) => (
            <PersonCard key={person.name} person={person} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="glass rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-5 border border-pink-door/12"
        >
          <div>
            <h3 className="text-base font-semibold text-white mb-1">
              Vill du jobba med oss?
            </h3>
            <p className="text-sm text-white/40">
              Vi vill gärna höra mer om ditt projekt.
            </p>
          </div>
          <Link
            href="/contact"
            className="group flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pink-door text-[#0A0A0A] text-sm font-semibold hover:bg-pink-door-dark transition-colors duration-200 cursor-pointer"
          >
            Kom igång
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
