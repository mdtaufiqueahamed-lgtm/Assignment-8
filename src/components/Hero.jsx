// "use client"
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { FaArrowRight, FaSearch } from 'react-icons/fa'; 
// import { GiCow } from 'react-icons/gi';

// const Hero = () => {
//   return (
//     <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
      
//       {/* Background Image with Overlay */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ 
//           backgroundImage: "url('https://images.unsplash.com/photo-1527231264903-88863f699042?q=80&w=2000&auto=format&fit=crop')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50"></div>
//       </div>

//       {/* Main Content Area */}
//       <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center justify-center text-center text-white">
        
//         {/* Animated Badge */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="flex items-center gap-2 bg-green-600/80 backdrop-blur-md px-4 py-2 rounded-full mb-8 shadow-xl"
//         >
//           <GiCow className="text-2xl text-yellow-300" />
//           <span className="text-sm md:text-base font-bold uppercase tracking-wider">
//             সেরা কোরবানি হাট ২০২৬
//           </span>
//         </motion.div>

//         {/* Headline */}
//         <motion.h1 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="text-4xl md:text-7xl font-black mb-6 leading-tight"
//         >
//           আপনার পছন্দের পশু কিনুন <br /> 
//           <span className="text-green-400 underline decoration-yellow-400">এক ক্লিকেই ঘরে বসে</span>
//         </motion.h1>
        
//         {/* Subtext */}
//         <p 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl"
//         >
//           হাটে যাওয়ার ভোগান্তি ছাড়াই সরাসরি খামার থেকে সুস্থ ও সবল গরু-ছাগল সংগ্রহ করুন। আমরা দিচ্ছি শতভাগ আস্থার নিশ্চয়তা।
//         </p>
        
//         {/* Buttons - Centered and Flex */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.6 }}
//           className="flex flex-col md:flex-row items-center justify-center gap-5 w-full"
//         >
//           <Link 
//             href="/animals" 
//             className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white text-lg font-bold px-10 py-4 rounded-xl transition-all w-full md:w-auto shadow-lg"
//           >
//             <FaSearch />
//             পশুগুলো দেখুন
//           </Link>

//           <Link 
//             href="/login" 
//             className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white/50 text-lg font-bold px-10 py-4 rounded-xl transition-all w-full md:w-auto"
//           >
//             লগইন করুন
//             <FaArrowRight />
//           </Link>
//         </motion.div>
//       </div>

//     </section>
//   );
// };

// export default Hero;