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
  FaLinkedin
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
        offset: -100
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

export const caseStudies = [
  {
    title: "Global Tech Rebranding Campaign",
    industry: "Technology",
    image: "",
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
    image: "",
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