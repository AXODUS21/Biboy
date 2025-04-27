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
    id: "1",
    question: "How fast am I gonna see success?",
    answer: "like super super fast ;)",
  },
  {
    id: "2",
    question: "Can you help me with marketing?",
    answer:
      "yes, we can help you with marketing, but we are not a marketing agency",
  },
  {
    id: "3",
    question: "What is your pricing?",
    answer:
      "we are a freelance agency, so we have a flat rate of $200 per hour",
  },
  {
    id: "4",
    question: "Can you help me with my sales?",
    answer: "yes, we can help you with sales, but we are not a sales agency",
  },
  {
    id: "5",
    question: "What is your product?",
    answer:
      "we are a product development agency, so we help you develop products",
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