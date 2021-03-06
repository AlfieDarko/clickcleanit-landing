import React from "react";
import NavBar from "../components/navbar";
import ScrollBtn from "../components/buttons/BackToTop";
import Sticky from "react-stickynode";
import BurgerMenu from "../components/navbar/burger-menu";
import { connect } from "react-redux";
import LandingPage from "../components/landing-page";

class Index extends React.Component {
  static getInitialProps({ store, req }) {
    return {};
  }

  render() {
    return (
      <div id="app">
        <BurgerMenu outerContainerId={"app"} pageWrapId={"page-wrap"} />
        <Sticky enabled={true} top={0} innerZ={3}>
          {status => {
            if (status.status === Sticky.STATUS_FIXED) {
              return <NavBar isSticky={true} />;
            }
            if (status.status === Sticky.STATUS_ORIGINAL) {
              return <NavBar isSticky={false} />;
            }
          }}
        </Sticky>
        <ScrollBtn />

        <div id="page-wrap">
          <LandingPage />
        </div>
      </div>
    );
  }
}

export default connect()(Index);
