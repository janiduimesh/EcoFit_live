
import React from 'react';
import Section from './Section';
import { content } from '../data/content';
import { FileText, Download } from 'lucide-react';

const Documents: React.FC = () => {
    return (
        <Section title="" className="bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="mb-12">
                    <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-1">Documents</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">PROJECT DOCUMENTS</h2>
                    <div className="w-16 h-1 bg-emerald-500 mt-3 rounded-full" />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {content.documents?.map((doc, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            {/* Icon */}
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5 bg-emerald-100 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                                <FileText className="w-10 h-10 text-emerald-500" />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{doc.title}</h3>

                            {/* Description */}
                            <p className="text-sm text-gray-500 mb-6 leading-relaxed flex-grow">{doc.description}</p>

                            {/* Download Button */}
                            <a
                                href={doc.link}
                                className="inline-flex items-center gap-2 px-5 py-2 border-2 border-emerald-500 text-emerald-600 text-sm font-semibold rounded-lg hover:bg-emerald-500 hover:text-white transition-all duration-300"
                            >
                                <Download className="w-4 h-4" />
                                Download
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Documents;
