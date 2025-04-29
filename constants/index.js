import {
  FaChartLine,
  FaBullhorn,
  FaPenNib,
  FaComments,
  FaSearch,
  FaChartPie,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaOilCan,
  FaWrench,
  FaTools,
  FaStethoscope,
  FaClipboardList,
  FaCar,
  FaCarSide,
  FaBrakeSystem
} from "react-icons/fa";

export const navigation = [
    {
        title: "Services",
        url: "Services",
        offset: -80
    },
    {
        title: "Case Studies",
        url: "CS",
        offset: -100
    },
    {
        title: "FAQ",
        url: "FAQ",
        offset: -100
    },
    {
        title: "Contacts",
        url: "book",
        offset: -80
    },
]

  export const services = [
    {
      id: 0,
      title: "Change Oil",
      description:
        "Professional oil change service to keep your engine running smoothly and efficiently. We use high-quality oils and filters for optimal performance.",
      icon: <FaOilCan />,
    },
    {
      id: 1,
      title: "Service & Repair",
      description:
        "Comprehensive vehicle service and repair solutions. Our expert technicians handle everything from routine maintenance to complex repairs.",
      icon: <FaWrench />,
    },
    {
      id: 2,
      title: "Overhaul",
      description:
        "Complete engine and transmission overhaul services. We rebuild and restore your vehicle's major components to ensure peak performance.",
      icon: <FaTools />,
    },
    {
      id: 3,
      title: "Scan",
      description:
        "Advanced diagnostic scanning services to identify and resolve any issues with your vehicle's computer systems and sensors.",
      icon: <FaStethoscope />,
    },
    {
      id: 4,
      title: "Preventive Maintenance Service",
      description:
        "Regular maintenance programs to prevent future problems and extend your vehicle's lifespan. Includes comprehensive inspections and service.",
      icon: <FaClipboardList />,
    },
    {
      id: 5,
      title: "Check up",
      description:
        "Thorough vehicle inspection and health check. We examine all major systems to ensure your car is running safely and efficiently.",
      icon: <FaCar />,
    },
    {
      id: 6,
      title: "Underchassis",
      description:
        "Complete underchassis inspection and maintenance. We check and service suspension, steering, and other critical components beneath your vehicle.",
      icon: <FaCarSide />,
    },
    {
      id: 7,
      title: "Clean & adjust breaks",
      description:
        "Professional brake system maintenance including cleaning, adjustment, and replacement of brake components for optimal stopping power.",
      icon: <FaTools />,
    },
];

export const testimonials = [
  {
    id: 0,
    name: "John Doe",
    quote:
      "APEX transformed our brand identity and digital presence. Our online conversions have increased by 150% since working with them.",
    initial: "/assets/logo.png",
    company: "TechCorp CEO",
  },
  {
    id: 1,
    name: "Michael Chen",
    quote:
      "The social media strategy APEX developed for us exceeded all expectations. They truly understand our audience and how to engage them.",
    initial: "/assets/logo.png",
    company: "FreshEats Marketing Director",
  },
  {
    id: 2,
    name: "Emma Williams",
    quote:
      "Working with APEX on our product launch was seamless. Their attention to detail and strategic approach made all the difference.",
    initial: "/assets/logo.png",
    company: "Luxury Retail Brand Manager",
  },
];

export const caseStudies = [
  {
    title: "Mitsubishi Montero Sport",
    industry: "Transmission",
    image: "/assets/cs (1).png",
    challenge:
      "A local auto repair shop known for friendly service was struggling to communicate its professionalism and modern capabilities, especially for newer vehicles like SUVs. Most marketing materials didn’t reflect the welcoming, trustworthy nature of their staff.",
    solution:
      "We captured real moments of customer engagement and expert work—like this shot of a technician proudly handling a part for a Mitsubishi SUV. This human-centered visual became the face of their refreshed brand story.",
    results:
      "This new approach helped boost customer trust, resulting in higher walk-in inquiries and improved customer satisfaction scores.",
    metrics: [
      { value: "+48%", label: "Customer Walk-Ins" },
      { value: "+36%", label: "Service Bookings" },
      { value: "+62%", label: "Online Reviews" },
      { value: "12M+", label: "Local Reach on Social" },
    ],
  },
  {
    title: "Diesel 4N15 engine",
    industry: "Repair",
    image: "/assets/cs (2).png",
    challenge:
      "Despite specializing in complex engine rebuilds, the shop’s technical reputation wasn’t well known beyond word of mouth. They lacked visual content that showed the precision and skill required for such work.",
    solution:
      "We launched a visual storytelling campaign showing mechanics in action—like this detailed engine rebuild scene. These behind-the-scenes shots educated viewers and built authority.",
    results:
      "The campaign boosted technical credibility and attracted more high-value engine repair jobs.",
    metrics: [
      { value: "+65%", label: "Engine Repair Inquiries" },
      { value: "+50%", label: "Workshop Referrals" },
      { value: "+30%", label: "Avg. Revenue per Job" },
      { value: "18M+", label: "Technical Content Views" },
    ],
  },
];

export const faqs = [
  {
    id: "0",
    question: "How long does a typical service appointment take?",
    answer:
      "Service times vary depending on the type of service needed. Basic maintenance like oil changes typically take 30-60 minutes. More complex repairs may take several hours or even a full day. We always provide an estimated completion time when you drop off your vehicle, and we'll keep you updated if anything changes.",
  },
  {
    id: "1",
    question: "Do you offer warranties on your repairs?",
    answer:
      "Yes, we stand behind our work. We offer a 24-month/24,000-mile warranty on parts and labor for most repairs. Some specialized repairs or parts may have different warranty terms, which we'll discuss with you before beginning any work.",
  },
  {
    id: "2",
    question: "Can I drop off my car before your opening hours?",
    answer:
      "Yes, we offer early drop-off service. Simply let us know in advance, and we'll arrange for you to leave your keys in our secure drop box. You'll need to complete a short form with your contact information and service needs.",
  },
  {
    id: "3",
    question: "Do you provide loaner vehicles or shuttle service?",
    answer:
      "Yes, we offer a complimentary shuttle service within a 10-mile radius of our shop. For repairs requiring more than one day, we have a limited number of loaner vehicles available on a first-come, first-served basis. Please ask about availability when scheduling your appointment.",
  },
  {
    id: "4",
    question: "How do I know if my check engine light is serious?",
    answer:
      "A check engine light can indicate minor issues like a loose gas cap or more serious problems with your engine or emissions system. We recommend having it diagnosed promptly. We offer free check engine light scans that can identify the specific trouble code, allowing us to advise you on the urgency and estimated cost of repairs.",
  },
  {
    id: "5",
    question: "Do I need an appointment or can I just drop in?",
    answer:
      "While we do accept walk-ins when possible, we strongly recommend scheduling an appointment to ensure prompt service. Appointments receive priority, and scheduling allows us to have the right technician and parts available for your specific needs.",
  },
];

export const socials = [
  {
    id: "0",
    icon: <FaFacebook size={20}/>,
    url: ""
  },
  {
    id: "1",
    icon: <FaTwitter size={20}/>,
    url: ""
  },
  {
    id: "2",
    icon: <FaInstagram size={20}/>,
    url: ""
  },
  {
    id: "3",
    icon: <FaLinkedin size={20}/>,
    url: ""
  }
]