import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox({ weather }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1535304902304-466bec5bf8e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1485962927012-fc4fd446a24d?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1623567932970-576132e5d056?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={
          weather.humidity > 80
            ? RAIN_URL
            : weather.temp > 25
            ? HOT_URL
            : COLD_URL
        }
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
