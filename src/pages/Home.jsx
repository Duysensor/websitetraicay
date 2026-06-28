import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import About from '../components/About';
import ContactForm from '../components/ContactForm';
import Video from '../components/Video';
import Footer from '../components/Footer';
import FloatingWidgets from '../components/FloatingWidgets';
import Toast from '../components/Toast';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white relative flex flex-col">
      {/* Toast notifications */}
      <Toast />

      {/* Navigation and Top Bar */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Slider */}
        <Hero />

        {/* Product Filtering Sections */}
        <ProductSection />

        {/* About Shop & Counter */}
        <About />

        {/* Contact and Video Section */}
        <section id="contact" className="py-20 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Left Column: Delivery Form */}
              <ContactForm />

              {/* Right Column: Video Preview */}
              <Video />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call, Zalo, Messenger, Back to top widgets */}
      <FloatingWidgets />
    </div>
  );
}
