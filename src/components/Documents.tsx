
import React from 'react';
import Section from './Section';
import { content } from '../data/content';
import { FileText } from 'lucide-react';

const Documents: React.FC = () => {
    return (
        <Section title="DOCUMENTS" className="bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {content.documents?.map((doc, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center mb-6 shadow-inner">
                            <FileText className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{doc.title}</h3>
                        <p className="text-gray-600 mb-8 text-sm leading-relaxed flex-grow">
                            {doc.description}
                        </p>
                        <a
                            href={doc.link}
                            className="px-6 py-2 bg-gray-800 text-white text-sm font-medium rounded hover:bg-gray-900 transition-colors duration-300"
                        >
                            View Document
                        </a>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Documents;
