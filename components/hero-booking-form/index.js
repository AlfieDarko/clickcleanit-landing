import React from "react";
import { HeroFormItem, HeroCTAbtn } from "./styled";
import DropdownSelector from "./selection/index";
import { bathroomOptions, bedroomOptions, cleaningType } from "./options";
const BookingForm = () => {
  return (
    <>
      <HeroFormItem>
        <DropdownSelector
          placeholder={"Bedrooms"}
          options={bedroomOptions}
          compact
        />
        <DropdownSelector
          placeholder={"Bathrooms"}
          options={bathroomOptions}
          compact
        />
        <DropdownSelector
          placeholder={"Type Of Clean"}
          options={cleaningType}
          compact
        />
        <HeroCTAbtn>See Price & Book!</HeroCTAbtn>
      </HeroFormItem>
    </>
  );
};

export default BookingForm;
