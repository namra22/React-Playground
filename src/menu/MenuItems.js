import React, { useState } from "react";
import MenuList from "./MenuList";
import {FaPlus,FaMinus} from 'react-icons/fa'
export default function MenuItem({ item }) {
  const [showChildren, setShowChildren] = useState({});
  function handleShowChildrenToggle(currentLabel) {
    setShowChildren({
      ...showChildren,
      [currentLabel]: !showChildren[currentLabel],
    });
  }
  return (
    <li>
      <div style={{
        display:'flex',
        alignItems:'center',
        gap:'20px',
        cursor:'pointer',
    }}>
        <p>{item.label}</p>
        {item?.children?.length > 0 ? (
          <span onClick={() => handleShowChildrenToggle(item.label)}>{showChildren[item.label] ? <FaMinus color="white" size={20}/>:<FaPlus color="white"  size={20}/>}</span>
        ) : null}
      </div>
      {item?.children?.length > 0 && showChildren[item.label] ?  (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
