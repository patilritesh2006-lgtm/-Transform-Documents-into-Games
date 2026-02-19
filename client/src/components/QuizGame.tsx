import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight, Trophy, RefreshCw } from "lucide-react";
import confetti from "canvas-confetti";
import type { QuizQuestion } from "@shared/schema";

interface QuizGameProps {
  questions: QuizQuestion[];
  onReplay: () => void;
}

export function QuizGame({ questions, onReplay }: QuizGameProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / questions.length) * 100;

  useEffect(() => {
    if (showResult && score === questions.length) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [showResult, score, questions.length]);

  const handleOptionClick = (option: string) => {
    if (isAnswered) return;
    
    setSelectedOption(option);
    setIsAnswered(true);
    
    if (option === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#34D399', '#10B981'] // Green colors
      });
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl mx-auto bg-white rounded-[2rem] shadow-xl p-8 text-center border-4 border-primary/20"
      >
        <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy className="w-12 h-12 text-accent" />
        </div>
        
        <h2 className="text-4xl font-bold mb-4 font-fredoka">Game Over!</h2>
        <p className="text-xl text-muted-foreground mb-8">
          You scored <span className="font-bold text-primary">{score}</span> out of <span className="font-bold">{questions.length}</span>
        </p>
        
        <div className="flex justify-center gap-4">
          <button
            onClick={onReplay}
            className="flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <RefreshCw className="w-5 h-5" />
            Play Again
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8 bg-muted h-4 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-secondary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          className="bg-white rounded-[2rem] shadow-xl p-8 border border-border/50"
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-bold tracking-wider text-muted-foreground uppercase">
              Question {currentQuestionIndex + 1}/{questions.length}
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold">
              Score: {score}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground font-fredoka leading-tight">
            {currentQuestion.question}
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedOption === option;
              const isCorrect = option === currentQuestion.correctAnswer;
              
              let buttonStyle = "border-2 border-border hover:border-primary/50 hover:bg-primary/5";
              if (isAnswered) {
                if (isCorrect) buttonStyle = "border-2 border-green-500 bg-green-50 text-green-700";
                else if (isSelected && !isCorrect) buttonStyle = "border-2 border-red-500 bg-red-50 text-red-700";
                else buttonStyle = "border-2 border-gray-100 opacity-50";
              }

              return (
                <motion.button
                  key={idx}
                  whileHover={!isAnswered ? { scale: 1.02 } : {}}
                  whileTap={!isAnswered ? { scale: 0.98 } : {}}
                  onClick={() => handleOptionClick(option)}
                  disabled={isAnswered}
                  className={`
                    relative w-full p-5 rounded-xl text-left font-medium text-lg transition-all duration-200
                    ${buttonStyle}
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {isAnswered && isCorrect && <CheckCircle2 className="w-6 h-6 text-green-500" />}
                    {isAnswered && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-500" />}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 flex justify-end"
            >
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-xl font-bold hover:bg-foreground/90 transition-colors"
              >
                {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
