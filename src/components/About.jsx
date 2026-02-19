import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-medium animate-blur-in">
                            About
                        </h2>
                        <p className="text-gray-400 leading-relaxed animate-blur-in">
                            Experienced Full-Stack Web Engineer building production-ready web and e-commerce applications using Next.js, React, Node.js, and Shopify. Strong hands-on experience in API integrations, third-party service connections, and backend workflows. Over the past year, built 4+ custom web applications and 8+ custom Shopify storefronts, focusing on performance, scalability, and clean UX. Deeply interested in AI, LLMs, and modern dev tools.</p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-medium animate-blur-in">Experience</h3>
                        <div className="flex flex-col gap-6">
                            <div className="text-white flex flex-col gap-2 rounded-xl border border-white/10 p-6">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                    <h4 className="font-medium animate-blur-in">
                                        Web Developer
                                    </h4>
                                    <span className="text-sm text-gray-400 animate-blur-in">
                                        Jan 2025 – Present
                                    </span>
                                </div>
                                <p className="text-sm text-gray-400 animate-blur-in">
                                    Mark Web Solutions
                                </p>
                                <p className="text-sm leading-relaxed pt-2 animate-blur-in">
                                    Developed full-stack web and e-commerce applications using Shopify, React, Next.js, Node.js, with database integrations (PostgreSQL, Supabase, MySQL).

                                    Worked on key projects including alignerco.com, aligner32.com, silepath.com.au, a custom CRM for Vinod Steel, and an internal blog composer for the team.

                                    Managed deployment and hosting on Render and Railway.

                                    Tech stack: React, Next.js, Node.js, PHP, PostgreSQL, Supabase, MySQL, AJAX, Shopify Liquid, Render, Railway, Figma.
                                </p>
                            </div>

                            <div className="text-white flex flex-col gap-2 rounded-xl border border-white/10 p-6">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                    <h4 className="font-medium animate-blur-in">
                                        Web Developer Intern                                    </h4>
                                    <span className="text-sm text-gray-400 animate-blur-in">
                                        Nov 2024 – Dec 2024
                                    </span>
                                </div>
                                <p className="text-sm text-gray-400 animate-blur-in">Vedic S</p>
                                <p className="text-sm leading-relaxed pt-2 animate-blur-in">
                                    Designing and developing responsive UI.
                                    Translated business requirements into functional website features.
                                    Implemented responsive layouts and interactive elements to enhance user engagement
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 id="skills" className="text-xl font-medium animate-blur-in">Skills</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="text-white flex flex-col gap-6 rounded-xl border border-white/10 p-6 space-y-3">
                                <h4 className="font-medium text-sm animate-blur-in">Web</h4>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        'React',
                                        'Next.js',
                                        'Node.js',
                                        'Shopify',
                                        'PHP',
                                        'PostgreSQL',
                                        'Supabase',
                                        'MySQL',
                                        'AJAX',
                                        'Render',
                                        'Railway',
                                        'Figma',
                                    ].map((skill) => (
                                        <span
                                            key={skill}
                                            className="text-xs px-2 py-1 bg-white/10 text-gray-400 rounded"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="text-white flex flex-col gap-6 rounded-xl border border-white/10 p-6 space-y-3">
                                <h4 className="font-medium text-sm animate-blur-in">Languages</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['C', 'Java', 'JavaScript', 'SQL', 'Liquid'].map((skill) => (
                                        <span
                                            key={skill}
                                            className="text-xs px-2 py-1 bg-white/10 text-gray-400 rounded"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="text-white flex flex-col gap-6 rounded-xl border border-white/10 p-6 space-y-3">
                                <h4 className="font-medium text-sm animate-blur-in">Tools</h4>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        'Figma',
                                        'Postman',
                                        'copilot',
                                        'Git',

                                    ].map((skill) => (
                                        <span
                                            key={skill}
                                            className="text-xs px-2 py-1 bg-white/10 text-gray-400 rounded"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="text-white flex flex-col gap-6 rounded-xl border border-white/10 p-6 space-y-3">
                                <h4 className="font-medium text-sm animate-blur-in">AI</h4>
                                <div className="flex flex-wrap gap-2">
                                    {[  'n8n',
                                        'Claude Code',
                                        'Cursor',
                                        'Antigravity',
                                        'Emergent',
                                        'V0/Vercel',
                                    ].map((skill) => (
                                        <span
                                            key={skill}
                                            className="text-xs px-2 py-1 bg-white/10 text-gray-400 rounded"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="space-y-6">
                        <h3 className="text-xl font-medium animate-blur-in">Achievements</h3>
                        <div className="space-y-2">
                            {[
                                'Top 5 in Fetch-a-thon (AI-based EV Trip Planner)',
                                'Finalist in Code For Bharat Season 1 @ Microsoft',
                                'Global Rank 2567 in LeetCode Biweekly 144',
                                'Top 10 in MLSA MIET Hackathon',
                            ].map((achievement) => (
                                <div key={achievement} className="flex gap-3 items-start">
                                    <span className="text-gray-400 mt-1 animate-blur-in">•</span>
                                    <p className="text-sm leading-relaxed text-gray-300 animate-blur-in">
                                        {achievement}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default About;
