import { FaBorderAll } from "react-icons/fa";
import { MdFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { LiaPastafarianismSolid } from "react-icons/lia";
import { MdDomainAdd } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

let category = [
  {
    id: 1,
    icon: <FaBorderAll className="text-green-500 w-15 h-15" />,
    name: "All",
  },
  {
    id: 2,
    icon: <MdFreeBreakfast className="text-green-500 w-15 h-15" />,
    name: "breakfast",
  },
  {
    id: 3,
    icon: <LuSoup className="text-green-500 w-15 h-15" />,
    name: "soups",
  },
  {
    id: 4,
    icon: <LiaPastafarianismSolid className="text-green-500 w-15 h-15" />,
    name: "pasta",
  },
  {
    id: 5,
    icon: <MdDomainAdd className="text-green-500 w-15 h-15" />,
    name: "main_course",
  },
  {
    id: 6,
    icon: <GiFullPizza className="text-green-500 w-15 h-15" />,
    name: "pizza",
  },
  {
    id: 7,
    icon: <GiHamburger className="text-green-500 w-15 h-15" />,
    name: "burger",
  },
];
export default category;
