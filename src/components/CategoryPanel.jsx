import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { RxCross2 } from "react-icons/rx";
import { FaRegPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegMinusSquare } from "react-icons/fa";

function CategoryPanel({ setIsopens, isOpens }) {
  const categories = [
    {
      title: "FASHION",
      subcategories: [
        {
          title: "APPAREL",
          items: [
            "Smart Tablet",
            "Crepe T-Shirt",
            "Leather Watch",
            "Rolling Diamond",
          ],
        },
      ],
    },
    {
      title: "ELECTRONICS",
      subcategories: [
        {
          title: "DEVICES",
          items: ["Smartphone", "Laptop", "Smartwatch"],
        },
      ],
    },
  ];

  const toggleDrawer = (newOpen) => () => {
    setIsopens(newOpen);
  };

  const [SubmenuItems, setSubmenuItems] = useState(null);

  const openSubmenu = (index) => {
    if (SubmenuItems === index) {
      setSubmenuItems(null);
    } else {
      setSubmenuItems(index);
    }
  };
  const [InnerSubmenuItems, setInnerSubmenuItems] = useState(null);
  const openInnerSubmenu = (index) => {
    if (InnerSubmenuItems === index) {
      setInnerSubmenuItems(null);
    } else {
      setInnerSubmenuItems(index);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <div className="p-2 pb-3">
        <img src="aapplogo.jpg" alt="" />
      </div>

      <div className="flex items-center  font-medium px-2 pt-2 justify-between">
        Shop By Categories{" "}
        <RxCross2 onClick={toggleDrawer(false)} className="cursor-pointer" />
      </div>

      <div className="scroll pt-3">
        <ul className="w-full">
          {categories.map((category, i) => (
            <li key={i} className="list-none flex flex-col relative">
              <Button className="w-full px-3 text-gray-500! justify-start!">
                {category.title}
              </Button>

              {SubmenuItems === i ? (
                <FaRegMinusSquare
                  className="absolute top-2.5 right-[5px] cursor-pointer"
                  onClick={() => openSubmenu(i)}
                />
              ) : (
                <FaRegPlusSquare
                  className="absolute top-2.5 right-[5px] cursor-pointer"
                  onClick={() => openSubmenu(i)}
                />
              )}

              {SubmenuItems === i && (
                <ul className="submenu w-full pl-3">
                  {category.subcategories.map((sub, j) => (
                    <li key={j} className="list-none flex flex-col relative">
                      <Button className="w-full px-3 text-gray-500! justify-start!">
                        {sub.title}
                      </Button>

                      {InnerSubmenuItems === j ? (
                        <FaRegMinusSquare
                          className="absolute top-2.5 right-[5px] cursor-pointer"
                          onClick={() => openInnerSubmenu(j)}
                        />
                      ) : (
                        <FaRegPlusSquare
                          className="absolute top-2.5 right-[5px] cursor-pointer"
                          onClick={() => openInnerSubmenu(j)}
                        />
                      )}

                      {InnerSubmenuItems === j && (
                        <ul className="submenu w-full pl-3 pt-1">
                          {sub.items.map((item, k) => (
                            <li key={k} className="list-none">
                              <Link className="w-full block px-3 text-gray-500! font-medium link">
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Box>
  );
  return (
    <div>
      <Drawer open={isOpens} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default CategoryPanel;
