import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-violet-400 bg-clip-text text-transparent leading-right">
            Hi, I&apos;m Sebastian Buriticá
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a versatile developer specializing in mobile application development, with full-stack expertise that allows me to craft comprehensive solutions from end to end. My passion lies in creating intuitive, high-performance mobile experiences while leveraging my web development skills to build seamless backend integrations. I focus on developing scalable applications that not only meet technical requirements but also delight users across all platforms.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-purple-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-purple-700/50 text-purple-700 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-purple-700/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
