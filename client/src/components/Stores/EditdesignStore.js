import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import { Grid, MenuItem, Paper } from "@material-ui/core";
import { getCategorys } from "../../js/actions/categoryActions";
import { addStores } from "../../js/actions/storeActions";
import AddBoxIcon from "@material-ui/icons/AddBox";

import { EditStores } from "../../js/actions/storeActions";

import EditIcon from "@material-ui/icons/Edit";
import LineWeightIcon from "@material-ui/icons/LineWeight";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    background: "#FFC478",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  form: {
    marginTop: 30,
  },
  input: {
    padding: 10,
    margin: 15,
    borderColor: "red",
    borderWidth: 2,
  },
  paper: {
    width: 1000,
    height: 315,
    background: "white",
    marginLeft: 165,
    border: "0",
  },
  paper2: {
    background: "#99bbad",
    width: "auto",
    height: 800,
  },
  button: {
    color: "#005B9A",
    borderRadius: 5,
    background: "#FFC478",
    marginLeft: 180,
    marginTop: -60
  },
  button2: {
    color: "#005B9A",
    borderRadius: 5,
    background: "#FFC478",
    marginTop: 30,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditdesignStore({ mystore }) {
  // const [dropdownOpen, setDropdownOpen] = useState(false)

  const [store_Name, setStore_Name] = useState(mystore.store_Name);
  const [seller, setSeller] = useState(mystore.seller);
  const [image, setImage] = useState(mystore.image);
  const [description, setDescription] = useState(mystore.description);
  const [storePassword, setStorePassword] = useState(mystore.storePassword);
  const [brand, setBrand] = useState(mystore.brand);
    // const [category, setCategory] = useState(stores.category);

  const dispatch = useDispatch();
  //   const toggle = () => setDropdownOpen((prevState) => !prevState);
  //   const categorys = useSelector((state) => state.categoryReducer.categorys);
  //   const getCat = () => dispatch(getCategorys());
  //   useEffect(() => {
  //     getCat();
  //   }, []);

  const Edit = () => {
    dispatch(
      EditStores(mystore._id, {
        store_Name,
        description,
        image,
        seller,
        storePassword,
        brand,
      })
    );
    setOpen(false);
  };
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<LineWeightIcon />}
        onClick={handleClickOpen}
        className={classes.button}
      >
        Edit Store
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Edit Store
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper className={classes.paper2}>
          <Paper className={classes.paper}>
            <form className={classes.form} noValidate autoComplete="off">
              <Grid container justify="space-around">
                <TextField
                  onChange={(e) => setStore_Name(e.target.value)}
                  value={store_Name}
                  className={classes.input}
                  id="outlined-basic"
                  label="Store Name"
                  variant="outlined"
                  color="secondary"
                />
                <TextField
                  onChange={(e) => setSeller(e.target.value)}
                  value={seller}
                  className={classes.input}
                  id="outlined-basic"
                  label="Seller Name"
                  variant="outlined"
                  color="secondary"
                />
                <TextField
                  onChange={(e) => setStorePassword(e.target.value)}
                  value={storePassword}
                  className={classes.input}
                  id="outlined-basic"
                  label="Store Password"
                  variant="outlined"
                  color="secondary"
                />
              </Grid>
              <Divider />
              <Grid container justify="space-around">
                <TextField
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  className={classes.input}
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  color="secondary"
                />
                <TextField
                  onChange={(e) => setImage(e.target.value)}
                  value={image}
                  className={classes.input}
                  id="outlined-basic"
                  label="Image"
                  variant="outlined"
                  color="secondary"
                />

                <TextField
                  onChange={(e) => setBrand(e.target.value)}
                  value={brand}
                  className={classes.input}
                  id="outlined-basic"
                  label="Brand"
                  variant="outlined"
                  color="secondary"
                />
              </Grid>
              <Divider />
              <Grid container justify="space-evenly">
                <Button
                  onClick={Edit}
                  className={classes.button2}
                  variant="outlined"
                  startIcon={<EditIcon />}
                >
                  Finish
                </Button>
              </Grid>
              <Grid container alignItems="center"></Grid>
            </form>
          </Paper>
        </Paper>
      </Dialog>
    </div>
  );
}
