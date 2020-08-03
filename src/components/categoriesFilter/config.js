import React from "react";
import { ReactComponent as Alcohol } from "./svg/alcohol.svg";
import { ReactComponent as Car } from "./svg/car.svg";
import { ReactComponent as Comunal } from "./svg/comunal.svg";
import { ReactComponent as Else } from "./svg/else.svg";
import { ReactComponent as Health } from "./svg/health.svg";
import { ReactComponent as Home } from "./svg/home.svg";
import { ReactComponent as Learn } from "./svg/learn.svg";
import { ReactComponent as Party } from "./svg/party.svg";
import { ReactComponent as Products } from "./svg/products.svg";
import { ReactComponent as Sport } from "./svg/sport.svg";
import { ReactComponent as Tools } from "./svg/tools.svg";

export default [
  {
    name: "продукты",
    svg: <Products />,
  },
  {
    name: "алкоголь",
    svg: <Alcohol />,
  },
  {
    name: "развлечение",
    svg: <Party />,
  },
  {
    name: "здоровье",
    svg: <Health />,
  },
  {
    name: "транспорт",
    svg: <Car />,
  },
  {
    name: "все для дома",
    svg: <Home />,
  },
  {
    name: "техника",
    svg: <Tools />,
  },
  {
    name: "коммуналка, связь",
    svg: <Comunal />,
  },
  {
    name: "спорт, хобби",
    svg: <Sport />,
  },
  {
    name: "образование",
    svg: <Learn />,
  },
  {
    name: "прочее",
    svg: <Else />,
  },
];
