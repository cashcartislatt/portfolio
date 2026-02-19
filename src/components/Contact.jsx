import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-medium animate-blur-in">Get in Touch</h2>
                        <p className="text-gray-400 max-w-2xl leading-relaxed animate-blur-in">
                            Currently seeking full-time opportunities to leverage my skills in Web and Software engineering. Let's connect!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            {
                                label: "Email",
                                value: "pratham.ry@gmail.com",
                                href: "mailto:pratham.ry@gmail.com",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-5 w-5 text-gray-400">
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </svg>
                                )
                            },
                            {
                                label: "LinkedIn",
                                value: "prathamyadav7502",
                                href: "https://www.linkedin.com/in/prathamyadav7502/",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin h-5 w-5 text-gray-400">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect width="4" height="12" x="2" y="9"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                )
                            },
                            {
                                label: "GitHub",
                                value: "CashCartislatt",
                                href: "https://github.com/",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github h-5 w-5 text-gray-400">
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                    </svg>
                                )
                            },
                            {
                                label: "Phone",
                                value: "8999712693",
                                href: "",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml h-5 w-5 text-gray-400">
                                        <path d="m18 16 4-4-4-4"></path>
                                        <path d="m6 8-4 4 4 4"></path>
                                        <path d="m14.5 4-5 16"></path>
                                    </svg>
                                )
                            }
                        ].map((contact, index) => (
                            <div key={index} className="flex flex-col gap-6 rounded-xl border border-white/10 p-6">
                                <a href={contact.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                    <div className="p-2 rounded bg-white/10 group-hover:bg-white/20 transition-colors">
                                        {contact.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs text-gray-400 animate-blur-in">{contact.label}</p>
                                        <p className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors animate-blur-in">
                                            {contact.value}
                                        </p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="pt-8">
                        <a
                            href="mailto:pratham.ry@gmail.com"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-white text-black hover:bg-gray-200 h-10 rounded-md px-6 shadow animate-blur-in"
                        >
                            Send a message
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
