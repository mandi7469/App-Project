// imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Box>
          <IconButton onClick={handleHomeClick}>
            <ArrowBackIcon
              sx={{
                color: "white",
              }}
            >
              {" "}
            </ArrowBackIcon>
            <Typography variant="caption" color="white" sx={{ pl: 1 }}>
              Logout
            </Typography>
          </IconButton>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            px: 0,
          }}
        >
          <h1 style={{ color: "white" }}>Dashboard</h1>
          {/* access user data from the UserContext using useContext hook */}
          {!!user && <h2 style={{ color: "white" }}>Welcome {user.name}!</h2>}
        </Box>
      </Container>
    </div>
  );
}
