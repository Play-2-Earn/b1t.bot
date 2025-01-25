import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/MainHomePage";
import OrderFlow from "../pages/OrderFlow";
import FractalTradingGuide from "../pages/FractalTradingGuide";
import MinerMetrics from "../pages/MinerMetrics";
import LiquidityPoolsGuide from "../pages/LiquidityPoolsGuide";
import BehavioralMarketMicrostructure from "../pages/BehavioralMarketMicrostructure";
import VolatilityGuide from "../pages/VolatilityGuide";
import SubQuantumTrading from "../pages/SubQuantumTrading";
import MemespaceAnalysis from "../pages/MemespaceAnalysis";
import ChronometricArbitrage from "../pages/ChronometricArbitrage";
import AstroEconomicTrading from "../pages/AstroEconomicTrading";
import QuantumResistant from "../pages/QuantumResistant";
import IntraVolume from "../pages/IntraVolume";
import CrossBorder from "../pages/CrossBorder";
import MemeMomentum from "../pages/MemeMomentum";
import DustConsolidation from "../pages/DustConsolidation";
import NetworkTransaction from "../pages/NetworkTransaction";
import SmartMoney from "../pages/SmartMoney";
import FeeSniping from "../pages/FeeSniping";
import Echo from "../pages/Echo";
import Supply from "../pages/Supply";
import Order from "../pages/Order";
import Temporal from "../pages/Temporal";
import Sentiment from "../pages/Sentiment";
import Transaction from "../pages/Transaction";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/DecodingBitcoin" element={<OrderFlow />} />
    <Route path="/MinerMetrics" element={<MinerMetrics />} />
    <Route path="/FractalTradingGuide" element={<FractalTradingGuide />} />
    <Route path="/LiquidityPoolsGuide" element={<LiquidityPoolsGuide />} />
    <Route
      path="/BehavioralMarketMicrostructure"
      element={<BehavioralMarketMicrostructure />}
    />
    <Route path="/VolatilityGuide" element={<VolatilityGuide />} />
    <Route path="/SubQuantumTrading" element={<SubQuantumTrading />} />
    <Route path="/MemespaceAnalysis" element={<MemespaceAnalysis />} />
    <Route path="/ChronometricArbitrage" element={<ChronometricArbitrage />} />
    <Route path="/AstroEconomicTrading" element={<AstroEconomicTrading />} />
    <Route path="/QuantumResistant" element={<QuantumResistant />} />
    <Route path="/IntraVolume" element={<IntraVolume />} />
    <Route path="/CrossBorder" element={<CrossBorder />} />
    <Route path="/MemeMomentum" element={<MemeMomentum />} />
    <Route path="/DustConsolidation" element={<DustConsolidation />} />
    <Route path="/NetworkTransaction" element={<NetworkTransaction />} />
    <Route path="/SmartMoney" element={<SmartMoney />} />
    <Route path="/FeeSniping" element={<FeeSniping />} />
    <Route path="/Echo" element={<Echo />} />
    <Route path="/Supply" element={<Supply />} />
    <Route path="/Order" element={<Order />} />
    <Route path="/Temporal" element={<Temporal />} />
    <Route path="/Sentiment" element={<Sentiment />} />
    <Route path="/Transaction" element={<Transaction />} />
  </Routes>
);

export default AppRoutes;
