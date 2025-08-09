import { HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover } from "@/components/blocks/animated-slideshow"
import { FooterText } from "@/components/footer-text"

  const SLIDES = [
  {
    id: "slide-1",
    title: "Para-Influence",
    imageUrl:
      "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2486&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-2",
    title: "Para-IP's",
    imageUrl:
      "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-6",
    title: "Para-Studios",
    imageUrl:
      "https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-3",
    title: "Para-Commerce",
    imageUrl:
      "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
//   {
//     id: "slide-4",
//     title: "SEO optimization",
//     imageUrl:
//       "https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
]

export function HoverSliderDemo () {
    return (
        <div className="relative bg-black overflow-hidden">
          {/* Background orbs */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-br from-orange-500/30 to-red-500/20 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-gradient-to-br from-red-500/20 to-orange-500/30 rounded-full blur-sm animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-gradient-to-br from-orange-400/40 to-red-400/20 rounded-full blur-sm animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-gradient-to-br from-red-400/20 to-orange-500/30 rounded-full blur-sm animate-pulse delay-500"></div>
          
        <HoverSlider className="min-h-svh place-content-center p-6 md:px-12 bg-transparent text-orange-100 relative z-10">
      <div className="mb-8 flex justify-center">
        <FooterText text="Our Services" fontSize="clamp(2rem, 6vw, 3rem)" />
      </div>
      <div className="flex flex-wrap items-center justify-evenly gap-6 md:gap-12">
        <div className="flex  flex-col space-y-2 md:space-y-4   ">
          {SLIDES.map((slide, index) => (
            <TextStaggerHover
              key={slide.title}
              index={index}
              className="cursor-pointer text-4xl font-bold uppercase tracking-tighter text-orange-200 hover:text-orange-400 transition-colors duration-300"
              text={slide.title}
            />
          ))}
        </div>
        <HoverSliderImageWrap>
          {SLIDES.map((slide, index) => (
            <div key={slide.id} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-transparent to-orange-950/20 pointer-events-none z-10"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg blur opacity-50"></div>
              <HoverSliderImage
                index={index}
                imageUrl={slide.imageUrl}
                src={slide.imageUrl}
                alt={slide.title}
                className="size-full max-h-96 object-cover rounded-lg border border-orange-900/30 relative z-20"
                loading="eager"
                decoding="async"
              />
            </div>
          ))}
        </HoverSliderImageWrap>
      </div>
    </HoverSlider>
    </div>
    )
}