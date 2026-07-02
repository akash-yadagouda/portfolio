'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString()
      };

      await emailjs.send(
        'service_28n24jf',
        'template_cfhjua7',
        templateParams,
        'ZKM02Pj9RH5YKcz0l'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Akash Yadagouda</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
            Akash Yadagouda
          </h1>
          <p className="text-xl md:text-2xl text-blue-300 mb-8">
            Senior Software Engineer | Java Backend | Distributed Systems
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            4+ years of experience designing and building scalable enterprise applications using Java, Spring Boot, Apache Kafka, and SQL Server. Expert in microservices architecture and event-driven systems.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              className="px-8 py-3 border-2 border-blue-600 text-white rounded-full font-semibold hover:bg-blue-600/20 transition-colors"
            >
              View Experience
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Professional Summary</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Backend Software Engineer with 4+ years of experience designing and building scalable enterprise applications. Experienced in architecting distributed microservices, optimizing high-throughput databases, designing event-driven systems, and owning backend services from design through production deployment.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-blue-300">KLE Technological University</h4>
                  <p className="text-gray-300">BE in Computer Science</p>
                  <p className="text-gray-400 text-sm">Aug 2017 - Apr 2021 | Hubballi, India</p>
                  <p className="text-gray-400 text-sm">Cum. GPA: 8.67 / 10.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Work Experience</h2>
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Senior Software Engineer</h3>
                  <p className="text-xl text-blue-300">OneTrust</p>
                </div>
                <p className="text-gray-400">Aug 2021 -- Present | Bangalore, India</p>
              </div>
              <ul className="text-gray-300 space-y-3 list-disc list-inside">
                <li>Designed and owned the backend architecture of Trust Center, an enterprise-grade SaaS platform, driving system design, API contracts, data modeling, implementation, production deployment, and long-term feature ownership across distributed microservices.</li>
                <li>Designed and developed scalable Java and Spring Boot microservices, building REST APIs for localization, consent management, and asynchronous data export workflows while ensuring high availability and maintainability.</li>
                <li>Architected Apache Kafka-based event-driven architecture, implementing retry mechanisms, idempotent processing, and fault-tolerant messaging to improve system scalability and resilience.</li>
                <li>Optimized SQL Server performance through execution plan analysis, indexing strategies, stored procedure tuning, query refactoring, and batch processing, reducing database resource utilization by 30% and improving API response times.</li>
                <li>Designed and implemented asynchronous data export pipelines processing millions of customer records by integrating SQL Server, Azure Blob Storage, and distributed backend services for reliable enterprise-scale data delivery.</li>
                <li>Debugged and resolved production issues involving Kafka consumer lag, partition rebalancing, polling bottlenecks, database performance, and distributed service failures, improving platform stability and operational reliability.</li>
                <li>Led the design and execution of a zero-downtime database migration to resolve production scalability challenges caused by primary key exhaustion, preserving application compatibility and customer data integrity.</li>
                <li>Developed backend Audit Logging services capturing and processing 30+ business events, improving observability, compliance tracking, and production debugging.</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Research Intern</h3>
                  <p className="text-xl text-blue-300">IIT Delhi</p>
                </div>
                <p className="text-gray-400">Jun 2019 – Jul 2019 | Bangalore, India</p>
              </div>
              <ul className="text-gray-300 space-y-3 list-disc list-inside">
                <li>Worked on a project Endoscopy Activity Recognition using Machine learning which helped to identify activity inside the Endo-trainer.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Programming Languages</h3>
              <div className="space-y-2">
                <p className="text-white">Java (8/11/17)</p>
                <p className="text-white">SQL</p>
                <p className="text-white">Python</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Backend Development</h3>
              <div className="space-y-2">
                <p className="text-white">Spring Boot</p>
                <p className="text-white">REST APIs</p>
                <p className="text-white">Microservices</p>
                <p className="text-white">Distributed Systems</p>
                <p className="text-white">Event-Driven Architecture</p>
                <p className="text-white">Apache Kafka</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Databases</h3>
              <div className="space-y-2">
                <p className="text-white">SQL Server</p>
                <p className="text-white">Azure Cosmos DB</p>
                <p className="text-white">Database Design</p>
                <p className="text-white">Query Optimization</p>
                <p className="text-white">Stored Procedures</p>
                <p className="text-white">Execution Plan Analysis</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Cloud & DevOps</h3>
              <div className="space-y-2">
                <p className="text-white">Microsoft Azure</p>
                <p className="text-white">Docker</p>
                <p className="text-white">Kubernetes</p>
                <p className="text-white">Azure Blob Storage</p>
                <p className="text-white">CI/CD</p>
                <p className="text-white">Git</p>
                <p className="text-white">Maven</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Software Engineering</h3>
              <div className="space-y-2">
                <p className="text-white">System Design (HLD/LLD)</p>
                <p className="text-white">Object-Oriented Design</p>
                <p className="text-white">Multithreading</p>
                <p className="text-white">Performance Optimization</p>
                <p className="text-white">Debugging</p>
                <p className="text-white">Data Structures & Algorithms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">Blockchain-based Cloud Data Provenance</h3>
              <p className="text-gray-300 mb-4">Jul 2020 -- Jan 2021 | Hubli, India</p>
              <p className="text-gray-300 mb-4">
                Built a cloud-based provenance framework leveraging blockchain technologies for secure metadata tracking and verification.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm">Blockchain</span>
                <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm">Cloud Computing</span>
                <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm">Ethereum</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Publications</h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <p className="text-gray-300 text-lg">
              <span className="text-blue-300 font-semibold">[1]</span> P. Abhishek, Y. Akash, and D. G. Narayan. 
              <span className="text-white italic">A scalable data provenance mechanism for cloud environment using ethereum blockchain.</span> 
              IEEE, 2021.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Get in Touch</h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <p className="text-gray-300">
                    <span className="text-blue-400">Email:</span> akashyadagoud@gmail.com
                  </p>
                  <p className="text-gray-300">
                    <span className="text-blue-400">Phone:</span> +91 96329 77893
                  </p>
                  <p className="text-gray-300">
                    <span className="text-blue-400">Location:</span> Bangalore, India
                  </p>
                </div>
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600/30 text-blue-300 rounded-lg hover:bg-blue-600/50 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600/30 text-blue-300 rounded-lg hover:bg-blue-600/50 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center">
                      Failed to send message. Please try again or contact me directly via email.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Akash Yadagouda. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
