import React from "react";
import YouTube from "react-youtube";

class YoutubeVid extends React.Component {
  render() {
    const opts = {
      height: "235",
      width: "380",
      playerVars: {
        autoplay: 0
      }
    };

    return (
      <YouTube videoId="tsxbuGoezzU" opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YoutubeVid;
