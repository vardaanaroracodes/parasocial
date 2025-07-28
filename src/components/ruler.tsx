import { RulerCarousel, type CarouselItem } from "@/components/ui/ruler-caraousel";

export function D4Carousel() {
  const originalItems: CarouselItem[] = [
    { id: 1, title: "Creator Matchmaking" },
    { id: 2, title: "Contracting" },
    { id: 3, title: "Smart Strategies" },
    { id: 4, title: "Trendspotting" },
    { id: 5, title: "Fan Building" },
    { id: 6, title: "Meme Game OP" },
    { id: 7, title: "E-2-E Campaigns" },
    { id: 8, title: "Meme Game OP" },
    { id: 9, title: "Smart Strategies" },

  ];
  return (
    <div className="min-h-screen overflow-hidden flex items-center justify-center">
      <RulerCarousel originalItems={originalItems} />
    </div>
  );
}
