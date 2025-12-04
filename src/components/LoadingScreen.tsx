import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="relative">
        {/* Animated Line Path */}
        <svg
          width="300"
          height="100"
          viewBox="0 0 300 100"
          className="overflow-visible"
        >
          {/* Line path that draws */}
          <path
            d="M 0 50 Q 30 50 50 50"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              strokeDasharray: 100,
              strokeDashoffset: 100 - progress,
            }}
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(0, 80%, 65%)" />
              <stop offset="100%" stopColor="hsl(320, 80%, 70%)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Loading Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-8">
          <span 
            className="text-4xl md:text-5xl font-light tracking-wide"
            style={{
              fontFamily: "'Dancing Script', cursive, sans-serif",
              background: "linear-gradient(90deg, hsl(0, 80%, 65%), hsl(320, 80%, 70%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            loading
          </span>
        </div>

        {/* Progress percentage */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
          <span className="text-xs font-mono text-muted-foreground">
            {progress}%
          </span>
        </div>
      </div>

      {/* Bottom progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary">
        <div 
          className="h-full transition-all duration-100 ease-out"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, hsl(0, 80%, 65%), hsl(320, 80%, 70%))",
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
