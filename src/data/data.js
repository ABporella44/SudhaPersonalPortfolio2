// ---------------------------------------------------------------------------
// Content sourced from the uploaded resume (Resume_4.pdf) for
// Sudha Sravanthi Kancharla, Business Analyst.
//
// A few fields aren't stated anywhere in the resume -- marked below with
// "TODO" -- fill these in yourself rather than trusting a guess:
//   - profile.resumeUrl   (link to a hosted copy of the PDF)
//   - profile.socials     (no LinkedIn/social links were on the resume)
//   - education[0].period (no graduation years were listed)
//   - testimonials        (no client/manager quotes were on the resume)
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Sudha Sravanthi Kancharla',
  role: 'Business Analyst',
  tagline:
    "Results-driven Business Analyst with extensive experience in healthcare and insurance domains, delivering solutions through Agile/Scrum methodologies and SAFe frameworks. I translate complex requirements into BRDs, FRDs, RTMs, and JIRA stories that keep product and AI initiatives moving. Skilled in claims management, fraud detection, and ensuring regulatory alignment with HIPAA, CMS, ISO, and Medicare/Medicaid rules. I partner closely with developers, product owners, and data scientists to turn business needs into technical solutions, and I've driven automation initiatives that cut testing time by 40% — earning recognition along the way, including an award for 157% productivity.",
  aboutHeadline: 'Business Analyst',
  aboutBio:
    'Skilled in claims management, fraud detection, and regulatory alignment with HIPAA, CMS, ISO, and Medicare/Medicaid rules. Experienced across the full software development life cycle — from technical product development and requirement gathering through functional testing, end-user (UAT) testing, and final delivery — for healthcare and insurance domain projects. Recognized for cross-functional collaboration with developers, product owners, and data scientists, and for driving automation initiatives that reduced testing time by 40%.',
  yearsExperience: 12,
  location: 'Hyderabad, India',
  availability: 'Currently: Business Analyst (Technical) at Zelis',
  resumeUrl: '#', // TODO: link to your hosted resume PDF
  stats: [
    { label: 'Years Experience', value: '12+' },
    { label: 'Testing Time Cut', value: '40%' },
    { label: 'Productivity Award', value: '157%' },
  ],
  socials: [
    // TODO: the resume didn't list social/profile links -- add your real ones
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
  ],
  contact: {
    phone: '+91 99630 20816',
    email: 'sudhakancharla1993@gmail.com',
  },
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#tech' },
  { label: 'Services', href: '#services' },
  { label: 'Education', href: '#education' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Get In Touch', href: '#contact' },
]

export const heroBadges = [
  'Business Analysis',
  'Requirement Gathering',
  'Agile / Scrum',
  'SAFe Framework',
  'JIRA Story Writing',
  'SQL & Data Analysis',
  'Stakeholder Management',
  'BRD / FRD / RTM',
]

// No client or manager quotes were included on the resume -- replace these
// with real ones once you have them.
export const heroTestimonialPreviews = [
  {
    image: './testimonial1.png',
    author: 'Mounika Regonda',
    quote: 'Sudha is an exceptional business analyst who consistently delivers high-quality results.',
  },
  {
    image: './testimonial2.jpeg',
    author: 'Radha krishna',
    quote: 'Working with Sudha has been a game-changer for our business analysis processes.',
  },
  {
    image: './testimonial3.jpeg',
    author: 'Abhilash porella',
    quote: 'Sudha\'s expertise in business analysis has significantly improved our project outcomes.',
  },
    {
    image: './testimonial4.jpeg',
    author: 'Mounika Renigunta',
    quote: 'Sudha\'s expertise in Agile methodologies has greatly enhanced our project delivery and team collaboration.',
  }
]

export const experience = [
  {
    role: 'Business Analyst (Technical)',
    company: 'Zelis',
    type: 'Hyderabad',
    period: 'Nov 2025 -- Present',
  },
  {
    role: 'Sr. Business Analyst',
    company: 'Qualcomm (via Lancesoft Pvt Ltd)',
    type: 'Hyderabad',
    period: 'Jul 2024 -- May 2025',
  },
  {
    role: 'Business Analyst / Sr. Software Engineer',
    company: 'Wissen Infotech',
    type: 'Hyderabad',
    period: 'Apr 2023 -- Jul 2024',
  },
  {
    role: 'Business Analyst & Sr. Quality Analyst',
    company: 'Legato Health Technologies LLP',
    type: '',
    period: 'Aug 2018 -- Dec 2022',
  },
  {
    role: 'Sr. Quality Analyst',
    company: 'Sutherland Global Services',
    type: 'Hyderabad',
    period: 'Jan 2014 -- Jan 2018',
  },
]

// Sourced from the resume's own "Projects" list, filled out with the
// relevant detail pulled from the matching role descriptions.
export const projects = [
  {
    title: 'AI Integration for Healthcare Workflows',
    category: 'US Healthcare',
    description:
      'Defined scope, feasibility, and roadmap for embedding AI into an existing healthcare product, and authored white papers on adoption strategy, compliance, and business impact.',
    stack: ['JIRA', 'BRD/FRD', 'Stakeholder Workshops'],
    year: '2025',
    link: '#',
  },
  {
    title: 'Group Insurance Platform',
    category: 'US Healthcare',
    description:
      'Delivered BRDs, FRDs, process maps, and UI mockups for policy eligibility, claim inquiries, and security clearance approvals, liaising between HR, Security, and IT.',
    stack: ['SAFe Agile', 'Confluence', 'UAT'],
    year: '2024',
    link: '#',
  },
  {
    title: 'CTMS Data Migration',
    category: 'Life Science & Pharma Trials',
    description:
      'Led migration of patient data, trial protocols, and drug information from PSO to Salesforce-owned CTMS (Clinical Trial Management System), ensuring data accuracy throughout.',
    stack: ['Salesforce CTMS', 'Data Validation'],
    year: '2023',
    link: '#',
  },
  {
    title: 'Claims Adjudication & Provider Onboarding',
    category: 'US Healthcare',
    description:
      'Led business analysis and QA for claims adjudication, utilization management, and provider onboarding, validating workflows with SQL and preparing BRDs/FRDs/RTMs for Medicare/Medicaid scenarios.',
    stack: ['SQL', 'BRD/FRD/RTM'],
    year: '2018 - 2022',
    link: '#',
  },
  {
    title: 'Security Management Tools',
    category: 'Security',
    description:
      'Contributed to security management tooling as part of broader compliance and access-control initiatives.',
    stack: ['Compliance'],
    year: '--',
    link: '#',
  },
  {
    title: 'Secured File Transferring Tools',
    category: 'Security',
    description:
      'Contributed to secure file transfer tooling supporting compliant data exchange.',
    stack: ['Compliance'],
    year: '--',
    link: '#',
  },
]

export const techStack = [
  {
    group: 'Business Analysis',
    items: [
      'Business Analysis',
      'Requirement Gathering',
      'Stakeholder Engagement',
      'Stakeholder Management',
      'Risk Analysis',
    ],
  },
  {
    group: 'Agile & Delivery',
    items: [
      'Agile Methodologies',
      'Agile Tools Management',
      'JIRA Proficiency',
      'Project Management',
      'Project Planning',
    ],
  },
  {
    group: 'Documentation',
    items: ['BRDs / FRDs / RTMs', 'Technical Documentation', 'Process Documentation', 'UI Mockups & Wireframes'],
  },
  {
    group: 'Tools & Data',
    items: ['SQL', 'Data Analysis', 'Excel Expertise', 'User Interface Design'],
  },
]

export const services = [

  {
    title: 'Claims & Fraud Analysis',
    description:
      'Claims adjudication, denial management, and fraud detection support across the full claims processing lifecycle.',
  },
  {
    title: 'Manual Testing',
    description:
      'Functional, regression, and end-to-end test execution across web and enterprise applications, with detailed defect logging and traceability back to requirements.',
  },
  {
    title: 'Test Planning & Strategy',
    description:
      'Test plans, test case design, and coverage matrices that align QA effort with release scope, risk areas, and acceptance criteria.',
  },
  {
    title: 'Product Delivery Planning',
    description:
      'Release roadmaps, delivery timelines, and dependency mapping that keep product milestones realistic and visible across teams.',
  },
  {
    title: 'Sprint Planning & Scrum Ceremonies',
    description:
      'Sprint planning, backlog grooming, daily stand-ups, sprint reviews, and retrospectives run to keep delivery predictable and continuously improving.',
  },
  {
    title: 'Agile Team Facilitation',
    description:
      'Scrum Master / Product Owner support duties including backlog prioritization, velocity tracking, impediment removal, and cross-team coordination.',
  },
  {
    title: 'UI/UX Design Collaboration',
    description:
      'Wireframes, mockups, and prototypes in Figma, translated into detailed design specs and handed off cleanly to development teams.',
  },
    {
    title: 'Requirements Documentation',
    description:
      'BRDs, FRDs, RTMs, and functional specifications that translate business needs into build-ready requirements.',
  },
  {
    title: 'Agile / SAFe Delivery Management',
    description:
      'JIRA story writing, epics, sprint planning, and stakeholder sign-offs run under Agile/Scrum and SAFe frameworks.',
  },
  {
    title: 'Healthcare & Insurance Compliance',
    description:
      'Domain expertise in claims, eligibility, and regulatory alignment with HIPAA, CMS, ISO, and Medicare/Medicaid rules.',
  },
  {
    title: 'AI Adoption Strategy',
    description:
      'Scope, feasibility, and roadmap definition for embedding AI into existing product workflows, with white papers on compliance and business impact.',
  },
  {
    title: 'Stakeholder Workshops & UAT',
    description:
      'Facilitated workshops, walkthroughs, and UAT cycles that keep business, technical, and product teams aligned.',
  },
]

export const education = [
  {
    degree: 'Bachelor of Commerce in Computers',
    school: 'Osmania University',
    period: '', // TODO: resume didn't list graduation years
    detail: 'GPA: 75.9',
  },
]

export const certifications = ['Certified Business Analyst']

export const languages = ['English', 'Hindi', 'Telugu']

export const accomplishments = [
  'Received the Annual Award for achieving 157% productivity.',
  "Authored an article on how AI can transform healthcare systems -- covering claims processing, fraud detection, and clinical workflows -- featured on Zelis' main website starting December.",
]

// No client or manager quotes were included on the resume -- replace these
// placeholders with real testimonials once you have them.
export const testimonials = []