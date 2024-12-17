import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Chip,
  IconButton,
} from "@mui/material";
import { Star as StarIcon } from "@mui/icons-material";
import Head from "./Head";
//import Person from "../../assets/images/person_certified.png";

const certifications = [
  {
    id: 1,
    title: "Agri-business",
    description:
      "Ce cours est dédié aux passionnés et débutants dans le domaine de l'Agri-business. Avec des modules de formations complexes.",
  },
  {
    id: 2,
    title: "Marketing Digitale",
    description:
      "Ce cours est dédié aux passionnés et débutants dans le domaine de la marketing digitale. Avec des modules de formations.",
  },
  {
    id: 3,
    title: "Art Digital",
    description:
      "Ce cours est dédié aux passionnés et débutants dans le domaine de la marketing digitale. Avec des modules de formations.",
  },
  {
    id: 4,
    title: "Médias & Technologie",
    description:
      "Ce cours est dédié aux passionnés et débutants dans le domaine de la marketing digitale. Avec des modules de formations.",
  },
];

const Certification = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Head />

      {/* Section avec image et texte */}
      <Box
        display="flex"
        alignItems="center"
        gap={3}
        sx={{
          marginBottom: 4,
          flexWrap: "wrap", // Gérer les petits écrans
        }}
      >
        <Box flex={1}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Certifications
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Démarquez-vous des autres et gagnez en crédibilité grâce à la
            certification Hearme.
          </Typography>

          <Box display="flex" gap={2}>
            <Button variant="contained" color="primary">
              Débutant
            </Button>
            <Button variant="outlined" color="primary">
              Intermédiaire
            </Button>
            <Button variant="outlined" color="primary">
              Avancé
            </Button>
          </Box>
        </Box>

        {/*<Box flex={1} display="flex" justifyContent="center">
          <img
            src={Person}
            alt="Certified Person"
            style={{
              maxWidth: "60%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Box>*/}
      </Box>

      <hr />

      {/* Grid des certifications */}
      <Grid container spacing={3}>
        {certifications.map((certif) => (
          <Grid item xs={12} md={6} key={certif.id}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                position: "relative",
                borderRadius: 2,
                height: "100%",
              }}
            >
              <Box display="flex" alignItems="center" mb={2}>
                <IconButton color="primary">
                  <StarIcon fontSize="large" />
                </IconButton>
              </Box>

              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {certif.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {certif.description}
              </Typography>

              <Chip
                label="POPULAIRE"
                color="primary"
                size="small"
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  fontWeight: "bold",
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Certification;