import Footer from "@/components/ui/animated-footer";

const DemoOne = () => {
  return  <Footer
          leftLinks={[
            { href: "/terms", label: "Terms & policies" },
            { href: "/privacy-policy", label: "Privacy policy" },
          ]}
          rightLinks={[
            { href: "/AboutUs", label: "About" },
            { href: "/AboutUs", label: "Careers" },
            { href: "https://x.com/taher_max_", label: "Twitter" },
            { href: "https://www.instagram.com/taher_max_", label: "Instagram" }
          ]}
          copyrightText="Parasocial 2025. All Rights Reserved"
          barCount={23}
        />;
};

export { DemoOne };