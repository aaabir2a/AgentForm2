import { Box, Typography, Container } from "@mui/material"
import MemberRegistrationForm from "../components/MemberRegistrationForm"

function Home() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 4,
        }}
      >
        {/* Logo at the top */}
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <img src="/logo.png" alt="Company Logo" width={180} height={150} style={{ maxWidth: "100%" }} />
        </Box>

        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
          Agent Registration Form
        </Typography>

        <Box sx={{ width: "100%", maxWidth: "600px", mx: "auto" }}>
          <MemberRegistrationForm />
        </Box>
      </Box>
    </Container>
  )
}

export default Home

