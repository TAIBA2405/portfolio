import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taiba Khan Faridi | AI Engineer",
  description:
    "AI Engineer specializing in production-grade AI systems, LLMs, agentic workflows, and machine learning. Based in Indore, India.",
  keywords:
    "AI Engineer, Machine Learning, LangChain, FastAPI, Python, LLMs, Agentic AI, Taiba Khan Faridi",
  openGraph: {
    title: "Taiba Khan Faridi | AI Engineer",
    description:
      "Building intelligent production-grade AI systems with Python, LLMs & agentic frameworks.",
    type: "website",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🤖</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
