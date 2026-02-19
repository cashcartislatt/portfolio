export default function Hero() {
    // To use an image from assets: import profilePic from '../assets/profile.png' (adjust path as needed) and set profilePhoto = profilePic;
    // Or if in public folder: "/profile.png"
    const profilePhoto = "";

    return (
        <section
            id="main"
            className="min-h-[calc(100vh-60px)] flex items-center justify-center dis"
        >
            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className={profilePhoto ? "space-y-8" : "text-center space-y-8"}>

                    {/* Top Section: Photo (Conditional) + Name/Role */}
                    <div className={`flex flex-col ${profilePhoto ? 'md:flex-row items-center gap-8 md:gap-12 justify-center md:justify-start' : 'items-center justify-center'}`}>

                        {profilePhoto && (
                            <div className="shrink-0 animate-blur-in">
                                <img
                                    src={profilePhoto}
                                    alt="Pratham Y"
                                    className="w-48 h-48 rounded-full border-4 border-white/10 object-cover shadow-2xl hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        )}

                        <div className={`space-y-4 animate-blur-in ${profilePhoto ? 'text-center md:text-left' : 'text-center'}`}>
                            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
                                Pratham Y
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-400">
                                Full Stack Web Engineer
                            </p>
                        </div>
                    </div>

                    {/* Bottom Section: Description + CTAs */}
                    <div className={`space-y-8 max-w-3xl animate-blur-in ${profilePhoto ? 'text-center md:text-left' : 'mx-auto text-center'}`}>
                        <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                            23 y/o Full-Stack Web Engineer, working with React, Next.js, Node.js, and Shopify to build scalable web and e-commerce products. Currently at Mark Web Solutions.

                            Writing code since 2021. Actively interested in AI and LLMs.

                            Outside work — football and music. </p>

                        <div className={`flex flex-wrap gap-3 pt-4 ${profilePhoto ? 'justify-center md:justify-start' : 'justify-center'}`}>
                            {/* Primary */}
                          <a
  href="mailto:pratham.ry@gmail.com"
  className="inline-flex items-center gap-2 rounded-md
  bg-white text-black px-5 py-2 text-sm font-medium
  hover:bg-gray-200 transition"
>
  Get in touch
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m12 5 7 7-7 7"
    />
  </svg>
</a>


                            {/* Secondary */}
                            <a
                                href="https://github.com/prathammarkweb"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-md
                         border border-gray-700 px-5 py-2 text-sm font-medium
                         text-gray-300 hover:border-gray-400 hover:text-white
                         transition"
                            >
                                View GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
