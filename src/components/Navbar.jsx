import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('');
    // To use an image from assets: import profilePic from '../assets/profile.png' (adjust path as needed) and set profilePhoto = profilePic;
    // Or if in public folder: "/profile.png"
    const profilePhoto = "";

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['main', 'about', 'skills', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100; // Offset for header height

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="sticky top-0 w-full bg-[#0a0a0a]/80 backdrop-blur-md z-50 border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-6 animate-blur-in">
                    {profilePhoto && (
                        <>
                            <img
                                src={profilePhoto}
                                alt="Profile"
                                className="w-10 h-10 rounded-full border border-white/10 object-cover"
                            />
                            <div className="h-6 w-px bg-white/10 hidden sm:block"></div>
                        </>
                    )}
                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/prathamyadav7502/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                        </a>
                        <a href="tel:+918999712693" className="text-gray-400 hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </a>
                        <a href="mailto:pratham.ry@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                        </a>
                    </div>
                </div>

                    <div className="flex gap-8 text-sm font-medium animate-blur-in">
                        {/* Mobile: only show a subset */}
                        <div className="flex gap-6 sm:hidden">
                            {['about', 'skills', 'projects'].map((item) => (
                                <a
                                    key={`mobile-${item}`}
                                    href={`#${item}`}
                                    className={`transition-colors duration-300 capitalize ${activeSection === item
                                        ? '!text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]'
                                        : '!text-gray-300 hover:!text-white'
                                        }`}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        {/* Desktop: full nav */}
                        <div className="hidden sm:flex gap-8">
                            {['main','about', 'skills', 'projects', 'contact'].map((item) => (
                                <a
                                    key={`desk-${item}`}
                                    href={`#${item}`}
                                    className={`transition-colors duration-300 capitalize ${activeSection === item
                                        ? '!text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]'
                                        : '!text-gray-300 hover:!text-white'
                                        }`}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
            </div>
        </nav>
    );
}
