import isEqual from "lodash.isequal";
import endOfTenancyPriceMap from "./endOfTenancyPriceMap";
export const PriceCalculator = ({
  // promoCode,
  numberOfBedrooms,
  numberOfBathrooms,
  hours,
  typeOfClean
  // extraServices,
  // carpetClean,
  // discount,
  // frequency
}) => {
  let price = basePrice(
    typeOfClean,
    hours,
    numberOfBedrooms,
    numberOfBathrooms
  );
  return price;
  // let priceWithExtras = withExtras(price, extraServices);
  // let priceWithDiscount = withDiscount(priceWithExtras, promo);
};

const basePrice = () => {
  if (isDomesticClean(typeOfClean)) return calculateDomestic(hours);
  else if (isDeepClean(typeOfClean)) return calculateDeepClean(hours);
  else if (isEndOfTenancy(typeOfClean))
    return calculateEndOfTenancy(numberOfBedrooms, numberOfBathrooms);
  else if (isSpringClean(typeOfClean))
    return calculateSpringClean(numberOfBedrooms, numberOfBathrooms);
};

const isDomesticClean = typeOfClean => {
  if (typeOfClean === "domestic") return true;
  else return false;
};

const isDeepClean = typeOfClean => {
  if (typeOfClean === "deepClean") return true;
  else return false;
};

const isEndOfTenancy = ({ typeOfClean }) => {
  if (typeOfClean === "endOfTenancy") return true;
  else return false;
};

const isSpringClean = ({ typeOfClean }) => {
  if (typeOfClean === "springClean") return true;
  else return false;
};

const calculateEndOfTenancy = (numberOfBedrooms, numberOfBathrooms) => {
  return endOfTenancyPriceMap(
    JSON.stringify({ numberOfBedrooms, numberOfBathrooms })
  );
};

const calculateSpringClean = (numberOfBedrooms, numberOfBathrooms) => {
  return springCleanPriceMap(
    JSON.stringify({ numberOfBedrooms, numberOfBathrooms })
  );
};

const calculateDomestic = ({ hours = 3 }) => {
  let perHour = 15;
  let result = hours * perHour;
  return result;
};

const calculateDeepClean = ({ hours = 3 }) => {
  let perHour = 18.5;
  let result = hours * perHour;
  return result;
};

const withDiscount = (price, promo) => {
  const promoArray = [];
  const promoMultiplier = 0.85;
  let newPrice;
  if (promoArray.includes(promo)) {
    newPrice = price * promoMultiplier;
    return newPrice;
  } else return price;
};

const withExtras = (price, extraServices) => {
  return;
};
