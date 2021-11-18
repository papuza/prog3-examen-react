import React from "react";
import { Link as RouterLink } from "react-router-dom";
import StarIcon from "@mui/icons-material/StarBorder";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Plan = ({ tier }) => {
  console.log()
  return (
    <Grid
      item
      key={tier.title}
      xs={12}
      sm={tier.title === "Enterprise" ? 12 : 6}
      md={4}
    >
      <Card>
        <CardHeader
          title={tier.title}
          subheader={tier.subheader}
          titleTypographyProps={{ align: "center" }}
          action={
            tier.title === "Pro" ? <StarIcon color={"secondary"} /> : null
          }
          subheaderTypographyProps={{
            align: "center",
          }}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
          }}
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              mb: 2,
            }}
          >
            <Typography component="h2" variant="h3" color="text.primary">
              ${tier.price}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              /mo
            </Typography>
          </Box>
          <ul>
            {tier.description.map((line) => (
              <Typography
                component="li"
                variant="subtitle1"
                align="center"
                key={line}
              >
                {line}
              </Typography>
            ))}
          </ul>
        </CardContent>
        <CardActions>
          <RouterLink to={`/price/${tier._id}`} style={{ width: "100%" }}>
            <Button fullWidth variant={tier.buttonVariant}>
              {tier.buttonText}
            </Button>
          </RouterLink>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Plan;
