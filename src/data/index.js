import leche from "../images/products/leche.jpeg";
import arroz from "../images/products/arroz.png";
import shampoo from "../images/products/shampoo.png";

const getRandomPrice = () => {
  return Math.floor(Math.random() * 100000) + 1;
};

const getRandomAvailability = () => {
  return Math.floor(Math.random() * 25);
};

export const localProducts = [
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
