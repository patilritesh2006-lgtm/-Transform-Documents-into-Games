import { useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import { useContent } from "@/hooks/use-content";
import { QuizGame } from "@/components/QuizGame";
import { Loader2, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function PlayGame() {
  const [, params] = useRoute("/play/:id");
  const [, setLocation] = useLocation();
  const id = params ? parseInt(params.id) : 0;
  
  const { data: content, isLoading, error } = useContent(id);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
        <p className="text-muted-foreground font-medium">Loading your game...</p>
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-2xl font-bold mb-2">Game Not Found</h2>
        <p className="text-muted-foreground mb-6">We couldn't load the game you were looking for.</p>
        <button 
          onClick={() => setLocation('/library')} 
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
        >
          Back to Library
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 md:p-8 bg-gray-50/50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button 
            onClick={() => setLocation('/library')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Library
          </button>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
            <div>
              <h1 className="text-3xl font-bold font-fredoka mb-2">Quiz Time!</h1>
              <div className="flex flex-wrap gap-2">
                {content.concepts.map((concept, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-white border border-gray-200 rounded-md text-gray-600">
                    {concept}
                  </span>
                ))}
              </div>
            </div>
            <div className="px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-100 font-bold text-primary">
              {content.quizData.length} Questions
            </div>
          </div>
        </motion.div>

        <QuizGame 
          questions={content.quizData} 
          onReplay={() => window.location.reload()} 
        />
      </div>
    </div>
  );
}
