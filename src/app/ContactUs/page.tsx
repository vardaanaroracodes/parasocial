// "use client"

// import { useState } from "react"
// import { AnimatedGroup } from "@/components/ui/animated-group"
// import { Button } from "@/components/ui/button"
// import { Mail, Phone, MapPin, Send, User, MessageSquare, Building } from "lucide-react"

// const transitionVariants = {
//   item: {
//     hidden: {
//       opacity: 0,
//       filter: 'blur(12px)',
//       y: 12,
//     },
//     visible: {
//       opacity: 1,
//       filter: 'blur(0px)',
//       y: 0,
//       transition: {
//         type: 'spring' as const,
//         bounce: 0.3,
//         duration: 1.5,
//       },
//     },
//   },
// }

// const contactInfo = [
//   {
//     icon: Mail,
//     title: "Email Us",
//     description: "Drop us a line anytime",
//     value: "hello@parasocial.agency",
//     href: "mailto:hello@parasocial.agency"
//   },
//   {
//     icon: Phone,
//     title: "Call Us",
//     description: "Let's talk about your project",
//     value: "+91 98765 43210",
//     href: "tel:+919876543210"
//   },
//   {
//     icon: MapPin,
//     title: "Visit Us",
//     description: "Come say hi in person",
//     value: "Mumbai, India",
//     href: "#"
//   }
// ]

// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     subject: '',
//     message: '',
//     service: ''
//   })

//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)
    
//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 2000))
    
//     // Reset form
//     setFormData({
//       name: '',
//       email: '',
//       company: '',
//       subject: '',
//       message: '',
//       service: ''
//     })
    
//     setIsSubmitting(false)
//     alert('Thank you! Your message has been sent. We\'ll get back to you soon.')
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Hero Section */}
//       <section className="relative pt-32 pb-16 overflow-hidden">
//         <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
        
//         <div className="mx-auto max-w-7xl px-6">
//           <div className="text-center">
//             <AnimatedGroup variants={transitionVariants}>
//               <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 text-sm mb-8">
//                 <MessageSquare className="w-4 h-4" />
//                 <span>Get In Touch</span>
//               </div>
              
//               <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
//                 Let&apos;s Build Something <span className="text-blue-400">Epic</span> Together
//               </h1>
              
//               <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
//                 Ready to set the feed on fire? Drop us a line and let&apos;s turn your brand into a scroll-stopping sensation.
//               </p>
              
//               <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
//                 Whether you need Para-Commerce, Para-Influence, or Para-Studio magic, we&apos;re here to make it happen.
//               </p>
//             </AnimatedGroup>
//           </div>
//         </div>
//       </section>

//       {/* Contact Info Cards */}
//       <section className="py-16">
//         <div className="mx-auto max-w-7xl px-6">
//           <AnimatedGroup variants={transitionVariants}>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//               {contactInfo.map((info, index) => (
//                 <div key={index} className="bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 text-center hover:border-blue-500/50 transition-colors">
//                   <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
//                     <info.icon className="w-8 h-8 text-blue-400" />
//                   </div>
//                   <h3 className="text-xl font-bold mb-2">{info.title}</h3>
//                   <p className="text-muted-foreground mb-4">{info.description}</p>
//                   <a 
//                     href={info.href}
//                     className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
//                   >
//                     {info.value}
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </AnimatedGroup>
//         </div>
//       </section>

//       {/* Contact Form */}
//       <section className="py-16 bg-gradient-to-br from-gray-900/50 to-black/50">
//         <div className="mx-auto max-w-4xl px-6">
//           <AnimatedGroup variants={transitionVariants}>
//             <div className="bg-gradient-to-br from-black/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700">
//               <div className="text-center mb-12">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4">Send Us a Message</h2>
//                 <p className="text-lg text-muted-foreground">
//                   Tell us about your project and we&apos;ll get back to you within 24 hours
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {/* Name Field */}
//                   <div className="space-y-2">
//                     <label htmlFor="name" className="text-sm font-medium text-gray-300 flex items-center gap-2">
//                       <User className="w-4 h-4" />
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
//                       placeholder="Your full name"
//                     />
//                   </div>

//                   {/* Email Field */}
//                   <div className="space-y-2">
//                     <label htmlFor="email" className="text-sm font-medium text-gray-300 flex items-center gap-2">
//                       <Mail className="w-4 h-4" />
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
//                       placeholder="your@email.com"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {/* Company Field */}
//                   <div className="space-y-2">
//                     <label htmlFor="company" className="text-sm font-medium text-gray-300 flex items-center gap-2">
//                       <Building className="w-4 h-4" />
//                       Company/Organization
//                     </label>
//                     <input
//                       type="text"
//                       id="company"
//                       name="company"
//                       value={formData.company}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
//                       placeholder="Your company name"
//                     />
//                   </div>

//                   {/* Service Field */}
//                   <div className="space-y-2">
//                     <label htmlFor="service" className="text-sm font-medium text-gray-300">
//                       Service Interested In
//                     </label>
//                     <select
//                       id="service"
//                       name="service"
//                       value={formData.service}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
//                     >
//                       <option value="">Select a service</option>
//                       <option value="para-commerce">Para-Commerce</option>
//                       <option value="para-influence">Para-Influence</option>
//                       <option value="para-studio">Para-Studio</option>
//                       <option value="all-services">All Services</option>
//                       <option value="consultation">Consultation</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Subject Field */}
//                 <div className="space-y-2">
//                   <label htmlFor="subject" className="text-sm font-medium text-gray-300">
//                     Subject *
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
//                     placeholder="What's this about?"
//                   />
//                 </div>

//                 {/* Message Field */}
//                 <div className="space-y-2">
//                   <label htmlFor="message" className="text-sm font-medium text-gray-300 flex items-center gap-2">
//                     <MessageSquare className="w-4 h-4" />
//                     Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     required
//                     rows={6}
//                     className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
//                     placeholder="Tell us about your project, goals, and how we can help you dominate the social space..."
//                   />
//                 </div>

//                 {/* Submit Button */}
//                 <div className="flex justify-center pt-6">
//                   <Button 
//                     type="submit" 
//                     size="lg" 
//                     disabled={isSubmitting}
//                     className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     {isSubmitting ? (
//                       <div className="flex items-center gap-2">
//                         <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                         Sending...
//                       </div>
//                     ) : (
//                       <div className="flex items-center gap-2">
//                         <Send className="w-4 h-4" />
//                         Send Message
//                       </div>
//                     )}
//                   </Button>
//                 </div>
//               </form>
//             </div>
//           </AnimatedGroup>
//         </div>
//       </section>
//     </div>
//   )
// }



import { DemoOne } from "@/components/ui/demo";

export default function DemoContactPage() {
  return (
    <div className="min-h-screen">
      <DemoOne />
    </div>
  );
}