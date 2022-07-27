import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import StyledToolbar from "../Header/styledHeader";
import { goToLoginPage, goToRecipesListPage } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";



const Header = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={()=>goToRecipesListPage(navigate)} color="inherit">Cookenu</Button>
          <Button onClick={()=>goToLoginPage(navigate)}color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
