import React from 'react';

const techs = [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Raspberry Pi', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'OpenCV', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'NGINX', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
    { name: 'Arduino', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
];

const TechStack: React.FC = () => {
    // Duplicate the list to create a seamless infinite loop
    const items = [...techs, ...techs];

    return (
        <div className="bg-gray-50 py-10 border-y border-gray-200 overflow-hidden">
            <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
                Technologies We Use
            </p>
            <div className="relative flex">
                <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
                    {items.map((tech, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-3 min-w-[110px] group"
                        >
                            <img
                                src={tech.logo}
                                alt={tech.name}
                                className="h-20 w-20 object-contain group-hover:scale-110 transition-transform duration-200"
                            />
                            <span className="text-sm font-semibold text-gray-600 group-hover:text-emerald-600 transition-colors duration-200">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
