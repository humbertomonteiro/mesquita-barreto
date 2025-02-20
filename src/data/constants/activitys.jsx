import { IoIosLock } from "react-icons/io";
import {
  RiMoneyDollarCircleFill,
  RiSafe3Fill,
  RiSwordFill,
} from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdWork } from "react-icons/md";

export const areasActivity = [
  {
    title: "Blindagem Patrimonial",
    icon: <IoIosLock />,
    path: "/activity/blindagem-patrimonial",
  },
  {
    title: " Redução de Impostos",
    icon: <RiMoneyDollarCircleFill />,
    path: "/activity/reducao-de-impostos",
  },
  {
    title: "Planejamento Tributário",
    icon: <BsGraphUpArrow />,
    path: "/activity/planejamento-tributario",
  },
  {
    title: "Holding",
    icon: <RiSafe3Fill />,
    path: "/activity/holding",
  },
  {
    title: "Defesa em Execução Fiscal",
    icon: <RiSwordFill />,
    path: "/activity/defesa-em-execucao-fiscal",
  },
  {
    title: "Demandas de Empresas",
    icon: <MdWork />,
    path: "/activity/demanda-de-empresas",
  },
];
