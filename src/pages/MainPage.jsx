import React from "react";

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black text-gray-300 p-8">
      <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 text-center">
          The Hash Ribbons Redux: A B1T.BOT Strategy for Predicting Miner Capitulation and Re-accumulation Using Scheduled Address Activity
        </h1>
        <p className="text-lg leading-relaxed">
          <strong>Abstract:</strong> This article introduces the "Hash Ribbons Redux," a new B1T.BOT strategy that builds upon the foundation of the Hash Ribbons indicator, but with significant enhancements. It combines hashrate and difficulty analysis with a novel approach of monitoring specific Bitcoin addresses on predetermined dates related to miner operational cycles. By identifying patterns in address activity around these dates, particularly during and after periods of miner capitulation signaled by the Hash Ribbons, this strategy aims to anticipate shifts in miner sentiment and identify potential re-accumulation phases.
        </p>
        
        {/* Part 1 */}
        <section className="mt-6 border-l-4 border-cyan-500 pl-4">
          <h2 className="text-xl font-semibold text-cyan-400">Part 1: Beyond Traditional Hash Ribbons: Identifying the Gaps</h2>
          <div className="mt-2">
            <h3 className="text-lg font-semibold text-cyan-300">1.1 Hash Ribbons Basics:</h3>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Hash Rate Moving Averages:</strong> The indicator uses two simple moving averages (SMAs) of Bitcoin's hashrate...</li>
              <li><strong>Miner Capitulation Signal:</strong> When the shorter-term SMA crosses below the longer-term SMA...</li>
              <li><strong>Buy Signal:</strong> When the shorter-term SMA crosses back above the longer-term SMA...</li>
            </ul>

            <h3 className="text-lg font-semibold text-cyan-300 mt-4">1.2 Limitations of Traditional Hash Ribbons:</h3>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Lagging Indicator:</strong> Hash Ribbons, like all moving average-based indicators...</li>
              <li><strong>Subjectivity in "Buy" Signal:</strong> The timing of the "buy" signal can be subjective...</li>
              <li><strong>Lack of Context:</strong> The indicator doesn't provide insights into specific factors...</li>
              <li><strong>Limited Scope:</strong> It primarily focuses on hashrate and doesn't incorporate other relevant data points...</li>
            </ul>
          </div>
        </section>

        {/* Part 2 */}
        <section className="mt-6 border-l-4 border-blue-500 pl-4">
          <h2 className="text-xl font-semibold text-blue-400">Part 2: The Hash Ribbons Redux: Enhancements for Improved Accuracy</h2>
          <div className="mt-2">
            <h3 className="text-lg font-semibold text-cyan-300">2.1 Scheduled Address Monitoring:</h3>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Concept:</strong> Instead of just tracking overall on-chain activity...</li>
              <li><strong>Rationale:</strong> Miners often have predictable schedules for receiving payouts...</li>
              <li><strong>Key Dates:</strong> Track when mining pools typically distribute rewards...</li>
              <li><strong>Data Sources:</strong> Publicly Known Mining Pool Addresses...</li>
            </ul>

            <h3 className="text-lg font-semibold text-cyan-300 mt-4">2.2 Difficulty-Profitability Analysis:</h3>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Concept:</strong> This involves analyzing the relationship between Bitcoin's network difficulty...</li>
              <li><strong>Key Metrics:</strong> Network Difficulty...</li>
              <li><strong>Hypothesis:</strong> When the estimated production cost approaches...</li>
            </ul>
          </div>
        </section>

        {/* Part 3 */}
        <section className="mt-6 border-l-4 border-blue-500 pl-4">
          <h2 className="text-xl font-semibold text-blue-400">Part 3: Implementing the Hash Ribbons Redux with B1T.BOT</h2>
          <div className="mt-2">
            <h3 className="text-lg font-semibold text-cyan-300">3.1 Setting up B1T.BOT for Hash Ribbons and On-Chain Data:</h3>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Hash Ribbons Indicator:</strong> Configure B1T.BOT to calculate the 30-day and 60-day SMAs...</li>
              <li><strong>On-Chain Data:</strong> Connect B1T.BOT to a Bitcoin full node...</li>
              <li><strong>Scheduled Address List:</strong> Create a list of Bitcoin addresses associated with miners...</li>
            </ul>

            <h3 className="text-lg font-semibold text-cyan-300 mt-4">3.2 Defining the Strategy Parameters in B1T.BOT:</h3>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Miner Capitulation Signal:</strong> Condition: 30-day Hash Rate SMA crosses below the 60-day Hash Rate SMA...</li>
              <li><strong>Re-accumulation Signal:</strong> Condition: After a Hash Ribbons "buy" signal...</li>
              <li><strong>Trading Logic (Long Entry):</strong> Entry Trigger: B1T.BOT identifies a re-accumulation signal...</li>
            </ul>
          </div>
        </section>

        {/* Part 4 */}
        <section className="mt-6 border-l-4 border-cyan-500 pl-4">
          <h2 className="text-xl font-semibold text-cyan-400">Part 4: Advanced Considerations and Future Enhancements</h2>
          <div className="mt-2">
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Refining Address Identification and Classification:</strong> Machine Learning...</li>
              <li><strong>Incorporating Miner Sentiment Analysis:</strong> Social Media and News Monitoring...</li>
              <li><strong>Dynamic Hash Ribbons Parameters:</strong> Adaptive Moving Averages...</li>
              <li><strong>Integrating with Other Strategies:</strong> Multi-Factor Models...</li>
            </ul>
          </div>
        </section>

        <footer className="text-center mt-6 text-gray-400">
          <p>Welcome to the age of the miner-aware, data-driven, and time-sensitive Bitcoin trader.</p>
        </footer>
      </div>
    </div>
  );
};

export default MainPage;
