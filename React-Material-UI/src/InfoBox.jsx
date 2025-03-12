import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ weather }) {
  const imageUrl = {
    hot: "https://images.unsplash.com/photo-1535304902304-466bec5bf8e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cold: "https://images.unsplash.com/photo-1485962927012-fc4fd446a24d?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rain: "https://images.unsplash.com/photo-1623567932970-576132e5d056?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={
          weather.humidity > 80
            ? imageUrl.rain
            : weather.temp > 20
            ? imageUrl.hot
            : imageUrl.cold
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {weather.city}
          <i className="px-3">
            {weather.humidity > 80 ? (
              <ThunderstormIcon />
            ) : weather.temp > 25 ? (
              <WbSunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </i>
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
