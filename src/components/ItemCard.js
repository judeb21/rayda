import React, { Fragment } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  CardMedia,
  Skeleton,
  Box,
  Divider,
  CardActions,
} from "@mui/material";

export default function ItemCard({ item, index }) {
  // Function for avatar name initialization
  const AvatarInitials = (name) => {
    if (!name) return "N/A";
    const [firstName, lastName] = name.split(" ");

    if (!firstName) return "N/A";

    if (!lastName) {
      return `${firstName.charAt(0).toUpperCase()}`;
    }

    return `${firstName.charAt(0).toUpperCase()}${lastName
      .charAt(0)
      .toUpperCase()}`;
  };

  // Function to truncate string
  const truncateString = (string, number = 60) => {
    if (string && string.length > number) {
      return string.slice(0, number) + "...";
    }
    return string;
  };

  return (
    <Fragment>
      <Card
        key={index}
        sx={{
          maxWidth: "296px",
          width: "100%",
          minHeight: "353px",
          height: "100%",
          border: "1px solid #D0D5DD",
          borderRadius: "12px",
          background: "#FFFFFF",
          padding: "12px",
          mb: 20,
        }}
      >
        {item ? (
          <CardMedia
            component="img"
            width="100%"
            height="132px"
            sx={{ borderRadius: '8px' }}
            image={item.image}
            alt={item.title}
          />
        ) : (
          <Skeleton variant="rectangular" width={"100%"} height={118} />
        )}

        {item ? (
          <CardHeader
            sx={{ pl: 0 }}
            avatar={
              <Avatar
                sx={{
                  height: 40,
                  width: 40,
                  background: "#f2f4f7",
                  color: "#475467",
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "IBM Plex Sans, sans-serif",
                  marginRight: -8,
                }}
              >
                {AvatarInitials(item.name)}
              </Avatar>
            }
            titleTypographyProps={{
              variant: "h6",
              display: "inline-block",
              marginRight: 4,
              color: "#344054",
              fontSize: 12,
              lineHeight: "18px",
              fontWeight: 600,
            }}
            title={item.name}
            subheaderTypographyProps={{
              fontSize: 12,
              lineHeight: "18px",
              fontWeight: 400,
              color: "#98A2B3",
              display: "inline-block",
            }}
            subheader="(Highest bidder)"
          />
        ) : (
          <Skeleton width="100%" />
        )}

        {item ? (
          <CardContent sx={{ p: 0 }}>
            <Typography
              variant="body1"
              sx={{
                color: "#101828",
                fontSize: 14,
                lineHeight: "20px",
                fontWeight: 600,
                fontFamily: "IBM Plex Sans, sans-serif",
              }}
            >
              {truncateString(item.title)}
            </Typography>

            {/* Current bid */}
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 5 }}>
              <Typography
                variant="body2"
                sx={{
                  color: "#344054",
                  fontSize: 14,
                  lineHeight: "20px",
                  fontWeight: 400,
                  fontFamily: "IBM Plex Sans, sans-serif",
                  display: "flex",
                  columnGap: 5,
                  mt: 10,
                  mb: 10,
                }}
              >
                Current Bid:
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#344054",
                  fontSize: 14,
                  lineHeight: "20px",
                  fontWeight: 700,
                  fontFamily: "IBM Plex Sans, sans-serif",
                }}
              >
                {item.bid}
              </Typography>
            </Box>

            <Divider variant="middle" />
          </CardContent>
        ) : (
          <Skeleton width="100%" />
        )}

        {item ? (
          <CardActions sx={{ padding: '8px 0' }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: "100%",
                textAlign: "center",
                borderRadius: "8px",
                boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                padding: "10px 16px",
                textTransform: "none",
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "20px",
                fontFamily: "IBM Plex Sans, sans-serif",
              }}
            >
              Add to wishlist
            </Button>
          </CardActions>
        ) : (
          <Skeleton width="100%" />
        )}
      </Card>
    </Fragment>
  );
}
