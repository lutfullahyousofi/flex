import React, { Component } from "react";

class about extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Mission</h1>
        <p>
          “Administering and supervising all types of elections and referenda
          envisaged in the Constitution” The mandate of the Independent Election
          Commission of Afghanistan has been granted pursuant to article (156)
          of the Constitution. Based on this article, the IEC is the only
          institution responsible for administering and supervising elections
          and referenda, and acts independently. The IEC is responsible for
          administering the following elections and is authorized to supervise
          any elections in the country: Presidential Elections Wolesi Jirga
          Elections Provincial Council Elections District Council Elections
          Village Council Elections Municipal Council Elections Elections for
          mayors’ offices Referenda
        </p>
        <image href="vison.jpg">
            vison photo
        </image>
      </div>
    );
  }
}

export default about;
