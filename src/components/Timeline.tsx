
import React from 'react';
import Section from './Section';
import { content } from '../data/content';
import { Calendar, BarChart2, TrendingUp, Star } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
    calendar: <Calendar className="w-5 h-5 text-white" />,
    chart: <BarChart2 className="w-5 h-5 text-white" />,
    trending: <TrendingUp className="w-5 h-5 text-white" />,
    star: <Star className="w-5 h-5 text-white" />,
};

const gradients = [
    'from-emerald-500 to-teal-600',
    'from-teal-400 to-emerald-500',
    'from-green-500 to-emerald-600',
    'from-emerald-400 to-green-500',
];

const Timeline: React.FC = () => {
    return (
        <Section title="PROJECT TIMELINE" className="bg-white">
            <div className="relative max-w-5xl mx-auto px-4">
                {/* Center vertical line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-emerald-200 z-0" />

                {content.timeline.map((item, index) => {
                    const isLeft = index % 2 === 0;
                    const gradient = gradients[index % gradients.length];
                    return (
                        <div key={index} className="relative flex items-center mb-12">
                            {/* Left slot */}
                            <div className="w-1/2 pr-10 flex justify-end">
                                {isLeft && (
                                    <div className={`bg-gradient-to-br ${gradient} rounded-xl p-5 shadow-lg text-white w-full max-w-xs hover:shadow-emerald-200 hover:shadow-xl transition-all duration-300`}>
                                        <div className="flex items-center gap-2 mb-1 justify-end">
                                            <span className="opacity-80">{iconMap[item.icon] ?? iconMap['calendar']}</span>
                                            <h3 className="font-bold text-sm">{item.title}</h3>
                                        </div>
                                        <p className="text-emerald-100 text-xs text-right">{item.date}</p>
                                    </div>
                                )}
                            </div>

                            {/* Center dot */}
                            <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 border-4 border-white rounded-full shadow z-10 bg-emerald-500`} />

                            {/* Right slot */}
                            <div className="w-1/2 pl-10 flex justify-start">
                                {!isLeft && (
                                    <div className={`bg-gradient-to-br ${gradient} rounded-xl p-5 shadow-lg text-white w-full max-w-xs hover:shadow-emerald-200 hover:shadow-xl transition-all duration-300`}>
                                        <div className="flex items-center gap-2 mb-1 justify-start">
                                            <span className="opacity-80">{iconMap[item.icon] ?? iconMap['calendar']}</span>
                                            <h3 className="font-bold text-sm">{item.title}</h3>
                                        </div>
                                        <p className="text-emerald-100 text-xs text-left">{item.date}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}

                {/* End node */}
                <div className="relative flex justify-center mt-4">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10">
                        <Star className="w-5 h-5 text-white" />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Timeline;
