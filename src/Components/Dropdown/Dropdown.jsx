import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useState } from "react";
import { useEffect } from "react";

function Dropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const collectionCategorias = collection(db, "categorias");
    getDocs(collectionCategorias).then((res) => {
      const categorias = res.docs.map((e) => {
        return { ...e.data(), id: e.id };
      });
      setCategorias(categorias);
      
    });
  }, []);

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        CATEGORIAS
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {categorias.map((e) => {
          return (
            <Link to={e.path} key={e.id}>
              <MenuItem onClick={handleClose} >
                {e.title}
              </MenuItem>
            </Link>
          );
        })}
      </Menu>
    </div>
  );
}

export default Dropdown;
