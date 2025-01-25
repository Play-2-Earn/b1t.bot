import { useState } from "react";
import { Link } from "react-router-dom";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  FiArrowUpRight,
  FiCopy,
  FiTrendingUp,
  FiUsers,
  FiShield,
  FiChevronRight,
} from "react-icons/fi";
const Main = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const features = [
    {
      title: "AI-Powered Ecosystem",
      content:
        "Combine B1T.BOT's educational tools with B1TCOIN.AI's social intelligence for unmatched crypto mastery",
      icon: <FiTrendingUp />,
    },
    {
      title: "Social Copy Trading",
      content:
        "Automatically replicate top-performing crypto influencers with proven hypothetical returns",
      icon: <FiUsers />,
    },
    {
      title: "Risk Management",
      content:
        "AI-powered trade execution and real-time risk analysis for optimal profitability",
      icon: <FiShield />,
    },
  ];

  const steps = [
    {
      title: "Learn Fundamentals",
      content:
        "Master Bitcoin trading through our AI-powered educational hub covering blockchain technology and market dynamics",
    },
    {
      title: "Analyze Influencers",
      content:
        "Discover top-performing social media strategies with B1TCOIN.AI's proprietary ranking system",
    },
    {
      title: "Execute & Optimize",
      content:
        "Copy trade automatically with AI-powered risk management and real-time adjustments",
    },
  ];

  // Background animation variants
  const blobVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i) => ({
      scale: 1,
      opacity: 0.1,
      transition: {
        delay: i * 0.3,
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
      },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-gray-100 overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="fixed inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl"
            variants={blobVariants}
            initial="initial"
            animate="animate"
            custom={i}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-20 pt-32">
        <div className="max-w-6xl mx-auto z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-8"
          >
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-xs px-4 py-2 rounded-full font-semibold">
              🚀 NEXT-GEN TRADING PLATFORM
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Your Gateway to AI-Powered
            <br />
            Bitcoin Mastery
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            At the cutting edge of AI-powered crypto trading, B1T.BOT combines
            advanced education, social copy trading, and machine learning for
            unprecedented results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 flex-wrap"
          >
            <button className="group relative bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Start Free Trial{" "}
                <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <Link
              to="/DecodingBitcoin"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all"
            >
              Decoding Bitcoin Order Flow →
            </Link>
            <Link
              to="/MinerMetrics"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all"
            >
              Mastering Bitcoin Trading Through Miner Metrics →
            </Link>
            <Link
              to="/FractalTradingGuide"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all"
            >
              The Hidden Geometry of Bitcoin Price Action →
            </Link>
            <Link
              to="/LiquidityPoolsGuide"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all"
            >
              Breaking the Code →
            </Link>
            <Link
              to="/BehavioralMarketMicrostructure"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all"
            >
              The Forgotten Frontier of Bitcoin Trading: Behavioral Market
              Microstructure →
            </Link>
            <Link
              to="/VolatilityGuide"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all"
            >
              The Underexplored Realm of Bitcoin Trading: Volatility Anatomy and
              Compression Dynamics →
            </Link>
            <Link
              to="/SubQuantumTrading"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all"
            >
              Sub-Quantum Realm of Bitcoin Trading: →
            </Link>
            <Link
              to="/MemespaceAnalysis"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all"
            >
              Decoding the Bitcoin "Memespace →
            </Link>
            <Link
              to="/ChronometricArbitrage"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all"
            >
              Chronometric Arbitrage: Exploiting Time Dilation and
              Inter-Exchange Latency Discrepancies for Picosecond Alpha with
              B1T.BOT →
            </Link>
            <Link
              to="/AstroEconomicTrading"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all"
            >
              Astro-Economic Trading: Harnessing Celestial Mechanics and
              Gravitational Influences for Predictive Bitcoin Market Analysis
              with B1T.BOT →
            </Link>
            <Link
              to="/QuantumResistant"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all"
            >
              Quantum-Resistant Algorithmic Camouflage: Harnessing Chaos Theory
              and Adversarial Machine Learning for Post-Quantum Dominance with
              B1T.BOT →
            </Link>
            <Link
              to="/IntraVolume"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all"
            >
              Intra-Volume Spread Dynamics: Decoding Hidden Order Flow and
              Exploiting Micro-Inefficiencies with B1T.BOT T →
            </Link>
            <Link
              to="/CrossBorder"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all"
            >
              Cross-Border Regulatory Arbitrage: Exploiting Disparate Crypto
              Regulations for Global Alpha with B1T.BOT →
            </Link>
            <Link
              to="/MemeMomentum"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all"
            >
              Meme Momentum and Hype Cycle Hijacking: Riding the Waves of Viral
              Trends with B1T.BOT →
            </Link>
            <Link
              to="/DustConsolidation"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all"
            >
              Dust Consolidation and UTXO Fragmentation Analysis: Decoding
              On-Chain Footprints for Predictive Bitcoin Trading with B1T.BOT →
            </Link>
            <Link
              to="/SmartMoney"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all"
            >
              "Smart Money" vs. "Dumb Money" Divergence: Exploiting the
              Sentiment-On-Chain Gap for Contrarian Bitcoin Alpha with B1T.BOT →
            </Link>
            <Link
              to="/FeeSniping"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all"
            >
              Fee Sniping and Priority Signaling: Exploiting the Bitcoin Fee
              Market for Predictive Alpha with B1T.BOT →
            </Link>
            <Link
              to="/Echo"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all"
            >
              Echo Chamber Infiltration and Narrative Warfare: Exploiting Social
              Network Dynamics for Asymmetric Bitcoin Alpha with B1T.BOT →
            </Link>
            <Link
              to="/Supply"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all"
            >
              Supply Chain Shock and Stock-to-Flow Disparity: Exploiting
              Bitcoin's Halving Cycles and Miner Behavior for Asymmetric Alpha
              with B1T.BOT →
            </Link>
            <Link
              to="/Order"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all"
            >
              Order Book Dynamics and Realized Volatility Skew: Exploiting
              Asymmetry in Liquidity and Price Fluctuations for Enhanced Alpha
              with B1T.BOT →
            </Link>
            <Link
              to="/Temporal"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all"
            >
              Temporal Heuristics and On-Chain Seasonality: Exploiting
              Time-Based Patterns in Bitcoin Activity for Predictive Alpha with
              B1T.BOT →
            </Link>
            <Link
              to="/Sentiment"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all"
            >
              Sentiment-On-Chain Divergence and Information Asymmetry:
              Exploiting Gaps in Market Knowledge for Predictive Alpha with
              B1T.BOT T →
            </Link>
            <Link
              to="/Transaction"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all"
            >
              Transaction Network Topology and Cluster Analysis: Mapping
              Bitcoin's On-Chain Relationships for Predictive Alpha with B1T.BOT
              →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3D Feature Cards */}
      <section className="py-20 px-6 lg:px-20 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 hover:border-cyan-400/30 transition-all group relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="text-cyan-400 text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.content}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Roadmap Section */}
      <section className="py-20 px-6 lg:px-20 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold mb-20 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Path to Crypto Mastery
          </h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-600" />
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-8 mb-16 pl-12 group"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 text-2xl font-bold mt-2">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-400 max-w-2xl">{step.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="py-20 px-6 lg:px-20 relative bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-cyan-500/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <h3 className="text-2xl font-bold mb-6">
                Social Copy Trading System
              </h3>
              <div className="space-y-6">
                {[
                  "Analyzes 10M+ social posts daily",
                  "Ranks influencers by performance, not popularity",
                  "Auto-copy top 5 performing accounts",
                  "Inverse trading for underperformers",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400">
                      <FiChevronRight />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-cyan-500/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <h3 className="text-2xl font-bold mb-6">Why Choose B1T.BOT?</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "4.8x", label: "Avg Top Trader ROI" },
                  { value: "92.4%", label: "AI Prediction Accuracy" },
                  { value: "150K+", label: "Active Traders" },
                  { value: "24/7", label: "Market Monitoring" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="text-center p-4 bg-gray-900/50 rounded-xl"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Feature Tabs */}
      <section className="py-20 px-6 lg:px-20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-cyan-500/20 p-8">
            <div className="flex flex-wrap gap-4 mb-8">
              {["Features", "Security", "Community"].map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFeature(i)}
                  className={`px-6 py-3 rounded-xl transition-all ${
                    activeFeature === i
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                      : "hover:bg-gray-700/50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
              >
                {activeFeature === 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      "Real-time AI market analysis",
                      "Social media sentiment tracking",
                      "Automated trade execution",
                      "Personalized learning paths",
                    ].map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl"
                      >
                        <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400">
                          <FiChevronRight className="w-6 h-6" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeFeature === 1 && (
                  <div className="space-y-8">
                    <div className="p-6 bg-gray-900/50 rounded-xl">
                      <h4 className="text-cyan-400 text-lg font-semibold mb-3">
                        Bank-Grade Security
                      </h4>
                      <p className="text-gray-300">
                        Military-grade encryption and multi-factor
                        authentication protect all transactions
                      </p>
                    </div>
                    <div className="p-6 bg-gray-900/50 rounded-xl">
                      <h4 className="text-cyan-400 text-lg font-semibold mb-3">
                        Real-Time Monitoring
                      </h4>
                      <p className="text-gray-300">
                        24/7 AI surveillance detecting unusual activity patterns
                      </p>
                    </div>
                  </div>
                )}

                {activeFeature === 2 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-gray-900/50 rounded-xl">
                      <h4 className="text-cyan-400 text-lg font-semibold mb-3">
                        Strategy Marketplace
                      </h4>
                      <p className="text-gray-300">
                        Buy/sell proven trading strategies from top performers
                      </p>
                    </div>
                    <div className="p-6 bg-gray-900/50 rounded-xl">
                      <h4 className="text-cyan-400 text-lg font-semibold mb-3">
                        Competitive Leaderboards
                      </h4>
                      <p className="text-gray-300">
                        Climb rankings for rewards and recognition
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 lg:px-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-gradient-to-r from-cyan-600 to-blue-700 p-12 rounded-3xl relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10" />
            <h2 className="text-4xl font-bold mb-6">
              Start Your Crypto Revolution
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Join thousands of traders already mastering the markets with
              B1T.BOT
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all">
              Get Started Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Main;
