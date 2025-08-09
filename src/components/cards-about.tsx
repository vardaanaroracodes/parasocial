import { ContainerScroll, CardSticky } from "@/components/blocks/cards-stacks"

const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "Big Picture Thinking",
    description:
      "We see beyond the immediate campaign to understand your brand's ecosystem, market dynamics, and long-term vision. Our strategic approach connects every creative decision to your broader business objectives, ensuring sustainable growth and meaningful brand impact.",
  },
  {
    id: "process-2",
    title: "Fast-Twitch Execution",
    description:
      "Speed meets precision in our execution model. We've streamlined our processes to deliver rapid-fire creative solutions without compromising quality. From concept to launch, we move at the pace of opportunity, turning ideas into market-ready campaigns in record time.",
  },
  {
    id: "process-3",
    title: "Energy that never drops",
    description:
      "Our team operates with relentless momentum, maintaining peak creative energy throughout every project phase. We bring the same passion to day 100 as we do to day 1, ensuring your campaigns benefit from sustained innovation and unwavering attention to detail.",
  },
  {
    id: "process-4",
    title: "Focus on impact & ROI",
    description:
      "Every creative decision is measured against real business outcomes. We don't just create beautiful work—we engineer campaigns that drive measurable results, optimize performance metrics, and deliver tangible returns on your marketing investment.",
  },
  {
    id: "process-5",
    title: "Bold Ideas, Better Results.",
    description:
      "We push creative boundaries while staying grounded in strategy. Our bold concepts aren't just attention-grabbing—they're carefully crafted to resonate with your audience, differentiate your brand, and deliver superior performance that exceeds expectations.",
  },
]

const WORK_PROJECTS = [
  {
    id: "work-project-3",
    title: "YCF DEV",
    services: ["Portfolio", "Partnership", "UI UX Design"],
    imageUrl:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "work-project-1",
    title: "Stridath Ecommerce",
    services: ["E-Commerce", "Branding", "UI UX Design", "Development"],
    imageUrl:
      "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "work-project-2",
    title: "Marketing Agency",
    services: ["Partnership", "UI UX Design", "Development"],
    imageUrl:
      "https://images.unsplash.com/photo-1683803055067-1ca1c17cb2b9?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

const ACHIEVEMENTS = [
  {
    id: "achivement-1",
    title: "4",
    description: "site of the day",
    bg: "rgb(58,148,118)",
  },
  {
    id: "achivement-2",
    title: "60+",
    description: "website created",
    bg: "rgb(195,97,158)",
  },
  {
    id: "achivement-3",
    title: "5+",
    description: "years of experience",
    bg: "rgb(202,128,53)",
  },
  {
    id: "achivement-4",
    title: "6+",
    description: "component created",
    bg: "rgb(135,95,195)",
  },
]
const Process = ({ theme = "indigo" }: { theme?: "indigo" | "orange" | "red" }) => {
  const themeColors = {
    indigo: {
      accent: "text-indigo-400",
      card: "border-indigo-700 bg-gray-900/50",
      number: "text-indigo-400"
    },
    orange: {
      accent: "text-orange-400",
      card: "border-orange-700 bg-gray-900/50",
      number: "text-orange-400"
    },
    red: {
      accent: "text-red-400",
      card: "border-red-700 bg-gray-900/50", 
      number: "text-red-400"
    }
  };

  return (
    <div className="min-h-svh place-content-center bg-black px-6 pt-20 text-stone-50 xl:px-12">
      <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12">
        <div className="left-0 top-0 md:sticky md:h-svh md:py-12">
          <h5 className=" text-xs uppercase tracking-wide text-stone-300">What Makes Us Different?</h5>
          <h2 className="mb-6 mt-4 text-4xl font-bold tracking-tight">
            We got everything {" "}
            <span className={themeColors[theme].accent}>what you need </span> 
          </h2>
          <p className="max-w-prose text-sm text-stone-300">
            At Parasocial, we&apos;ve teamed up with the biggest names across Broadcast, FMCG, Tech, IT, QSR, Startups, Handsets, Telecom, RTE- basically if it exists on a shelf or a screen, we've probably worked on it.From startegy to execution we&apos;ve launched scroll-stopping campaigns that aren't just creative- they&apos;re efficient, effective and ROI-Slaying.
          </p>
        </div>
        <ContainerScroll className="min-h-[400vh] space-y-8 py-12">
          {PROCESS_PHASES.map((phase, index) => (
            <CardSticky
              key={phase.id}
              index={index + 2}
              className={`rounded-2xl border p-8 shadow-md backdrop-blur-md ${themeColors[theme].card}`}
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="my-6 text-2xl font-bold tracking-tighter">
                  {phase.title}
                </h2>
                <h3 className={`text-2xl font-bold ${themeColors[theme].number}`}>
                  {String(index + 1).padStart(2, "0")}
                </h3>
              </div>

              <p className="text-stone-300">{phase.description}</p>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </div>
  )
}

const Work = () => {
  return (
    <div className="container min-h-svh place-content-center bg-slate-900 p-12 text-stone-50">
      <div className="text-center">
        <h5 className=" text-xs uppercase tracking-wide">latest projects</h5>
        <h2 className="mb-4 mt-1 text-4xl font-bold tracking-tight">
          Get a glimpse of <span className="text-indigo-500">our work</span>
        </h2>
        <p className="mx-auto max-w-prose text-sm text-muted/80">
          From ecommerce to startup landing pages and singl/multi page websites,
          building fully responsive and functional website that showcase your
          product and your unique identity.
        </p>
      </div>
      <ContainerScroll className="min-h-[500vh] py-12">
        {WORK_PROJECTS.map((project, index) => (
          <CardSticky
            key={project.id}
            index={index}
            className="w-full overflow-hidden rounded-sm border border-x-indigo-900 border-y-indigo-500 bg-indigo-950"
            incrementY={60}
            incrementZ={5}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
              <h2 className="text-2xl font-bold tracking-tighter">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-1">
                {project.services.map((service) => (
                  <div
                    key={service}
                    className="flex rounded-xl bg-indigo-900 px-2 py-1"
                  >
                    <span className="text-xs tracking-tighter text-muted">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <img
              className="size-full object-cover"
              width="100%"
              height="100%"
              src={project.imageUrl}
            />
          </CardSticky>
        ))}
      </ContainerScroll>
    </div>
  )
}

const Achievements = () => {
  return (
    
      <ContainerScroll className="min-h-[400vh] place-items-center space-y-8 p-12 text-center text-zinc-50">
        {ACHIEVEMENTS.map((achievement, index) => (
          <CardSticky
            key={achievement.id}
            incrementY={20}
            index={index + 2}
            className="flex h-72 w-[420px] flex-col place-content-center justify-evenly rounded-2xl  border border-current p-8 shadow-md"
            style={{ rotate: index + 2, background: achievement.bg }}
          >
            <h1 className="text-left text-6xl font-semibold opacity-80">
              {achievement.title}
            </h1>
            <div className="place-items-end text-right">
              <h3 className="max-w-[10ch] text-wrap  text-4xl font-semibold capitalize tracking-tight">
                {achievement.description}
              </h3>
            </div>
          </CardSticky>
        ))}
      </ContainerScroll>
    
  )
}
export { Process, Work, Achievements }
