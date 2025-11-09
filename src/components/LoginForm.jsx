import React, { useState } from "react";
import { useUser } from "../context/AuthContext";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { AccountCircle, Lock } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { toast } from "sonner";
function LoginForm() {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");

  const navigate = useNavigate();

  const { login, error, isLoading } = useUser();

  const handleLogin = async () => {
    if (!username || !pin) {
      return;
    }

    const success = await login(username, pin);
    if (success) {
      navigate("./dashboard");
      toast.success(`Welcome back, ${username}!`);
    } else {
      // alert(error || "Invalid credentials. Try again.");
    }
  };
  return (
    <Card
      sx={{
        maxWidth: "400px",
        padding: "40px 30px",
        borderRadius: "20px",
        textAlign: "center",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Box
        sx={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "linear-gradient(45deg, #4e73df 30%, #2096f3 90%)",
          margin: "0 auto 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 10px rgba(78, 115, 223, 0.5)",
        }}
      >
        <LocalAtmIcon sx={{ color: "white", fontSize: 30 }} />
      </Box>
      <Typography
        variant="h5"
        component="h1"
        fontWeight="bold"
        mb={1}
        color="#333"
      >
        Smart ATM
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={4}>
        Welcome back! Please login to continue
      </Typography>
      <TextField
        fullWidth
        label="Username"
        placeholder="Enter your username"
        variant="outlined"
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="PIN"
        type="password"
        placeholder="Enter your PIN"
        variant="outlined"
        margin="normal"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        sx={{ mb: 4 }}
      />
      <Button
        fullWidth
        variant="contained"
        size="large"
        disabled={isLoading}
        onClick={handleLogin}
        sx={{
          background: "linear-gradient(45deg, #4e73df 30%, #7d5aed 90%)",
          padding: "12px 0",
          borderRadius: "8px",
          textTransform: "none",
          fontSize: "1rem",
          boxShadow: "0 4px 15px rgba(78, 115, 223, 0.4)",
          "&:hover": {
            opacity: 0.9,
          },
        }}
      >
        {isLoading ? "Logging in..." : "Login"}
      </Button>

      {error && (
        <Typography color="error" mt={2}>
          {error}
        </Typography>
      )}
      <Box
        mt={3}
        p={1}
        sx={{ backgroundColor: "#f0f4f8", borderRadius: "8px" }}
      >
        <Typography variant="body2" color="textSecondary" fontWeight="medium">
          Demo Account: <strong style={{ color: "#4e73df" }}>anas</strong> /
          PIN: <strong style={{ color: "#4e73df" }}>a1234</strong>
        </Typography>
      </Box>
    </Card>
  );
}

export default LoginForm;
