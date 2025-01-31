import React from "react";

const TRRPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black text-gray-300 p-8">
      <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
        <Header />
        <Article />
      </div>
    </div>
  );
};

const Header = () => (
  <header>
    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
      The Reorg Raider: A B1T.BOT Strategy for Exploiting Temporal Anomalies and Blockchain Reorganizations in the Bitcoin Market
    </h1>
  </header>
);

const Article = () => {
  return (
    <main>
      <Section title="Abstract" borderColor="border-cyan-500" titleColor="text-cyan-400">
        <p>
          This article introduces the "Reorg Raider," a highly experimental B1T.BOT strategy designed to capitalize on rare blockchain reorganizations (reorgs) and the temporal anomalies they create in the Bitcoin market.
        </p>
      </Section>

      <Section title="Part 1: Understanding Blockchain Reorganizations and Temporal Anomalies" borderColor="border-blue-500" titleColor="text-blue-400">
        <h3 className="text-lg font-semibold text-blue-300 mt-4">1.1 The Mechanics of Reorgs:</h3>
        <ul className="list-disc pl-6 mt-2">
          <li><span className="font-semibold">Forking:</span> A reorg occurs when miners simultaneously find valid blocks, temporarily forking the blockchain.</li>
          <li><span className="font-semibold">Longest Chain Rule:</span> Bitcoin follows the chain with the most proof-of-work.</li>
          <li><span className="font-semibold">Orphaned Blocks:</span> Blocks from a discarded fork are removed from the main chain.</li>
          <li><span className="font-semibold">Double-Spend Risk:</span> Transactions in orphaned blocks can be reversed, causing security concerns.</li>
        </ul>
      </Section>

      <Section title="Part 2: Implementing the Reorg Raider Strategy with B1T.BOT" borderColor="border-purple-500" titleColor="text-purple-400">
        <h3 className="text-lg font-semibold text-purple-300 mt-4">2.1 Strategy Implementation:</h3>
        <ul className="list-disc pl-6 mt-2">
          <li><span className="font-semibold">Multiple Node Connectivity:</span> Ensuring a broad perspective on network status.</li>
          <li><span className="font-semibold">Mempool Analysis:</span> Tracking unconfirmed transactions for potential discrepancies.</li>
          <li><span className="font-semibold">Fork Detection:</span> Comparing block headers from different nodes to detect chain splits.</li>
        </ul>
      </Section>

      <Section title="Part 3: Risks and Challenges" borderColor="border-orange-500" titleColor="text-orange-400">
        <h3 className="text-lg font-semibold text-orange-300 mt-4">3.1 The Rarity of Deep Reorgs:</h3>
        <ul className="list-disc pl-6 mt-2">
          <li><span className="font-semibold">Limited Opportunities:</span> Deep reorgs are rare, making this strategy infrequent.</li>
          <li><span className="font-semibold">Low Probability of Success:</span> Predicting profitable trades from reorgs is highly uncertain.</li>
        </ul>
      </Section>

      <Section title="Part 4: The Future of Temporal Anomaly Trading" borderColor="border-gray-500" titleColor="text-gray-400">
        <p>The Reorg Raider strategy explores uncharted territory in Bitcoin trading, leveraging blockchain anomalies for potential market opportunities.</p>
      </Section>

      <Conclusion />
    </main>
  );
};

const Section = ({ title, children, borderColor, titleColor }) => (
  <div className={`mt-6 border-l-4 ${borderColor} pl-4`}>
    <h2 className={`text-xl font-semibold ${titleColor}`}>{title}</h2>
    {children}
  </div>
);

const Conclusion = () => (
  <div className="mt-8 p-4 bg-gray-800 rounded-lg">
    <h2 className="text-xl font-bold text-gray-100">Conclusion</h2>
    <p className="mt-2 text-gray-400">
      The Reorg Raider strategy is highly speculative and carries extreme risks. However, it highlights the potential for traders to exploit blockchain reorganizations in the Bitcoin market.
    </p>
  </div>
);

export default TRRPage;
