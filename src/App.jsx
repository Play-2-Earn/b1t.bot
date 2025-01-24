import React, { useState } from "react";
import {
  BitcoinIcon,
  BrainCircuitIcon,
  NetworkIcon,
  CloudLightningIcon,
  RocketIcon,
  CodeIcon,
  ShieldIcon,
  TrendingUpIcon,
} from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const features = [
    {
      icon: BitcoinIcon,
      color: "text-orange-500",
      title: "Bitcoin AI Revolution",
      description:
        "Advanced machine learning algorithms optimizing Bitcoin trading strategies, predicting market dynamics, and delivering unprecedented crypto insights.",
    },
    {
      icon: BrainCircuitIcon,
      color: "text-green-500",
      title: "DePIN Intelligence",
      description:
        "Transformative AI-driven Decentralized Physical Infrastructure Networks (DePIN) creating adaptive, self-learning blockchain ecosystems.",
    },
    {
      icon: NetworkIcon,
      color: "text-blue-500",
      title: "Web3 AI Integration",
      description:
        "Seamless fusion of artificial intelligence with decentralized web technologies, enabling intelligent, responsive blockchain applications.",
    },
    {
      icon: CloudLightningIcon,
      color: "text-purple-500",
      title: "Crypto AI Analytics",
      description:
        "Cutting-edge predictive modeling and real-time cryptocurrency market analysis leveraging advanced machine learning techniques.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-pattern"></div>

      <header className="relative container mx-auto px-4 py-16 text-center">
        <div className="animate-pulse absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 -z-10"></div>
        <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-text-shimmer">
          B1T.BOT
        </h1>
        <p className="text-2xl max-w-3xl mx-auto text-gray-300 mb-8">
          Pioneering the Convergence of Artificial Intelligence, Blockchain, and
          Decentralized Technologies
        </p>
        <a
          href="https://www.b1tcoin.ai"
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
        >
          Explore
        </a>
      </header>

      <main className="relative container mx-auto px-4 py-12">
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-gray-700/50 
                transform transition-all duration-300 
                ${
                  activeSection === index
                    ? "scale-105 border-blue-500/50"
                    : "hover:scale-105"
                }
              `}
              onMouseEnter={() => setActiveSection(index)}
              onMouseLeave={() => setActiveSection(null)}
            >
              <feature.icon
                className={`w-12 h-12 ${feature.color} mb-4 animate-pulse`}
              />
              <h2 className="text-2xl font-semibold mb-3 text-white">
                {feature.title}
              </h2>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Our Vision
            </h3>
            <p className="text-gray-300">
              B1T.BOT represents the cutting edge of technological convergence,
              where artificial intelligence meets blockchain to create
              intelligent, adaptive decentralized systems that learn, evolve,
              and transform the digital landscape.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-700/50 rounded-lg p-4 flex items-center">
              <RocketIcon className="mr-3 text-blue-500" />
              <span>Innovative Tech</span>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4 flex items-center">
              <CodeIcon className="mr-3 text-green-500" />
              <span>Smart Algorithms</span>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4 flex items-center">
              <ShieldIcon className="mr-3 text-purple-500" />
              <span>Security First</span>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4 flex items-center">
              <TrendingUpIcon className="mr-3 text-orange-500" />
              <span>Future Ready</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative container mx-auto px-4 py-8 text-center">
        <p className="text-gray-400">
          © 2024 B1T.BOT - Reshaping the Future of Decentralized Intelligence
        </p>
      </footer>

      <style jsx global>{`
        .bg-pattern {
          background-image: linear-gradient(
              to right,
              rgba(55, 65, 81, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(55, 65, 81, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }

        @keyframes text-shimmer {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 100% 0;
          }
        }

        .animate-text-shimmer {
          background-size: 200% auto;
          background-position: -100% 0;
          animation: text-shimmer 3s infinite linear;
        }
      `}</style>
    </div>
  );
}

export default App;
