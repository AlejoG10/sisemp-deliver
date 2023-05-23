import { v4 } from "uuid";
import lecheAlpina from "../images/products/lecheAlpina.png";
import pollo from "../images/products/pollo.png";
import atun from "../images/products/atun.png";
import manzanaPostobon from "../images/products/manzanaPostobon.jpeg";
import arroz from "../images/products/arroz.png";
import champu from "../images/products/champu.jpeg";
import deter from "../images/products/deter.png";
import galleta from "../images/products/galleta.png";
import pañales from "../images/products/pañales.png";
import limpiador from "../images/products/limpiador.png";
import salsaTomate from "../images/products/salsaTomate.webp";
import tinto from "../images/products/tinto.webp";
import colgate from "../images/products/colgate.png";
import papelHig from "../images/products/papelhig.png";
import chocolate from "../images/products/chocolate.png";
import comidaperro from "../images/products/comidaperro.png";
import limpdesinf from "../images/products/limpdesinf.png";
import colombiana from "../images/products/colombiana.png";
import pañuelos from "../images/products/pañuelos.png";
import jabondove from "../images/products/jabondove.png";
import uvaPostobon from "../images/products/uvaPostobon.jpeg";

export const CATEGORIAS = [
  "Alimentos frescos",
  "Alimetos enlatados y conservas",
  "Bebidas",
  "Productos de despensa",
  "Productos de cuidado personal",
  "Productos de limpieza del hogar",
  "Snacks y dulces",
  "Productos para el cuidado de bebés",
  "Productos para mascotas",
  "Productos del cuidado del hogar",
];

export const PROVEEDORES = [
  "Alicorp",
  "Alpina",
  "Alimentos Polar Colombia",
  "Alquería",
  "Colombina",
  "Colgate-Palmolive",
  "Colombit",
  "CasaLuker",
  "Grupo Éxito",
  "Grupo Nutresa",
  "Johnson & Johnson",
  "Kellogg's",
  "Kimberly-Clark",
  "Nestlé",
  "Nutrifamilia",
  "Postobón",
  "PROALCA",
  "Procter & Gamble",
  "Unilever",
];

export const genId = () => v4().substring(0, 5);
const getRandom = (min, max) => Math.floor(Math.random() * max) + min;
const genProveedor = () =>
  PROVEEDORES[Math.floor(Math.random() * PROVEEDORES.length)];
const genFecha = (start, end) =>
  new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  ).toLocaleDateString();
const genBool = () => getRandom(0, 11) > 5;

export const LOCAL_PROVEEDORES = [
  {
    id: genId(),
    nombre: PROVEEDORES[0],
    productos: [],
  },
  {
    id: genId(),
    nombre: PROVEEDORES[1],
    productos: [],
  },
  {
    id: genId(),
    nombre: PROVEEDORES[2],
    productos: [],
  },
  {
    id: genId(),
    nombre: PROVEEDORES[3],
    productos: [],
  },
  {
    id: genId(),
    nombre: PROVEEDORES[4],
    productos: [],
  },
  {
    id: genId(),
    nombre: PROVEEDORES[5],
    productos: [],
  },
  {
    id: genId(),
    nombre: PROVEEDORES[6],
    productos: [],
  },
  {
    id: genId(),
    nombre: PROVEEDORES[7],
    productos: [],
  },
  {
    id: genId(),
    nombre: PROVEEDORES[8],
    productos: [],
  },
  {
    id: genId(),
    nombre: PROVEEDORES[9],
    productos: [],
  },
  {
    id: genId(),
    nombre: PROVEEDORES[10],
    productos: [],
  },
  {
    id: genId(),
    nombre: PROVEEDORES[11],
    productos: [],
  },
  {
    id: genId(),
    nombre: PROVEEDORES[12],
    productos: [],
  },
  {
    id: genId(),
    nombre: PROVEEDORES[13],
    productos: [],
  },
  {
    id: genId(),
    nombre: PROVEEDORES[14],
    productos: [],
  },
  {
    id: genId(),
    nombre: PROVEEDORES[15],
    productos: [],
  },
  {
    id: genId(),
    nombre: PROVEEDORES[16],
    productos: [],
  },
  {
    id: genId(),
    nombre: PROVEEDORES[17],
    productos: [],
  },
  {
    id: genId(),
    nombre: PROVEEDORES[18],
    productos: [],
  },
];

export const LOCAL_PRODUCTS = [
  {
    id: genId(),
    proveedorId: LOCAL_PROVEEDORES.filter((p) => p.nombre === "Alpina")[0].id,
    img: lecheAlpina,
    nombre: "Leche Alpina",
    categoria: "Bebidas",
    precio: getRandom(7000, 10000),
    disponibilidad: getRandom(0, 75),
  },
  {
    id: genId(),
    proveedorId: LOCAL_PROVEEDORES.filter((p) => p.nombre === "Grupo Éxito")[0]
      .id,
    img: pollo,
    nombre: "Pollo",
    categoria: "Alimentos frescos",
    precio: getRandom(20000, 25000),
    disponibilidad: getRandom(0, 10),
  },
  {
    id: genId(),
    proveedorId: LOCAL_PROVEEDORES.filter((p) => p.nombre === "CasaLuker")[0]
      .id,
    img: atun,
    nombre: "Atún",
    categoria: "Alimentos enlatados y conservas",
    precio: getRandom(4000, 7500),
    disponibilidad: getRandom(0, 15),
  },
  {
    id: genId(),
    proveedorId: LOCAL_PROVEEDORES.filter((p) => p.nombre === "Postobón")[0].id,
    img: manzanaPostobon,
    nombre: "Manzana Postobón",
    categoria: "Bebidas",
    precio: getRandom(2000, 3000),
    disponibilidad: getRandom(0, 20),
  },
  {
    id: genId(),
    proveedorId: LOCAL_PROVEEDORES.filter((p) => p.nombre === "Alicorp")[0].id,
    img: arroz,
    nombre: "Arroz blanco",
    categoria: "Productos de despensa",
    precio: getRandom(7000, 11000),
    disponibilidad: getRandom(0, 10),
  },
  {
    id: genId(),
    proveedorId: LOCAL_PROVEEDORES.filter(
      (p) => p.nombre === "Procter & Gamble"
    )[0].id,
    img: champu,
    nombre: "Champú Pantene",
    categoria: "Productos de cuidado personal",
    precio: getRandom(12000, 16000),
    disponibilidad: getRandom(0, 5),
  },
  {
    id: genId(),
    proveedorId: LOCAL_PROVEEDORES.filter(
      (p) => p.nombre === "Colgate-Palmolive"
    )[0].id,
    img: deter,
    nombre: "Detergente en polvo",
    categoria: "Productos de limpieza del hogar",
    precio: getRandom(15000, 25000),
    disponibilidad: getRandom(0, 11),
  },
  {
    id: genId(),
    proveedorId: LOCAL_PROVEEDORES.filter((p) => p.nombre === "Kellogg's")[0]
      .id,
    img: galleta,
    nombre: "Galletas de avena",
    categoria: "Snacks y dulces",
    precio: getRandom(5000, 7500),
    disponibilidad: getRandom(0, 25),
  },
  {
    id: genId(),
    proveedorId: LOCAL_PROVEEDORES.filter(
      (p) => p.nombre === "Kimberly-Clark"
    )[0].id,
    img: pañales,
    nombre: "Pañales Huggies",
    categoria: "Productos para el cuidado de bebés",
    precio: getRandom(20000, 27000),
    disponibilidad: getRandom(0, 8),
  },
  {
    id: genId(),
    proveedorId: LOCAL_PROVEEDORES.filter((p) => p.nombre === "Colombit")[0].id,
    img: limpiador,
    nombre: "Limpiador multiusos",
    categoria: "Productos de limpieza del hogar",
    precio: getRandom(50000, 7000),
    disponibilidad: getRandom(0, 15),
  },
  {
    id: genId(),
    proveedorId: LOCAL_PROVEEDORES.filter((p) => p.nombre === "Nestlé")[0].id,
    img: salsaTomate,
    nombre: "Salsa de tomate",
    categoria: "Alimentos enlatados y conservas",
    precio: getRandom(6000, 8000),
    disponibilidad: getRandom(0, 8),
  },
  {
    id: genId(),
    proveedorId: LOCAL_PROVEEDORES.filter((p) => p.nombre === "PROALCA")[0].id,
    img: tinto,
    nombre: "Café tinto",
    categoria: "Bebidas",
    precio: getRandom(6000, 8000),
    disponibilidad: getRandom(0, 15),
  },
  {
    id: genId(),
    proveedorId: LOCAL_PROVEEDORES.filter(
      (p) => p.nombre === "Colgate-Palmolive"
    )[0].id,
    img: colgate,
    nombre: "Crema dental Colgate",
    categoria: "Productos de cuidado personal",
    precio: getRandom(4000, 6000),
    disponibilidad: getRandom(0, 20),
  },
  {
    id: genId(),
    proveedorId: LOCAL_PROVEEDORES.filter(
      (p) => p.nombre === "Kimberly-Clark"
    )[0].id,
    img: papelHig,
    nombre: "Papel higiénico",
    categoria: "Productos de cuidado del hogar",
    precio: getRandom(5000, 7000),
    disponibilidad: getRandom(0, 20),
  },
  {
    id: genId(),
    proveedorId: LOCAL_PROVEEDORES.filter((p) => p.nombre === "CasaLuker")[0]
      .id,
    img: chocolate,
    nombre: "Chocolate de leche",
    categoria: "Snacks y dulces",
    precio: getRandom(2000, 4000),
    disponibilidad: getRandom(0, 25),
  },
  {
    id: genId(),
    proveedorId: LOCAL_PROVEEDORES.filter((p) => p.nombre === "Nutrifamilia")[0]
      .id,
    img: comidaperro,
    nombre: "Comida de perros Pedigree",
    categoria: "Productos para mascotas",
    precio: getRandom(20000, 35000),
    disponibilidad: getRandom(0, 7),
  },
  {
    id: genId(),
    proveedorId: LOCAL_PROVEEDORES.filter(
      (p) => p.nombre === "Procter & Gamble"
    )[0].id,
    img: limpdesinf,
    nombre: "Limpiador desinfectante",
    categoria: "Productos de limpieza del hogar",
    precio: getRandom(11000, 18000),
    disponibilidad: getRandom(0, 15),
  },
  {
    id: genId(),
    proveedorId: LOCAL_PROVEEDORES.filter((p) => p.nombre === "Postobón")[0].id,
    img: colombiana,
    nombre: "Colombiana Postobón",
    categoria: "Bebidas",
    precio: getRandom(3000, 5500),
    disponibilidad: getRandom(0, 25),
  },
  {
    id: genId(),
    proveedorId: LOCAL_PROVEEDORES.filter(
      (p) => p.nombre === "Kimberly-Clark"
    )[0].id,
    img: pañuelos,
    nombre: "Pañuelos de limpieza",
    categoria: "Productos de cuidado del hogar",
    precio: getRandom(3000, 4000),
    disponibilidad: getRandom(0, 20),
  },
  {
    id: genId(),
    proveedorId: LOCAL_PROVEEDORES.filter((p) => p.nombre === "Unilever")[0].id,
    img: jabondove,
    nombre: "Jabón de barra Dove",
    categoria: "Productos de cuidado personal",
    precio: getRandom(7000, 10000),
    disponibilidad: getRandom(0, 13),
  },
  {
    id: genId(),
    proveedorId: LOCAL_PROVEEDORES.filter((p) => p.nombre === "Postobón")[0].id,
    img: uvaPostobon,
    nombre: "Uva Postobón",
    categoria: "Bebidas",
    precio: getRandom(3000, 5000),
    disponibilidad: getRandom(0, 25),
  },
];

// errores?
LOCAL_PRODUCTS.forEach((product) => {
  if (!CATEGORIAS.includes(product.categoria)) console.log("*** ERROR ***");
});

// asocaciones
const assoc = (proveedor, productoIdx) => {
  LOCAL_PROVEEDORES.filter((p) => p.nombre === proveedor)[0].productos.push(
    LOCAL_PRODUCTS[productoIdx]
  );
};
assoc("Alpina", 0); // leche alpina
assoc("Grupo Éxito", 1); // pollo
assoc("CasaLuker", 2); // atun
assoc("Postobón", 3); // manzana postobón
assoc("Alicorp", 4); // arroz blanco
assoc("Procter & Gamble", 5); // champu
assoc("Colgate-Palmolive", 6); // detergente
assoc("Kellogg's", 7); // galleta
assoc("Kimberly-Clark", 8); // pañales
assoc("Colombit", 9); // limpiador
assoc("Nestlé", 10); // salsa de tomate
assoc("PROALCA", 11); // tinto
assoc("Colgate-Palmolive", 12); // colgate
assoc("Kimberly-Clark", 13); // papelhig
assoc("CasaLuker", 14); // chocolate de leche
assoc("Nutrifamilia", 15); // comida perro
assoc("Procter & Gamble", 16); // limpiador desinfectante
assoc("Postobón", 17); // colombiana
assoc("Kimberly-Clark", 18); // pañuelos
assoc("Unilever", 19); // jabon dove
assoc("Postobón", 20); // uva

export const LOCAL_ORDERS = [
  {
    id: genId(),
    proveedor: genProveedor(),
    fechaSolicitud: genFecha(new Date(2023, 0, 1), new Date()),
    horaSolicitud: "10:00:00 AM",
    fechaEntrega: genFecha(new Date(2023, 0, 1), new Date()),
    horaEntrega: "3:00:00 PM",
    entregado: genBool(),
  },
  {
    id: genId(),
    proveedor: genProveedor(),
    fechaSolicitud: genFecha(new Date(2023, 0, 1), new Date()),
    horaSolicitud: "10:00:00 AM",
    fechaEntrega: genFecha(new Date(2023, 0, 1), new Date()),
    horaEntrega: "3:00:00 PM",
    entregado: genBool(),
  },
  {
    id: genId(),
    proveedor: genProveedor(),
    fechaSolicitud: genFecha(new Date(2023, 0, 1), new Date()),
    horaSolicitud: "10:00:00 AM",
    fechaEntrega: genFecha(new Date(2023, 0, 1), new Date()),
    horaEntrega: "3:00:00 PM",
    entregado: genBool(),
  },
  {
    id: genId(),
    proveedor: genProveedor(),
    fechaSolicitud: genFecha(new Date(2023, 0, 1), new Date()),
    horaSolicitud: "10:00:00 AM",
    fechaEntrega: genFecha(new Date(2023, 0, 1), new Date()),
    horaEntrega: "3:00:00 PM",
    entregado: genBool(),
  },
  {
    id: genId(),
    proveedor: genProveedor(),
    fechaSolicitud: genFecha(new Date(2023, 0, 1), new Date()),
    horaSolicitud: "10:00:00 AM",
    fechaEntrega: genFecha(new Date(2023, 0, 1), new Date()),
    horaEntrega: "3:00:00 PM",
    entregado: genBool(),
  },
];
