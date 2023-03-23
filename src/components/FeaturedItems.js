import React, { Fragment } from "react";
import { Box, Grid, Typography } from "@mui/material";
import ItemHeader from "./ItemHeader";
import ItemCard from "./ItemCard";
import { useGetAllListsQuery } from "../api/apiSlice";

const FeaturedContent = () => {

  const {
    data: featuredItems,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllListsQuery();

  const { loading = false } = isLoading;

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
        }}
      >
        {/* Featured item header */}
        <ItemHeader />

        {/* item content */}
        <Fragment>
          <div>
            {isError ? (
              <Typography>{error}</Typography>
            ) : isLoading ? (
              <Typography>Loading...</Typography>
            ) : isSuccess ? (
              <Grid container wrap="wrap" sx={{ gridGap: 25, mt: 25 }}>
                {(loading ? Array.from(new Array(4)) : featuredItems.data).map(
                  (item, index) => (
                    // Item Card Features
                    <ItemCard key={index} item={item} index={index}></ItemCard>
                  )
                )}
              </Grid>
            ) : (
              []
            )}
          </div>
        </Fragment>
      </Box>
    </Fragment>
  );
};

export default FeaturedContent;
