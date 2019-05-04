import React from "react";
import {
  OfferBoxRow,
  OfferBoxContent,
  OfferBox,
  OfferBoxOffer
} from "../styled";
import { connect } from "react-redux";
import { selectCleanFrequency } from "../../../store";

const OfferBoxComponent = props => {
  const handleClick = e => {
    e.preventDefault();
    props.dispatch(selectCleanFrequency(e.target.innerText));
  };

  const frequency = ["Just Once", "Monthly", "Bi-Weekly", "Weekly"];
  const offers = ["", "5% Off", "10% Off", "15% Off"];
  const offerArr = frequency.map(function(frequency, index) {
    return (
      <OfferBoxContent key={frequency}>
        <OfferBox onClick={handleClick} selected={props.selectedFrequency === frequency}>
          {frequency}
        </OfferBox>
        <OfferBoxOffer>{offers[index]}</OfferBoxOffer>
      </OfferBoxContent>
    );
  });

  return (
    <>
      <OfferBoxRow>{offerArr}</OfferBoxRow>
    </>
  );
};

const mapStateToProps = state => ({
  selectedFrequency: state.user.service.cleanFrequency
});

export default connect(
  mapStateToProps,
  null
)(OfferBoxComponent);
