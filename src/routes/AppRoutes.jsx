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
import ETOCBPPage from "../pages/ETOC";// Import the ETOCBPPage component
import CTFPPage from "../pages/CTFP";
import BCPMLAPage from "../pages/BCPM"; // Import the BCPMLAPage component
import EIDOPage from "../pages/EIDO"; 
import LHCBPage from "../pages/LHCB";
import B1TPage from "../pages/B1T";
import NOCVPage from "../pages/NOCV";
import METPPage from "../pages/METP";
import TTEPage from "../pages/TTE";
import TBCCPage from "../pages/TBCC";
import TLHSPage from "../pages/TLHS";
import TRRPage from "../pages/TRR";
import TNDNPage from "../pages/TNDN";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Content from "../pages/Content";
import Display from "../pages/Display";
import Home from "../pages/Home";
import Spam from "../pages/Spam";
import View from "../pages/View";
import ViewPage from "../pages/ViewPage";
import ContentPage from "../pages/ContentPage";
import DisplayPage from "../pages/DisplayPage";
import Page from "../pages/Page";
import MainPage from "../pages/MainPage";

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
    <Route path="/etoc" element={<ETOCBPPage />} />
    <Route path="/bcpmla" element={<BCPMLAPage />} />
    <Route path="/ctfp" element={<CTFPPage/>}/>
    <Route path="/eido" element={<EIDOPage/>}/>
    <Route path="/lhcb" element={<LHCBPage/>}/>
    <Route path="/b1t" element={<B1TPage/>}/>
    <Route path="/nocv" element={<NOCVPage/>}/>
    <Route path="/metp" element={<METPPage/>}/>
    <Route path="/tte" element={<TTEPage/>}/>
    <Route path="/tbcc" element={<TBCCPage/>}/>
    <Route path="/tlhs" element={<TLHSPage/>}/>
    <Route path="/trr" element={<TRRPage/>}/>
    <Route path="/tndn" element={<TNDNPage/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/content" element={<Content/>}/>
    <Route path="/display" element={<Display/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/spam" element={<Spam/>}/>
    <Route path="/view" element={<View/>}/>
    <Route path="/viewpage" element={<ViewPage/>}/>
    <Route path="/contentpage" element={<ContentPage/>}/>
    <Route path="/displaypage" element={<DisplayPage/>}/>
    <Route path="/page" element={<Page/>}/>
    <Route path="/mainpage" element={<MainPage/>}/>

  </Routes>
);

export default AppRoutes;
