import React, { Fragment } from "react";
import { Avatar, Box, Typography, IconButton, SvgIcon } from "@mui/material";
import ImgHeader from "./acuction-header.svg";
import HeaderAvatar from "./avatar.svg";

export default function Header() {
  return (
    <Fragment>
      <Box
        mt={20}
        mb={20}
        sx={{
          p: 28,
          background: "#fff",
          boxShadow:
            "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
          borderRadius: "12px",
          border: "1px solid #EAECF0",
          position: "relative",
        }}
      >
        <Box>
          <img
            className="acuctionHeader"
            alt="header"
            src={ImgHeader}
            width="100%"
            height={192}
          />
        </Box>

        <Box
          sx={{ display: "flex", flex: 1, width: "100%", position: "relative", height: 110 }}
        >
          <Avatar
            alt="avatar"
            src={HeaderAvatar}
            sx={{
              height: 144,
              width: 144,
              ml: 25,
              transform: "translateY(-35px)",
            }}
          />

          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              mt: 10,
              ml: 10,
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#101828",
                  fontSize: 24,
                  lineHeight: "32px",
                  fontWeight: 600,
                  fontFamily: "IBM Plex Sans",
                }}
              >
                Starts in: 3 days: 2 hours: 24 minutes
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  columnGap: 8,
                  alignItems: "center",
                  mt: 8,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    background: "#FFFAEB",
                    borderRadius: "16px",
                    padding: "4px 12px 4px 10px",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    arial-aria-label="dot"
                    sx={{
                      width: 6,
                      height: 6,
                      background: "#F79009",
                      borderRadius: "100%",
                      mr: 5,
                    }}
                  ></Box>
                  <Typography
                    sx={{
                      color: "#B54708",
                      fontSize: 14,
                      fontFamily: "IBM Plex Sans",
                      lineHeight: "20px",
                    }}
                  >
                    Not Live
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 400,
                    lineHeight: "24px",
                    color: "#475467",
                    fontFamily: "IBM Plex Sans",
                  }}
                >
                  Layers Auction
                </Typography>
              </Box>
            </Box>
            <Box>
              <IconButton
                aria-label="accept"
                sx={{
                  padding: "8px 14px",
                  background: "#fff",
                  border: "1px solid #d0d5dd",
                  boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                  borderRadius: "8px",
                }}
              >
                <SvgIcon
                  viewBox="0 0 19 20"
                  sx={{ width: "19px", height: "20px", fill: "none", mr: 10 }}
                >
                  <path
                    d="M5.83332 18.3333V9.16666M1.66666 10.8333V16.6667C1.66666 17.5871 2.41285 18.3333 3.33332 18.3333H14.5219C15.7558 18.3333 16.8052 17.433 16.9928 16.2135L17.8902 10.3801C18.1232 8.86574 16.9515 7.49999 15.4193 7.49999H12.5C12.0398 7.49999 11.6667 7.12689 11.6667 6.66666V3.72152C11.6667 2.58665 10.7467 1.66666 9.61179 1.66666C9.3411 1.66666 9.09581 1.82607 8.98587 2.07343L6.05327 8.67177C5.91952 8.97271 5.62109 9.16666 5.29176 9.16666H3.33332C2.41285 9.16666 1.66666 9.91285 1.66666 10.8333Z"
                    stroke="#344054"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </SvgIcon>

                <Typography
                  sx={{
                    color: "#344054",
                    fontFamily: "IBM Plex Sans",
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "20px",
                  }}
                >
                  Accept Invite
                </Typography>
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}
