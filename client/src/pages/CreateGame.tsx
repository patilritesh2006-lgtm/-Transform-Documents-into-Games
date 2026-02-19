import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { UploadDropzone } from "@/components/UploadDropzone";
import { useCreateUpload, useGenerateContent } from "@/hooks/use-content";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export default function CreateGame() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const createUploadMutation = useCreateUpload();
  const generateContentMutation = useGenerateContent();

  const handleFileSelect = async (file: File) => {
    setIsProcessing(true);
    try {
      // 1. Upload File
      const upload = await createUploadMutation.mutateAsync(file);
      
      // 2. Generate Content
      const content = await generateContentMutation.mutateAsync(upload.id);
      
      toast({
        title: "Success! Game Created",
        description: "Your quiz is ready to play.",
      });

      // 3. Redirect to Game
      setLocation(`/play/${content.id}`);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Something went wrong while creating your game. Please try again.",
        variant: "destructive"
      });
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 flex flex-col items-center justify-center blob-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl text-center space-y-8"
      >
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-fredoka">
            Create New <span className="text-primary">Game</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Upload your study material and let our AI magic handle the rest.
          </p>
        </div>

        <div className="bg-white/50 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-xl border border-white/50">
          <UploadDropzone 
            onFileSelect={handleFileSelect} 
            isUploading={isProcessing} 
          />
        </div>

        {isProcessing && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-2"
          >
            <p className="text-sm text-muted-foreground">
              Please wait, this might take a few seconds...
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
