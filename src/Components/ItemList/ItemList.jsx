import React from "react";
import { Box } from "@mui/material";
import { ProductCard } from "../ProductCard/ProductCard";
import Dropdown from "../Dropdown/Dropdown";
import SyncLoader from "react-spinners/SyncLoader";

export const ItemList = ({ items }) => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "white",
        }}
      >
        <Dropdown />

        {items.length > 0 ? (
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "row",
              gap: "2em",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {items.map((item) => {
              return <ProductCard key={item.id} item={item} />;
            })}
          </div>
        ) : (
          <SyncLoader
            color={"red"}
            // loading={loading}
            // cssOverride={override}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
      </Box>
    </div>
  );
};
