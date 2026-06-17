"use client";
import { useState, useEffect } from "react";
import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";

// maps the 'icon' string from the database to an actual MUI icon component
const iconMap = {
  design: DesignServicesIcon,
  code: CodeIcon,
  brand: BrandingWatermarkIcon,
};

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setServices(data);
        } else {
          console.error("Unexpected response from /api/services:", data);
          setServices([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load services:", err);
        setServices([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box sx={{ py: 10, textAlign: "center" }}>
        <Typography color="text.secondary">Loading services...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 1 }}
        >
          Our Services
        </Typography>
        <Typography
          align="center"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: 500, mx: "auto" }}
        >
          Everything you need to bring your brand to life online.
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || CodeIcon;
            return (
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                }}
                key={service.id}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      p: 2,
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 8,
                      },
                    }}
                  >
                    <CardContent>
                      <IconComponent
                        sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
                      />
                      <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                        {service.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
