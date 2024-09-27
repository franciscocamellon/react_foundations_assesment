import { Select, MenuItem } from "@mui/material";
import React from "react";

function OrderListBy({ onChangeOption }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
      <Select
        defaultValue={0}
        displayEmpty
        autoWidth
        onChange={(event) => onChangeOption(event.target.value)}
        sx={{
          height: 30,
          fontSize: "14px",
          backgroundColor: "#fff",
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              "& .MuiMenuItem-root": {
                fontSize: "14px",
                backgroundColor: "#fff",
              },
            },
          },
        }}
      >
        <MenuItem value={0}>Ordenar por</MenuItem>
        <MenuItem value={10}>Preço (mais baixo primeiro)</MenuItem>
        <MenuItem value={20}>
          Classificação (mais alta para mais baixa)
        </MenuItem>
        <MenuItem value={30}>Nome (A-Z)</MenuItem>
      </Select>
    </div>
  );
}

export default OrderListBy;
