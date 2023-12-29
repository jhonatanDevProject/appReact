import { BsCartFill } from "react-icons/bs";
import { AiFillHome, AiFillHeart } from "react-icons/ai";



import Siseco1 from "./assets/images/temaslist/sistemaseco.png";
import siseco2 from "./assets/images/temaslist/siseco2.png";





import banner1 from "./assets/images/ev.png";
import banner2 from "./assets/images/bannerimg/imgBaner.png";
import banner3 from "./assets/images/bannerimg/youtubepaged.png";


import Matfin from "./assets/images/temaslist/matfin.png";
import Alg from "./assets/images/temaslist/Alg.png";
import ingEco from "./assets/images/temaslist/ingEco.png";

import matematica from "./assets/images/temaslist/matematica.png";
import examIngr from "./assets/images/temaslist/examIngr.png";



/* import react-icons */
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";

export const nav = [
  {
    id: 1,
    name: "Home",
    icon: <AiFillHome />,
    path: "/",
  },
  {
    id: 2,
    name: "Cart",
    icon: <BsCartFill />,
    path: "/cart",
  },
];

export const banner = [
  {
    id: 1,
    img: banner1,
    smallTitle: "Emir Vargas",
    title: "Pagina de Youtube para Cursos de ...",
    desc: "Mi nombre es Emir Félix Vargas Peredo. Soy una persona activa que busca incurrir en todos los ámbitos de prosperidad y aprendizaje posible lo que me hacen un firme creyente de que toda la información útil recibida debe ser compartida con los demás para mejorar en conjunto..Tengo título Master en Gestión Empresarial con mención en Gestión Financiera y también Master en Educación Superior Universitaria por lo que estoy certificado para enseñarte de muchos temas relacionados a mis estudios que pueden ser de tu interés.",
  },
  {
    id: 2,
    img: banner2,
    smallTitle: "Pagina Youtube para diferentes materias de ...",
    title: "Materias de Sistemas Economicos, Mat Financiera Algebra etc",
    desc: "Materias para las diferentes carreras de la universidad Mayor de San Simon",
  },
  {
    id: 3,
    img: banner3,
    smallTitle: "Suscribirse al canal de Youtube ",
    title: "Emir Vargas",
    desc: "Suscribete y dale like a al las diferentes paginas de la comunidad de ..., https://www.youtube.com/@emirvargas7442/featured",
  },
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Sistemas Economicos",
    img: Siseco1,
    desc: "Materia de Sistemas Economicos",
    price: 600,
    isFavorite: false,
    quantity: 1,
    category: "SistemasEconomicos",
    url: "https://www.youtube.com/watch?v=fWSR0EIE7cg&list=PLeSEuohwkHlKRYfo2hiX2NEYd5IQsNCdm",
  },
  {
    id: 2,
    name: "Matematica Finaciera",
    img: Matfin,
    desc: "Materia de Matematica Financiera",
    price: 80,
    isFavorite: false,
    quantity: 1,
    category: "MatematicaFinanciera",
    url: "https://www.youtube.com/watch?v=KrWeHuab9Xw&list=PLeSEuohwkHlL4EyMbHi5_RUoF7e8yu6aQ",

  },
  {
    id: 3,
    name: "Algebra I",
    img: Alg,
    desc: "Materia de Algebra",
    price: 1200,
    isFavorite: false,
    quantity: 1,
    category: "AlgebraI",
    url: "    https://www.youtube.com/watch?v=20LVpiTLKRU&list=PLeSEuohwkHlJcmI_Pqc2q1uRUR70cbcL9",

  },
  {
    id: 4,
    name: "Ingenieria Economica",
    img: ingEco,
    desc: "Materia de Ingenieria Economica",
    price: 30,
    isFavorite: false,
    quantity: 1,
    category: "IngenieriaEconomica",
    url: "https://www.youtube.com/watch?v=JmpSdBCivjo&list=PLeSEuohwkHlJLqcLIZHvFqFdbRphb4_FK",
  },
  {
    id: 5,
    name: "Matematica",
    img: matematica,
    desc: "Materia de Matematicas",
    price: 1400,
    isFavorite: false,
    quantity: 1,
    category: "Matematicas",
    url: "https://www.youtube.com/watch?v=nsFkH4sjW_M&list=PLeSEuohwkHlIFRrslJZSgYxtb-sAaFBFd",
 
  },
  {
    id: 6,
    name: "Examenes de Ingreso",
    img: examIngr,
    desc: "Examenen de Ingreso",
    price: 900,
    isFavorite: false,
    quantity: 1,
    category: "ExamenesIngreso",
    url: "https://www.youtube.com/watch?v=XlJXBRNm-VY&list=PLeSEuohwkHlK1e_xf7U9F2CE5GF9bZj4y",
 
  },
  {
    id: 7,
    name: "Sistemas Economicos Clases",
    img: siseco2,
    desc: "Sistemas Economicos",
    price: 900,
    isFavorite: false,
    quantity: 1,
    category: "SistemasEconomicos",
    url: "https://www.youtube.com/watch?v=Z75LZHECPss&list=PLeSEuohwkHlIPIc3Vxegp62eRd5ojZkT0",
 
  },
  
];

export const footer = {
  social: [
    <AiFillFacebook />,
    <AiFillInstagram />,
    <AiFillLinkedin />,
    <AiFillYoutube />,
    <AiFillGithub />,
  ],
  details: [
    {
      id: 1,
      title: "Youtube",
      links: [
        "Material Sistemas Economicos",
        "Matematica Financiera",
        "AlgrebraI",
        "Ing Econmica",
        "Matematica",
        "Examenes Ingreso",
      ],
    },
    {
      id: 2,
      title: "Informacion",
      links: [
        "WebDiseño",
        
      ],
    },
    {
      id: 3,
      title: "Compania",
      links: ["Sobre Nosotros", "Carrera"],
    },
    {
      id: 4,
      title: "Recursos",
      links: ["Sobre Nosotros", "Carreras", "UMSS", "Constactos", "Equipo"],
    },
  ],
};

export const option = [
  {
    name: "Todos",
    value: "All",
  },
  {
    name: "Sistemas Economicos",
    value: "SistemasEconomicos",
  },
  {
    name: "Matematica Financiera",
    value: "MatematicaFinanciera",
  },
  {
    name: "AlgebraI",
    value: "AlgebraI",
  },
  {
    name: "Ingenieria Economica",
    value: "IngenieriaEconomica",
  },
  {
    name: "Matematicas",
    value: "Matematicas",
  },
  {
    name: "Examenes Ingreso",
    value: "ExamenesIngreso",
  },
  
];

export const lastest = [
  {
    id: 10,
    name: "Sistemas economicos",
    img: examIngr,
    desc: "TEMA 1",
    price: 40,
    isFavorite: false,
    quantity: 1,
    category: "Sistemas Economicos",
  },
  {
    id: 11,
    name: "Pillow Luxrury XS",
    img: examIngr,
    desc: "Soft and good design for sleep",
    price: 80,
    isFavorite: false,
    quantity: 1,
    category: "Other",
  },
  {
    id: 12,
    name: "Watch Ultra 49mm LTE",
    img: examIngr,
    desc: "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
    price: 250,
    isFavorite: false,
    quantity: 1,
    category: "Other",
  },
  {
    id: 32,
    name: "Avenue Of Americas Intravedere Men's Watch",
    img: examIngr,
    desc: "Life shrinks or expands in proportion to one’s courage.",
    price: 950,
    isFavorite: false,
    quantity: 1,
    category: "Other",
  },
  {
    id: 30,
    name: "Keyboard Dareu A98 PRO Tri Mode Timeless",
    img: examIngr,
    desc: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
    price: 320,
    isFavorite: false,
    quantity: 1,
    category: "Keyboard",
  },
  {
    id: 31,
    name: "Glass 2185 C1",
    img: examIngr,
    desc: "Remember no one can make you feel inferior without your consent.",
    price: 40,
    isFavorite: false,
    quantity: 1,
    category: "Other",
  },
  {
    id: 33,
    name: "Airpod XC7647",
    img: examIngr,
    desc: "It’s not the years in your life that count. It’s the life in your years.",
    price: 270,
    isFavorite: false,
    quantity: 1,
    category: "Tech",
  },
  {
    id: 29,
    name: "Keyboard IKBC CD87HR Dolch Brown",
    img: examIngr,
    desc: "An unexamined life is not worth living.",
    price: 470,
    isFavorite: false,
    quantity: 1,
    category: "Keyboard",
  },
];
