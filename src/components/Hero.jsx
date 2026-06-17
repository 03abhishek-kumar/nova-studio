"use client";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

export default function Hero() {
  const handleStartProject = async () => {
    // analytics tracking placeholder 
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography
            variant="overline"
            sx={{ color: "secondary.main", letterSpacing: 2, fontWeight: 600 }}
          >
            NOVA STUDIO
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "5rem" },
              lineHeight: 1.1,
              mb: 2,
              mt: 1,
            }}
          >
            We Build Digital
            <br />
            Experiences That Matter
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              maxWidth: 600,
              mb: 4,
              fontWeight: 400,
            }}
          >
            A digital agency specializing in web design, front-end development,
            and branding for businesses ready to stand out.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleStartProject}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "1.1rem",
              borderRadius: 2,
              textTransform: "none",
            }}
          >
            Start a Project
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}
