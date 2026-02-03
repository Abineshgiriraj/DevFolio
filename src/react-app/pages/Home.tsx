import { useState } from "react";
import { Code2, Github, Linkedin, Mail, ExternalLink, ChevronDown } from "lucide-react";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1000);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white font-['Inter']">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-500/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Code2 className="w-6 h-6 text-green-400 group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              DevFolio
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-gray-400 hover:text-green-400 transition-colors">About</button>
            <button onClick={() => scrollToSection("skills")} className="text-gray-400 hover:text-green-400 transition-colors">Skills</button>
            <button onClick={() => scrollToSection("projects")} className="text-gray-400 hover:text-green-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection("contact")} className="px-4 py-2 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 hover:bg-green-500/20 transition-all">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-black to-emerald-500/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-mono animate-pulse">
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-400 to-emerald-400 bg-clip-text text-transparent animate-fade-in">
            Software Development Engineer

            <br />
            <span className="text-green-400">Backend-focused | Full-Stack experience</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            I build reliable, scalable applications with a strong focus on backend logic, APIs, and system design.
Experienced in Python, Java, React, and data-driven applications.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-16">
            <button 
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-green-500/30 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <a href="https://github.com/Abineshgiriraj" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-green-500/20 hover:border-green-500/50 hover:bg-white/10 transition-all group">
              <Github className="w-5 h-5 text-gray-400 group-hover:text-green-400" />
            </a>
            <a href="https://www.linkedin.com/in/abinesh-giriraj-429279265/" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-green-500/20 hover:border-green-500/50 hover:bg-white/10 transition-all group">
              <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-green-400" />
            </a>
            <a href="mailto:05abinesh06@gmail.com"
               className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-green-500/20 hover:border-green-500/50 hover:bg-white/10 transition-all group">
              <Mail className="w-5 h-5 text-gray-400 group-hover:text-green-400" />
            </a>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-green-400" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/5 to-black"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I’m Abinesh, a Software Developer focused on building reliable, scalable applications using Python, Java, SQL, and modern web technologies.
I’ve worked on end-to-end projects involving backend logic, APIs, databases, and user-facing interfaces.
My experience includes ML-based decision systems, secure data processing, and collaborative web platforms.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I prioritize clean, maintainable code, strong problem-solving, and practical system design.
I’m actively seeking software development or backend-focused roles where I can contribute to real-world products.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-mono">
                  Software Development Engineer
                </span>
                <span className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-mono">
                  Backend Developer
                </span>
                <span className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-mono">
                  Full Stack Developer
                </span>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <img 
                src="/Profile.png"
                alt="Profile"
                className="relative rounded-2xl shadow-2xl border border-green-500/20 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.05),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend",
                skills: ["HTML" , "CSS" , "JavaScript"]
              },
              {
                title: "Backend",
                skills: ["Python" , "C" ,"Java" , "Mysql" , "MongoDB" , ]
              },
              {
                title: "Tools",
                skills: ["Git/GitHub" , "Power BI"]
              },
              {
                title: "Frameworks/Libraries",
                skills: ["React" ,"Django"]
              }
            
          
            ].map((category, idx) => (
              <div 
                key={idx}
                className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] group"
              >
                <h3 className="text-2xl font-bold mb-6 text-green-400 group-hover:text-green-300 transition-colors">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 font-mono text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
            ))}
          </div>
        </div>

      
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Soft Skills
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Communication",
                skills: ["Tamil" ,"English" ,"Kannada"]
              },
              {
                title: "Collaboration",
                skills: ["Problem Solving", "Teamwork", "Adaptability", "Time Management"]
              }
          
            ].map((category, idx) => (
              <div 
                key={idx}
                className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] group"
              >
                <h3 className="text-2xl font-bold mb-6 text-green-400 group-hover:text-green-300 transition-colors">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 font-mono text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/5 to-black"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "SkyPadIDLE",
                description: "SkyPadIdle is a MERN-stack collaborative coding platform that enables real-time code editing and problem-solving for teams and learners.",
                image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
                tech: ["React", "Node.js", "Express", "MongoDB","Socket.IO"],
                github: "https://github.com/Praveenkumar76/SkyPad-IDE-sec"
              },
              {
                title: "QuizCrafter",
                description: "QuizCrafter is an AI-powered quiz generation system that uses RAG to create context-aware questions from online content.",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
                tech: ["Python", "Haystack", "Llama 3 (LLM)", "Groq LPU", "Gradio"],
                github: "https://github.com/Abineshgiriraj/QuizCrafter"
              },
              {
                title: "LockPixel",
                description: "LockPixel is a Python-based image encryption system that secures images using the AES algorithm.",
                image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
                tech: ["Python", "PyCryptodome", "AES", "OpenCV"],
                github: "https://github.com/Abineshgiriraj/LockPixel"
              },
              {
                title: "IT Expenditure dashboard",
                description: "IT Expenditure Dashboard is a Power BI dashboard that visualizes and analyzes IT spending trends to support cost-management decisions.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
                tech: ["Power BI", "DAX", "Data Modeling"],
                github: "https://github.com/Abineshgiriraj/IT-Expenditure-Dashboard-Using-Power-BI-"
              },
              {
                title:"DevLogix",
                description:"DevLogix is a React-based personal learning platform that helps developers stay consistent by combining learning content, coding practice, and progress tracking in one place.",
                image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
                tech: ["React.js", "JavaScript", "HTML", "CSS"],
                github: "https://github.com/Abineshgiriraj/DevLogix"
              }
            ].map((project, idx) => (
              <div 
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                </div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIdx) => (
                      <span key={techIdx} className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-semibold"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.05),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-center text-gray-400 text-lg mb-16">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-green-500/20">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 text-white placeholder-gray-500 transition-all"
                    placeholder="Abinesh"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 text-white placeholder-gray-500 transition-all"
                    placeholder="05abinesh06@gmail.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 text-white placeholder-gray-500 transition-all resize-none"
                    placeholder="Let's discuss how we can collaborate."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                
                {submitStatus === "success" && (
                  <div className="text-center text-green-400 font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-green-500/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-green-400" />
              <span className="text-gray-400">© 2024 DevFolio. Crafted with passion.</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="https://github.com/Abineshgiriraj" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-green-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/abinesh-giriraj-429279265/" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:05abinesh06@gmail.com"
                 className="text-gray-400 hover:text-green-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
