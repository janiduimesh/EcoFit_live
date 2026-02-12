
import React from 'react';
import Section from '../components/Section';
import Timeline from '../components/Timeline';
import Documents from '../components/Documents';
import { content } from '../data/content';
import { ArrowRight, Activity, Brain, Shield } from 'lucide-react';

const Home: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=2000"
                        alt="Waste Management Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                        {content.title}
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mb-8 text-emerald-100">
                        {content.subtitle}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button onClick={() => scrollToSection('documents')} className="px-8 py-3 bg-white text-emerald-600 font-bold rounded-full hover:bg-emerald-50 transition duration-300 flex items-center cursor-pointer">
                            View Publications <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                        <button onClick={() => scrollToSection('team')} className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition duration-300 cursor-pointer">
                            Meet the Team
                        </button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div id="features" className="bg-white pt-16">
                <Section title="Project Overview"> {/* keeping title but using features ID for scrolling */}
                </Section>
            </div>
            {/* Splitting overview to separate About and Features logic slightly for IDs */}

            <div className="bg-white pb-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            {/* About Section */}
                            <div id="about" className="scroll-mt-20">
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">About the Project</h3>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    {content.abstract}
                                </p>
                            </div>

                            {/* Domain Section - inferred from abstract/context */}
                            <div id="domain" className="mt-8 scroll-mt-20">
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">Research Domain</h3>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    This research operates at the intersection of <strong>IoT, Artificial Intelligence, and Environmental Science</strong>. We utilize state-of-the-art sensors and data analytics to modernize waste management, ensuring cleaner and greener urban environments.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                <div className="flex items-start">
                                    <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                                        <Activity className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Real-time Monitoring</h4>
                                        <p className="text-gray-600 text-sm">Live tracking of bin levels and collection fleet.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-teal-100 p-3 rounded-lg mr-4">
                                        <Brain className="h-6 w-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Route Optimization</h4>
                                        <p className="text-gray-600 text-sm">AI-driven algorithms for efficient waste collection paths.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                                        <Shield className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Sustainability</h4>
                                        <p className="text-gray-600 text-sm">Reducing carbon footprint and promoting recycling.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <img
                                src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800"
                                alt="Smart City Waste Management"
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Documents Section */}
            <div id="documents" className="bg-gray-50">
                <Documents />
            </div>

            {/* Timeline Section */}
            <div id="timeline" className="bg-white">
                <Timeline />
            </div>

            {/* Team Section */}
            <div id="team" className="bg-gray-50">
                <Section title="Our Research Team">
                    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                        Our multidisciplinary team combines expertise in computer vision, kinesiology, and software engineering.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {content.team.map((member, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                    <p className="text-emerald-600 font-medium mb-4">{member.role}</p>
                                    <p className="text-gray-600 text-sm">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
            </div>


        </div>
    );
};

export default Home;


