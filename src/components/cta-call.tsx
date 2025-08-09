import React from 'react';
import { MediaButton } from "@/components/ui/media-button";
import { FooterText } from "@/components/footer-text";
import Link from 'next/link';

export default function CTA() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10 bg-black relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-950/20 via-black to-red-950/20"></div>
      
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-red-500/8 to-orange-500/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-orange-400/5 to-red-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      
      {/* Content */}
      <div className="flex justify-center mb-8 relative z-10">
        <FooterText text="Become as Powerful as GOKU" fontSize="clamp(2rem, 6vw, 3rem)" />
      </div>
      {/* <MediaButton
        label="Button (Video)"
        mediaUrl="https://www.w3schools.com/howto/rain.mp4"
      /> */}
      <div className="relative z-10">
        <Link href="/ContactUs" className="no-underline">
          <MediaButton
            label="Connect Now"
            mediaUrl="https://i.pinimg.com/originals/71/fb/91/71fb9176f16357776802391df14b4e40.gif"
          />
        </Link>
      </div>
    </div>
  );
}
