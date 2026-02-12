
import React from 'react';
import Section from '../components/Section';
import { content } from '../data/content';

const Team: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
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
                                <p className="text-indigo-600 font-medium mb-4">{member.role}</p>
                                <p className="text-gray-600 text-sm">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Team;
