import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Facebook, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        setStatus('loading');

        // Replace these with your actual EmailJS IDs
        emailjs
            .sendForm(
                'service_emxur9p',
                'template_6m4elpm',
                form.current,
                'LTu5eL1Qw36dHobjH'
            )
            .then(
                () => {
                    setStatus('success');
                    form.current?.reset();
                    setTimeout(() => setStatus('idle'), 5000);
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    setStatus('error');
                    setTimeout(() => setStatus('idle'), 5000);
                }
            );
    };

    return (
        <footer id="contact" className="bg-black text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between gap-12">

                    {/* Get in Touch Section */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-6 text-white uppercase">Get in Touch</h3>
                        <p className="mb-8 text-gray-300">
                            Please fill out the form below to send us an email and we will get back to you as soon as possible.
                        </p>
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    placeholder="Name"
                                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    placeholder="Email"
                                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                            <textarea
                                name="message"
                                required
                                placeholder="Message"
                                rows={4}
                                className="w-full px-4 py-3 bg-white text-gray-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                            ></textarea>

                            <div className="flex items-center gap-4">
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="px-8 py-3 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300 font-medium uppercase text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                                </button>

                                {status === 'success' && (
                                    <span className="text-emerald-500 text-sm font-medium">Message sent successfully!</span>
                                )}
                                {status === 'error' && (
                                    <span className="text-red-500 text-sm font-medium">Failed to send message. Please try again.</span>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* Contact Info Section */}
                    <div className="md:w-1/3">
                        <h3 className="text-xl font-bold mb-6 text-white uppercase">Contact Info</h3>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-white font-bold mb-1">Address</h4>
                                <p className="text-gray-400">SLIIT Malabe Campus, New Kandy Rd, Malabe</p>
                            </div>

                            <div>
                                <h4 className="text-white font-bold mb-1">Phone</h4>
                                <p className="text-gray-400">+94 11 754 4801</p>
                            </div>

                            <div>
                                <h4 className="text-white font-bold mb-1">Email</h4>
                                <p className="text-gray-400">info@sliit.lk</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="mt-16 flex justify-center space-x-6">
                    <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-black transition duration-300">
                        <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-black transition duration-300">
                        <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-black transition duration-300">
                        <Youtube className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
