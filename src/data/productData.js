const productsData = [
  {
    id: 1,
    brand: "JBL",
    name: "JBL Live 660NC",
    info: "Wireless Over-Ear NC Headphones",
    category: "Headphones",
    type: "Over Ear",
    connectivity: "Wireless",
    price: 9999,
    originalPrice: 14999,
    quantity: 1,
    reviews: 1234,
    rating: 5,
    image: "/images/Product_images/jbl660nc-1.png",
    images: [
      "/images/Product_images/jbl660nc-1.png",
      "/images/Product_images/jbl660nc-2.png",
      "/images/Product_images/jbl660nc-3.png",
      "/images/Product_images/jbl660nc-4.png"
    ]
  },

  {
    id: 2,
    brand: "boAt",
    name: "boAt Rockerz 518",
    info: "On-Ear Wireless Headphones",
    category: "Headphones",
    type: "On Ear",
    connectivity: "Wireless",
    price: 1299,
    originalPrice: 3990,
    quantity: 1,
    reviews: 1321,
    rating: 5,
    image: "/images/Product_images/boat518-1.png",
    images: [
      "/images/Product_images/boat518-1.png",
      "/images/Product_images/boat518-2.png",
      "/images/Product_images/boat518-3.png",
      "/images/Product_images/boat518-4.png"
    ]
  },

  {
    id: 3,
    brand: "boAt",
    name: "boAt Airdopes 131",
    info: "Wireless In-Ear Earbuds",
    category: "Earbuds",
    type: "In Ear",
    connectivity: "Wireless",
    price: 1099,
    originalPrice: 2990,
    quantity: 1,
    reviews: 1244,
    rating: 5,
    image: "/images/Product_images/boat131-3.png",
    images: [
      "/images/Product_images/boat131-1.png",
      "/images/Product_images/boat131-2.png",
      "/images/Product_images/boat131-3.png",
      "/images/Product_images/boat131-4.png"
    ]
  },

  {
    id: 4,
    brand: "boAt",
    name: "boAt BassHeads 110",
    info: "In-Ear Wired Earphones",
    category: "Earphones",
    type: "In Ear",
    connectivity: "Wired",
    price: 449,
    originalPrice: 999,
    quantity: 1,
    reviews: 556,
    rating: 4,
    image: "/images/Product_images/boat110-1.png",
    images: [
      "/images/Product_images/boat110-1.png",
      "/images/Product_images/boat110-2.png",
      "/images/Product_images/boat110-3.png",
      "/images/Product_images/boat110-4.png"
    ]
  },

  {
    id: 5,
    brand: "boAt",
    name: "boAt Rockerz 410",
    info: "Bluetooth & Wired On-Ear Headphones",
    category: "Headphones",
    type: "On Ear",
    connectivity: "Bluetooth & Wired",
    price: 1599,
    originalPrice: 2990,
    quantity: 1,
    reviews: 1563,
    rating: 5,
    image: "/images/Product_images/boat410-1.png",
    images: [
      "/images/Product_images/boat410-1.png",
      "/images/Product_images/boat410-2.png",
      "/images/Product_images/boat410-3.png",
      "/images/Product_images/boat410-4.png"
    ]
  },

  {
    id: 6,
    brand: "JBL",
    name: "JBL Live 200BT",
    info: "In-Ear Wireless Neckbands",
    category: "Neckbands",
    type: "In Ear",
    connectivity: "Wireless",
    price: 3699,
    originalPrice: 5299,
    quantity: 1,
    reviews: 836,
    rating: 4,
    image: "/images/Product_images/jbl200bt-1.png",
    images: [
      "/images/Product_images/jbl200bt-1.png",
      "/images/Product_images/jbl200bt-2.png",
      "/images/Product_images/jbl200bt-3.png",
      "/images/Product_images/jbl200bt-4.png"
    ]
  },

  {
    id: 7,
    brand: "Sony",
    name: "Sony WH-XB910N",
    info: "Wireless Over-Ear Headphones",
    category: "Headphones",
    type: "Over Ear",
    connectivity: "Wireless",
    price: 13489,
    originalPrice: 19990,
    quantity: 1,
    reviews: 679,
    rating: 4,
    image: "/images/Product_images/sonyXb910n-1.png",
    images: [
      "/images/Product_images/sonyXb910n-1.png",
      "/images/Product_images/sonyXb910n-2.png",
      "/images/Product_images/sonyXb910n-3.png",
      "/images/Product_images/sonyXb910n-4.png"
    ]
  },

  {
    id: 8,
    brand: "JBL",
    name: "JBL Tune 760NC",
    info: "Wireless Over-Ear NC Headphones",
    category: "Headphones",
    type: "Over Ear",
    connectivity: "Wireless",
    price: 5999,
    originalPrice: 7999,
    quantity: 1,
    reviews: 755,
    rating: 4,
    image: "/images/Product_images/jbl760nc-1.png",
    images: [
      "/images/Product_images/jbl760nc-1.png",
      "/images/Product_images/jbl760nc-2.png",
      "/images/Product_images/jbl760nc-3.png",
      "/images/Product_images/jbl760nc-4.png"
    ]
  },

  {
    id: 9,
    brand: "boAt",
    name: "boAt Rockerz 255",
    info: "In-Ear Wireless Neckbands",
    category: "Neckbands",
    type: "In Ear",
    connectivity: "Wireless",
    price: 899,
    originalPrice: 2990,
    quantity: 1,
    reviews: 1464,
    rating: 5,
    image: "/images/Product_images/boat255r-1.png",
    images: [
      "/images/Product_images/boat255r-1.png",
      "/images/Product_images/boat255r-2.png",
      "/images/Product_images/boat255r-3.png",
      "/images/Product_images/boat255r-4.png"
    ]
  },

  {
    id: 10,
    brand: "JBL",
    name: "JBL Wave 100",
    info: "In-Ear Truly Wireless Earbuds",
    category: "Earbuds",
    type: "In Ear",
    connectivity: "Wireless",
    price: 2999,
    originalPrice: 6999,
    quantity: 1,
    reviews: 801,
    rating: 4,
    image: "/images/Product_images/jbl100-1.png",
    images: [
      "/images/Product_images/jbl100-1.png",
      "/images/Product_images/jbl100-2.png",
      "/images/Product_images/jbl100-3.png",
      "/images/Product_images/jbl100-4.png"
    ]
  },

  {
    id: 11,
    brand: "Sony",
    name: "Sony WF-1000XM4",
    info: "Wireless In-Ear NC Headphones",
    category: "Earbuds",
    type: "In Ear",
    connectivity: "Wireless",
    price: 19990,
    originalPrice: 24990,
    quantity: 1,
    reviews: 382,
    rating: 3,
    image: "/images/Product_images/sony1000xm4-1.png",
    images: [
      "/images/Product_images/sony1000xm4-1.png",
      "/images/Product_images/sony1000xm4-2.png",
      "/images/Product_images/sony1000xm4-3.png",
      "/images/Product_images/sony1000xm4-4.png"
    ]
  },

  {
    id: 12,
    brand: "boAt",
    name: "boAt BassHeads 228",
    info: "In-Ear Wired Earphones",
    category: "Earphones",
    type: "In Ear",
    connectivity: "Wired",
    price: 649,
    originalPrice: 1190,
    quantity: 1,
    reviews: 1178,
    rating: 5,
    image: "/images/Product_images/boat228-1.png",
    images: [
      "/images/Product_images/boat228-1.png",
      "/images/Product_images/boat228-2.png",
      "/images/Product_images/boat228-3.png",
      "/images/Product_images/boat228-4.png"
    ]
  },

  {
    id: 13,
    brand: "JBL",
    name: "JBL Endurance Run Sports",
    info: "In-Ear Wired Earphones",
    category: "Earphones",
    type: "In Ear",
    connectivity: "Wired",
    price: 999,
    originalPrice: 1599,
    quantity: 1,
    reviews: 1144,
    rating: 5,
    image: "/images/Product_images/jbl-endu-1.png",
    images: [
      "/images/Product_images/jbl-endu-1.png",
      "/images/Product_images/jbl-endu-2.png",
      "/images/Product_images/jbl-endu-3.png",
      "/images/Product_images/jbl-endu-4.png"
    ]
  },

  {
    id: 14,
    brand: "boAt",
    name: "boAt Airdopes 203",
    info: "In-Ear Truly Wireless Earbuds",
    category: "Earbuds",
    type: "In Ear",
    connectivity: "Wireless",
    price: 1074,
    originalPrice: 3999,
    quantity: 1,
    reviews: 1340,
    rating: 5,
    image: "/images/Product_images/boat203-1.png",
    images: [
      "/images/Product_images/boat203-1.png",
      "/images/Product_images/boat203-2.png",
      "/images/Product_images/boat203-3.png",
      "/images/Product_images/boat203-4.png"
    ]
  },

  {
    id: 15,
    brand: "Sony",
    name: "Sony WH-CH710N",
    info: "Wireless Over-Ear NC Headphones",
    category: "Headphones",
    type: "Over Ear",
    connectivity: "Wireless",
    price: 8520,
    originalPrice: 14990,
    quantity: 1,
    reviews: 853,
    rating: 4,
    image: "/images/Product_images/sonyCh710n-1.png",
    images: [
      "/images/Product_images/sonyCh710n-1.png",
      "/images/Product_images/sonyCh710n-2.png",
      "/images/Product_images/sonyCh710n-3.png",
      "/images/Product_images/sonyCh710n-4.png"
    ]
  },

  {
    id: 16,
    brand: "JBL",
    name: "JBL Tune 500BT",
    info: "On-Ear Wireless Headphones",
    category: "Headphones",
    type: "On Ear",
    connectivity: "Wireless",
    price: 3282,
    originalPrice: 3999,
    quantity: 1,
    reviews: 364,
    rating: 4,
    image: "/images/Product_images/jbl500bt-1.png",
    images: [
      "/images/Product_images/jbl500bt-1.png",
      "/images/Product_images/jbl500bt-2.png",
      "/images/Product_images/jbl500bt-3.png",
      "/images/Product_images/jbl500bt-4.png"
    ]
  },

  {
    id: 17,
    brand: "boAt",
    name: "boAt Airdopes 381",
    info: "In-Ear Wireless Earbuds",
    category: "Earbuds",
    type: "In Ear",
    connectivity: "Wireless",
    price: 1699,
    originalPrice: 4990,
    quantity: 1,
    reviews: 1011,
    rating: 5,
    image: "/images/Product_images/boat381-1.png",
    images: [
      "/images/Product_images/boat381-1.png",
      "/images/Product_images/boat381-2.png",
      "/images/Product_images/boat381-3.png",
      "/images/Product_images/boat381-4.png"
    ]
  },

  {
    id: 18,
    brand: "Sony",
    name: "Sony MDR-EX14AP",
    info: "In-Ear Wired Earphones",
    category: "Earphones",
    type: "In Ear",
    connectivity: "Wired",
    price: 549,
    originalPrice: 1290,
    quantity: 1,
    reviews: 530,
    rating: 4,
    image: "/images/Product_images/sony-ex14ap-1.png",
    images: [
      "/images/Product_images/sony-ex14ap-1.png",
      "/images/Product_images/sony-ex14ap-2.png",
      "/images/Product_images/sony-ex14ap-3.png",
      "/images/Product_images/sony-ex14ap-4.png"
    ]
  },

  {
    id: 19,
    brand: "Sony",
    name: "Sony WI-XB400",
    info: "Wireless Extra Bass In-Ear Neckbands",
    category: "Neckbands",
    type: "In Ear",
    connectivity: "Wireless",
    price: 2690,
    originalPrice: 4990,
    quantity: 1,
    reviews: 474,
    rating: 4,
    image: "/images/Product_images/sonyXb400-1.png",
    images: [
      "/images/Product_images/sonyXb400-1.png",
      "/images/Product_images/sonyXb400-2.png",
      "/images/Product_images/sonyXb400-3.png",
      "/images/Product_images/sonyXb400-4.png"
    ]
  }
];

export default productsData;