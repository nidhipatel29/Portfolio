import { PortfolioData } from '../models/portfolio.model';

export const portfolioData: PortfolioData = {
  name: 'Nidhi Patel',
  role: 'Software Developer',
  headline: 'Software Developer | Java, Spring Boot, Angular & React',
  location: 'Ottawa, ON, Canada',
  email: 'patelnidhih1112@gmail.com',
  phone: '+1 2896372925',
  // TODO: Replace the placeholder with Nidhi's LinkedIn profile URL.
  linkedinUrl: 'https://www.linkedin.com/in/patelnidhi29/',
  // TODO: Replace the placeholder with Nidhi's GitHub profile URL.
  githubUrl: 'https://github.com/nidhipatel29',
  summary:
    'Software Developer with experience in full-stack web applications, backend services and RESTful APIs using Java, Spring Boot, React.js, Angular and Python. Skilled in database management, microservices, API security and software testing, with knowledge of cloud platforms, CI/CD pipelines and AI integration using LLMs, LangChain and RAG. Works in Agile teams.',
  navigation: [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ],
  rotatingFocuses: ['full-stack web applications', 'backend services', 'RESTful APIs'],
  skills: [
    { name: 'Languages', skills: ['Java', 'Python', 'JavaScript (ES6+)', 'TypeScript', 'SQL'] },
    {
      name: 'Backend',
      skills: [
        'Spring Boot', 'Spring MVC', 'Spring Security', 'Node.js', 'Express.js', 'FastAPI',
        'Flask', 'Hibernate', 'JPA', 'Microservices',
      ],
    },
    {
      name: 'Frontend',
      skills: [
        'React.js', 'Angular', 'Redux', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS',
        'Responsive Design',
      ],
    },
    {
      name: 'API & Security',
      skills: ['REST APIs', 'JSON', 'Swagger/OpenAPI', 'OAuth 2.0', 'JWT', 'Third-party API integration'],
    },
    {
      name: 'AI & Python',
      skills: ['Pandas', 'NumPy', 'OpenAI API', 'LLM integration', 'Prompt Engineering', 'LangChain', 'RAG'],
    },
    {
      name: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis', 'SQL query optimization'],
    },
    {
      name: 'Testing',
      skills: ['JUnit', 'Mockito', 'Pytest', 'Jest', 'Unit and Integration Testing', 'SonarQube'],
    },
    {
      name: 'Cloud & DevOps',
      skills: ['AWS', 'Azure', 'Docker', 'CI/CD', 'GitHub Actions', 'Jenkins'],
    },
    {
      name: 'Tools',
      skills: ['Git', 'GitHub', 'Maven', 'Gradle', 'Postman', 'IntelliJ IDEA', 'VS Code', 'Jira', 'Agile', 'Scrum'],
    },
  ],
  experience: [
    {
      role: 'Software Developer',
      company: 'OPENLANE',
      dates: '06/2025 - Present',
      highlights: [
        'Develop and maintain backend components using Java, Spring Boot and REST APIs.',
        'Design and integrate API endpoints with React.js or Angular frontends.',
        'Implement persistence with JPA, Hibernate and SQL, focusing on query performance and data consistency.',
        'Build and update application modules and business logic for new features.',
        'Integrate external services via REST APIs and implement authentication with Spring Security, OAuth 2.0 and JWT.',
        'Support testing, debugging, code quality checks and deployment using Git, Docker, CI/CD and cloud services.',
      ],
    },
    {
      role: 'Junior Software Developer',
      company: 'Tatvasoft',
      dates: '08/2022 - 06/2023',
      highlights: [
        'Developed Java components with Spring Boot, Spring MVC and ORM technologies.',
        'Implemented RESTful endpoints and integrated backend services with frontend components.',
        'Built queries and persistence logic with MySQL, Spring Data JPA and Hibernate.',
        'Built web UI components with JavaScript, HTML5, CSS3 and Angular.',
        'Validated APIs with Postman, debugged defects and ran regression checks.',
        'Used Git and Azure DevOps in an Agile Scrum team.',
      ],
    },
  ],
  projects: [
    {
      name: 'CareerTrack',
      category: 'Career Management Web App · Personal Project',
      description: [
        'Spring Boot REST API with Controller, Service, Repository and DTO layers for companies and job postings (CRUD).',
        'Angular frontend with reusable components, services and HttpClient.',
        'DTO-based request/response handling, Bean Validation and centralized exception handling.',
      ],
      technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL'],
      githubUrl: 'https://github.com/nidhipatel29/CareerTrack',
      // TODO: Add a live demo URL or remove this property.
      liveUrl: '#',
    },
    {
      name: 'Employee Management System',
      category: 'Academic Project',
      description: [
        'Layered Spring Boot app with REST CRUD APIs and JSON handling.',
        'Spring Data JPA and Hibernate with MySQL; frontend with HTML, CSS and jQuery.',
        'Spring Security with role-based authentication and authorization.',
      ],
      technologies: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'JPA'],
      // TODO: Replace the placeholder with the Employee Management System GitHub URL.
      githubUrl: '#',
    },
  ],
  education: [
    {
      qualification: 'Postgraduate Diploma, Computer Software and Database Development',
      institution: 'Loyalist College',
      location: 'Ontario, Canada',
      dates: '04/2024 - 12/2025',
    },
    {
      qualification: 'Bachelor of Information Technology',
      institution: 'Gujarat University',
      location: 'Ahmedabad, India',
      dates: '07/2018 - 06/2022',
    },
  ],
};