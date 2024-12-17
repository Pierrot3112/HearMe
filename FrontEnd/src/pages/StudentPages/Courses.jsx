import React, { useState } from "react";
import { Box, Typography, Button, Grid, Paper, List, ListItem } from "@mui/material";
import Head from "./Head";
import FormationCard from "../../Components/FormationCard";

const courseModules = [
  "Module 1: Initiation à l'agri-business",
  "Module 2: L'agri-business et l'IA",
  "Module 3: Startup avec l'agri-business",
];

const Courses = () => {
  // État pour suivre la formation sélectionnée
  const [selectedFormation, setSelectedFormation] = useState(null);

  const handleCardClick = (formation) => {
    setSelectedFormation(formation); // Mettre à jour l'état avec la formation cliquée
  };

  const handleBackClick = () => {
    setSelectedFormation(null); // Réinitialiser l'état pour revenir à la liste des formations
  };

  return (
    <Box className="course" sx={{ padding: 3 }}>
      <Head />

      {/* Header Section */}
      <Box mb={3}>
        <Typography variant="h4" fontWeight="bold">
          {selectedFormation ? `Formations > ${selectedFormation.title}` : "Formations"}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {selectedFormation
            ? `Découvrez les détails de la formation "${selectedFormation.title}".`
            : "Alors apprenez les meilleures formations qui pourront vous aider."}
        </Typography>
        {!selectedFormation && (
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
        )}
      </Box>

      <hr />

      {/* Afficher FormationCard ou les détails selon l'état */}
      {!selectedFormation ? (
        <FormationCard onCardClick={handleCardClick} />
      ) : (
        <Grid container spacing={3} className="main-content">
          {/* Détails de la formation sélectionnée */}
          <Grid item xs={12} md={8} className="course-info">
            <Box>
              <Typography
                variant="h5"
                fontWeight="bold"
                color="#0d47a1"
                display="flex"
                justifyContent="space-between"
              >
                {selectedFormation.title}{" "}
                <Typography component="span" color="green" fontSize="14px">
                  {selectedFormation.statut}
                </Typography>
              </Typography>
              <Typography variant="body2" color="text.secondary" my={2}>
                {selectedFormation.description}
              </Typography>
              <Box
                className="author"
                display="flex"
                justifyContent="space-between"
                fontSize="14px"
                color="#666"
              >
                <Typography>{selectedFormation.author}</Typography>
                <Typography>❤️ {selectedFormation.likes}</Typography>
              </Box>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleBackClick}
                sx={{ mt: 2 }}
              >
                Retour
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} className="summary">
            <Paper
              sx={{
                padding: 2,
                borderRadius: 2,
                boxShadow: "none", // Supprimer l'ombre
                border: "none", // Supprimer les bordures
              }}
            >
              <Typography variant="h6" color="#0d47a1" mb={2} sx={{ textAlign: "left" }}>
                Sommaire
              </Typography>
              <List disablePadding sx={{ paddingLeft: 2 }}>
                {courseModules.map((module, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      padding: 0,
                      color: "#43A8FF",
                      textAlign: "left", // Alignement des listes
                    }}
                  >
                    {module}
                  </ListItem>
                ))}
              </List>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2, borderRadius: 1 }}
              >
                Commencer votre formation
              </Button>
            </Paper>
          </Grid>

        </Grid>
      )}
    </Box>
  );
};

export default Courses;
