import './custom.css';
import Navbar from '../components/Navbar';
import Profile from '../assets/profilepic.png';
import Skills from '../assets/skill.png';
import { Tooltip } from '@mui/material';
import Carousel from '../components/CertificationCarousel';

function Home() {
    return (
        <div className="w-screen h-screen overflow-auto">
            <Navbar />
            <section id="home" className="min-h-screen w-full flex flex-col justify-end pl-10 pb-20 items-start">
                <span className="text-large font-[Lora] mb-0 -mt-5 tracking-tighter">code smarter</span>
                <h1 className="text-huge mb-0 -mt-20 tracking-tighter font-[Montserrat]">
                    Work Harder {'</>'}
                </h1>
            </section>

            <section id="profile" className="w-full min-h-screen">
                <div className='flex flex-row pl-10 pb-20 items-start gap-15 pt-35'>
                    <div className='bg-[#cccccc] pt-2'>
                        <img src={Profile} alt="Profile" />
                    </div>
                    <div className='max-w-full h-135 w-220'>
                        <p className='font-[Nexa] text-justify text-xl text-[#B1A4A4] leading-8 tracking-tight'>Hello! I'm Mon, a passionate Computer Science student with a strong ambition to become a software and cloud engineer.
                        With a solid foundation in coding fundamentals, problem-solving, and software development, I have developed skills across multiple programming 
                        languages, frameworks, and tools. From building interactive mobile applications and working with cloud services like Firebase, to
                         exploring data structures and algorithms, my journey in software development has been diverse and exciting. I'm driven by creating 
                         innovative solutions that make an impact, and I'm constantly seeking opportunities to grow and apply my skills in real-world projects. 
                         My goal is to contribute to impactful software solutions and work with cutting-edge technologies in a collaborative and dynamic environment.
                         </p>
                         <br />
                         <p className='font-[Montserrat] flex flex-row justify-start items-center text-xl'><img src={Skills}/> Skills: </p>
                        <br />
                         <div>
                            <ul className="list-inside text-[#B1A4A4] font-[Nexa] text-justify text-xl leading-8 tracking-tight flex flex-wrap gap-2">
                            <li className="bg-[#d4d4d4] text-black px-4 py-2 rounded-full">
                                <Tooltip title="A high-level, class-based, object-oriented programming language." arrow>
                                    <span>Java</span>
                                </Tooltip>
                            </li>
                            <li className="bg-[#d4d4d4] text-black px-4 py-2 rounded-full">
                                 <Tooltip title="A high-level, interpreted programming language known for its readability and simplicity." arrow>
                                    <span>Python</span>
                                </Tooltip>
                            </li>
                            <li className="bg-[#d4d4d4] text-black px-4 py-2 rounded-full">
                                <Tooltip title="A superset of JavaScript that adds optional static typing." arrow>
                                    <span>TypeScript</span>
                                </Tooltip>
                            </li>
                            <li className="bg-[#d4d4d4] text-black px-4 py-2 rounded-full">
                                <Tooltip title="A JavaScript library for building user interfaces, maintained by Facebook." arrow>
                                    <span>React</span>
                                </Tooltip>
                            </li>
                            <li className="bg-[#d4d4d4] text-black px-4 py-2 rounded-full">
                                <Tooltip title="A runtime for executing JavaScript code outside the browser." arrow>
                                    <span>Node.js</span>
                                </Tooltip>
                            </li>
                            <li className="bg-[#d4d4d4] text-black px-4 py-2 rounded-full">
                                <Tooltip title="A platform for building mobile and web applications, with backend services." arrow>
                                    <span>Firebase</span>
                                </Tooltip>
                            </li>
                            <li className="bg-[#d4d4d4] text-black px-4 py-2 rounded-full">
                                <Tooltip title="Standard technologies for creating and styling web pages." arrow>
                                    <span>HTML/CSS</span>
                                </Tooltip>
                            </li>
                            <li className="bg-[#d4d4d4] text-black px-4 py-2 rounded-full">
                                <Tooltip title="A modern object-oriented programming language developed by Microsoft." arrow>
                                    <span>C#</span>
                                </Tooltip>
                            </li>
                            <li className="bg-[#d4d4d4] text-black px-4 py-2 rounded-full">
                                <Tooltip title="A cross-platform game engine used for developing 2D and 3D games." arrow>
                                    <span>Unity</span>
                                </Tooltip>
                            </li>
                            <li className="bg-[#d4d4d4] text-black px-4 py-2 rounded-full">
                                <Tooltip title="A web-based platform for version control and collaboration using Git." arrow>
                                    <span>GitHub</span>
                                </Tooltip>
                            </li>
                            <li className="bg-[#d4d4d4] text-black px-4 py-2 rounded-full">
                                <Tooltip title="A relational database management system based on SQL." arrow>
                                    <span>MySQL</span>
                                </Tooltip>
                            </li>
                            <li className="bg-[#d4d4d4] text-black px-4 py-2 rounded-full">
                                <Tooltip title="Basic and fundamentals of Google Cybersecurity." arrow>
                                    <span>Cybersecurity Fundamentals</span>
                                </Tooltip>
                            </li>
                            </ul>
                         </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="w-full min-h-screen">
                <div className='flex flex-col pl-10 items-start gap-15 pt-35 mb-5'>
                    <h1 className='text-medium mb-0 -mt-20 tracking-tighter font-[Montserrat]'>Projects • Programs • Systems</h1>
                </div>
                <div className="w-full flex">
                    {/* Left half */}
                    <div className="w-1/2 h-130 bg-[#191919] border flex items-center justify-center ml-10">
                        Left (50% width)
                    </div>

                    {/* Right half */}
                    <div className="w-200 h-full flex flex-col mr-10">
                        <div className="h-65 bg-[#191919] border flex items-center justify-center">
                            <div className="w-1/2 h-full bg-[#191919] border flex items-center justify-center">
                                Top Right (25% height)
                            </div>
                            <div className="w-1/2 h-full bg-[#191919] border flex items-center justify-center">
                                Top Right (25% height)
                            </div>
                        </div>
                        <div className="h-65 bg-[#191919] border flex items-center justify-center">
                            Bottom Right (25% height)
                        </div>
                    </div>
                </div>
            </section>

            <Carousel />

        </div>
    );
}

export default Home;
