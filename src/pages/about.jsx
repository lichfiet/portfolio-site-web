const About = function () {

    return (
        <div className="container mx-auto px-5 md:px-20">

            {/* Placeholder image display - hidden for now */}
            {/* <div className="flex gap-2 md:gap-4 overflow-x-auto py-4 mb-4 rounded-xl">
                <img src="https://picsum.photos/seed/about1/400/240" alt="" className="flex-shrink-0 w-40 h-24 md:w-48 md:h-28 object-cover rounded-lg" />
                <img src="https://picsum.photos/seed/about2/400/240" alt="" className="flex-shrink-0 w-40 h-24 md:w-48 md:h-28 object-cover rounded-lg" />
                <img src="https://picsum.photos/seed/about3/400/240" alt="" className="flex-shrink-0 w-40 h-24 md:w-48 md:h-28 object-cover rounded-lg" />
                <img src="https://picsum.photos/seed/about4/400/240" alt="" className="flex-shrink-0 w-40 h-24 md:w-48 md:h-28 object-cover rounded-lg" />
            </div> */}

            {/* Content Start */}
            <div className="container mx-auto p-6 dark:bg-neutral-800 bg-neutral-200 rounded-xl shadow-xl">
                <h1 className="text-xl font-bold">
                    About Me
                </h1>
                <div className="p-2">
                    <div id="work-lightspeed" className="">
                        <p className="indent-3 mb-2">
                            I've always been interested in technology, starting
                            with my family's first computer, where I played a lot of classic computer games like
                            Roller Coaster Tycoon, and an early Roblox. Later, I would have my first
                            exposure to web development, modifying free HTML templates for an SEO project. I ended up taking
                            a simple Javascript class
                            in middle school, learned how to deploy Minecraft servers on docker with my dad, and have enjoyed
                            exploring new technologies in my current software support role ever since.
                        </p>
                        <p className="indent-3 mb-2">
                            When I'm not coding, you can find me watering my plants, rock climbing, playing video games, watching coding content, 
                            traveling, or drinking a good cup of coffee. I'm into kpop, and I'm learning Korean—I've been to Korea twice.
                        </p>
                    </div>
                </div>
                <div className="mt-4  justify-center content-center">
                    <h1 className='text-center mb-2 italic'>my tech stack</h1>
                    <div className="flex justify-center text-3xl gap-3 overflow-x-auto">
                        <i className="devicon-react-original"></i>
                        <i className="devicon-express-original"></i>
                        <i className="devicon-tailwindcss-original"></i>
                        <i className="devicon-amazonwebservices-plain-wordmark"></i>
                        <i className="devicon-terraform-plain"></i>
                        <i className="devicon-docker-plain"></i>
                        <i className="devicon-kubernetes-plain"></i>
                        <i className="devicon-argocd-plain"></i>
                    </div>
                </div>
                <h1 className="text-2xl font-semibold mt-6">Open Source</h1>
                <p className="indent-3 mb-2">
                    I just love open source. I like making technology that helps people, and I'd love to work at a place like PBS someday—I feel like that's kind of open source information in its own way.
                </p>
                <p className="indent-3 mb-2">
                    Some projects I've contributed to:
                </p>
                <ul className="list-disc list-inside mb-5 space-y-1 indent-3">
                    <li>
                        <a href="https://github.com/grafana/loki" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white underline hover:no-underline">Grafana Loki</a>
                        <span className="text-neutral-600 dark:text-neutral-400"> — documentation</span>
                    </li>
                    <li>
                        <a href="https://github.com/awsdocs/aws-doc-sdk-examples" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white underline hover:no-underline">AWS EventBridge</a>
                        <span className="text-neutral-600 dark:text-neutral-400"> — documentation</span>
                    </li>
                    <li>
                        <a href="https://github.com/celery/celery" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white underline hover:no-underline">Celery</a>
                        <span className="text-neutral-600 dark:text-neutral-400"> — Python distributed task queue</span>
                    </li>
                </ul>
                <h1 className="text-2xl font-semibold">Music</h1>
                <p className="indent-3 mb-2">
                    I think music is very important to me—it's accompanied many emotions in my life. I like kpop and older stuff too. Below is my geriatric pop playlist (pre-2000s) that I regularly listen to.
                </p>

                <div className="w-full">
                    <iframe src="https://open.spotify.com/embed/playlist/0G7BnxP1X1M827QDhg0AB5?utm_source=generator" width="100%" height="400" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="Geriatric pop playlist" className="rounded-lg"></iframe>
                </div>
            </div>
        </div >
    )
}

export default About;