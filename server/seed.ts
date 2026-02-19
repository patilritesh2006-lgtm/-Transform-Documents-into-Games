import { storage } from "./storage";

async function seed() {
  const existingContent = await storage.listGeneratedContent();
  if (existingContent.length > 0) {
    console.log("Database already seeded");
    return;
  }

  // Create a dummy upload
  const upload = await storage.createUpload({
    url: "https://example.com/dummy.pdf",
    originalName: "Solar System.pdf",
    mimeType: "application/pdf",
  });

  // Create some dummy generated content
  await storage.createGeneratedContent({
    uploadId: upload.id,
    concepts: ["Planets", "Stars", "Gravity", "Orbits"],
    quizData: [
      {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Mercury", "Mars", "Earth"],
        correctAnswer: "Mercury",
      },
      {
        question: "What is the largest planet in our solar system?",
        options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
        correctAnswer: "Jupiter",
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
      },
      {
        question: "What force keeps planets in orbit around the Sun?",
        options: ["Magnetism", "Friction", "Gravity", "Inertia"],
        correctAnswer: "Gravity",
      },
      {
        question: "Which planet has beautiful rings?",
        options: ["Mars", "Jupiter", "Saturn", "Venus"],
        correctAnswer: "Saturn",
      },
    ],
  });

  console.log("Seeding complete");
}

seed().catch(console.error);
