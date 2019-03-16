import React from "react";
import { HeroFormItem, HeroCTAbtn } from "./styled";
import DropdownSelector from "./selection/index";
import { bathroomOptions, bedroomOptions, cleaningType } from "./options";

const BookingForm = () => {
  return (
    <div>
      <HeroFormItem>
        <DropdownSelector placeholder={"Bedrooms"} options={bedroomOptions} />
        <DropdownSelector placeholder={"Bathrooms"} options={bathroomOptions} />
        <DropdownSelector
          placeholder={"Type Of Clean"}
          options={cleaningType}
        />
        <HeroCTAbtn>See Price & Book!</HeroCTAbtn>
      </HeroFormItem>
    </div>
  );
};

export default BookingForm;
