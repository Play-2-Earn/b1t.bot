import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black text-gray-300 p-8">
      <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
          The Three-Pronged Oracle: A B1T.BOT Strategy for Predicting Bitcoin Price Movements
        </h1>

        {/* Abstract */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-cyan-400 mb-2">Abstract</h2>
          <p className="text-lg leading-relaxed">
            This article introduces the "Three-Pronged Oracle," a novel B1T.BOT strategy that leverages a trifecta of advanced analytical techniques to gain a predictive edge in the Bitcoin market. By monitoring inter-exchange Bitcoin price correlations, analyzing on-chain transaction fee dynamics, and estimating order flow toxicity, this strategy aims to identify subtle shifts in market sentiment and anticipate short-term price movements before they are widely recognized.
          </p>
        </section>

        {/* Part 1: The Three Pillars of the Oracle */}
        <section className="mt-6 border-l-4 border-cyan-500 pl-4">
          <h2 className="text-xl font-semibold text-cyan-400">Part 1: The Three Pillars of the Oracle</h2>

          {/* Inter-Exchange Correlation Analysis */}
          <article className="mt-4">
            <h3 className="text-lg font-semibold text-cyan-300">1.1 Inter-Exchange Correlation Analysis</h3>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Concept:</strong> Monitoring the correlation of Bitcoin's price movements across multiple exchanges in real time.</li>
              <li><strong>Rationale:</strong> Deviations in correlation can signal shifts in liquidity, information flow, or trading activity.</li>
              <li><strong>Example:</strong> A significant drop in correlation between Binance and Coinbase might indicate informed trading on one exchange before the other follows.</li>
            </ul>
          </article>

          {/* On-Chain Transaction Fee Monitoring */}
          <article className="mt-4">
            <h3 className="text-lg font-semibold text-cyan-300">1.2 On-Chain Transaction Fee Monitoring</h3>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Concept:</strong> Analyzing Bitcoin transaction fees to gauge network congestion and urgency.</li>
              <li><strong>Rationale:</strong> Spikes in fees may indicate an upcoming price movement or shift in investor sentiment.</li>
              <li><strong>Example:</strong> A surge in high-fee transactions suggests that large holders may be preparing for market moves.</li>
            </ul>
          </article>

          {/* Order Flow Toxicity Estimation */}
          <article className="mt-4">
            <h3 className="text-lg font-semibold text-cyan-300">1.3 Order Flow Toxicity Estimation</h3>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Concept:</strong> Assessing whether current order flow is driven by informed traders.</li>
              <li><strong>Rationale:</strong> Toxic order flow, characterized by large market orders, can have a sustained impact on price.</li>
              <li><strong>Example:</strong> A high VPIN reading suggests informed trading, meaning the price trend is likely to continue.</li>
            </ul>
          </article>
        </section>

        {/* Part 2: Implementing the Three-Pronged Oracle with B1T.BOT */}
        <section className="mt-6 border-l-4 border-blue-500 pl-4">
          <h2 className="text-xl font-semibold text-blue-400">Part 2: Implementing the Three-Pronged Oracle with B1T.BOT</h2>
          <p className="mt-2 text-lg leading-relaxed">
            This strategy integrates B1T.BOT’s multi-exchange connectivity, on-chain data analysis, and algorithmic execution to automate market signals and execute trades with precision.
          </p>
        </section>

        {/* Part 3: Risk Management */}
        <section className="mt-6 border-l-4 border-purple-500 pl-4">
          <h2 className="text-xl font-semibold text-purple-400">Part 3: Risk Management</h2>
          <p className="mt-2 text-lg leading-relaxed">
            Managing risk in this high-frequency strategy requires robust data validation, execution safeguards, and systematic backtesting to minimize false signals and inefficiencies.
          </p>
        </section>

        {/* Conclusion */}
        <section className="mt-6 p-4 bg-gray-800 rounded-lg">
          <h2 className="text-xl font-bold text-gray-100">Conclusion</h2>
          <p className="mt-2 text-gray-400">
            The Three-Pronged Oracle offers a structured, data-driven approach to short-term Bitcoin price prediction. However, its success depends on precise execution, rigorous risk management, and continuous refinement in response to evolving market conditions.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
