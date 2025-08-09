"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { FuzzyText } from "@/components/ui/fuzzy-text";

interface TeamMember {
  name: string;
  imageUrl: string;
  linkedinUrl: string;
  role?: string;
}

interface AnimatedPinDemoProps {
  teamMembers?: TeamMember[];
}

const defaultTeamMembers: TeamMember[] = [
  {
    name: "John Doe",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedinUrl: "https://linkedin.com/in/johndoe",
    role: "Creative Director"
  },
  {
    name: "Jane Smith",
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedinUrl: "https://linkedin.com/in/janesmith",
    role: "Strategy Lead"
  },
  {
    name: "Mike Johnson",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    linkedinUrl: "https://linkedin.com/in/mikejohnson",
    role: "Tech Lead"
  }
];

export function AnimatedPinDemo({ teamMembers = defaultTeamMembers }: AnimatedPinDemoProps) {
  return (
    <div className="min-h-[40rem] w-full flex flex-col items-center justify-center bg-black py-20 mt-20">
      <div className="text-center mb-16">
        <div className="flex justify-center mb-4">
          <FuzzyText 
            fontSize="3.5rem"
            fontWeight={700}
            color="#fb923c"
            className="text-center"
          >
            Meet Our Team
          </FuzzyText>
        </div>
        <p className="text-orange-300 max-w-2xl">
          The creative minds behind our success. Connect with our team members on LinkedIn.
        </p>
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-8 max-w-6xl">
        {teamMembers.map((member, index) => (
          <PinContainer
            key={index}
            title="Connect"
            href={member.linkedinUrl}
            imageUrl={member.imageUrl}
            name={member.name}
            className="w-[20rem] h-[20rem]"
          >
            {/* Fallback content if no image */}
            <div className="flex flex-col items-center justify-center h-full text-white">
              <div className="w-24 h-24 bg-orange-600 rounded-full mb-4 flex items-center justify-center border-2 border-orange-400">
                <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
              </div>
              <h3 className="text-lg font-semibold text-orange-100">{member.name}</h3>
              {member.role && <p className="text-sm text-orange-300">{member.role}</p>}
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
}