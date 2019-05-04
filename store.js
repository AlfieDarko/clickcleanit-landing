import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const initialState = {
  user: {
    fullName: "",
    email: "",
    mobile: "",
    address: {
      streetLine1: "",
      streetLine2: "",
      city: "",
      postcode: ""
    },
    service: {
      promoCode: "",
      cleanFrequency: "",
      numberOfBedrooms: "",
      numberOfBathrooms: "",
      hours: 0,
      typeOfClean: "",
      extraServices: [],
      carpetClean: [],
      discount: 0,
      price: 0
    }
  }
};

export const actionTypes = {
  SELECT_CLEAN_FREQUENCY: "SELECT_CLEAN_FREQUENCY",
  SELECT_CLEAN_TYPE: "SELECT_CLEAN_TYPE",
  SELECT_BEDROOMS: "SELECT_BEDROOMS",
  SELECT_BATHROOMS: "SELECT_BATHROOMS",
  ENTER_NAME: "ENTER_NAME",
  ENTER_EMAIL: "ENTER_EMAIL",
  ENTER_MOBILE: "ENTER_MOBILE",
  ENTER_ADDRESS: "ENTER_ADDRESS",
  ENTER_PROMO: "ENTER_PROMO",
};

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_CLEAN_FREQUENCY:
      return {
        user: {
          ...state.user,
          service: {
            ...state.user.service,
            cleanFrequency: action.cleanFrequency
          }
        }
      };
    case actionTypes.SELECT_CLEAN_TYPE:
      return {
        user: {
          ...state.user,
          service: {
            ...state.user.service,
            typeOfClean: action.typeOfClean
          }
        }
      };
    case actionTypes.SELECT_BEDROOMS:
      return {
        user: {
          ...state.user,
          service: {
            ...state.user.service,
            numberOfBedrooms: action.numberOfBedrooms
          }
        }
      };
    case actionTypes.SELECT_BATHROOMS:
      return {
        user: {
          ...state.user,
          service: {
            ...state.user.service,
            numberOfBathrooms: action.numberOfBathrooms
          }
        }
      };
    case actionTypes.ENTER_FULLNAME:
    return {
      user: {
        ...state.user,
        fullName: action.fullName,
        service: {
          ...state.user.service,
        }
      }
    };
    case actionTypes.ENTER_MOBILE:
      return {
        user: {
          ...state.user,
          mobile: action.mobile,
          service: {
            ...state.user.service,
          }
        }
      };
    case actionTypes.ENTER_ADDRESS:
    return {
      user: {
        ...state.user,
        address: action.address,
        service: {
          ...state.user.service,
        }
      }
    };
    default:
      return state;
  }
};












// ACTIONS
export const selectCleanFrequency = cleanFrequency => {
  return { type: actionTypes.SELECT_CLEAN_FREQUENCY, cleanFrequency };
};

export const selectTypeOfClean = typeOfClean => {
  return { type: actionTypes.SELECT_CLEAN_TYPE, typeOfClean };
};

export const selectBedrooms = numberOfBedrooms => {
  return { type: actionTypes.SELECT_BEDROOMS, numberOfBedrooms };
};

export const selectBathrooms = numberOfBathrooms => {
  return { type: actionTypes.SELECT_BATHROOMS, numberOfBathrooms };
};

export function initializeStore(initialState = initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
