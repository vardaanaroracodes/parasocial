import CenteredLogoInfo from "./centered-logo-info"
import { Star, Sparkles, Zap, CheckCircle } from "lucide-react"

const CenteredLogoDemo = () => {
  const paraInfluenceCards = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21V19C23 18.1645 22.7155 17.3541 22.2094 16.6972C21.7032 16.0403 20.9991 15.5727 20.2 15.3654" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55343C18.7122 5.25615 19.0078 6.11937 19.0078 7.005C19.0078 7.89063 18.7122 8.75385 18.1676 9.45657C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-primary" />,
      title: "Influence",
      description: "Connecting brands with authentic influencers who resonate with your target audience",
      position: "left" as const,
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-primary" />,
      title: "Content",
      description: "Creating compelling content that tells your brand story in authentic and engaging ways",
      position: "right" as const,
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      secondaryIcon: <Zap className="w-4 h-4 absolute -top-1 -right-1 text-primary" />,
      title: "Strategy",
      description: "Data-driven strategies that amplify your brand's reach and impact across social platforms",
      position: "left" as const,
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="23 7 16 12 23 17 23 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-primary" />,
      title: "Production",
      description: "In-house production capabilities delivering high-quality creative assets at competitive costs",
      position: "right" as const,
    },
  ]

  return (
    <CenteredLogoInfo
      title="What Makes Us Different"
      subtitle="Influencer-first approach with authentic storytelling and social-age brand building"
      logoUrl="/parasocial.svg"
      logoAlt="Parasocial Logo"
      infoItems={paraInfluenceCards}
    />
  )
}

export { CenteredLogoDemo } 