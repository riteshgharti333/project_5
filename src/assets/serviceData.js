import crysta from "../assets/images/taxiimg/taxi3.jpeg";
import tempo from "../assets/images/taxiimg/taxi1.jpeg";
import dezire from "../assets/images/taxiimg/taxi5.jpeg";
import ertiga from "../assets/images/taxiimg/taxi6.jpeg";

export const delhiTaxi = [
  {
    taxiContent1: {
      title: "Delhi Taxi Service",
      desc: "Getway Cab Service, located in the vibrant Karol Bagh area of Delhi, offers exceptional taxi services tailored to explore the bustling capital city of India. Our Delhi taxi service is crafted to provide travelers with a smooth and comfortable journey through the diverse and historical landscape of Delhi. From ancient monuments to modern attractions, Delhi is a city that blends the old and new seamlessly. Our taxi service ensures that you can navigate this sprawling metropolis with ease and convenience.",
    },

    //////////////////////////////
    taxiContent2: {
      place: "Sightseeing Places in Delhi",
      places: [
        {
          placeTitle: "India Gate",
          placeDesc:
            "This iconic war memorial is a must-see in the heart of Delhi. It is surrounded by lush green lawns, making it a perfect spot for picnics and evening strolls.",
        },
        {
          placeTitle: "Red Fort",
          placeDesc:
            "A UNESCO World Heritage site, the Red Fort is an architectural marvel that stands as a testament to the Mughal era. Don't miss the light and sound show that narrates its history.",
        },
        {
          placeTitle: "Qutub Minar",
          placeDesc:
            "Another UNESCO World Heritage site, Qutub Minar is the tallest brick minaret in the world. The complex also includes the Quwwat-ul-Islam Mosque and the Iron Pillar.",
        },
        {
          placeTitle: "Humayun's Tomb",
          placeDesc:
            "This magnificent tomb is a precursor to the Taj Mahal and an excellent example of Mughal architecture. The beautifully landscaped gardens are perfect for a leisurely walk.",
        },
        {
          placeTitle: "Lotus Temple",
          placeDesc:
            "Known for its unique flower-like shape, the Lotus Temple is a Bahá'í House of Worship that offers a serene environment for meditation and reflection.",
        },
        {
          placeTitle: "Akshardham Temple",
          placeDesc:
            "This sprawling temple complex showcases traditional Indian and Hindu culture, spirituality, and architecture. The evening water show is a highlight not to be missed.",
        },
        {
          placeTitle: "Chandni Chowk",
          placeDesc:
            "One of the oldest and busiest markets in Delhi, Chandni Chowk offers a vibrant shopping experience with its narrow lanes full of shops selling everything from spices to jewelry.",
        },
        {
          placeTitle: "Raj Ghat",
          placeDesc:
            "The memorial of Mahatma Gandhi, Raj Ghat is a place of reflection and tranquility. It is surrounded by beautifully maintained gardens and is an important historical site.",
        },
      ],
    },

    ////////////////////////
    taxiContent3: {
      getway: "Why Choose Getway Cab Service for Delhi Taxi Service",
      gatewayServices: [
        "Experienced Drivers",
        "Well-Maintained Fleet",
        "Customizable Itineraries",
        "Competitive Pricing",
        "24/7 Customer Support",
        "Safety and Comfort",
        "Positive Reviews",
      ],
    },
  },
];

export const delhiTaxiFare = [
  {
    taxiFare: "Delhi Local/Outstation Taxi Fare",

    taxiFees: [
      {
        img: dezire,
        carType: "Dzire",
        local: "12 Per/KM (8/80)",
        Outstation: "12 Per/KM (250KM/Day)",
        DriverTA: "300/- Per Night",
      },

      {
        img: ertiga,
        carType: "Ertiga",
        local: "15 Per/KM (8/80)",
        Outstation: "16 Per/KM (250KM/Day)",
        DriverTA: "300/- Per Night",
      },
      {
        img: crysta,
        carType: "Crysta",
        local: "20 Per/KM (8/80)",
        Outstation: "21 Per/KM (250KM/Day)",
        DriverTA: "	400/- Per Night",
      },
      {
        img: tempo,
        carType: "Tempo Traveler",
        local: "27 Per/KM (8/80)",
        Outstation: "28 Per/KM (250KM/Day)",
        DriverTA: "500/- Per Night",
      },
    ],
  },
];
