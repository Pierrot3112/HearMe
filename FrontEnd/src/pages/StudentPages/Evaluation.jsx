import React from "react";
import { Box, Typography, Button, Grid, Paper, Chip } from "@mui/material";
import Head from "./Head";

const evaluations = [
  {
    id: 1,
    title: "Agri-business",
    description:
      "Ce cours est dédié aux passionnés et débutants dans le domaine de l’agri-business. Avec des modules de formations complètes.",
    status: "Gratuit",
  },
  {
    id: 2,
    title: "Marketing Digitale",
    description:
      "Ce cours est dédié aux passionnés et débutants dans le domaine du marketing digital. Avec des modules de formations complètes.",
    status: "25 questions",
  },
  {
    id: 3,
    title: "Art Digital",
    description:
      "Ce cours est dédié aux passionnés et débutants dans le domaine de l’art digital. Avec des modules de formations complètes.",
  },
  {
    id: 4,
    title: "Médias & Technologie",
    description:
      "Ce cours est dédié aux passionnés et débutants dans le domaine des médias et de la technologie. Avec des modules de formations complètes.",
  },
];

const Evaluation = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Head />

      {/* Section Header */}
      <Box mb={3}>
        <Typography variant="h4" fontWeight="bold">
          Evaluations
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Découvrez votre niveau de compétence et recevez des recommandations
          d'apprentissage personnalisées.
        </Typography>
        <Box display="flex" gap={2} mb={2}>
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

      <hr />

      <Grid container spacing={3}>
        {evaluations.map((evaluation) => (
          <Grid item xs={12} md={6} key={evaluation.id}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                borderRadius: 2,
                position: "relative",
                height: "100%",
              }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {evaluation.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {evaluation.description}
              </Typography>
              {evaluation.status && (
                <Chip
                  label={evaluation.status}
                  color="primary"
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    fontWeight: "bold",
                  }}
                />
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Evaluation;
