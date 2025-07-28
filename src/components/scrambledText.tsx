
import React from 'react';
import InteractiveScrambledText from '@/components/ui/interactive-scrambled-text';


interface InteractiveScrambledTextDemoProps {
  para: React.ReactNode;
}

function InteractiveScrambledTextDemo(props: InteractiveScrambledTextDemoProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-8 dark:bg-black transition-colors duration-300">
      <div className="w-full max-w-4xl">
        <InteractiveScrambledText
          radius={120}
          duration={1.5}
          speed={0.4}
          scrambleChars={'.:'}
        >
            {props.para}
        </InteractiveScrambledText>
      </div>
    </main>
  );
}

export default InteractiveScrambledTextDemo;