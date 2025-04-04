import {
  FaChartLine,
  FaBullhorn,
  FaPenNib,
  FaComments,
  FaSearch,
  FaChartPie,
} from "react-icons/fa";

export const navigation = [
    {
        title: "What we do",
        url: "WDO",
        offset: -100
    },
    {
        title: "Testimonials",
        url: "testimonials",
        offset: -100
    },
    {
        title: "Costumer Success",
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
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to boost your online presence and drive conversions.",
    icon: <FaBullhorn />,
  },
  {
    id: 1,
    title: "Brand Strategy",
    description:
      "Develop a compelling brand identity that resonates with your target audience and sets you apart.",
    icon: <FaChartLine />,
  },
  {
    id: 2,
    title: "Content Creation",
    description:
      "Engaging, high-quality content that tells your story and connects with your audience.",
    icon: <FaPenNib />,
  },
  {
    id: 3,
    title: "Social Media Management",
    description:
      "Strategic social media campaigns that build community and drive engagement with your brand.",
    icon: <FaComments />,
  },
  {
    id: 4,
    title: "SEO Optimization",
    description:
      "Improve your search engine rankings and drive organic traffic to your website.",
    icon: <FaSearch />,
  },
  {
    id: 5,
    title: "Analytics & Reporting",
    description:
      "Data-driven insights to measure performance and optimize your marketing strategies.",
    icon: <FaChartPie />,
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
    icon: "/assets/socials/facebook.svg",
    url: ""
  },
  {
    id: "1",
    icon: "/assets/socials/twitter.svg",
    url: ""
  },
  {
    id: "2",
    icon: "/assets/socials/instagram.svg",
    url: ""
  },
  {
    id: "3",
    icon: "/assets/socials/linkedin.svg",
    url: ""
  }
]