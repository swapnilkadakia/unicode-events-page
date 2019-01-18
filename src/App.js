import React, { Component } from "react";
import cup from "./cup.png";
import "./App.css";
import Header from "./header.js";
import Footer from "./footer.jsx";
import Body from "./Body.js";
import Text from "./Text.js";
import { Grid } from "@material-ui/core";
import "./cards/Card.css";
import InfoCard from "./cards/card";

class App extends Component {
  // <div>
  //   <Header />
  //   <div className="image">
  //     <img src={cup} width="1920px" height="963px" />
  //     <div className="text1">Events</div>
  //     <div className="text2">Events</div>
  //   </div>
  //   <div>
  //     <Text />
  //   </div>
  //   <div className="body">
  //     <Grid
  //       container
  //       alignItems="center"
  //       alignContent="center"
  //       justify="center"
  //     >
  //       <Body />
  //       <Body />
  //       <Body />
  //       <br />
  //       <Footer />
  //     </Grid>
  //   </div>
  // </div>

  styles = {
    grid: {
      marginTop: 117,
      marginBottom: 161,
      // padding: 0,
      width: "100%"
    },
    background: {
      background: "#F8F8F8",
      marginTop: 114
    },
    width: {
      width: 700
    }
  };
  render() {
    return (
      <div style={this.styles.background}>
        <Grid
          container
          spacing={24}
          direction="row"
          justify="center"
          style={this.styles.grid}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Grid container direction="row" justify="flex-end">
              <Grid item xs={12} sm={12} md={6}>
                <Grid container direction="row" justify="flex-end">
                  <Grid item>
                    <InfoCard
                      title="Info"
                      about=""
                      category="APP DEVELOPMENT"
                      tech="Techonologies: Java"
                      date="Date: Dec 28, 2018"
                      price="50"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
