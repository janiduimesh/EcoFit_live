
import React from 'react';
import demoImage from '../assets/demoi.png';
import Section from '../components/Section';
import Timeline from '../components/Timeline';
import Documents from '../components/Documents';
import Presentations from '../components/Presentations';
import Domain from '../components/Domain';
import TechStack from '../components/TechStack';
import { content } from '../data/content';
import { ArrowRight, ScanLine, Route, Radio, Recycle, BarChart3 } from 'lucide-react';

const featureIcons: Record<string, React.ReactNode> = {
    scan: <ScanLine className="w-7 h-7 text-emerald-400" />,
    route: <Route className="w-7 h-7 text-emerald-400" />,
    sensor: <Radio className="w-7 h-7 text-emerald-400" />,
    recycle: <Recycle className="w-7 h-7 text-emerald-400" />,
    chart: <BarChart3 className="w-7 h-7 text-emerald-400" />,
};

const Home: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col">
            {/* Hero Section — Full screen cinematic */}
            <div className="relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=2000"
                        alt="Waste Management Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
                </div>

                {/* Centered content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-[-60px]">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 hero-title-glow">
                        {content.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        {content.subtitle}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button onClick={() => scrollToSection('documents')} className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-400 transition duration-300 flex items-center cursor-pointer shadow-lg shadow-emerald-500/30">
                            View Publications <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                        <button onClick={() => scrollToSection('team')} className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition duration-300 cursor-pointer">
                            Meet the Team
                        </button>
                    </div>
                </div>

                {/* Feature cards at bottom */}
                <div className="absolute bottom-8 left-0 right-0 z-10 px-4">
                    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-3">
                        {content.features.map((feat, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-default group"
                            >
                                <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                                    {featureIcons[feat.icon]}
                                </div>
                                <span className="text-xs md:text-sm font-semibold text-white/90 leading-tight">{feat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Features / About Section */}
            <div id="features" className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 uppercase tracking-wide relative inline-block">
                        Project Overview
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500 transform translate-y-2"></span>
                    </h2>
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <div id="about" className="scroll-mt-20">
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">About the Project</h3>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                                    {content.abstract}
                                </p>
                            </div>
                        </div>
                        <div className="flex-1">
                            <img
                                src={demoImage}
                                alt="Smart City Waste Management"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Tech Stack Marquee */}
            <TechStack />

            {/* Documents Section */}
            <div id="documents" className="bg-gray-50">
                <Documents />
            </div>

            {/* Presentations Section */}
            <div id="presentations" className="bg-white">
                <Presentations />
            </div>

            {/* Timeline Section */}
            <div id="timeline" className="bg-gray-50">
                <Timeline />
            </div>

            {/* Domain Section */}
            <div id="domain" className="bg-white">
                <Domain />
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
                                <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-contain"
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


