import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';
import BookingModal from './components/BookingModal';
import DigitalPassModal from './components/DigitalPassModal';

import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Trainers from './pages/Trainers';
import Membership from './pages/Membership';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  const [toast, setToast] = useState(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingClass, setSelectedBookingClass] = useState(null);
  const [passModalOpen, setPassModalOpen] = useState(false);
  const [passData, setPassData] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    // Auto-dismiss after 4 seconds
    setTimeout(() => setToast(null), 4000);
  };

  const handleOpenBookingModal = (clsItem = null) => {
    setSelectedBookingClass(clsItem);
    setBookingModalOpen(true);
  };

  const handleOpenPassModal = (data) => {
    setPassData(data);
    setPassModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="kp-app">

        {/* Global Navbar */}
        <Navbar onOpenBookingModal={handleOpenBookingModal} />

        {/* Page Routes */}
        <main className="kp-main">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenBookingModal={handleOpenBookingModal}
                  onOpenPassModal={handleOpenPassModal}
                  onShowToast={showToast}
                />
              }
            />
            <Route
              path="/schedule"
              element={
                <Schedule
                  onOpenBookingModal={handleOpenBookingModal}
                  onShowToast={showToast}
                />
              }
            />
            <Route
              path="/trainers"
              element={
                <Trainers onShowToast={showToast} />
              }
            />
            <Route
              path="/membership"
              element={
                <Membership
                  onOpenPassModal={handleOpenPassModal}
                  onShowToast={showToast}
                />
              }
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onShowToast={showToast} />

        {/* Global Modals */}
        <BookingModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          initialClass={selectedBookingClass}
          onShowToast={showToast}
        />

        <DigitalPassModal
          isOpen={passModalOpen}
          onClose={() => setPassModalOpen(false)}
          passData={passData}
          onShowToast={showToast}
        />

        {/* Toast Notifications */}
        <Toast toast={toast} onClose={() => setToast(null)} />

      </div>
    </Router>
  );
}
