import { Box, CardMedia, Container, Divider, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useCards from "../hooks/useCards";
import PageHeader from "../../components/PageHeader";

const CardDetailsPage = () => {
  const { id } = useParams();
  const { card, handleGetCard } = useCards();

  useEffect(() => {
    handleGetCard(id);
  }, [id]);

  return (
    <Container maxWidth="lg">
      <PageHeader
        title="Business Card Details"
        textAlign="center"
        subtitle="Here you can find your selected card details"
      />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Box
            position="relative"
            display="flex"
            width={{ xs: "100%", sm: "50%" }}
            alignItems="center"
            justifyContent="center"
          >
            <CardMedia
              sx={{
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
                borderRadius: "12px",
                opacity: "0.8",
                minHeight: "250px",
                maxHeight: "600px",
              }}
              component="img"
              image={card?.image.url}
              alt={card?.image.alt}
            />
          </Box>
          <Box
            flexDirection="column"
            width={{ xs: "100%", sm: "50%" }}
            ml={{ xs: 0, sm: 5 }}
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Typography color="#1976d2" variant="h4" mb={2}>
              {card?.title}
            </Typography>
            <Typography variant="h6" mb={1}>
              {card?.subtitle}
            </Typography>
            <Typography>{card?.description}</Typography>
            <Divider sx={{ height: "20px" }} />
            <Typography>
              <b>Country:</b> {card?.address.country}
            </Typography>
            <Typography>
              <b>State:</b> {card?.address.state}
            </Typography>
            <Typography>
              <b>City:</b> {card?.address.city}
            </Typography>
            <Typography>
              <b>Street:</b> {card?.address.street}
            </Typography>
            <Typography>
              <b>House Number:</b> {card?.address.houseNumber}
            </Typography>
            <Typography>
              <b>Zip Code:</b> {card?.address.zip}
            </Typography>

            <Typography>
              <b>phone:</b> {card?.phone}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default CardDetailsPage;
