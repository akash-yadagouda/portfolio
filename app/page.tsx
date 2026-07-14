'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

const link = 'text-blue-700 hover:underline';

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
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header>
        <div className="max-w-3xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-3">
          <Link href="/" className="font-bold">Akash Yadagouda</Link>
          <nav className="flex gap-5 text-sm text-neutral-600">
            <a href="#experience" className="hover:text-black">Experience</a>
            <a href="#skills" className="hover:text-black">Skills</a>
            <a href="#publications" className="hover:text-black">Publications</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pt-10 pb-16 text-[15px] leading-7 text-neutral-800">
        {/* Hero */}
        <section className="mb-12">
          <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-8">
            <div>
              <h1 className="text-4xl font-bold text-black mb-2">Hey, I am Akash</h1>
              <h2 className="text-lg text-neutral-500 mb-6">
                backend engineering, databases, and distributed systems. always building.
              </h2>
            </div>
            <Image
              src="/profile.svg"
              alt="Akash Yadagouda"
              width={140}
              height={140}
              className="rounded-full shrink-0 border border-neutral-200"
              priority
            />
          </div>

          <div className="space-y-4">
            <p>
              I am a backend engineer with 5+ years of experience building scalable microservices
              in Java and Spring Boot. Currently, I am a Senior Software Engineer at{' '}
              <a href="https://www.onetrust.com" target="_blank" rel="noopener noreferrer" className={link}>OneTrust</a>,
              where I have designed and built microservices from scratch, taken them to production,
              and owned them long-term — services that handle millions of requests daily.
            </p>
            <p>
              I spend most of my time close to the database and the message queue. I have optimized
              Azure SQL Server through execution plan analysis, strategic indexing, and query
              refactoring — cutting database resource utilization by 30% and improving API response
              times by 40%. I architected Kafka-based event-driven pipelines processing millions of
              events daily with idempotent processing and 99.99% delivery reliability. One of my
              favorite problems: a zero-downtime migration of a 2 billion+ row table to fix a
              primary key integer overflow, with live traffic flowing throughout.
            </p>
            <p>
              I practice TDD and DDD, care about clean code and system design (HLD/LLD), and mentor
              junior engineers on backend development and production best practices. Lately, I have
              been going deep on AI-assisted development workflows with tools like Windsurf, Claude
              Code, Devin, Codex, and Cursor.
            </p>
            <p>
              I hold a BE in Computer Science from KLE Technological University (GPA 8.67/10.0) and
              co-authored a paper on{' '}
              <a href="https://ieeexplore.ieee.org" target="_blank" rel="noopener noreferrer" className={link}>
                blockchain-based data provenance
              </a>{' '}
              published at IEEE DISCOVER 2021. I keep diving deep into engineering details — reading,
              breaking things down, and learning in public.
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm">
            <li><a href="https://linkedin.com/in/akashyadagouda" target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</a></li>
            <li><a href="https://github.com/akash-yadagouda" target="_blank" rel="noopener noreferrer" className={link}>GitHub</a></li>
            <li><a href="mailto:akashyadagoud@gmail.com" className={link}>Email</a></li>
            <li><a href="/resume_backend_engineer.pdf" target="_blank" className={link}>Resume</a></li>
          </ul>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-12">
          <h2 className="text-xl font-bold text-black mb-5">Work experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-black">Senior Software Engineer, OneTrust</h3>
              <p className="font-mono text-xs text-neutral-500 mb-2">Aug 2021 – Present · Bangalore, India</p>
              <ul className="list-disc pl-5 space-y-1.5 text-neutral-700">
                <li>Designed and built two microservices from scratch (Java, Spring Boot, REST APIs) serving millions of requests daily; owned them from design through production.</li>
                <li>Optimized Azure SQL Server via execution plan analysis, indexing, and query refactoring — 30% lower resource utilization, 40% faster API responses.</li>
                <li>Architected Kafka event-driven pipelines processing millions of events daily with retries, idempotent processing, and 99.99% delivery reliability.</li>
                <li>Engineered a zero-downtime migration of a 2B+ row table (10M rows/month incoming) to fix primary key integer overflow, with data integrity intact throughout.</li>
                <li>Built asynchronous data export workflows and an Azure Blob Storage-backed export tool delivering millions of customer records at enterprise scale.</li>
                <li>Engineered a SQL indexing optimization tool that dynamically adds and removes indexes based on query patterns, with zero-downtime operations in production.</li>
                <li>Practiced TDD/DDD, built unit and integration test suites, worked in Jenkins and GitLab CI/CD with Kubernetes deployments, and mentored junior engineers.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black">Software Engineering Intern, OneTrust</h3>
              <p className="font-mono text-xs text-neutral-500 mb-2">Mar 2021 – Jun 2021 · Bangalore, India</p>
              <ul className="list-disc pl-5 space-y-1.5 text-neutral-700">
                <li>Resolved production bugs in Spring Boot REST APIs and automated BDD test flows using Java, Selenium, and Appium.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-12">
          <h2 className="text-xl font-bold text-black mb-5">What I work with</h2>
          <ul className="space-y-2 text-neutral-700">
            <li><span className="font-semibold text-black">Backend:</span> Java (17, 21), Spring Boot, REST APIs, Microservices, JPA, Hibernate</li>
            <li><span className="font-semibold text-black">Databases:</span> Azure SQL Server, query optimization, indexing, execution plan analysis, performance tuning</li>
            <li><span className="font-semibold text-black">Distributed systems:</span> Apache Kafka, event-driven architecture, asynchronous processing, fault-tolerant messaging</li>
            <li><span className="font-semibold text-black">CI/CD &amp; DevOps:</span> Jenkins, GitLab CI/CD, Kubernetes, Docker, Git, automated testing</li>
            <li><span className="font-semibold text-black">Cloud:</span> Microsoft Azure, cloud-native architecture, containerization</li>
            <li><span className="font-semibold text-black">Engineering:</span> TDD, DDD, clean code, system design (HLD/LLD), code reviews</li>
            <li><span className="font-semibold text-black">AI-assisted development:</span> Windsurf, Claude Code, Devin, Codex, Cursor</li>
          </ul>
        </section>

        {/* Publications */}
        <section id="publications" className="mb-12">
          <h2 className="text-xl font-bold text-black mb-5">Publications</h2>
          <p className="text-neutral-700">
            P. Abhishek, Y. Akash, and D. G. Narayan.{' '}
            <span className="italic">A Scalable Data Provenance Mechanism for Cloud Environment using Ethereum Blockchain.</span>{' '}
            IEEE DISCOVER 2021.
          </p>
        </section>

        {/* Education */}
        <section id="education" className="mb-12">
          <h2 className="text-xl font-bold text-black mb-5">Education</h2>
          <p className="text-neutral-700">
            <span className="font-semibold text-black">BE in Computer Science</span>, KLE Technological University, Hubballi
          </p>
          <p className="font-mono text-xs text-neutral-500">Aug 2017 – Apr 2021 · GPA 8.67/10.0</p>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-8">
          <h2 className="text-xl font-bold text-black mb-5">Get in touch</h2>
          <p className="text-neutral-700 mb-6">
            The best way to reach me is via{' '}
            <a href="mailto:akashyadagoud@gmail.com" className={link}>email</a> or the form below.
            I am based in Bangalore, India.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-black mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-neutral-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-neutral-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-black mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-neutral-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-neutral-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-black mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-neutral-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-neutral-500"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-black text-white text-sm px-5 py-2 rounded hover:bg-neutral-800 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
            {submitStatus === 'success' && (
              <p className="text-sm text-green-700">Message sent. I will get back to you soon.</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-sm text-red-700">Something went wrong. Please email me directly.</p>
            )}
          </form>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-neutral-200 text-sm text-neutral-500 flex flex-wrap justify-between gap-2">
          <p>© Akash Yadagouda, {new Date().getFullYear()}</p>
          <p className="flex gap-4">
            <a href="https://linkedin.com/in/akashyadagouda" target="_blank" rel="noopener noreferrer" className="hover:text-black">LinkedIn</a>
            <a href="https://github.com/akash-yadagouda" target="_blank" rel="noopener noreferrer" className="hover:text-black">GitHub</a>
            <a href="mailto:akashyadagoud@gmail.com" className="hover:text-black">Email</a>
          </p>
        </footer>
      </main>
    </div>
  );
}
