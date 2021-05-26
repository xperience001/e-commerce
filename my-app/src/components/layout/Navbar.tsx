import React from "react";
// import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import CloseIcon from "@material-ui/icons/Close";
import Badge from "@material-ui/core/Badge";
import { useStateValue } from "../StateProvider";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Popper, { PopperPlacementType } from "@material-ui/core/Popper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import { Checkout } from "../home/Checkout";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 500,
    },
    typography: {
      padding: theme.spacing(2),
    },
  })
);

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();
  const classes = useStyles();

  const handleClick = (newPlacement: PopperPlacementType) => (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const clearCart = () => {
    console.log("clear cart");
  };

  const [{ basket }] = useStateValue();

  console.log(basket);

  return (
    <nav>
      <div className='navbarr'>
        <h1>BAJAMAS</h1>
        <span className='cart-icon'>
          <Popper
            open={open}
            anchorEl={anchorEl}
            placement={placement}
            transition
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <Typography className={classes.typography}>
                    <div
                      style={{
                        color: "black",
                        marginLeft: "85%",
                        fontSize: "bold",
                      }}
                    >
                      <Button onClick={clearCart}>
                        <CloseIcon />
                      </Button>
                    </div>
                    <Checkout />
                  </Typography>
                </Paper>
              </Fade>
            )}
          </Popper>
          <Button onClick={handleClick("bottom-end")}>
            {" "}
            <Badge badgeContent={basket.length} color='error'>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Button>
        </span>
      </div>
      <hr />
    </nav>
    /* <div className='navbar'>
        <Link to='/'>
          <h1>BAJAMAS</h1>
        </Link>
        <Link to='/checkout'>
          <span className='cart-icon'>
            <ShoppingCartOutlinedIcon />
          </span>
        </Link>
      </div> */
  );
};
