import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
// import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  dropDown: {
    color: "white",
  },
}));

export default function DialogSelect() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [month, setMonth] = React.useState("");
  const [year, setYear] = React.useState("");

  const handleChange = (event) => {
    setMonth(String(event.target.value) || "");
    setYear(String(event.target.value) || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={classes.dropDown}>
        <Button className={classes.dropDown} onClick={handleClickOpen}>
          Pay Period Select
        </Button>
      </div>

      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Month</InputLabel>
              <Select
                native
                value={month}
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={"Jan"}>Jan</option>
                <option value={"Feb"}>Feb</option>
                <option value={"Mar"}>Mar</option>
                <option value={"Apr"}>Apr</option>
                <option value={"May"}>May</option>
                <option value={"Jun"}>Jun</option>
                <option value={"Jul"}>Jul</option>
                <option value={"Aug"}>Aug</option>
                <option value={"Sept"}>Sept</option>
                <option value={"Oct"}>Oct</option>
                <option value={"Nov"}>Nov</option>
                <option value={"Dec"}>Dec</option>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Year</InputLabel>
              <Select
                native
                value={year}
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={""}>2021</option>
                <option value={""}>2020</option>
                <option value={""}>2019</option>
                <option value={""}>2018</option>
                <option value={""}>2017</option>
              </Select>
            </FormControl>

            {/* <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">Year</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={year}
                onChange={handleChange}
                input={<Input />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={2021}>2021</MenuItem>
                <MenuItem value={2020}>2020</MenuItem>
                <MenuItem value={2019}>2019</MenuItem>
                <MenuItem value={2018}>2018</MenuItem>
                <MenuItem value={2017}>2017</MenuItem>
              </Select>
            </FormControl> */}
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
