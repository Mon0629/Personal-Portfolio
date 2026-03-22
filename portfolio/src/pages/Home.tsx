import './custom.css';
import Navbar from '../components/Navbar';
import Profile from '../assets/profilepic.png';
import Skills from '../assets/skill.png';
import { Tooltip } from '@mui/material';
import Carousel from '../components/CertificationCarousel';
import { SpeedInsights } from "@vercel/speed-insights/react";
import ContactMe from '../components/ContactMe';

function Home() {
    return (
        <div className="w-screen h-screen overflow-auto">
            <Navbar />
            <section id="home" className="min-h-screen w-full flex flex-col justify-end pl-10 pb-20 items-start mobile-home">
                <span className="text-large font-[Lora] mb-0 -mt-5 tracking-tighter">code smarter</span>
                <h1 className="text-huge mb-0 -mt-20 tracking-tighter font-[Montserrat] text-[#eb4a4a]">
                    Work Harder {'</>'}
                </h1>
            </section>

            <section id="profile" className="w-full min-h-screen mobile-profile">
                <div className='profile-container'>
                    <div className='profile-image'>
                        <img src={Profile} alt="Profile" />
                    </div>
                    <div className='profile-content'>
                        <p className='profile-text'>Hello! I'm Mon, a passionate Computer Science student with a strong ambition to become a software and cloud engineer.
                        With a solid foundation in coding fundamentals, problem-solving, and software development, I have developed skills across multiple programming 
                        languages, frameworks, and tools. From building interactive mobile applications and working with cloud services like Firebase, to
                         exploring data structures and algorithms, my journey in software development has been diverse and exciting. I'm driven by creating 
                         innovative solutions that make an impact, and I'm constantly seeking opportunities to grow and apply my skills in real-world projects. 
                         My goal is to contribute to impactful software solutions and work with cutting-edge technologies in a collaborative and dynamic environment.
                         </p>
                         <br />
                         <p className='skills-title'><img src={Skills} alt="Skills icon"/> Skills: </p>
                        <br />
                         <div>
                            <ul className="skills-list">
                            <li className="skill-item">
                                <Tooltip title="A high-level, class-based, object-oriented programming language." arrow>
                                    <span>Java</span>
                                </Tooltip>
                            </li>
                            <li className="skill-item">
                                 <Tooltip title="A high-level, interpreted programming language known for its readability and simplicity." arrow>
                                    <span>Python</span>
                                </Tooltip>
                            </li>
                            <li className="skill-item">
                                <Tooltip title="A superset of JavaScript that adds optional static typing." arrow>
                                    <span>TypeScript</span>
                                </Tooltip>
                            </li>
                            <li className="skill-item">
                                <Tooltip title="A JavaScript library for building user interfaces, maintained by Facebook." arrow>
                                    <span>React</span>
                                </Tooltip>
                            </li>
                            <li className="skill-item">
                                <Tooltip title="A runtime for executing JavaScript code outside the browser." arrow>
                                    <span>Node.js</span>
                                </Tooltip>
                            </li>
                            <li className="skill-item">
                                <Tooltip title="A platform for building mobile and web applications, with backend services." arrow>
                                    <span>Firebase</span>
                                </Tooltip>
                            </li>
                            <li className="skill-item">
                                <Tooltip title="Standard technologies for creating and styling web pages." arrow>
                                    <span>HTML/CSS</span>
                                </Tooltip>
                            </li>
                            <li className="skill-item">
                                <Tooltip title="A modern object-oriented programming language developed by Microsoft." arrow>
                                    <span>C#</span>
                                </Tooltip>
                            </li>
                            <li className="skill-item">
                                <Tooltip title="A cross-platform game engine used for developing 2D and 3D games." arrow>
                                    <span>Unity</span>
                                </Tooltip>
                            </li>
                            <li className="skill-item">
                                <Tooltip title="A web-based platform for version control and collaboration using Git." arrow>
                                    <span>GitHub</span>
                                </Tooltip>
                            </li>
                            <li className="skill-item">
                                <Tooltip title="A relational database management system based on SQL." arrow>
                                    <span>MySQL</span>
                                </Tooltip>
                            </li>
                            <li className="skill-item">
                                <Tooltip title="Basic and fundamentals of Google Cybersecurity." arrow>
                                    <span>Cybersecurity Fundamentals</span>
                                </Tooltip>
                            </li>
                            <li className="skill-item">
                                <Tooltip title="FastAPI" arrow>
                                    <span>FastAPI</span>
                                </Tooltip>
                            </li>
                            <li className="skill-item">
                                <Tooltip title="PostMan" arrow>
                                    <span>PostMan</span>
                                </Tooltip>
                            </li>
                            </ul>
                         </div>
                    </div>
                </div>
            </section>

            <section id="work-experience" className="w-full min-h-screen flex flex-col items-center justify-center px-3 mobile-work-experience">
                <div className="max-w-7xl w-full">
                    <h1 className="text-medium font-[Montserrat] font-semibold mb-8 text-center text-[#eb4a4a]">
                        Work Experience
                    </h1>
                    <div className="space-y-6 text-sm md:text-base">
                        <div className="border border-gray-700 rounded-xl p-6 bg-[#050816]/60 backdrop-blur-sm shadow-lg">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                <h2 className="text-xl font-semibold">Software Engineer Intern</h2>
                                <span className="text-sm text-gray-400">Mines and Geosciences Bureau • May – September 2025</span>
                            </div>
                            <p className="mt-3 text-gray-300 leading-relaxed">
                                Designed and developed a scalable, role-based web application as part of the Document and Information Management System (DIMS) using PHP, HTML, CSS, and JavaScript, supporting multi-division workflows, access control, and centralized document storage.
                            </p>
                            <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
                                <li>
                                    Engineered an automated Attendance and Daily Time Record (DTR) system integrating QR code generation and scanning, camera-based employee verification, and real-time attendance logging, with backend validation, timestamp integrity checks, and audit-ready records.
                                </li>
                                <li>
                                    Developed an Automated Certification Issuance and Verification System to prevent fraudulent certifications by implementing unique identifiers, verification logic, and document authenticity checks, enabling automated validation of issued certificates against stored records.
                                </li>
                                <li>
                                    Contributed to the design and implementation of a bureau-wide Document Tracking System, enabling employees across all divisions to upload, manage, route, and track documents, with status monitoring, access permissions, and historical tracking.
                                </li>
                                <li>
                                    Implemented an Employee Management System supporting employee registration, updates, role assignments, and data lifecycle management, integrated with attendance and document systems.
                                </li>
                                <li>
                                    Performed ICM corrective maintenance, including diagnosis and resolution of hardware, software, and endpoint device issues, ensuring minimal downtime and operational continuity.
                                </li>
                                <li>
                                    Conducted daily network server monitoring and system log analysis, identifying anomalies, verifying system availability, and documenting operational status for maintenance and compliance purposes.
                                </li>
                            </ul>
                        </div>


                        

                        {/* Duplicate or customize these blocks for additional roles
                        <div className="border border-gray-700 rounded-xl p-6 bg-[#050816]/40 backdrop-blur-sm shadow-md">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                <h2 className="text-xl font-semibold">Another Role</h2>
                                <span className="text-sm text-gray-400">Organization • Date Range</span>
                            </div>
                            <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                                Add another experience here, such as internships, freelance work, or relevant projects
                                that felt like real-world experience.
                            </p>
                        </div> */}
                        



                    </div>
                </div>
            </section>

            <section id="projects" className="w-full min-h-screen flex flex-col items-center px-3 mobile-projects">
                <div className="max-w-7xl w-full">
                    <div className='projects-header'>
                        <h1 className='projects-title text-[#eb4a4a]'>Projects•Programs•Systems</h1>
                    </div>
                    <div className="projects-grid">
                    <article className="projects-left project-card project-card--featured project-card--hydronew">
                        <div className="project-card--hydronew__intro">
                            <div className="project-card__header">
                                <p className="project-card__eyebrow">Thesis Project</p>
                                <h2 className="project-card__title">Hydronew</h2>
                                <p className="project-card__subtitle">An AI Enabled IoT based ORganic WasteWater Treatment System that utilizes Microbial Fuel Cell (MFC), Natural Filtration and UV Disinfection with Random Forest Classifier for Water Quality Prediction.</p>
                            </div>

                            <p className="project-card__description">
                            Hydronew is a closed-loop, IoT-enabled wastewater treatment system designed to convert household organic greywater into irrigation-grade water for hydroponic farming. The system integrates bioelectrochemical treatment, multi-stage filtration, ultraviolet disinfection, and machine-learning-based water quality classification under automated supervisory control.
                            </p>

                            <div className="project-card__tags">
                                <span className="project-tag">React</span>
                                <span className="project-tag">TypeScript</span>
                                <span className="project-tag">Firebase</span>
                                <span className="project-tag">UI/UX</span>
                                <span className="project-tag">Python</span>
                                <span className="project-tag">MQTT</span>
                                <span className="project-tag">Random Forest Classifier</span>
                            </div>
                        </div>

                        <div className="project-card--hydronew__media">
                            <div className="project-card--hydronew__figure">
                                <img src="/hydronew.png" alt="Hydronew wastewater treatment system preview" />
                            </div>
                            <div className="project-card__links">
                                <a className="project-btn project-btn--primary" href="https://www.youtube.com/watch?v=mOOb3Rr8eUM" target="_blank" rel="noreferrer">
                                    Live Demo
                                </a>
                                <a className="project-btn" href="https://github.com/kiotsukettene/HydroNew" target="_blank" rel="noreferrer">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </article>

                    <div className="projects-right">
                        <div className="projects-right-top">
                            <article className="projects-right-top-left project-card project-card--small">
                                <div className="project-card__header">
                                    <p className="project-card__eyebrow">Project</p>
                                    <h2 className="project-card__title">VAMOS </h2>
                                </div>
                                <p className="project-card__description">
                                An efficient and lightweight Virtual Machine Monitoring System (VAMOS) capable of providing real-time performance tracking across critical system metrics in virtualized environments.
                                </p>
                                <div className="project-card__tags">
                                    <span className="project-tag">PHP</span>
                                    <span className="project-tag">MySQL</span>
                                    <span className="project-tag">React Typescript</span>
                                </div>
                                <div className="project-card__links">
                                    <a className="project-btn project-btn--primary" href="https://github.com/SKYRENZ/VAMOS" target="_blank" rel="noreferrer">
                                        View
                                    </a>
                                    <a className="project-btn" href="https://github.com/SKYRENZ/VAMOS" target="_blank" rel="noreferrer">
                                        GitHub
                                    </a>
                                </div>
                            </article>

                            <article className="projects-right-top-right project-card project-card--small">
                                <div className="project-card__header">
                                    <p className="project-card__eyebrow">Project</p>
                                    <h2 className="project-card__title">Restaurant Management System</h2>
                                </div>
                                <p className="project-card__description">
                                    A restaurant management system that allows users to manage their restaurant's inventory, orders, and customers with table booking system using C.
                                </p>
                                <div className="project-card__tags">
                                    <span className="project-tag">SQL</span>
                                    <span className="project-tag">C#</span>
                                </div>
                                <div className="project-card__links">
                                    <a className="project-btn project-btn--primary" href="#" target="_blank" rel="noreferrer">
                                        View
                                    </a>
                                    <a className="project-btn" href="https://github.com/Xine003/restaurant-managent-system.git" target="_blank" rel="noreferrer">
                                        GitHub
                                    </a>
                                </div>
                            </article>
                        </div>

                        <article className="projects-right-bottom project-card project-card--wide">
                            <div className="project-card__header">
                                <p className="project-card__eyebrow">Project</p>
                                <h2 className="project-card__title">Navigaze</h2>
                                <p className="project-card__subtitle">Augmented Reality, Interactive Navigation</p>
                            </div>
                            <p className="project-card__description">
                               An Augmented Reality, Interactive Navigation System that uses the device's camera to provide real-time navigation instructions and directions .
                            </p>
                            <div className="project-card__tags">
                                <span className="project-tag">Unity</span>
                                <span className="project-tag">C#</span>
                                <span className="project-tag">Firebase</span>
                            </div>
                            <div className="project-card__links">
                                <a className="project-btn project-btn--primary" href="https://www.youtube.com/shorts/3NNzBikGzBQ" target="_blank" rel="noreferrer">
                                    View
                                </a>
                                <a className="project-btn" href="https://github.com/Arjayy007/NaviGaze-Indoor-Navigation" target="_blank" rel="noreferrer">
                                    GitHub
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
                </div>
            </section>

            <Carousel />
            <ContactMe/>

            <SpeedInsights />
        </div>

        
    );
}

export default Home;