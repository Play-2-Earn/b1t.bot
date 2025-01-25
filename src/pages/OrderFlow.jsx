import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronDown,
  FiBookOpen,
  FiActivity,
  FiAnchor,
  FiEye,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const OrderFlow = () => {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    {
      title: "What Is Bitcoin Order Flow?",
      content: `Order flow refers to the analysis of real-time buy and sell activity within the market. This data comes directly from order books, market depth, and transaction records, allowing traders to see where liquidity resides and how participants are behaving in the moment.`,
      icon: <FiActivity />,
    },
    {
      title: "Core Elements of Order Flow",
      content: [
        "Order Book: Real-time ledger of buy/sell orders",
        "Market Depth: Cumulative size of orders at each price level",
        "Time & Sales: Record of every executed trade",
        "Delta: Net difference between buying/selling volume",
      ],
      icon: <FiAnchor />,
    },
    {
      title: "Advanced Trading Strategies",
      content: [
        "Identifying Iceberg Orders: Detect hidden institutional activity",
        "Absorption Zones: Spot liquidity exhaustion points",
        "Spoofing Patterns: Recognize and exploit manipulative behavior",
        "Volume Profile Integration: Combine with order flow for confirmation",
      ],
      icon: <FiEye />,
    },
    {
      title: "AI-Powered Order Flow Analysis",
      content: [
        "Real-Time Pattern Recognition",
        "Custom Event Alerts",
        "Behavioral Prediction Models",
        "Automated Trade Signals",
      ],
      icon: <FiBookOpen />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-gray-100">
      {/* Navigation Bar */}
      <nav className="sticky top-0 bg-gray-900/80 backdrop-blur-lg z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            B1T.BOT
          </Link>
          <Link
            to="/"
            className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-6 py-2 rounded-xl transition-all"
          >
            ← Back to Platform
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Decoding Bitcoin Order Flow
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Master hidden liquidity patterns, institutional strategies, and
            AI-powered analysis techniques.
          </motion.p>

          {/* Interactive Sections */}
          <div className="space-y-4">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenSection(openSection === index ? null : index)
                  }
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/20 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-cyan-400 text-2xl">{section.icon}</div>
                    <h2 className="text-2xl font-semibold">{section.title}</h2>
                  </div>
                  <FiChevronDown
                    className={`text-xl transition-transform ${
                      openSection === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openSection === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6"
                    >
                      {Array.isArray(section.content) ? (
                        <ul className="space-y-4 pl-8">
                          {section.content.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2" />
                              <p className="text-gray-300 text-lg">{item}</p>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {section.content}
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* AI Role Section */}
          <div className="mt-20 p-8 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl border border-cyan-500/20">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              B1T.BOT's AI Advantage
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Real-Time Pattern Recognition",
                "Institutional Order Detection",
                "Manipulation Alert System",
                "Predictive Liquidity Mapping",
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl"
                >
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400">
                    {i % 2 === 0 ? "🤖" : "💡"}
                  </div>
                  <span className="text-gray-300 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-8 text-cyan-400">
              Key Takeaways
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Master order book dynamics for liquidity insights",
                "Combine delta analysis with volume profiling",
                "Use AI tools to automate pattern detection",
                "Turn market manipulation into opportunities",
              ].map((takeaway, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 border border-cyan-500/30 rounded-xl"
                >
                  <div className="text-cyan-400">✓</div>
                  <p className="text-gray-300">{takeaway}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderFlow;
