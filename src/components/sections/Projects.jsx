import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-700 to-violet-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> LendingPoint</h3>
              <p className="text-gray-400 mb-4">
                LendingPoint - Fintech mobile application built with React Native and Redux, enabling seamless loan management and credit applications. Implemented secure API integrations for payment processing and credit evaluation systems, delivering a robust platform for personal and business financing.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "React Native", "Typescript", "Redux toolkit"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-700/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-700/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a 
                href="https://play.google.com/store/apps/details?id=com.lendingpoint.customerportal&hl=es_CO&pli=1" 
                target="_blank" rel="noopener noreferrer"                  className="text-violet-400 hover:text-violet-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Real state app (study purposes)</h3>
              <p className="text-gray-400 mb-4">
                React Native mobile application showcasing modern real estate browsing with smooth animations, gesture handling, and responsive design. Built with TypeScript and NativeWind for dynamic property listings and seamless navigation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React Native", "Typescript", "Animated", "Redux"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-purple-700/10 text-purple-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-purple-700/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/SebastianBuritica/Real-state-app"
                  target="_blank" rel="noopener noreferrer"       
                  className="text-violet-400 hover:text-violet-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">E-Commerce Web App</h3>
              <p className="text-gray-400 mb-4">
                Full-stack e-commerce with modern UI, secure payment
                integration, and customizable product inventory.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "TypeScript", "Stripe", "PostgreSQL"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-purple-700/10 text-purple-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-purple-700/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                    href="https://github.com/SebastianBuritica/ecommerce_sanity_stripe" 
                    target="_blank" rel="noopener noreferrer"            
                  className="text-violet-400 hover:text-violet-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Project for older interview</h3>
              <p className="text-gray-400 mb-4">
                Full-featured React Native application showcasing mobile development expertise through implementation of comprehensive CRUD operations, secure authentication flow, and dynamic data visualization. Features include animated user interfaces, form validation, RESTful API integration, and efficient list rendering with pagination.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React Native", "Redux", "React Native chart", "Typescript"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-purple-700/10 text-purple-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-purple-700/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                 href="https://github.com/SebastianBuritica/SebastianOlSoft" 
                    target="_blank" rel="noopener noreferrer"   
                  className="text-violet-400 hover:text-violet-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
