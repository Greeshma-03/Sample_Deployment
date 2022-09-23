import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BLogout from "../common/logout";

const BLoginNavbar = () => {
  const navigate = useNavigate();




  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/welcome2")}
          >
            Home Page
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={() => navigate("/current")}>
            Current
          </Button>
          <Button color="inherit" onClick={() => navigate("/profile")}>
            Profile
          </Button>
          <Button color="inherit" onClick={() => navigate("/viewall")}>
            View All
          </Button>
          <Button color="inherit" onClick={() => navigate("/bprofile")}>
            Edit Profile
          </Button>

          <Button color="inherit" onClick={() => navigate("/table")}>
            Table
          </Button>

          <Button color="inherit" onClick={() => navigate("/logout")}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default BLoginNavbar;
