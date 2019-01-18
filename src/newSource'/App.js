import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import MyText from "./Components/MyText";
import Events from "./Components/EventCards";
class MyApp extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid container direction="row" justify="center">
          <Grid item xs={12}>
            image
          </Grid>
          <Grid item xs={12}>
            <Grid container direction="row" justify="center">
              <Grid item xs={9}>
                <MyText />
              </Grid>

              <Grid item xs={9}>
                <Events />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MyApp;
