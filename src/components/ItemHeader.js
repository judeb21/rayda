import React, { Fragment, useState } from "react";
import { Typography, Button, Box, Divider } from "@mui/material";

function ItemHeader() {
  return (
    <Fragment>
      <div>
        <Box 
          sx={{ 
            display: "flex",
            justifyContent: "space-between",
            height: '40px',
            alignItems: 'center',
            fontFamily: 'IBM Plex Sans, sans-serif'
          }}
        >
          <Typography
            sx={{
              lineHeight: '28px',
              fontSize: '16px',
              fontWeight: 600,
              color: "#101828",
              fontFamily: 'IBM Plex Sans, sans-serif'
            }}
          >
            Featured Items
          </Typography>
          <Button 
            variant="outlined"
            color="secondary"
            sx={{
              background: "#ffffff",
              boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
              borderRadius: "8px",
              color: "#344054",
              fontSize: "14px",
              letterSpacing: 0,
              lineHeight: "20px",
              fontWeight: "600",
              textTransform: "none",
              fontFamily: 'IBM Plex Sans, sans-serif'
            }}
          >View Auction</Button>
        </Box>
        <Divider variant="middle" sx={{ mt: 20 }}></Divider>
      </div>
    </Fragment>
  );
}

export default ItemHeader;
