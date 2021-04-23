import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Axios from "axios";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    height: 300,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function View() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [details, setDetails] = useState([]);
  useEffect(() => {
    get();
  }, []);
  const get = async () => {
    const data = await Axios.get("http://localhost:5000/");
    //data = await data.json();
    console.log(data.data);
    setDetails(data.data);
  };
  return (
    <>
      <Grid container spacing={5}>
        {details.map((id) => (
          <Grid item xs={3}>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {id.id}
                </Typography>
                <Typography variant="h5" component="h2">
                  {id.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {id.email}
                </Typography>
                <Typography variant="body2" component="p">
                  {id.gender}
                  <br />
                </Typography>
                <Button>
                  <Link to={{ pathname: "/edit", state: [id] }}>Edit</Link>
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
