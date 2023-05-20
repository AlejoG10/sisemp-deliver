import leche from "../images/products/leche.jpeg";
import arroz from "../images/products/arroz.png";
import shampoo from "../images/products/shampoo.png";
import papelhig from "../images/products/papelhig.png";
import salchichas from "../images/products/salchichas.png";
import dolex from "../images/products/dolex.avif";
import vino from "../images/products/vino.webp";
import arequipe from "../images/products/arequipe.png";
import cremaleche from "../images/products/cremaleche.jpeg";
import tomate from "../images/products/tomate.webp";
import cebollaroja from "../images/products/cebollaroja.webp";
import pollo from "../images/products/pollo.png";
import vitaminac from "../images/products/vitaminac.png";
import quesoalpina from "../images/products/quesoalpina.png";
import fresas from "../images/products/fresas.png";
import jabonrey from "../images/products/jabonrey.png";
import chantilli from "../images/products/chantilli.jpeg";
import bloqueador from "../images/products/bloqueador.png";
import yogurt from "../images/products/yogurt.png";
import poker from "../images/products/poker.png";
import guaro from "../images/products/guaro.png";

const getRandomPrice = () => {
  return Math.floor(Math.random() * 75000) + 3000;
};

const getRandomAvailability = () => {
  return Math.floor(Math.random() * 15);
};

export const categorias = [
  "Comida",
  "Frutas y Verduras",
  "Aseo",
  "Licor",
  "Farmacia",
];

export const localProducts = [
  {
    id: 20,
    img: guaro,
    nombre: "Aguardiente Nectar Verde",
    categoria: "Licor",
    precio: getRandomPrice(),
    disponibilidad: getRandomAvailability(),
  },
  {
    id: 19,
    img: poker,
    nombre: "Cervezas Poker",
    categoria: "Licor",
    precio: getRandomPrice(),
    disponibilidad: getRandomAvailability(),
  },
  {
    id: 18,
    img: yogurt,
    nombre: "Yogurt Alquería",
    categoria: "Comida",
    precio: getRandomPrice(),
    disponibilidad: getRandomAvailability(),
  },
  {
    id: 17,
    img: bloqueador,
    nombre: "Bloqueador Nivea",
    categoria: "Farmacia",
    precio: getRandomPrice(),
    disponibilidad: getRandomAvailability(),
  },
  {
    id: 16,
    img: chantilli,
    nombre: "Crema Chantillí Alquería",
    categoria: "Comida",
    precio: getRandomPrice(),
    disponibilidad: getRandomAvailability(),
  },
  {
    id: 15,
    img: jabonrey,
    nombre: "Jabón Rey",
    categoria: "Aseo",
    precio: getRandomPrice(),
    disponibilidad: getRandomAvailability(),
  },
  {
    id: 14,
    img: fresas,
    nombre: "Fresas",
    categoria: "Frutas y Verduras",
    precio: getRandomPrice(),
    disponibilidad: getRandomAvailability(),
  },
  {
    id: 13,
    img: quesoalpina,
    nombre: "Queso Holandés Alpina",
    categoria: "Comida",
    precio: getRandomPrice(),
    disponibilidad: getRandomAvailability(),
  },
  {
    id: 12,
    img: vitaminac,
    nombre: "Vitamina C",
    categoria: "Farmacia",
    precio: getRandomPrice(),
    disponibilidad: getRandomAvailability(),
  },
  {
    id: 11,
    img: pollo,
    nombre: "Pollo",
    categoria: "Comida",
    precio: getRandomPrice(),
    disponibilidad: getRandomAvailability(),
  },
  {
    id: 10,
    img: cebollaroja,
    nombre: "Cebolla Roja",
    categoria: "Frutas y Verduras",
    precio: getRandomPrice(),
    disponibilidad: getRandomAvailability(),
  },
  {
    id: 9,
    img: tomate,
    nombre: "Tomate",
    categoria: "Frutas y Verduras",
    precio: getRandomPrice(),
    disponibilidad: getRandomAvailability(),
  },
  {
    id: 8,
    img: cremaleche,
    nombre: "Crema de Leche Alquería",
    categoria: "Comida",
    precio: getRandomPrice(),
    disponibilidad: getRandomAvailability(),
  },
  {
    id: 7,
    img: arequipe,
    nombre: "Arequipe Alquería",
    categoria: "Comida",
    precio: getRandomPrice(),
    disponibilidad: getRandomAvailability(),
  },
  {
    id: 6,
    img: vino,
    nombre: "Vino Gato Negro",
    categoria: "Licor",
    precio: getRandomPrice(),
    disponibilidad: getRandomAvailability(),
  },
  {
    id: 5,
    img: dolex,
    nombre: "Dolex Gripa",
    categoria: "Farmacia",
    precio: getRandomPrice(),
    disponibilidad: getRandomAvailability(),
  },
  {
    id: 4,
    img: salchichas,
    nombre: "Salchichas Zenú",
    categoria: "Comida",
    precio: getRandomPrice(),
    disponibilidad: getRandomAvailability(),
  },
  {
    id: 3,
    img: papelhig,
    nombre: "Papel Higiénico",
    categoria: "Aseo",
    precio: getRandomPrice(),
    disponibilidad: getRandomAvailability(),
  },
  {
    id: 2,
    img: leche,
    nombre: "Leche Alquería",
    categoria: "Comida",
    precio: getRandomPrice(),
    disponibilidad: getRandomAvailability(),
  },
  {
    id: 1,
    img: arroz,
    nombre: "Arroz Diana",
    categoria: "Comida",
    precio: getRandomPrice(),
    disponibilidad: getRandomAvailability(),
  },
  {
    id: 0,
    img: shampoo,
    nombre: "Shampoo Salomé",
    categoria: "Aseo",
    precio: getRandomPrice(),
    disponibilidad: getRandomAvailability(),
  },
];

export const localOrders = [
  {
    id: 2,
    proveedor: "Alpina",
    fechaSolicitud: "07/03/2023",
    horaSolicitud: "07:05:00 AM",
    fechaEntrega: "27/03/2023",
    horaEntrega: "07:05:00 AM",
  },
  {
    id: 1,
    proveedor: "Familia",
    fechaSolicitud: "07/03/2023",
    horaSolicitud: "07:05:00 AM",
    fechaEntrega: "27/03/2023",
    horaEntrega: "07:05:00 AM",
  },
  {
    id: 0,
    proveedor: "Zenú",
    fechaSolicitud: "07/03/2023",
    horaSolicitud: "07:05:00 AM",
    fechaEntrega: "27/03/2023",
    horaEntrega: "07:05:00 AM",
  },
];
