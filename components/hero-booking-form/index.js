import React from "react";
import { HeroFormItem, HeroCTAbtn } from "./styled";
import DropdownSelector from "./selection/index";
import { bathroomOptions, bedroomOptions, cleaningType } from "./options";
import { connect } from "react-redux";
import {
  selectTypeOfClean,
  selectBedrooms,
  selectBathrooms
} from "../../store";

const BookingForm = props => {
  const handleTypeOfClean = e => {
    props.dispatch(selectTypeOfClean(e.target.innerText));
  };

  const handleBedRooms = e => {
    console.log(e.target.innerText);
    props.dispatch(selectBedrooms(e.target.innerText));
  };

  const handleBathrooms = e => {
    console.log(e.target.innerText);

    props.dispatch(selectBathrooms(e.target.innerText));
  };

  return (
    <>
      <HeroFormItem>
        <DropdownSelector
          onChange={handleTypeOfClean}
          placeholder={"Type Of Clean"}
          options={cleaningType}
        />

        <DropdownSelector
          onChange={handleBedRooms}
          placeholder={"Bedrooms"}
          options={bedroomOptions}
          compact
        />
        <DropdownSelector
          onChange={handleBathrooms}
          placeholder={"Bathrooms"}
          options={bathroomOptions}
          compact
        />
        <HeroCTAbtn>See Price & Book!</HeroCTAbtn>
      </HeroFormItem>
    </>
  );
};

export default connect(
  null,
  null
)(BookingForm);
