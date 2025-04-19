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
        title: "Strategy",
        url: "strategy",
        offset: -50
    },
    {
        title: "Testimonials",
        url: "testimonials",
        offset: -100
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
    title: "Global Tech Rebranding Campaign",
    industry: "Technology",
    image: "/assets/companyImg.png",
    challenge:
      "A leading tech company was struggling with an outdated brand image that didn't reflect their innovative solutions, resulting in declining market share and difficulty attracting new customers.",
    solution:
      "We developed a comprehensive rebranding strategy that included a new visual identity, messaging framework, and digital presence. This was supported by targeted content marketing and PR campaigns.",
    results:
      "The rebranding led to a 45% increase in website traffic, 60% growth in qualified leads, and a 25% increase in conversion rates within the first six months.",
    metrics: [
      { value: "+45%", label: "Website Traffic" },
      { value: "+60%", label: "Qualified Leads" },
      { value: "+25%", label: "Conversion Rate" },
      { value: "18M+", label: "Social Impressions" },
    ],
  },
  {
    title: "E-commerce Sales Acceleration",
    industry: "Retail",
    image: "/assets/companyImg.png",
    challenge:
      "An established retail brand was struggling to transition to e-commerce, with poor online visibility and conversion rates significantly below industry standards.",
    solution:
      "We implemented a multi-channel digital marketing strategy, optimized their e-commerce platform for conversions, and created targeted social media campaigns to reach their ideal customers.",
    results:
      "Within three months, online sales increased by 120%, cart abandonment decreased by 35%, and customer acquisition costs were reduced by 40%.",
    metrics: [
      { value: "+120%", label: "Online Sales" },
      { value: "-35%", label: "Cart Abandonment" },
      { value: "-40%", label: "Acquisition Cost" },
      { value: "+85%", label: "Mobile Conversions" },
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