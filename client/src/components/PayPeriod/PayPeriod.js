import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
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
    setMonth(Number(event.target.value) || "");
  };
  const handleChange1 = (event) => {
    setYear(Number(event.target.value) || "");
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
        <Button
          style={{ padding: "2%" }}
          className={classes.dropDown}
          onClick={handleClickOpen}
        >
          time select
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
              <InputLabel htmlFor="demo-dialog-native">month</InputLabel>
              <Select
                native
                value={month}
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={1}>Jan</option>
                <option value={2}>Feb</option>
                <option value={3}>Mar</option>
                <option value={4}>Apr</option>
                <option value={5}>May</option>
                <option value={6}>Jun</option>
                <option value={7}>Jul</option>
                <option value={8}>Aug</option>
                <option value={9}>Sept</option>
                <option value={10}>Oct</option>
                <option value={11}>Nov</option>
                <option value={12}>Dec</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">year</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={year}
                onChange={handleChange1}
                input={<Input />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={21}>2021</MenuItem>
                <MenuItem value={20}>2020</MenuItem>
                <MenuItem value={19}>2019</MenuItem>
                <MenuItem value={18}>2018</MenuItem>
                <MenuItem value={17}>2017</MenuItem>
              </Select>
            </FormControl>
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
