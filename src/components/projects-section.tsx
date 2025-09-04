"use client"

import { motion, useInView, easeInOut } from "framer-motion"
import { useRef, memo, useMemo, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Play } from "lucide-react"

export const ProjectsSection = memo(function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = useMemo(
    () => [
      {
        id: "Rabt Naturals",
        title: "Rabt Naturals – Beauty & Wellness E-Commerce",
        description:
          "A SaaS-based e-commerce platform for natural beauty products, offering a seamless shopping experience with subscriptions and personalized care.",
        image: "/rabt.png",
        tech: ["Figma", "Adobe XD", "Lovable"],
        category: "E-commerce web app",
        links: {
          demo: "https://www.figma.com/design/mse6ZUTfNEyqsh9mOLfQKm/Rabt-e-comm?node-id=0-1&t=H09RSWv3PZEplDWm-1",
          github: "#",
          live: "https://rabtnaturals.com/",
        },
      },
      {
        id: "Domestree",
        title: "Domestree – Smart Service Provider App",
        description: "A mobile application that connects users with trusted home service providers, offering quick bookings, seamless navigation, and a user-friendly interface.",
        image: "/domestree.png",
        tech: ["Figma", "Adobe XD", "Lovable"],
        category: "Mobile Application",
        links: {
          demo: "https://www.figma.com/design/73tQ4Yr8E9EyY1affOvZpB/Domestree?node-id=0-1&t=Zea1MGQw4qhkrB3Z-1",
          github: "#",
          live: "#",
        },
      },
      {
        id: "Goupboard",
        title: "Goupboard – Interactive Learning App",
        description:
          "An educational mobile app designed to make learning easier and more engaging, offering organized study resources, smooth navigation, and a student-friendly interface.",
        image: "/goupboard.png",
        tech: ["Figma", "Adobe XD", "Lovable"],
        category: "Mobile Application",
        links: {
          demo: "https://www.figma.com/design/oAcoBBUqkB2LRhaBOgfp9H/Goupboard?t=H09RSWv3PZEplDWm-1",
          github: "#",
          live: "#",
        },
      },
      
      {
        id: "Skin Deep",
        title: "Skin Deep – Spa & Wellness Website",
        description:
          "A modern spa service website that highlights beauty and wellness treatments with an elegant design, easy booking system, and smooth user experience.",
        image: "/skindeep.png",
        tech: ["Figma", "Adobe XD"],
        category: "Website",
        links: {
          demo: "https://www.figma.com/design/H37kJyuqBV9JOdX8bkJ7KV/Skindeep?t=H09RSWv3PZEplDWm-1",
          github: "#",
          live: "#",
        },
      },
      {
        id: "Mood Asana",
        title: "Mood Asana – Yoga & Mindfulness App",
        description: "A yoga mobile application that blends fitness with mental wellness, featuring guided sessions, mood-based workouts, and a calming user interface for a holistic lifestyle.",
        image: "/moodasana.png",
        tech: ["Figma", "Adobe XD"],
        category: "mobile App",
        links: {
          demo: "https://www.figma.com/design/XmvOgjHPQuJzACXqlt6dgN/Mood-Asana?node-id=0-1&t=H09RSWv3PZEplDWm-1",
          github: "#",
          live: "#",
        },
      },
      {
        id: "Pramod Snacks",
        title: "Pramod Snacks – Sweet & Snack Shopping Website",
        description:
          "An e-commerce website for sweets and snacks, designed with a clean interface, easy product browsing, and a smooth checkout experience for delightful online shopping.",
        image: "/pramodsnacks.png",
        tech: ["Figma", "Adobe XD"],
        category: "Website",
        links: {
          demo: "https://www.figma.com/design/9PBmwrqXmraZ9Py4uWtAkD/Pramod-Snacks?t=H09RSWv3PZEplDWm-1",
          github: "#",
          live: "#",
        },
      },
    ],
    [],
  )

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    }),
    [],
  )

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: easeInOut,
        },
      },
    }),
    [],
  )

  const handleProjectAction = useCallback((action: string, projectId: string) => {
    console.log(`[v0] ${action} clicked for project: ${projectId}`)
    // Handle project actions here
  }, [])

  return (
    <section id="projects" className="py-20 relative overflow-hidden" aria-label="Featured projects showcase">
      {/* Background elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="neon-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            A collection of my best works, showcasing how I combine creativity, usability, and 
            problem-solving to design impactful digital experiences across websites, mobile apps, and SaaS products.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Project cards"
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants} role="listitem">
              <Card className="glass-card neon-border group hover:neon-glow transition-all duration-500 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={`${project.title} - ${project.description}`}
                    className="w-full h-50 object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                    loading={index < 3 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge variant="secondary" className="glass neon-border">
                      {project.category}
                    </Badge>
                  </motion.div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:neon-text transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed text-pretty">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies used">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs glass" role="listitem">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2" role="group" aria-label="Project actions">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                     <Button
                       size="sm"
                       variant="ghost"
                       className="neon-glow-hover flex-1"
                       asChild
                     >
                       <a
                         href={project.links.demo}
                         target="_blank"
                         rel="noopener noreferrer"
                         aria-label={`View demo of ${project.title}`}
                         className="flex items-center"
                       >
                         <Play className="w-4 h-4 mr-2" aria-hidden="true" />
                         View
                       </a>
                     </Button>
                    </motion.div>

                    {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="neon-glow-hover flex-1"
                        onClick={() => handleProjectAction("demo", project.id)}
                        aria-label={`View demo of ${project.title}`}
                      >
                        <Play className="w-4 h-4 mr-2" aria-hidden="true" />
                        View
                      </Button>
                    </motion.div> */}
                    {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="neon-glow-hover"
                        onClick={() => handleProjectAction("github", project.id)}
                        aria-label={`View GitHub repository for ${project.title}`}
                      >
                        <Github className="w-4 h-4" aria-hidden="true" />
                      </Button>
                    </motion.div> */}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                     <Button
                       size="sm"
                       variant="ghost"
                       className="neon-glow-hover"
                       asChild
                     >
                       <a
                         href={project.links.live}
                         target="_blank"
                         rel="noopener noreferrer"
                         aria-label={`View live version of ${project.title}`}
                         className="flex items-center"
                       >
                         <ExternalLink className="w-4 h-4" aria-hidden="true" />
                       </a>
                     </Button>
                   </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Card className="glass-card neon-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 neon-text">Want to See More?</h3>
              <p className="text-muted-foreground mb-6 text-pretty">
                These are just a few highlights from my portfolio. I'm always working on new and exciting projects that
                push the boundaries of what's possible with modern technology.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="neon-glow-hover bg-primary hover:bg-primary/90"
                  onClick={() => handleProjectAction("view-all", "portfolio")}
                  aria-label="View all projects on GitHub"
                >
                  View All Projects
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
})
