"use client"

// Animated gradient FooterText with the same API

interface FooterTextProps {
  text: string
  fontSize?: string
  className?: string
}

export default function FooterText({ text, fontSize = "clamp(4rem, 12vw, 12rem)", className }: FooterTextProps) {
  return (
    <div className={["select-none", className].filter(Boolean).join(" ")}> 
      <span className="gradient-text font-extrabold tracking-tight" style={{ fontSize }}>
        {text}
      </span>
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(-45deg, #fb923c, #f97316, #ef4444, #f97316, #fb923c);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientShift 6s ease infinite;
          letter-spacing: -0.02em;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  )
}

export { FooterText }