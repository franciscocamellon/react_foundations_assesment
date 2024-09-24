import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

export default function Highlights({ onFoundHotel }) {
  const [hotels, setHotels] = useState(
    JSON.parse(localStorage.getItem("@hotels"))
  );

  function loadHotelData() {
    const storedHotels = JSON.parse(localStorage.getItem("@hotels"));
    setHotels(storedHotels);
  }

  useEffect(() => {
    loadHotelData();
  }, []);

  return (
    <Autocomplete
      freeSolo
      sx={{ width: 315 }}
      options={hotels}
      getOptionLabel={(option) => option.name}
      onChange={onFoundHotel}
      renderInput={(params) => (
        <TextField
          sx={{
            "& .MuiInputBase-root": { height: 30, backgroundColor: "#fff" },
          }}
          {...params}
          hiddenLabel
          margin="none"
        />
      )}
      renderOption={(props, option, { inputValue }) => {
        const { key, ...optionProps } = props;
        const matches = match(option.name, inputValue, { insideWords: true });
        const parts = parse(option.name, matches);

        return (
          <li key={key} {...optionProps}>
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          </li>
        );
      }}
    />
  );
}
