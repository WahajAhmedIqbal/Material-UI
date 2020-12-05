import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  ButtonGroup,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { Delete } from "@material-ui/icons";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";

function App() {
  const [checked, setChecked] = useState(false);

  const useStyle = makeStyles({
    root: {
      background: "linear-gradient(50deg, #333, #999)",
      border: 0,
      borderRadius: 15,
      color: "white",
      padding: "20px 50px",
    },
  });
  const ButtonStyled = () => {
    const classes = useStyle();
    return <Button className={classes.root}>Test styled Buton</Button>;
  };

  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <ButtonStyled />
          <TextField
            label="this text"
            type="email"
            variant="outlined"
            color="secondary"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onClick={(e) => setChecked(e.target.checked)}
                color="primary"
                icon={<SaveIcon color="secondary" />}
                checkedIcon={<Delete />}
              />
            }
            label="han han "
          />

          <ButtonGroup variant="contained" color="secondary" size="large">
            <Button
              startIcon={<SaveIcon />}
              onClick={() => alert("hello fucker")}
            >
              Hello fucking world
            </Button>
            <Button color="primary" endIcon={<SaveIcon />}>
              Hello fucking world
            </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
