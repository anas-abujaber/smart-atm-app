import LoginForm from "../components/LoginForm.jsx";

import Box from "@mui/material/Box";
function Login() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2196f3",
      }}
    >
      <LoginForm />
    </Box>
  );
}

export default Login;
