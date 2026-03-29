import { ResumeData } from '@/types';

export const resumeData: ResumeData = {
  personalInfo: {
    name: 'Carlo Baclao',
    title: 'Full Stack Developer',
    email: 'carlo.baclao@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    linkedin: 'https://linkedin.com/in/carlobaclao',
    github: 'https://github.com/carlobaclao',
  },
  summary: 'Passionate Full Stack Developer with 5+ years of experience building scalable web applications using modern technologies. Expertise in React, Node.js, and cloud platforms. Strong problem-solving skills and commitment to writing clean, maintainable code.',
  experience: [
    {
      id: '1',
      company: 'Tech Solutions Inc.',
      position: 'Senior Full Stack Developer',
      startDate: new Date('2022-01-01'),
      endDate: undefined, // Current position
      description: [
        'Led development of customer-facing web applications serving 100K+ users',
        'Architected and implemented microservices using Node.js and Docker',
        'Collaborated with cross-functional teams to deliver features on time',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker']
    },
    {
      id: '2',
      company: 'Digital Innovations LLC',
      position: 'Full Stack Developer',
      startDate: new Date('2020-03-01'),
      endDate: new Date('2021-12-31'),
      description: [
        'Developed and maintained e-commerce platform handling $2M+ in transactions',
        'Implemented responsive designs and improved mobile user experience',
        'Optimized database queries resulting in 40% performance improvement',
        'Integrated third-party APIs and payment processing systems'
      ],
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Stripe API', 'Redis']
    }
  ],
  education: [
    {
      id: '1',
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: new Date('2016-08-01'),
      endDate: new Date('2020-05-01'),
      gpa: '3.8',
      honors: ['Magna Cum Laude', 'Dean\'s List']
    }
  ],
  skills: [
    {
      category: 'Frontend',
      skills: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      category: 'DevOps & Tools',
      skills: ['AWS', 'Docker', 'Git', 'CI/CD', 'Jest', 'Webpack']
    }
  ],
  certifications: [
    {
      id: '1',
      name: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      issueDate: new Date('2023-06-01'),
      expiryDate: new Date('2026-06-01'),
      credentialId: 'AWS-DEV-2023-001',
      credentialUrl: 'https://aws.amazon.com/verification'
    }
  ]
};