import React, { useState } from "react";
import {
  Container,
  ShortWidthBanner,
  LeftPaymentContainer,
  RightSummaryContainer,
  FormSectionContainer,
  InputFormContainer,
  DatePickerContainer,
  OfferBoxContainer,
  PayByCard,
  PayByInvoice,
  PayByContainer,
  InputStyled
} from "./styled";
import { OfferBox } from "components/booking-hero/styled.js";
import { Form } from "semantic-ui-react";
import { SingleDatePicker } from "react-dates";
import TimePicker from "react-bootstrap-time-picker";
import { selectStartDate } from "../../store";
import { connect } from "react-redux";
import "react-dates/lib/css/_datepicker.css";
import { FullWithBannerComponent } from "./fullWidthBanner";

const Bookings = props => {
  // * Redux State for selected date/time
  const handleChange = date => {
    props.dispatch(selectStartDate(date));
  };
  const [focused, setFocus] = useState(false);

  return (
    <>
      <Container>
        <FullWithBannerComponent />
        <ShortWidthBanner>
          <p>You are steps away from booking your clean!</p>
        </ShortWidthBanner>
        <LeftPaymentContainer>
          <Form>
            <FormSectionContainer>
              <h1>Complete your Booking!</h1>
              <p>
                Awesome! Enter a few details so we can schedule your service
              </p>
            </FormSectionContainer>

            <FormSectionContainer>
              <h2>Contact Information</h2>
              <p>
                This information will be used to contact you about your service
              </p>

              <InputFormContainer>
                <div>First Name: </div>
                <div>
                  <input type="text" placeholder="First Name" />
                </div>

                <div>Surname: </div>
                <div>
                  <InputStyled type="text" placeholder="Surname" />
                </div>

                <div>Phone No.: </div>
                <div>
                  <input type="text" placeholder="Phone no." />
                </div>

                <div>Email: </div>
                <div>
                  <input type="text" placeholder="Email" />
                </div>
              </InputFormContainer>

              <InputFormContainer />
            </FormSectionContainer>

            <FormSectionContainer>
              <h2>Contact Information</h2>
              <p>
                This information will be used to contact you about your service
              </p>
              <InputFormContainer>
                <div>Address Line 1: </div>
                <div>
                  <input type="text" placeholder="Address Line 1" />
                </div>

                <div>Address Line 2: </div>
                <div>
                  <input type="text" placeholder="Address Line 2" />
                </div>

                <div>Postcode: </div>
                <div>
                  <input type="text" placeholder="Postcode" />
                </div>

                <div>City: </div>
                <div>
                  <input type="text" placeholder="City" />
                </div>
              </InputFormContainer>
            </FormSectionContainer>

            <FormSectionContainer>
              <p>
                <h2>Choose Your Service</h2>
                <div>Tell us about your home.</div>
              </p>
              <div>Insert Booking Hero</div>
            </FormSectionContainer>

            <FormSectionContainer>
              <p>
                <h2>Select Extras</h2>
                <div>Add in extra services</div>
              </p>
            </FormSectionContainer>

            <FormSectionContainer>
              <p>
                <h2>When would you like us to visit?</h2>
              </p>
              <DatePickerContainer>
                <div>
                  <SingleDatePicker
                    date={props.startDate} // momentPropTypes.momentObj or null
                    onDateChange={date => handleChange(date)} // PropTypes.func.isRequired
                    focused={focused.focused} // PropTypes.bool
                    onFocusChange={focused => setFocus(focused)} // PropTypes.func.isRequired
                    id="your_unique_id" // PropTypes.string.isRequired,
                    numberOfMonths={1}
                  />
                </div>
                <div>
                  <TimePicker start="10:00" end="20:00" step={30} />,
                </div>
              </DatePickerContainer>
            </FormSectionContainer>

            <FormSectionContainer>
              <p>
                <h2>How Often?</h2>
                <p>
                  It’s all about matching you with the perfect cleaner for your
                  home. <br />
                  Scheduling is flexible. Cancel or reschedule anytime.
                </p>
              </p>
              <OfferBoxContainer>
                <div>
                  <div>
                    <OfferBox displayBlock={true} noWidthPadding={true}>
                      Just Once
                    </OfferBox>
                  </div>
                  <div> </div>
                </div>
                <div>
                  <OfferBox displayBlock={true} noWidthPadding={true}>
                    Monthly
                  </OfferBox>
                  <div>5% Off</div>
                </div>
                <div>
                  <OfferBox displayBlock={true} noWidthPadding={true}>
                    Bi-Weekly
                  </OfferBox>
                  <div>10% Off</div>
                </div>
                <div>
                  <OfferBox displayBlock={true} noWidthPadding={true}>
                    Weekly
                  </OfferBox>
                  <div>15% Off</div>
                </div>
              </OfferBoxContainer>
            </FormSectionContainer>

            <FormSectionContainer>
              <h2>Billing Address</h2>
              <div>Address linked to your payments card?</div>
              <InputFormContainer>
                <div>Address Line 1: </div>
                <div>
                  <input type="text" placeholder="Address Line 1" />
                </div>

                <div>Address Line 2: </div>
                <div>
                  <input type="text" placeholder="Address Line 2" />
                </div>

                <div>Postcode: </div>
                <div>
                  <input type="text" placeholder="Postcode" />
                </div>

                <div>City: </div>
                <div>
                  <input type="text" placeholder="City" />
                </div>
              </InputFormContainer>
            </FormSectionContainer>

            <FormSectionContainer>
              <p>
                <h2>How do you prefer to pay?</h2>
                <p>We offer various payment options to suit your needs.</p>
              </p>
              <PayByContainer>
                <PayByCard>
                  <div>Pay Now By Card</div>
                  <input type="radio" name="frequency" checked="checked" />
                </PayByCard>
                <PayByInvoice>
                  <div>Pay Later By Invoice</div>
                  <input type="radio" name="frequency" checked="checked" />
                </PayByInvoice>
              </PayByContainer>
            </FormSectionContainer>

            <FormSectionContainer>
              <p>
                <h2>Payment details</h2>
                <p>Enter your card information below.</p>
              </p>
              <InputFormContainer>
                <div>Card Number </div>
                <div>
                  <input type="text" placeholder="Address Line 1" />
                </div>

                <div>Expiry Date </div>
                <div>
                  <input type="text" placeholder="Address Line 2" />
                </div>

                <div>CVC </div>
                <div>
                  <input type="text" placeholder="Postcode" />
                </div>

              </InputFormContainer>
            </FormSectionContainer>
          </Form>
        </LeftPaymentContainer>
        <RightSummaryContainer>Booking Summary</RightSummaryContainer>
      </Container>
    </>
  );
};

const mapStateToProps = state => ({
  startDate: state.user.service.startDate
});

export default connect(
  mapStateToProps,
  null
)(Bookings);
