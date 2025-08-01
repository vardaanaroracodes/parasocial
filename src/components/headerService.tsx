import { ParticleTextEffect } from "@/components/ui/particleeffect";

interface DemoOneProps {
  words?: string[];
  subheading?: string;
}

export default function DemoOne({ 
  words = ["Para-Influence"], 
  subheading = "Pragmatically Influencing the Future" 
}: DemoOneProps) {
  return (
    <ParticleTextEffect 
      words={words}
      subheading={subheading}
    />
  );
}
