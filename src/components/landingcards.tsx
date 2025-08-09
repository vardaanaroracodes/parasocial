import { 
  CardCurtainReveal,
  CardCurtainRevealBody,
  CardCurtainRevealDescription,
  CardCurtainRevealFooter,
  CardCurtainRevealTitle,
  CardCurtain } from "@/components/ui/card-curtain-reveal"

import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export const CardCurtainRevealDemo = (text: string,  title: string) => {
  return (
    <div className="place-content-center place-items-center">
      <CardCurtainReveal className="h-[560px] w-96 border border-orange-900/30 bg-gradient-to-br from-black via-red-950 to-orange-950 text-orange-100 shadow-lg shadow-orange-900/20">
        <CardCurtainRevealBody className="">
          <CardCurtainRevealTitle className="text-3xl font-medium tracking-tight text-orange-50">
            {title}
          </CardCurtainRevealTitle>
          <CardCurtainRevealDescription className="my-4 text-orange-200">
            <p>
              {text}
            </p>
          </CardCurtainRevealDescription>
          <Button
            variant={"secondary"}
            size={"icon"}
            className="aspect-square rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 hover:bg-orange-500/30 hover:text-orange-100 transition-colors"
          >
            <ArrowUpRight />
          </Button>

          <CardCurtain className="bg-gradient-to-br from-orange-500/5 to-red-500/5" />
        </CardCurtainRevealBody>

        <CardCurtainRevealFooter className="mt-auto">
          <img
            width="100%"
            height="100%"
            alt="Tokyo street"
            className="opacity-80"
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </CardCurtainRevealFooter>
      </CardCurtainReveal>
    </div>
  )
}

