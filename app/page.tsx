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
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-xl font-bold">Akash Yadagouda</a>
            <nav className="flex gap-6 text-sm">
              <a href="#about" className="hover:text-gray-600">About</a>
              <a href="#experience" className="hover:text-gray-600">Experience</a>
              <a href="#skills" className="hover:text-gray-600">Skills</a>
              <a href="#projects" className="hover:text-gray-600">Projects</a>
              <a href="#contact" className="hover:text-gray-600">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Hey, I am Akash</h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
            backend engineering, distributed systems, and databases. always building.
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              I am a Senior Software Engineer with 4+ years of experience designing and building scalable enterprise applications using Java, Spring Boot, Apache Kafka, and SQL Server. Currently working at OneTrust, where I architect distributed microservices and optimize high-throughput databases.
            </p>
            <p className="mb-4">
              I specialize in event-driven architecture, database performance optimization, and building reliable backend services from design through production deployment. I enjoy diving deep into engineering details and solving complex distributed systems challenges.
            </p>
            <p>
              Previously, I worked as a Research Intern at IIT Delhi on machine learning applications for medical imaging. I hold a BE in Computer Science from KLE Technological University with a GPA of 8.67/10.0.
            </p>
          </div>
        </section>

        {/* Social Links */}
        <section className="mb-16">
          <div className="flex gap-6 text-sm">
            <a href="https://linkedin.com/in/akashyadagouda" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
              LinkedIn
            </a>
            <a href="https://github.com/akash-yadagouda" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
              GitHub
            </a>
            <a href="mailto:akashyadagoud@gmail.com" className="hover:text-gray-600">
              Email
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
              <p className="text-gray-600 mb-2">OneTrust | Aug 2021 -- Present | Bangalore, India</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                <li>Designed and owned the backend architecture of Trust Center, an enterprise-grade SaaS platform</li>
                <li>Architected Apache Kafka-based event-driven architecture with retry mechanisms and fault-tolerant messaging</li>
                <li>Optimized SQL Server performance, reducing database resource utilization by 30%</li>
                <li>Led zero-downtime database migration to resolve production scalability challenges</li>
                <li>Developed backend Audit Logging services capturing 30+ business events</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Research Intern</h3>
              <p className="text-gray-600 mb-2">IIT Delhi | Jun 2019 – Jul 2019 | Bangalore, India</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                <li>Worked on Endoscopy Activity Recognition using Machine Learning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Programming Languages</h3>
              <p className="text-gray-700">Java (8/11/17), SQL, Python</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Backend Development</h3>
              <p className="text-gray-700">Spring Boot, REST APIs, Microservices, Distributed Systems, Event-Driven Architecture, Apache Kafka</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Databases</h3>
              <p className="text-gray-700">SQL Server, Azure Cosmos DB, Database Design, Query Optimization</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Cloud & DevOps</h3>
              <p className="text-gray-700">Microsoft Azure, Docker, Kubernetes, CI/CD, Git, Maven</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Blockchain-based Cloud Data Provenance</h3>
              <p className="text-gray-600 text-sm mb-2">Jul 2020 -- Jan 2021 | Hubli, India</p>
              <p className="text-gray-700 text-sm">
                Built a cloud-based provenance framework leveraging blockchain technologies for secure metadata tracking and verification.
              </p>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Publications</h2>
          <div className="text-sm text-gray-700">
            <p>
              <span className="font-semibold">[1]</span> P. Abhishek, Y. Akash, and D. G. Narayan. 
              <span className="italic">A scalable data provenance mechanism for cloud environment using ethereum blockchain.</span> 
              IEEE, 2021.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <div className="mb-8 text-sm text-gray-700">
            <p className="mb-2">
              <span className="font-semibold">Email:</span> akashyadagoud@gmail.com
            </p>
            <p className="mb-2">
              <span className="font-semibold">Phone:</span> +91 96329 77893
            </p>
            <p>
              <span className="font-semibold">Location:</span> Bangalore, India
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-black"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-black"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-black text-white rounded text-sm hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitStatus === 'success' && (
              <div className="p-3 bg-green-100 border border-green-300 rounded text-green-700 text-sm">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="p-3 bg-red-100 border border-red-300 rounded text-red-700 text-sm">
                Failed to send message. Please try again or contact me directly via email.
              </div>
            )}
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <p>&copy; 2024 Akash Yadagouda</p>
            <div className="flex gap-4">
              <a href="#about" className="hover:text-black">About</a>
              <a href="#contact" className="hover:text-black">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}