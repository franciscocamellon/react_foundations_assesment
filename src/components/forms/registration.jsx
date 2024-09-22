import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  Stack,
  TextField,
  Typography,
  FormHelperText,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import { brazilianStates, amenities } from "../../data/applicationData";
import { useEffect, useState } from "react";

function RegistrationForm(props) {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Dialog open={props.visibility}>
        <DialogTitle> Cadastro de Hotel</DialogTitle>
        <DialogContent>
          <Stack direction="column" spacing={2} margin={2}>
            <TextField variant="outlined" label="Nome do hotel"></TextField>
            <Stack direction="row" spacing={2} margin={2}>
              <TextField variant="outlined" label="Cidade"></TextField>
              <FormControl sx={{ mt: 2, minWidth: 200 }}>
                <InputLabel id="br-states">Estado</InputLabel>
                <Select
                  labelId="br-states"
                  id="demo-simple-select-helper"
                  value={age}
                  label="Estado"
                  onChange={handleChange}
                >
                  {brazilianStates.map((brState) => (
                    <MenuItem key={brState.id} value={brState.abbreviation}>
                      {brState.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
            <Stack
              sx={{ display: "flex", alignItems: "center" }}
              direction="row"
              spacing={2}
              margin={2}
            >
              <TextField variant="outlined" label="Preço"></TextField>
              <Stack>
                <Typography component="legend">Rating</Typography>
                <Rating title="Rating"></Rating>
              </Stack>
            </Stack>
            <Stack
              sx={{ display: "flex", alignItems: "center" }}
              direction="row"
              spacing={2}
              margin={2}
            >
              <TextField
                variant="outlined"
                label="Foto principal"
                sx={{ width: "calc(50% - 16px)" }}
              ></TextField>
              <TextField
                variant="outlined"
                label="Foto quarto simples"
                sx={{ width: "calc(50% - 16px)" }}
              ></TextField>
            </Stack>
            <Stack
              sx={{ display: "flex", alignItems: "center" }}
              direction="row"
              spacing={2}
              margin={2}
            >
              <TextField
                variant="outlined"
                label="Suíte standard"
                sx={{ width: "calc(50% - 16px)" }}
              ></TextField>
              <TextField
                variant="outlined"
                label="Suíte casal"
                sx={{ width: "calc(50% - 16px)" }}
              ></TextField>
            </Stack>

            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormLabel component="legend">Escolha as comodidades</FormLabel>

              <FormHelperText>
                Escolha todas as que estiverem disponíveis no hotel
              </FormHelperText>
              <FormGroup>
                {amenities.map((amenity) => (
                  <FormControlLabel
                    control={<Checkbox name="gilad" />}
                    label={amenity}
                  />
                ))}
              </FormGroup>
            </FormControl>
            <TextField
              id="outlined-multiline-static"
              label="Descrição"
              multiline
              rows={4}
              placeholder="Descreva as características do hotel"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>Cancelar</Button>
          <Button type="submit">Salvar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default RegistrationForm;
