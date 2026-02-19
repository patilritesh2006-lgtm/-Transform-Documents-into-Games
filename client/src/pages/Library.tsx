import { Link } from "wouter";
import { useContentList } from "@/hooks/use-content";
import { motion } from "framer-motion";
import { Calendar, Gamepad2, Loader2, Play } from "lucide-react";
import { format } from "date-fns";

export default function Library() {
  const { data: contents, isLoading, error } = useContentList();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-2xl font-bold mb-2">Oops! Something went wrong</h2>
        <p className="text-muted-foreground mb-4">We couldn't load your library.</p>
        <button onClick={() => window.location.reload()} className="px-4 py-2 bg-primary text-white rounded-lg">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 md:p-8 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-fredoka mb-2">Your Library</h1>
            <p className="text-muted-foreground">Manage and replay your generated quizzes.</p>
          </div>
          <Link href="/create">
            <button className="px-6 py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all">
              + Create New
            </button>
          </Link>
        </div>

        {contents && contents.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gamepad2 className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">No games yet</h3>
            <p className="text-muted-foreground mb-6">Create your first game to see it here!</p>
            <Link href="/create">
              <button className="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors">
                Get Started
              </button>
            </Link>
          </div>
        ) : (
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {contents?.map((content) => (
              <motion.div 
                key={content.id} 
                variants={item}
                className="group bg-white rounded-3xl p-6 border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative blob on hover */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                      <Gamepad2 className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-600 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {content.createdAt && format(new Date(content.createdAt), 'MMM d, yyyy')}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 line-clamp-1 font-fredoka">
                    Quiz #{content.id}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {content.concepts.slice(0, 3).map((concept, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-secondary/10 text-secondary-foreground/80 rounded-md font-medium">
                        {concept}
                      </span>
                    ))}
                    {content.concepts.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded-md font-medium">
                        +{content.concepts.length - 3}
                      </span>
                    )}
                  </div>

                  <Link href={`/play/${content.id}`}>
                    <button className="w-full py-3 rounded-xl bg-gray-50 hover:bg-primary hover:text-white text-gray-700 font-bold transition-all flex items-center justify-center gap-2 group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                      <Play className="w-4 h-4 fill-current" />
                      Play Now
                    </button>
                  </Link>
                  
                  {/* Default state button (visible when not hovering) */}
                  <div className="absolute bottom-6 left-6 right-6 transition-all group-hover:opacity-0 group-hover:translate-y-2">
                     <p className="text-sm text-muted-foreground">
                       {content.quizData.length} Questions
                     </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
