import uzb from "../assets/img/uzb.png";
import ksa from "../assets/img/ksa.png";
import usa from "../assets/img/usa.png";
import kf from "../assets/img/kf.png";
import bb from "../assets/img/blackbulls.png";
import ub from "../assets/img/unblogo.jpg";
import loko from "../assets/img/loko.png";
import video1 from "../assets/img/video1.jpg";
import video2 from "../assets/img/video2.jpg";
import video3 from "../assets/img/video3.jpg";
import video4 from "../assets/img/video4.jpg";
import player11 from "../assets/img/player11.png";
import player14 from "../assets/img/player14.png";
import player21 from "../assets/img/player21.png";
import player33 from "../assets/img/player33.png";
import player5 from "../assets/img/player5.png";
import player69 from "../assets/img/player69.png";
import player7 from "../assets/img/player7.png";
import player8 from "../assets/img/player8.png";
import player92 from "../assets/img/player92.png";
import player10 from "../assets/img/player10.jpg";
import trainers from "../assets/img/trainers.jpg";
import tshirt from "../assets/img/tshirt.jpg";
import cup from "../assets/img/cup.webp";
import cub from "../assets/img/cup.jpg";
import bag from "../assets/img/bag.jpg";
import new1 from "../assets/img/new1.jpg";
import new2 from "../assets/img/new2.jpg";
import new3 from "../assets/img/new3.jpg";
import new4 from "../assets/img/new4.jpg";
import new5 from "../assets/img/new5.jpg";
import new6 from "../assets/img/new6.jpg";
import new7 from "../assets/img/new7.jpg";
import new8 from "../assets/img/new8.jpg";

export const homeData = {
  title: "UNWANTED BOYS veb-saytiga xush kelibsiz",
  subtitle: "O'zbekistondagi №1 futbol media jamoasi",
  featuresTitle: "Bizning afzalliklarimiz",
  features: [
    {
      title: "Professional jamoa",
      description:
        "Tajribali o'yinchilar va murabbiylardan tashkil topgan jamoa",
    },
    {
      title: "Zamonaviy media",
      description: "Eng so'nggi yangiliklar va eksklyuziv kontentlar",
    },
    {
      title: "Muxlislar bilan aloqa",
      description: "Ijtimoiy tarmoqlar orqali doimiy muloqot",
    },
  ],
};

export const footerData = {
  about: {
    title: "Biz haqimizda",
    description: "UNWANTED BOYS - O'zbekistonning №1 media jamoasi .",
  },
  links: {
    title: "Foydali havolalar",
    items: [
      { text: "Bosh sahifa", url: "/" },
      { text: "O'yinlar", url: "/matches" },
      { text: "Yangiliklar", url: "/news" },
      { text: "Biz haqimizda", url: "/about" },
    ],
  },
  contact: {
    title: "Reklama Uchun FC Uboys bilan Bog'lanish",
    address: " ",
    phone: "+998 950955558",
    email: " ",
  },
  social: {
    title: "Ijtimoiy tarmoqlar",
    telegram: "https://t.me/UnwantedBoys_official",
    instagram:
      "https://www.instagram.com/fc_unwantedboys?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    youtube: "https://www.youtube.com/@islomabdujabborov",
  },
  copyright:
    "© 2024 UNWANTED BOYS. Web-sayt Iskandarov Firdavs tomonidan yaratilgan .",
};

export const matchesData = [
  {
    id: 1,
    teams: "Unwanted Boys vs USA",
    score: "2 - 6",
    date: "2024-03-01",
    img: uzb,
    result: "Tugagan",
    type: "World Media Cup",
    img2: usa,
  },
  {
    id: 2,
    teams: "Unwanted Boys vs KSA",
    score: "4 - 3",
    date: "2024-01-01",
    img: uzb,
    result: "Tugagan",
    type: "World Media Cup",
    img2: ksa,
  },
  {
    id: 3,
    teams: "Unwanted Boys vs KF",
    score: "2 - 0",
    date: "2024-11-21",
    img: uzb,
    result: "Tugagan",
    type: "Asia Media Cup",
    img2: kf,
  },
  {
    id: 4,
    teams: "Unwanted Boys vs Black Bulls",
    score: "1 - 1",
    date: "2024-09-29",
    img: ub,
    result: "Tugagan",
    type: "Friendly Match 2",
    img2: bb,
  },
  {
    id: 5,
    teams: "Unwanted Boys vs Black Bulls",
    score: "2 - 0",
    date: "2024-05-12",
    img: ub,
    result: "Tugagan",
    type: "Friendly Match",
    img2: bb,
  },
  {
    id: 6,
    teams: "Unwanted Boys vs LOKOMOTIV",
    score: "1 - 4",
    date: "2024-06-09",
    img: ub,
    result: "Tugagan",
    type: "Friendly Match",
    img2: loko,
  },
];

export const videosData = [
  {
    id: 1,
    title:
      "MMA JANGCHISIGA QARSHI FUTBOLCHI JANG QILDI. OʻYINCHIMIZ TIRIK QOLDIMI?",
    url: "https://youtu.be/ee51UvORlBc",
    thumbnail: video1,
  },
  {
    id: 2,
    title: "10 TA DARVOZABONGA QARSHI 10 TA XUJUMCHI. Gol urib boʻladimi???",
    url: "https://youtu.be/BAi_Cr-j9uw",
    thumbnail: video2,
  },
  {
    id: 3,
    title:
      "OZBEKISTON JAHON CHEMPIONATIGA CHIQDI. Unwanted boys endi Kings League World Cup ishtirokchisi !!!",
    url: "https://youtu.be/yXQSfaeAMWI",
    thumbnail: video3,
  },
  {
    id: 4,
    title:
      "Keraksiz bolalar Osiyo Chempioniga aylanishdi. TARIX YOZAYOTGAN UNWANTED BOYS!!!",
    url: "https://youtu.be/Yll79X807Mg",
    thumbnail: video4,
  },
];

export const playersData = [
  {
    id: 1,
    name: "Islom",
    position: "@ABDUJABBOROV_7",
    number: 7,
    image: player7,
  },
  {
    id: 2,
    name: "Karen",
    position: "@KAREN_MURATBAYEV",
    number: 14,
    image: player14,
  },
  {
    id: 3,
    name: "Xushnud",
    position: "@XUSHNUD.1",
    number: 11,
    image: player11,
  },
  {
    id: 4,
    name: "Sardor",
    position: "@SARAMALOY",
    number: 92,
    image: player92,
  },
  {
    id: 5,
    name: "Javlon",
    position: "@JAVLON",
    number: 10,
    image: player10,
  },
  {
    id: 6,
    name: "Shamshod",
    position: "@SHAMWOD",
    number: 21,
    image: player21,
  },
  {
    id: 7,
    name: "Elhan",
    position: "@E11KHAN",
    number: 69,
    image: player69,
  },
  {
    id: 8,
    name: "Azza",
    position: "@AZZA.TV",
    number: 8,
    image: player8,
  },
  {
    id: 9,
    name: "Laziz",
    position: "@LAZIZ.SDV",
    number: 5,
    image: player5,
  },
  {
    id: 10,
    name: "Maxa",
    position: "@MAXA_33",
    number: 33,
    image: player33,
  },
];

export const donationData = {
  unwantedBoys: {
    title: "Unwanted Boys uchun xayriya",
    bank: "Example Bank",
    accountNumber: "1234 5678 9012 3456",
    cardHolder: "Unwanted Boys",
  },
  personal: {
    title: "Shaxsiy xayriya",
    bank: "Another Bank",
    accountNumber: "9876 5432 1098 7654",
    cardHolder: "John Doe",
  },
};

export const museumData = [
  {
    id: 1,
    name: "Unwanted Boys futbolkasi",
    price: "--   so'm",
    image: tshirt,
  },
  {
    id: 2,
    name: "Unwanted Boys Stakani",
    price: "--   so'm",
    image: cub,
  },
  {
    id: 3,
    name: "Unwanted Boys kubogi ",
    price: "--   so'm",
    image: cup,
  },
  {
    id: 4,
    name: "Unwanted Boys Krassovkasi",
    price: "--   so'm",
    image: trainers,
  },
  {
    id: 5,
    name: "Unwanted Boys Rugzaki",
    price: "--   so'm",
    image: bag,
  },
];

export const newsData = [
  {
    id: 1,
    title:
      "🇰🇿Qozogʻistondagi “Xalqaro turnir” qura tashlash marosimi boʻldi✅ . . .",
    date: "2024-12-17",
    summary: "",
    image: new1,
    url: "https://www.instagram.com/p/DDrehgWuagv/?utm_source=ig_web_copy_link",
  },
  {
    id: 2,
    title: "🌍Bu yangi era! Olgʻa Unwanted boys! Olgʻa Oʻzbekiston🇺🇿 . . .",
    date: "2024-06-12",
    summary: "",
    image: new2,
    url: "https://www.instagram.com/p/DDOz1k9uKiH/?utm_source=ig_web_copy_link",
  },
  {
    id: 3,
    title: "#RASMAN: Anvar Mamatov jamoaga qaytdi☠️ . . .",
    date: "2024-06-12",
    summary: "",
    image: new3,
    url: "https://www.instagram.com/p/DDP0q6rOqFm/?utm_source=ig_web_copy_link",
  },
  {
    id: 4,
    title: "Kutilganidek barcha kitoblar yopildi📚 . . .",
    date: "2024-11-22",
    summary: "",
    image: new4,
    url: "https://www.instagram.com/p/DCrUERJsKNB/?utm_source=ig_web_copy_link",
  },
  {
    id: 5,
    title:
      "⚡️Unwanted boys Osiyo kubogini Oʻzbekistonga olib kelishga tayyor🇺🇿 . . .",
    date: "2024-11-18",
    summary: "",
    image: new5,
    url: "https://www.instagram.com/p/DCgmqAMNo6D/?utm_source=ig_web_copy_link",
  },
  {
    id: 6,
    title: "Jamoamiz Himoyadagi raqobatni kuchaytirishi kerak edi📈 . . .",
    date: "2024-10-31",
    summary: "",
    image: new6,
    url: "https://www.instagram.com/p/DBxszDxIdMc/?utm_source=ig_web_copy_link",
  },
  {
    id: 7,
    title: "Jamoamizning yangi oʻrgimchagini kutib oling🕷️ . . .",
    date: "2024-10-31",
    summary: "",
    image: new7,
    url: "https://www.instagram.com/p/DByQwjMOhx0/?utm_source=ig_web_copy_link",
  },
  {
    id: 8,
    title: "@shakhriyor_jabborov BIZ BILAN⚡️ . . .",
    date: "2024-10-31",
    summary: "",
    image: new8,
    url: "https://www.instagram.com/p/DBzES3BO1UC/?utm_source=ig_web_copy_link",
  },
];

export const aboutData = [
  {
    title: "Unwanted Boys haqida",
    paraf:
      "Unwanted Boys - bu O'zbekistondagi №1 futbol media jamoasi. Biz 2023-yilda tashkil topganmiz va o'shandan beri futbol olamida o'z o'rnimizni mustahkamlab kelmoqdamiz.",
    paras:
      "Bizning jamoamiz professional futbolchilar, murabbiylar va sport jurnalistlaridan tashkil topgan. Biz nafaqat maydon ichida, balki maydondan tashqarida ham faol ishlaymiz - turli xil media kontentlar, intervyular va tahliliy materiallar tayyorlaymiz.",
    parat:
      "Unwanted Boys ning asosiy maqsadi - O'zbekiston media futbolini rivojlantirish va dunyo miqyosida tanilishiga hissa qo'shish. Biz o'z faoliyatimiz orqali yoshlarni sportga, ayniqsa futbolga qiziqishini oshirishga harakat qilamiz.",

    author: "Abdujabborov Islom",
  },
];
