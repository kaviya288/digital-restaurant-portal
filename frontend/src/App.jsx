  import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
  import { AnimatePresence, motion } from "framer-motion";
  import Content from "./pages/Content";
  import DateTimeSelection from "./pages/DateTimeSelection";
  import TableSelection from "./pages/TableSelection";
  import ResConfirmation from "./pages/ResConfirmation";
  import Navbar from "./pages/Navbar";
  import Takeaway from "./pages/Takeaway";
  import Menu from "./pages/Menu";
  import OrderConfirmation from "./pages/OrderConfirmation";
  import AdminLogin from "./pages/AdminLogin";
  import AdminDashboard from "./pages/AdminDashboard";
  import UpdateOrDeleteOrder from "./pages/UpdateDelete";
  import bgImage from "/images/hk-background.png";
  
  function AnimatedRoutes() {
    const location = useLocation();
    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Content /></PageWrapper>} />
          <Route path="/select-date-time" element={<PageWrapper><DateTimeSelection /></PageWrapper>} />
          <Route path="/reserve-table" element={<PageWrapper><TableSelection /></PageWrapper>} />
          <Route path="/confirmation" element={<PageWrapper><ResConfirmation /></PageWrapper>} />
          <Route path="/menu" element={<PageWrapper><Menu /></PageWrapper>} />
          <Route path="/order-takeaway" element={<PageWrapper><Takeaway /></PageWrapper>} />
          <Route path="/order-confirmation/:orderId" element={<PageWrapper><OrderConfirmation /></PageWrapper>} />
          <Route path="/admin-login" element={<PageWrapper><AdminLogin /></PageWrapper>} />
          <Route path="/admin-dashboard" element={<PageWrapper><AdminDashboard /></PageWrapper>} />
          <Route path="/update-or-delete-order" element={<PageWrapper><UpdateOrDeleteOrder /></PageWrapper>} />

        </Routes>
      </AnimatePresence>
    );
  }
  
  const PageWrapper = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
  
  function App() {
    return (
      <Router>
        <Navbar />
        <div
          className="min-h-screen bg-repeat bg-[length:100px_100px] bg-center px-8 pt-20"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <AnimatedRoutes />
        </div>
      </Router>
    );
  }
  
  export default App;