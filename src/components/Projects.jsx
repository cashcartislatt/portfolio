import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const FlyingIcon = ({ startRect, onComplete, children }) => {
    const [style, setStyle] = useState({
        position: 'fixed',
        top: startRect.top,
        left: startRect.left,
        width: startRect.width,
        height: startRect.height,
        zIndex: 9999,
        pointerEvents: 'none',
        transition: 'all 0s',
        opacity: 1,
        transform: 'scale(1)'
    });

    useEffect(() => {
        // Force a reflow/repaint for the initial state
        requestAnimationFrame(() => {
            setStyle({
                position: 'fixed',
                top: 20,
                left: startRect.left, // Fly straight up
                width: startRect.width, // Keep width but transform scale
                height: startRect.height,
                zIndex: 9999,
                pointerEvents: 'none',
                transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)', // Slower animation
                opacity: 0,
                transform: 'scale(0)'
            });
        });

        const timer = setTimeout(onComplete, 1200); // Wait for animation to complete
        return () => clearTimeout(timer);
    }, []);

    return createPortal(
        <div style={style} className="flex items-center justify-center text-blue-500 bg-white/10 rounded-md backdrop-blur-sm">
            {children}
        </div>,
        document.body
    );
};

const ProjectCard = ({ project }) => {
    const [launchConfig, setLaunchConfig] = useState(null);

    const handleLaunch = (e, url, type) => {
        e.preventDefault();
        // On mobile browsers, delaying window.open causes popup blockers to block the new tab.
        // If on a small screen or touch device, open immediately instead of running the flying animation.
        const isMobile = typeof window !== 'undefined' && (window.innerWidth < 768 || (window.matchMedia && window.matchMedia('(pointer:coarse)').matches));
        if (isMobile) {
            window.open(url, '_blank', 'noopener,noreferrer');
            return;
        }

        const rect = e.currentTarget.getBoundingClientRect();
        setLaunchConfig({ rect, url, type });
    };

    const handleAnimationComplete = () => {
        if (launchConfig?.url) {
            window.open(launchConfig.url, '_blank');
        }
        setLaunchConfig(null);
    };

    const PreviewIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
        >
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );

    const GithubIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
        >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
    );

    return (
        <div className="flex flex-col gap-6 rounded-xl border border-white/10 p-6 space-y-4 hover:border-white/30 transition-colors relative overflow-hidden">
            {launchConfig && (
                <FlyingIcon startRect={launchConfig.rect} onComplete={handleAnimationComplete}>
                    {launchConfig.type === 'preview' ? PreviewIcon : GithubIcon}
                </FlyingIcon>
            )}
            <div className="space-y-2">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-medium animate-blur-in">{project.title}</h3>
                    <div className="flex gap-2 relative">
                        <a
                            href={project.liveUrl || project.link}
                            onClick={(e) => handleLaunch(e, project.liveUrl || project.link, 'preview')}
                            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 w-9 shrink-0 text-blue-500 transition-all duration-300 ease-in-out ${launchConfig?.type === 'preview'
                                ? 'opacity-0 scale-90'
                                : 'hover:-translate-y-1 hover:scale-110'
                                }`}
                            aria-label={`Preview ${project.title}`}
                        >
                            {PreviewIcon}
                        </a>
                        {!project.isShopify && (
                            <a
                                href={project.link}
                                onClick={(e) => handleLaunch(e, project.link, 'github')}
                                aria-label={`View ${project.title} on GitHub`}
                                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ease-in-out h-9 w-9 shrink-0 text-white ${launchConfig?.type === 'github'
                                    ? 'opacity-0 scale-90'
                                    : 'hover:-translate-y-1 hover:scale-110'
                                    }`}
                            >
                                {GithubIcon}
                            </a>
                        )}
                    </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed animate-blur-in">
                    {project.description}
                </p>
            </div>
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span key={tag} className={project.isShopify ? "text-xs text-gray-400 border-b border-gray-400" : "text-xs px-2 py-1 bg-white/10 text-gray-400 rounded"}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Projects = () => {
    const shopifyProjects = [
        {
            title: "AlignerCo USA",
            liveUrl: "https://alignerco.com",
            link: "https://alignerco.com",
            description: "Invisible Aligners and expert care by U.S. licensed orthodontists",
            tags: ["Shopify", "Admin APIs" , "google geocoding api", "Shopify Flow", "App scripts","gtags","A/B Testing" ],
            isShopify: true
        },
        {
            title: "MouthArc",
            liveUrl: "https://moutharc.com",
            link: "https://moutharc.com",
            description: "Veneers and retainers",
            tags: ["Shopify","App script", "Admin APIs"],
            isShopify: true
        },
        {
            title: "SmilePath Australia",
            liveUrl: "https://smilepath.com.au",
            link: "https://smilepath.com.au",
            description: "Aligners for Australian market.",
            tags: ["Shopify", "google geocoding api","Admin APIs" , "Shopify Flow", "App scripts","gtags"],
            isShopify: true
        },
        {
            title: "Aligner32",
            liveUrl: "https://aligner32.com",
            link: "https://aligner32.com",
            description: "Invisible Aligners and dental products",
            tags: ["Shopify", "Admin APIs" ,"App scripts", "Shopify Flow" ,"Php", "gtags"  ],
            isShopify: true
        },
        {
            title: "Vinod Steel",
            liveUrl: "https://vinodsteel.com",
            link: "https://vinodsteel.com",
            description: "Shopify store for vinod stainless steel.",
            tags: ["Shopify", "App scripts" , "Admin APIs"],
            isShopify: true
        },
        {
            title: "Smileie",
            liveUrl: "https://smileie.com",
            link: "https://smileie.com",
            description: "smile care products.",
            tags: ["Shopify"],
            isShopify: true
        },
        {
            title: "AlignerCo Canada",
            liveUrl: "https://alignerco.ca",
            link: "https://alignerco.ca",
            description: "Professional Shopify store for AlignerCo Canada.",
            tags: ["Shopify", "Admin APIs" , "Php", "gtags"  ],
            isShopify: true
        },
        {
            title: "SmilePath New Zealand",
            liveUrl: "https://smilepath.nz",
            link: "https://smilepath.nz",
            description: "Smile care Shopify store for New Zealand market.",
            tags: ["Shopify" , "App scripts", "Admin APIs"],
            isShopify: true
        },
        {
            title: "SmilePath Malaysia",
            liveUrl: "https://smilepath.my",
            link: "https://smilepath.my",
            description: "Smile care Shopify store for Malaysia market.",
            tags: ["Shopify", ],
            isShopify: true
        }
    ];

    const generalProjects = [
        {
            title: "Blog composing tool",
            link: "https://github.com/prathammarkweb",
            liveUrl: "https://blog-tools-home.vercel.app/",
            description: "Next.js-powered tool which generates the blog from uploaded documents and programmatically publishes it to different Shopify brands via Admin APIs.",
            tags: ["Next js", "Shopify Admin Apis", "OpenAI GPT-4o",]
        },
        {
            title: "CosmicAria – An Augmented Reality Application",
            
            description: "augmented reality-based application where constellations, planets come to life on your living room walls.",
            tags: ["Augmented reality", "blender", "Flutter"]
        },
          {
            title: "Vinod Steel CRM - Abandonned checkouts, Leads and messenger",
             link: "https://github.com/prathammarkweb/v0-shopify-cart-followup",
            liveUrl: "https://crm.swastiketrades.com/",
            description: "A CRM system built using Next Js and Shopify Admin APIs to manage leads, abandoned checkouts, and marketing messenger for vinod steel.",
            tags: ["Next js", "PostgreSQL", "Zustand", "Shopify Admin APIs"]
        },
        {
            title: "Alcohol Sensing Driver Identification Module Using Arduino & Python",
           
            description: "Alcohol levels in blood detection while driving",
            tags: ["Python", "Arduio Uno","Open CV"]
        },
        // {
        //     title: "Codplat - Full-Stack Coding Platform",
        //     link: "https://github.com/Arjunheregeek/Codplat",
        //     description: "Modern, integrated environment for coding-related activities with TypeScript frontend for responsive UX and robust Python backend for server-side logic.",
        //     tags: ["TypeScript", "Python", "React", "FastAPI", "MySQL"]
        // },
        // {
        //     title: "Intelligent Chat Microservice",
        //     link: "https://github.com/Arjunheregeek/10-intelligent-chat-microservice",
        //     description: "Standalone, containerized microservice for intelligent chat functionality, designed for easy integration into larger systems with Docker deployment.",
        //     tags: ["Python", "Docker", "FastAPI", "SQLite"]
        // },
        // {
        //     title: "DEFMA WeaponWise",
        //     link: "https://github.com/Arjunheregeek/Defma_weaponwise",
        //     description: "Comprehensive logistics platform for Indian Army fleet and armament management with real-time GPS tracking, predictive maintenance, and digital KOTE system.",
        //     tags: ["ReactJS", "Python", "Flask", "MySQL", "Real-time Tracking"]
        // },
        // {
        //     title: "Serverless CSV Data Visualizer",
        //     link: "https://github.com/Arjunheregeek/serverless-csv-visualizer",
        //     description: "Fully serverless web application that processes uploaded CSV data and visualizes results as interactive bar charts using AWS cloud services.",
        //     tags: ["AWS Lambda", "API Gateway", "S3", "Python", "Pandas"]
        // },
        // {
        //     title: "Machine Learning Model Collection",
        //     link: "https://github.com/Arjunheregeek/Machine-learning-Models",
        //     description: "Comprehensive collection of ML models including predictive analytics, classification systems, and data processing pipelines for various real-world applications.",
        //     tags: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "NumPy"]
        // }
    ];

    return (
        <section id="projects" className="py-20 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-medium animate-blur-in">Selected Work</h2>
                        <p className="text-gray-400 animate-blur-in">
                            A collection of projects showcasing expertise in AI and full-stack development.
                        </p>
                    </div>

                    {/* Shopify Projects Section */}
                    {shopifyProjects.length > 0 && (
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-semibold text-blue-400 animate-blur-in">Shopify</h3>
                                <p className="text-gray-400 text-sm animate-blur-in">
                                    High-converting Shopify storefronts driving $1M+ in sales.
                                </p>
                            </div>
                            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                {shopifyProjects.map((project, index) => (
                                    <ProjectCard key={`shopify-${index}`} project={project} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* General Projects Section */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-semibold text-green-400 animate-blur-in">General Projects</h3>
                            <p className="text-gray-400 text-sm animate-blur-in">
                                AI, full-stack, and other innovative development projects.
                            </p>
                        </div>
                        <div className="grid gap-6">
                            {generalProjects.map((project, index) => (
                                <ProjectCard key={`general-${index}`} project={project} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
