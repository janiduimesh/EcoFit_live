
import React from 'react';
import Section from './Section';
import { content } from '../data/content';
import { Star } from 'lucide-react';

const gradients = [
    'bg-gradient-to-r from-emerald-600 to-teal-500',
    'bg-gradient-to-r from-green-500 to-emerald-500',
    'bg-gradient-to-r from-teal-500 to-green-400',
    'bg-gradient-to-r from-emerald-500 to-green-400',
    'bg-gradient-to-r from-green-600 to-teal-500',
    'bg-gradient-to-r from-teal-600 to-emerald-500',
    'bg-gradient-to-r from-emerald-600 to-green-500',
    'bg-gradient-to-r from-green-500 to-teal-400',
    'bg-gradient-to-r from-teal-500 to-emerald-400',
];

const Timeline: React.FC = () => {
    return (
        <Section title="" className="bg-white">
            <div className="max-w-5xl mx-auto px-4">
                {/* Header */}
                <div className="mb-12">
                    <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-1">Milestones</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">PROJECT MILESTONES</h2>
                    <div className="w-16 h-1 bg-emerald-500 mt-3 rounded-full" />
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Center vertical line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 z-0" />

                    {content.timeline.map((item, index) => {
                        const isLeft = index % 2 === 0;
                        const gradient = gradients[index % gradients.length];
                        return (
                            <div key={index} className="relative flex items-center mb-16">
                                {/* Left slot */}
                                <div className={`w-1/2 ${isLeft ? 'pr-12' : ''} flex justify-end`}>
                                    {isLeft && (
                                        <div className={`${gradient} rounded-2xl p-6 shadow-lg text-white w-full max-w-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-300`}>
                                            <h3 className="font-bold text-lg mb-1 leading-snug">{item.title}</h3>
                                            <p className="text-white/70 text-sm mb-3">{item.date}</p>
                                            <p className="text-sm font-semibold mb-3">Mark Allocation - {item.marks}</p>
                                            <div className="flex gap-2 flex-wrap">
                                                {item.tags.map((tag, i) => (
                                                    <span key={i} className="bg-black/25 text-white text-xs font-medium px-3 py-1 rounded">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Center dot */}
                                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 border-4 border-white rounded-full shadow-md z-10 bg-gray-400" />

                                {/* Right slot */}
                                <div className={`w-1/2 ${!isLeft ? 'pl-12' : ''} flex justify-start`}>
                                    {!isLeft && (
                                        <div className={`${gradient} rounded-2xl p-6 shadow-lg text-white w-full max-w-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-300`}>
                                            <h3 className="font-bold text-lg mb-1 leading-snug">{item.title}</h3>
                                            <p className="text-white/70 text-sm mb-3">{item.date}</p>
                                            <p className="text-sm font-semibold mb-3">Mark Allocation - {item.marks}</p>
                                            <div className="flex gap-2 flex-wrap">
                                                {item.tags.map((tag, i) => (
                                                    <span key={i} className="bg-black/25 text-white text-xs font-medium px-3 py-1 rounded">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}

                    {/* End node */}
                    <div className="relative flex justify-center mt-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10">
                            <Star className="w-5 h-5 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Timeline;
