import { Link } from "wouter";
import { ArrowRight, BrainCircuit, Gamepad2, Upload } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4 blob-bg relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.div variants={item} className="inline-block mb-6">
          <span className="px-4 py-2 rounded-full bg-white/50 backdrop-blur border border-white/50 text-sm font-semibold text-primary shadow-sm">
            ✨ Transform Documents into Games
          </span>
        </motion.div>

        <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold mb-6 font-fredoka leading-tight">
          Turn Boring PDFs into <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary">
            Fun Quizzes
          </span>
        </motion.h1>

        <motion.p variants={item} className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Upload any study material, notes, or textbook chapters. Our AI instantly creates interactive games to help you master the topic.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/create">
            <button className="px-8 py-4 rounded-2xl bg-primary text-white font-bold text-lg shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Start Creating
            </button>
          </Link>
          <Link href="/library">
            <button className="px-8 py-4 rounded-2xl bg-white text-foreground font-bold text-lg border-2 border-transparent hover:border-primary/10 hover:bg-gray-50 transition-all flex items-center gap-2">
              <Gamepad2 className="w-5 h-5" />
              Browse Library
            </button>
          </Link>
        </motion.div>

        {/* Feature Grid */}
        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {[
            {
              icon: Upload,
              title: "Upload Anything",
              desc: "PDFs, images, or notes - we handle it all.",
              color: "text-blue-500 bg-blue-50"
            },
            {
              icon: BrainCircuit,
              title: "AI Analysis",
              desc: "Smart extraction of key concepts and facts.",
              color: "text-purple-500 bg-purple-50"
            },
            {
              icon: Gamepad2,
              title: "Play & Learn",
              desc: "Interactive quizzes that make learning stick.",
              color: "text-green-500 bg-green-50"
            }
          ].map((feature, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white/60 backdrop-blur border border-white/50 shadow-lg hover:shadow-xl transition-all">
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
