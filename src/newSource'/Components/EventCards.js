import React, { Component } from "react";
import { Paper, Grid } from "@material-ui/core";
import Beach from "./Images/Beach.png";
import "../App1.css";
class Events extends Component {
  state = {};
  styles = {
    pad: {
      padding: "30px 50px 50px 30px"
    },
    beach: {
      marginTop: "29px"
    },
    date: {
      lineHeight: "24px",
      //   position: "",
      //   top: "220px",
      //   left: "398px"
      marginTop: "42px",
      // marginLeft: "52px",
      fontSize: "18px",
      fontFamily: "Open Sans sans-serif",
      fontWeight: 400,
      width: "34%"
    },
    container: {
      position: "relative"
    },
    eventname: {
      marginTop: "36px"
    },
    text: {
      marginTop: "10px"
    },
    app: {
      marginTop: "16px"
    }
  };
  render() {
    return (
      <Paper style={this.styles.pad}>
        {/* //   <div style={this.styles.container}> */}
        <Grid container spacing={40}>
          <Grid item xs={5}>
            <img
              src={Beach}
              alt=""
              width="300px"
              // height="100%"
              style={this.styles.beach}
            />
          </Grid>
          <Grid item md={5} xs={12}>
            <div className="openSans-18-400" style={this.styles.eventname}>
              Event Name
            </div>
            <div className="openSans-18-400" style={this.styles.text}>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum
            </div>
            <div className="openSans-18-400" style={this.styles.app}>
              App Development
            </div>
            {/* <br />
              <br />
              <br /> */}
            <div className="openSans-18-400" style={this.styles.date}>
              Date:16/01/19
            </div>
          </Grid>

          <Grid item md={2} xs={12}>
            buttton
          </Grid>
          {/* // </div> */}
        </Grid>
      </Paper>
    );
  }
}

export default Events;
