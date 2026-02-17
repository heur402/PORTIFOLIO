import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'

const Projects = ({ darkMode }) => {

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            desc: 'Full stack e-commerce with authentication, cart and payments.',
            image: project1,
            tags: ['React', 'Node.js', 'MongoDB']
        },
        {
            id: 2,
            title: 'Fitness Tracker App',
            desc: 'Mobile fitness tracking with real-time activity monitoring.',
            image: project2,
            tags: ['React Native', 'Firebase']
        },
        {
            id: 3,
            title: 'Content Generator',
            desc: 'AI powered content generation using modern NLP APIs.',
            image: project3,
            tags: ['Python', 'OpenAI']
        },
        {
            id: 4,
            title: 'Analytics Dashboard',
            desc: 'Interactive data visualization dashboard.',
            image: project4,
            tags: ['Vue.js', 'Chart.js']
        },
        {
            id: 5,
            title: 'Task Management',
            desc: 'Team productivity and task workflow management system.',
            image: project5,
            tags: ['Laravel', 'Vue.js', 'MongoDB']
        },
        {
            id: 6,
            title: '3D Web Experience',
            desc: 'Modern 3D web experience using WebGL technologies.',
            image: project6,
            tags: ['Next.js', 'Three.js']
        },
    ]

    return (
        <section
            id="projects"
            className="py-24 relative"
            style={{
                backgroundColor: darkMode ? '#020617' : '#f8fafc'
            }}
        >
            <div className="container mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl sm:text-5xl font-bold mb-5"
                        style={{ color: darkMode ? 'white' : '#0f172a' }}
                    >
                        My{" "}
                        <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>

                    <p
                        className="max-w-2xl mx-auto text-lg"
                        style={{ color: darkMode ? '#94a3b8' : '#64748b' }}
                    >
                        A selection of projects showcasing my development skills and problem solving ability.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group rounded-2xl overflow-hidden border backdrop-blur-xl transition-all duration-500 hover:-translate-y-2"
                            style={{
                                borderColor: darkMode ? '#1e293b' : '#e2e8f0',
                                background: darkMode
                                    ? 'rgba(15,23,42,0.6)'
                                    : 'rgba(255,255,255,0.7)',
                                boxShadow: darkMode
                                    ? '0 10px 30px rgba(0,0,0,0.4)'
                                    : '0 10px 25px rgba(0,0,0,0.08)'
                            }}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >

                            {/* IMAGE */}
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                {/* OVERLAY */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-5">
                                    <div>
                                        <h3 className="text-white font-semibold text-lg">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className="p-6">

                                <p
                                    className="text-sm leading-relaxed mb-5"
                                    style={{
                                        color: darkMode ? '#cbd5f5' : '#475569'
                                    }}
                                >
                                    {project.desc}
                                </p>

                                {/* TAGS */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-xs rounded-full font-medium"
                                            style={{
                                                background: darkMode
                                                    ? 'rgba(30,41,59,0.8)'
                                                    : '#f1f5f9',
                                                color: darkMode
                                                    ? '#e2e8f0'
                                                    : '#334155'
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* BUTTONS */}
                                <div className="flex gap-3">

                                    <a
                                        href="#"
                                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition hover:scale-105"
                                        style={{
                                            background: darkMode ? '#1e293b' : '#f1f5f9',
                                            color: darkMode ? 'white' : '#0f172a'
                                        }}
                                    >
                                        <FaGithub />
                                        Code
                                    </a>

                                    <a
                                        href="#"
                                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-white transition hover:scale-105"
                                        style={{
                                            background:
                                                'linear-gradient(to right, #f97316, #f59e0b)'
                                        }}
                                    >
                                        <FaExternalLinkAlt />
                                        Demo
                                    </a>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

                {/* VIEW ALL */}
                <div className="text-center mt-16">
                    <a
                        href="#"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold transition hover:scale-105"
                        style={{
                            background: 'linear-gradient(to right, #f97316, #f59e0b)'
                        }}
                    >
                        <FaGithub />
                        View All Projects
                        <FaExternalLinkAlt />
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Projects
