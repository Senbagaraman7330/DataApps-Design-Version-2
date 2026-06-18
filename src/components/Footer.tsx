import { motion } from 'motion/react';
import logoImg from '../assets/logo.png';

const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
  const icons = {
    website: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-[#35b0a2]">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" x2="22" y1="12" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
    phone: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-[#35b0a2]">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    address: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-[#35b0a2]">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
  };
  return <div className="mr-3 flex-shrink-0">{icons[type]}</div>;
};

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };


  return (
    <motion.footer
      className="relative flex w-full flex-col overflow-hidden bg-white text-[#102B72] border-t border-slate-100 md:flex-row min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Left Side: Content */}
      <div className="flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16 z-10">
        <div>
          {/* Logo & Slogan */}
          <motion.header className="mb-10" variants={itemVariants}>
            <div className="flex items-center">
              <img src={logoImg} alt="Data Apps Logo" className="mr-4 h-9 w-auto display-block" />
              <div>
                <p className="text-lg font-bold text-[#102B72]">DATA APPS</p>
                <p className="text-xs tracking-wider text-[#35b0a2] font-semibold">INNOVATIVE APPS &amp; ANALYTICS</p>
              </div>
            </div>
          </motion.header>

          {/* Heading, Separator & Subtitle */}
          <motion.main className="space-y-6" variants={containerVariants}>
            <motion.h2 className="text-3xl font-extrabold leading-tight text-[#102B72] md:text-5xl tracking-tight" variants={itemVariants}>
              Let's Build <br />
              <span className="bg-gradient-to-r from-[#102B72] via-[#0f75bc] to-[#35b0a2] bg-clip-text text-transparent">
                Something Great Together
              </span>
            </motion.h2>
            <motion.div className="h-1 w-20 bg-[#35b0a2] rounded-full" variants={itemVariants}></motion.div>
            <motion.p className="max-w-md text-sm sm:text-base text-slate-500 leading-relaxed" variants={itemVariants}>
              With over a decade of experience driving digital transformation, we build enterprise-grade software and AI-driven products across diverse global markets.
            </motion.p>
            <motion.div variants={itemVariants} className="pt-2">
              <a href="#touch" className="inline-flex items-center gap-2 text-base font-bold tracking-widest text-[#35b0a2] hover:text-[#35b0a2]/80 transition-colors uppercase">
                GET IN TOUCH TO EXPLORE <span>➔</span>
              </a>
            </motion.div>
          </motion.main>
        </div>

        {/* Contact Info Footer Grid */}
        <motion.div className="mt-12 pt-8 border-t border-slate-100 w-full" variants={itemVariants}>
          <div className="grid grid-cols-1 gap-6 text-xs text-slate-500 sm:grid-cols-3">
            <div className="flex items-center">
              <InfoIcon type="website" />
              <span>dataapps.com</span>
            </div>
            <div className="flex items-center">
              <InfoIcon type="phone" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <InfoIcon type="address" />
              <span>20 Fieldstone Dr, Roswell, GA</span>
            </div>
          </div>
          <div className="mt-8 text-[10px] text-slate-400 flex justify-between items-center flex-wrap gap-4">
            <span>&copy; 2026 DATA APPS. All rights reserved.</span>
            <span>Powered by React 19</span>
          </div>
        </motion.div>
      </div>

      {/* Right Side: Image with Clip Path Animation */}
      <motion.div
        className="w-full min-h-[300px] md:min-h-0 self-stretch bg-cover bg-center md:w-1/2 lg:w-2/5 relative z-0"
        style={{
          backgroundImage: `url("https://plus.unsplash.com/premium_photo-1754738812660-11ca16e5b8bd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0")`,
        }}
        initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
        whileInView={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 bg-[#102B72]/10 mix-blend-multiply" />
      </motion.div>
    </motion.footer>
  );
}
