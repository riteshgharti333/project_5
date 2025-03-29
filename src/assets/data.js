// banner img
import banner1 from "../assets/images/bannerimg/banner1.jpeg";
import banner2 from "../assets/images/bannerimg/banner2.jpeg";
import banner3 from "../assets/images/bannerimg/banner3.jpeg";
import banner4 from "../assets/images/bannerimg/banner4.webp";

// services icon
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineAccessTime } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { IoBusOutline } from "react-icons/io5";
import { RiSecurePaymentLine } from "react-icons/ri";

// taxi img
import taxi1 from "../assets/images/taxiimg/taxi1_result.webp";
import taxi2 from "../assets/images/taxiimg/taxi2_result.webp";
import taxi3 from "../assets/images/taxiimg/taxi3_result.webp";
import taxi4 from "../assets/images/taxiimg/taxi4_result.webp";
import taxi5 from "../assets/images/taxiimg/taxi5_result.webp";

// ourTaxi
import service_img1 from "../assets/images/servicesimg/service1_result.webp";
import service_img2 from "../assets/images/servicesimg/service2_result.webp";
import service_img3 from "../assets/images/servicesimg/service3_result.webp";
import service_img4 from "../assets/images/servicesimg/service4_result.webp";
import service_img5 from "../assets/images/servicesimg/service5_result.webp";

// home Destination Img
import hd1_img from "../assets/images/HomeDestinationImg/hd1.webp";
import hd2_img from "../assets/images/HomeDestinationImg/hd2.webp";
import hd3_img from "../assets/images/HomeDestinationImg/hd3.webp";
import hd4_img from "../assets/images/HomeDestinationImg/hd4.webp";
import hd5_img from "../assets/images/HomeDestinationImg/hd5.webp";

export const services = [
  {
    title: "Secure & Flexible Booking",
    smTitle: "Your Journey, Our Priority",
    desc: "We ensure secure payments and hassle-free reservations. Book with confidence—modify plans easily and enjoy 100% refunds on cancellations(terms apply).",
    icon: RiSecurePaymentLine, 
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
    icon: MdOutlineAccessTime, 
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
    icon: GrUserExpert, 
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
    icon: IoBusOutline, 
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
  {
    img: taxi1,
    vehicle: "Ertiga ",
    rate: "16",
    charges: "300",
  },
  {
    img: taxi2,
    vehicle: "Sedan",
    rate: "11",
    charges: "300",
  },
  {
    img: taxi3,
    vehicle: "Kia",
    rate: "17",
    charges: "300",
  },
  { img: taxi4, vehicle: "Innnova Crysta", rate: "19", charges: "300" },

  { img: taxi5, vehicle: "Tempo Travaller", rate: "25", charges: "500" },
];

export const ourTaxies = [
  {
    img: service_img1,
    title: "taxi service",
    link: "uttarakhand-taxi-service",
    name: "Uttarakhand Taxi Service",
  },
  {
    img: service_img2,
    title: "taxi service",
    link: "punjab-taxi-service",
    name: "Punjab Taxi Service",
  },
  {
    img: service_img3,
    title: "taxi service",
    link: "rajasthan-taxi-service",
    name: "Rajasthan Taxi Service",
  },
  {
    img: service_img4,
    title: "taxi service",
    link: "punjab-taxi-service",
    name: "Punjab Taxi Service",
  },
  {
    img: service_img5,
    title: "taxi service",
    link: "uttar-pradesh-taxi-service",
    name: "Uttar Pradesh Taxi Service",
  },
];

export const popularDestinations = [
  { img: hd5_img, title: "Rajasthan", link: "rajasthan-destinations" },
  { img: hd1_img, title: "Uttar Pradesh", link: "uttar-pradesh-destinations" },
  { img: hd3_img, title: "Punjab", link: "punjab-destinations" },
  {
    img: hd4_img,
    title: "Himachal Pradesh",
    link: "himachal-pradesh-destinations",
  },
  { img: hd2_img, title: "Uttrakhand", link: "uttarakhand-destinations" },
];

export const taxiServices = [
  {
    name: "Delhi Taxi Service",
    link: "delhi-taxi-service",
  },
  {
    name: "Rajasthan Taxi Service",
    link: "rajasthan-taxi-service",
  },
  {
    name: "Uttarakhand Taxi Service",
    link: "uttarakhand-taxi-service",
  },
  {
    name: "Himachal Taxi Service",
    link: "himachal-taxi-service",
  },

  {
    name: "Uttar Pradesh Taxi Service",
    link: "uttar-pradesh-taxi-service",
  },
  {
    name: "Punjab Taxi Service",
    link: "punjab-taxi-service",
  },
  {
    name: "Haryana Taxi Service",
    link: "haryana-taxi-service",
  },
  {
    name: "Jammu & Kashmir Taxi Service",
    link: "jammu-kashmir-taxi-service",
  },
];

export const navPopularDestination = [
  {
    title: "Rajasthan",
    link: "rajasthan-destinations",

    smDestination: [
      { title: "Jaipur", link: "jaipur-destination" },

      { title: "Ranthambore", link: "ranthambore-destination" },

      { title: "Udaipur", link: "udaipur-destination" },

      { title: "Jaisalmer", link: "jaisalmer-destination" },

      { title: "Pushkar", link: "pushkar-destination" },
    ],
  },

  {
    title: "Uttar Pradesh",
    link: "uttar-pradesh-destinations",
    smDestination: [
      { title: "Agra", link: "agra-destination" },
      { title: "Varanasi", link: "varanasi-destination" },
      { title: "Ayodhya", link: "ayodhya-destination" },
      { title: "Bodh Gaya", link: "bodh-gaya-destination" },
    ],
  },
  {
    title: "Punjab",
    link: "punjab-destinations",
    smDestination: [
      { title: "Amritsar", link: "amritsar-destination" },
      { title: "Chandigarh", link: "chandigarh-destination" },
    ],
  },
  {
    title: "Himachal Pradesh",
    link: "himachal-pradesh-destinations",
    smDestination: [
      { title: "Shimla", link: "shimla-destination" },
      { title: "Manali", link: "manali-destination" },
      { title: "Dharamshala", link: "dharamshala-destination" },
    ],
  },
  {
    title: "Uttarakhand",
    link: "uttarakhand-destinations",
    smDestination: [
      { title: "Nainital", link: "nainital-destination" },
      { title: "Rishikesh / Haridwar", link: "rishikesh-haridwar-destination" },
      {
        title: "Kedarnath / Badrinath",
        link: "kedarnath-badrinath-destination",
      },
    ],
  },
];

export const outstationServices = [
  {
    name: "Delhi To Rajasthan Taxi Service",
    link: "delhi-to-rajasthan-taxi-service",
  },
  {
    name: "Delhi To Himachal Pradesh Taxi Service",
    link: "delhi-to-himachal-pradesh-taxi-service",
  },
  {
    name: "Delhi To Uttarakhand Taxi Service",
    link: "delhi-to-uttarakhand-taxi-service",
  },
  {
    name: "Delhi To Punjab Taxi Service",
    link: "delhi-to-punjab-taxi-service",
  },
  {
    name: "Delhi To Jammu & Kashmir Taxi Service",
    link: "delhi-to-jammu-kashmir-taxi-service",
  },
  {
    name: "Delhi To Uttar Pradesh Taxi Service",
    link: "delhi-to-uttar-pradesh-taxi-service",
  },
];

export const aboutCount = [
  {
    title: "AMAZING PLACES TO VISIT",
    no: "3000",
  },
  {
    title: "5 STAR HOTELS TO STAY",
    no: "4708",
  },
  {
    title: "AIRLINES TO TRAVEL THE WORLD",
    no: "4105",
  },
  {
    title: "VIP TRANSPORT OPTIONS",
    no: "2250",
  },
];
