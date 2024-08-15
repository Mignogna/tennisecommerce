import tennism1 from "../../assets/img/tennis-m1.jpeg";
import tennisf1 from "../../assets/img/tennis-f1.webp";
import tennisch1 from "../../assets/img/children´s-1.webp";
import tennism2 from "../../assets/img/tennis-m2.webp";
import tennisf2 from "../../assets/img/tennis-f2.jpeg";
import tennisch2 from "../../assets/img/children´s-2.webp";
import tennism3 from "../../assets/img/tennis-m3.webp";
import tennisf3 from "../../assets/img/tennis-f3.webp";
import tennisch3 from "../../assets/img/children´s-3.jpg";
import tennism4 from "../../assets/img/tennis-m4.webp";
import tennisf4 from "../../assets/img/tennis-f4.webp";
import tennisch4 from "../../assets/img/children´s-4.jpg";

export const products = [
  {
    id: "1",
    name: "Asics Gel Kayano 26",
    price: 436,
    image: tennism1,
    category: "Male",
  },

  {
    id: "2",
    name: "Asics Gel Quantum 180",
    price: 510,
    image: tennisf1,
    category: "Female",
  },

  {
    id: "3",
    name: "Asics Sugar Baby 3 ",
    price: 165,
    image: tennisch1,
    category: "Children's",
  },

  {
    id: "4",
    name: "Asics Gel Kayano 26",
    price: 475,
    image: tennism2,
    category: "Male",
  },

  {
    id: "5",
    name: "Asics Gel Nimbus 22",
    price: 378,
    image: tennisf2,
    category: "Female",
  },

  {
    id: "6",
    name: "Asics Sugar Baby 3 TS",
    price: 195,
    image: tennisch2,
    category: "Children's",
  },

  {
    id: "7",
    name: "Asics Roadhawk FF2 ",
    price: 735,
    image: tennism3,
    category: "Male",
  },

  {
    id: "8",
    name: "Asics Gel Nimbus 23",
    price: 467,
    image: tennisf3,
    category: "Female",
  },
  {
    id: "9",
    name: "Asics Fantasy 4 PS",
    price: 265,
    image: tennisch3,
    category: "Children's",
  },
  {
    id: "10",
    name: "Asics Gel Kayano 29",
    price: 699,
    image: tennism4,
    category: "Male",
  },

  {
    id: "11",
    name: "Asics Raiden Feminino ",
    price: 370,
    image: tennisf4,
    category: "Female",
  },

  {
    id: "12",
    name: "Asics Ent. GEL-BND",
    price: 196,
    image: tennisch4,
    category: "Children's",
  },
];
export const productsIndexedById = products.reduce((acc, currentValue) => {
  const { id } = currentValue;
  acc[id] = currentValue;
  return acc;
}, {});
