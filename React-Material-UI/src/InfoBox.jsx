import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function InfoBox({ weather }) {
  const IMG_URL =
    "https://images.unsplash.com/photo-1741557571786-e922da981949?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={IMG_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {weather.city}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
          component={"span"}
        >
          <p>Temperature {weather.temp} C </p>
          <p>Max Temperature {weather.maxTemp} </p>
          <p>Min Temperature {weather.minTemp} </p>
          <p>Humidity {weather.humidity} </p>
          <p>Desciption {weather.description} </p>
          <p>Feels Like {weather.feelsLike} </p>
        </Typography>
      </CardContent>
    </Card>
  );
}
