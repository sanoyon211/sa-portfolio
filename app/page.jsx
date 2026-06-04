"use client"

import { HeroDemo } from "@/components/hero-demo"
import { MainHeader } from "@/components/main-header"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { WhyChooseMeSection } from "@/components/why-choose-me-section"
import { ProjectsSection } from "@/components/projects-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { ContactSection } from "@/components/contact-section"
import { SmoothScroll } from "@/components/ui/smooth-scroll"
import { Parallax } from "@/components/ui/parallax"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#000] text-white overflow-x-hidden">
      <MainHeader />
      <SmoothScroll>
        <main>
          <HeroDemo />
          
          <motion.section {...fadeInUp} id="about">
            <AboutSection />
          </motion.section>

          <Parallax offset={100}>
            <motion.section {...fadeInUp} id="skills">
              <SkillsSection />
            </motion.section>
          </Parallax>

          <motion.section {...fadeInUp} id="experience">
            <ExperienceSection />
          </motion.section>

          <Parallax offset={80}>
            <motion.section {...fadeInUp} id="why-choose-me">
              <WhyChooseMeSection />
            </motion.section>
          </Parallax>

          <motion.section {...fadeInUp} id="projects">
            <ProjectsSection />
          </motion.section>

          <Parallax offset={60}>
            <motion.section {...fadeInUp} id="technologies">
              <TechnologiesSection />
            </motion.section>
          </Parallax>

          <motion.section {...fadeInUp} id="contact">
            <ContactSection />
          </motion.section>
        </main>
        
        <footer className="py-8 px-8 md:px-16 lg:px-24 bg-[#000] text-center text-neutral-500 text-sm">
          <p>&copy; {new Date().getFullYear()} SA Noyon. All rights reserved.</p>
        </footer>
      </SmoothScroll>
    </div>
  )
}
