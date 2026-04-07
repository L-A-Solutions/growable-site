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
    role: "Co-founder",
    bio: "Alfred is a second-year student at Uppsala University with a strong interest in coding and solving problems.  ",
    linkedin: "https://linkedin.com/in/alfred-arvidsson",
    photo: "/images/alfred_crop.JPG",
    expertise: [
      "Web Design",
      "Frontend Development",
      "Update with your skills",
    ],
    education: [
      {
        degree: "M.Sc Information Systems",
        school: "Uppsala University",
        year: "2024 - present",
      },
    ],
    experience: [
      {
        title: "DataAnnotation",
        place: "Remote",
        period: "2025 – present",
        description: "Building more reliable AI models, by testing and evaluating.",
      },
    ],
  },
  {
    name: "Linus Kammonen",
    role: "Co-founder",
    bio: "Update this with a short intro about yourself — what you care about, what you bring to Growable, and what kind of work excites you.",
    linkedin: "https://linkedin.com/in/linus-kammonen",
    photo: "/images/linus_crop.JPG",
    expertise: [
      "Web Development",
      "Systems & Automation",
      "Update with your skills",
    ],
    education: [
      {
        degree: "Your Degree",
        school: "Your School",
        year: "20XX – 20XX",
      },
    ],
    experience: [
      {
        title: "Your Role",
        place: "Where you worked / studied / built",
        period: "20XX – present",
        description: "Describe what you did here.",
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
          aria-label={`${person.name} on LinkedIn`}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass border border-white/10 text-xs text-white/40 hover:text-white/70 hover:border-white/20 transition-all duration-200 cursor-pointer flex-shrink-0"
        >
          <Linkedin className="w-3.5 h-3.5" strokeWidth={1.8} />
          LinkedIn
        </a>
      </div>

      <div className="p-7 grid md:grid-cols-2 gap-8">
        {/* Left column */}
        <div className="flex flex-col gap-7">
          {/* Bio */}
          <div>
            <p className="text-sm text-white/45 leading-relaxed">{person.bio}</p>
          </div>

          {/* Expertise */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-3.5 h-3.5 text-white/25" strokeWidth={1.8} />
              <span className="text-[11px] font-semibold tracking-wider uppercase text-white/25">
                Expertise
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

        {/* Right column */}
        <div className="flex flex-col gap-7">
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-3.5 h-3.5 text-white/25" strokeWidth={1.8} />
              <span className="text-[11px] font-semibold tracking-wider uppercase text-white/25">
                Education
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

          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-3.5 h-3.5 text-white/25" strokeWidth={1.8} />
              <span className="text-[11px] font-semibold tracking-wider uppercase text-white/25">
                Experience
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
      {/* Subtle glow */}
      <div
        className="pointer-events-none fixed inset-x-0 top-0 h-[400px] -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(18,43,20,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-14"
        >
          <span className="text-[11px] font-medium tracking-widest uppercase text-white/25 mb-3 block">
            Who we are
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gradient leading-tight mb-4">
            Two students building
            <br />
            <span className="text-gradient-pink">real things for real businesses.</span>
          </h1>
          <p className="text-sm text-white/40 max-w-md leading-relaxed">
            Growable is Alfred and Linus. We started this because we wanted to
            do work that actually matters — helping local and small businesses
            show up online properly, without overcomplicating it.
          </p>
        </motion.div>

        {/* Profile cards */}
        <div className="flex flex-col gap-5 mb-14">
          {team.map((person, i) => (
            <PersonCard key={person.name} person={person} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="glass rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-5 border border-pink-door/12"
        >
          <div>
            <h3 className="text-base font-semibold text-white mb-1">
              Want to work with us?
            </h3>
            <p className="text-sm text-white/40">
              We&apos;d love to hear about your project.
            </p>
          </div>
          <Link
            href="/contact"
            className="group flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pink-door text-[#0A0A0A] text-sm font-semibold hover:bg-pink-door-dark transition-colors duration-200 cursor-pointer"
          >
            Get in touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
