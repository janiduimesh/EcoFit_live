
import React, { useState } from 'react';
import Section from './Section';
import { content } from '../data/content';

const Domain: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const activeItem = content.domain[activeTab];

    return (
        <Section title="" className="bg-white">
            <div className="max-w-5xl mx-auto px-4">
                {/* Header */}
                <div className="mb-10">
                    <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-1">Domain</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">PROJECT DOMAIN</h2>
                    <div className="w-16 h-1 bg-emerald-500 mt-3 rounded-full" />
                </div>

                {/* Tab Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {content.domain.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer border-none outline-none ${
                                activeTab === index
                                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            {item.tab}
                        </button>
                    ))}
                </div>

                {/* Content Card */}
                <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-10 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-5">{activeItem.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                        {activeItem.description}
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Domain;
