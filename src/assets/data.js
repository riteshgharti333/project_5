// banner img
import banner1 from "../assets/images/bannerimg/banner1.jpeg";
import banner2 from "../assets/images/bannerimg/banner2.jpeg";
import banner3 from "../assets/images/bannerimg/banner3.jpeg";
import banner4 from "../assets/images/bannerimg/banner4.jpeg";

// services icon
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineAccessTime } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { IoBusOutline } from "react-icons/io5";
import { RiSecurePaymentLine } from "react-icons/ri";

// taxi img
import taxi1 from "../assets/images/taxiimg/taxi1.jpeg";
import taxi2 from "../assets/images/taxiimg/taxi2.jpeg";
import taxi3 from "../assets/images/taxiimg/taxi3.jpeg";
import taxi4 from "../assets/images/taxiimg/taxi4.jpeg";
import taxi5 from "../assets/images/taxiimg/taxi5.jpeg";
import taxi6 from "../assets/images/taxiimg/taxi6.jpeg";

// popular img
import popular_img from "../assets/images/popular.jpg";

// ourTaxi
import service_img1 from "../assets/images/servicesimg/service1.jpeg";
import service_img2 from "../assets/images/servicesimg/service2.jpeg";
import service_img3 from "../assets/images/servicesimg/service3.jpeg";


export const services = [
  {
    title: "Secure & Flexible Booking",
    smTitle: "Your Journey, Our Priority",
    desc: "We ensure secure payments and hassle-free reservations. Book with confidence—modify plans easily and enjoy 100% refunds on cancellations(terms apply).",
    icon: RiSecurePaymentLine, // Fixed
    servicesOption: [
      "Safe Transactions",
      "Instant Confirmation",
      "Easy Modifications",
    ],
  },

  {
    title: "24/7 Travel Assistance",
    smTitle: "Always Here for You",
    desc: "Our dedicated team is available round-the-clock to resolve queries, adjust itineraries, or provide emergency support during your travels.",
    icon: RiCustomerService2Line, // Fixed
    servicesOption: [
      "Quick Response",
      "Multilingual Support",
      "Personalized Help",
    ],
  },

  {
    title: "Timely & Reliable Journeys",
    smTitle: "Punctuality Meets Precision",
    desc: "From airport pickups to tour departures, we guarantee on-time services with verified drivers and well-maintained vehicles.",
    icon: MdOutlineAccessTime, // Fixed
    servicesOption: [
      "Strict Schedules",
      "Luxury & Economy Fleet",
      "Seamless Transfers",
    ],
  },

  {
    title: "Expert Local Guides",
    smTitle: "Unlock India’s Secrets",
    desc: "Explore hidden gems and cultural wonders with certified guides fluent in history, traditions, and regional insights.",
    icon: GrUserExpert, // Fixed
    servicesOption: [
      "Cultural Immersion",
      "Tailored Experiences",
      "Authentic Storytelling",
    ],
  },

  {
    title: "Sustainable Tourism Initiatives",
    smTitle: "Travel Responsibly",
    desc: "We partner with eco-friendly accommodations and promote low-impact tours to protect India’s natural and cultural heritage.",
    icon: IoBusOutline, // Fixed
    servicesOption: [
      "Eco-Conscious Stays",
      "Green Practices",
      "Community Engagement",
    ],
  },
];

export const banners = [
  {
    img: banner1,
  },
  {
    img: banner2,
  },
  {
    img: banner3,
  },
  {
    img: banner4,
  },
];

export const taxies = [
  { img: taxi4, vehicle: "Santro/Wagon-R (AC)", rate: "9.5", charges: "300" },

  {
    img: taxi5,
    vehicle: "Maruti Swift Dzire (AC)",
    rate: "10",
    charges: "300",
  },
  {
    img: taxi2,
    vehicle: "Tyota Innnova 6+1 (AC)",
    rate: "16",
    charges: "300",
  },
  {
    img: taxi6,
    vehicle: "Tyota Innnova 7+1 (AC)",
    rate: "17",
    charges: "300",
  },
  { img: taxi1, vehicle: "Innnova Crysta (AC)", rate: "18", charges: "300" },
  { img: taxi3, vehicle: "Tempo Travaller", rate: "25", charges: "400" },
];

export const popularImgs = [
  { img: popular_img },
  { img: popular_img },
  { img: popular_img },
  { img: popular_img },
  { img: popular_img },
  { img: popular_img },
  { img: popular_img },
  { img: popular_img },
];

export const reviews = [
  {
    name: "Nakul Sajdeva",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolorem magnam voluptatibus vel maiores, hic accusantium nisi soluta expedita ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, possimus!",
  },
  {
    name: "Nakul Sajdeva",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolorem magnam voluptatibus vel maiores, hic accusantium nisi soluta expedita ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, possimus!",
  },
  {
    name: "Nakul Sajdeva",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolorem magnam voluptatibus vel maiores, hic accusantium nisi soluta expedita ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, possimus!",
  },
  {
    name: "Nakul Sajdeva",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolorem magnam voluptatibus vel maiores, hic accusantium nisi soluta expedita ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, possimus!",
  },
  {
    name: "Nakul Sajdeva",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolorem magnam voluptatibus vel maiores, hic accusantium nisi soluta expedita ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, possimus!",
  },
];

export const ourTaxies = [
  { img: service_img1 },
  { img: service_img2 },
  { img: service_img3 },
];
