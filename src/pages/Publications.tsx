
import React from 'react';
import Section from '../components/Section';
import { content } from '../data/content';
import { BookOpen, ExternalLink, Calendar } from 'lucide-react';

const Publications: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Section title="Publications & Resources">
                <div className="max-w-4xl mx-auto space-y-6">
                    {content.publications.map((pub, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-600 hover:shadow-lg transition duration-300">
                            <div className="flex flex-col md:flex-row justify-between md:items-center">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pub.title}</h3>
                                    <div className="flex items-center text-gray-600 mb-4 md:mb-0">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        <span className="mr-4">{pub.conference}</span>
                                        <BookOpen className="h-4 w-4 mr-2" />
                                        <span>Research Paper</span>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0 md:ml-6">
                                    <a
                                        href={pub.link}
                                        className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition duration-200 font-medium"
                                    >
                                        Read Paper <ExternalLink className="ml-2 h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Publications;
