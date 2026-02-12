
import React from 'react';
import Section from './Section';
import { content } from '../data/content';
import { Calendar, BarChart2, TrendingUp, Star } from 'lucide-react';

const Timeline: React.FC = () => {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'calendar': return <Calendar className="w-6 h-6 text-white" />;
            case 'chart': return <BarChart2 className="w-6 h-6 text-white" />;
            case 'trending': return <TrendingUp className="w-6 h-6 text-white" />;
            case 'star': return <Star className="w-6 h-6 text-white" />;
            default: return <Calendar className="w-6 h-6 text-white" />;
        }
    };

    return (
        <Section title="PROJECT TIMELINE" className="bg-white">
            <div className="relative max-w-4xl mx-auto">
                {/* Central Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-500"></div>

                <div className="space-y-12">
                    {content.timeline.map((item, index) => (
                        <div key={index} className={`flex items-center justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                            {/* Empty space for the other side */}
                            <div className="w-5/12"></div>

                            {/* Icon Node */}
                            <div className={`absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 ${item.color} shadow-lg border-4 border-white`}>
                                {getIcon(item.icon)}
                            </div>

                            {/* Content Card */}
                            <div className="w-5/12">
                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center relative">
                                    {/* Arrow */}
                                    {index % 2 !== 0 && (
                                        <div className="absolute top-1/2 -left-3 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-white border-b-8 border-b-transparent filter drop-shadow-sm"></div>
                                    )}
                                    {index % 2 === 0 && (
                                        <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-white border-b-8 border-b-transparent filter drop-shadow-sm"></div>
                                    )}

                                    <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-500 font-medium">{item.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final Node */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10">
                    <Star className="w-6 h-6 text-white" />
                </div>
            </div>

            {/* Added bottom padding for the final node */}
            <div className="h-12"></div>
        </Section>
    );
};

export default Timeline;
