import React, { useState } from "react";
import styled from "styled-components";
import Plane from "./Plane";
import Input from "./Input";
import Button from "./Button";
import { themeVars } from "../GlobalStyles";

const Form = ({
  disabled,
  flightNumber,
  formData,
  handleChange,
  handleSeatSelect,
  handleSubmit,
  subStatus,
}) =>  {return (
  <Wrapper>
    <Plane
      selectedSeat={formData.seat}
      flightNumber={flightNumber}
      handleSeatSelect={handleSeatSelect}
    />
    <UserForm>
      <Input
        name="givenName"
        placeholder="First Name"
        type="text"
        handleChange={handleChange}
        value={formData.givenName}
      />
      <Input
        name="surname"
        placeholder="Last Name"
        type="text"
        handleChange={handleChange}
        value={formData.surname}
      />
      <Input
        name="email"
        placeholder="Email"
        type="email"
        handleChange={handleChange}
        value={formData.email}
      />
      <Button
        disabled={disabled}
        handleClick={handleSubmit}
        subStatus={subStatus}
      />
    </UserForm>
  </Wrapper>
)}

const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 700px;
`;
const UserForm = styled.div`
  border: 3px solid ${themeVars.alabamaCrimson};
  border-radius: 5px;
  margin: auto;
  padding: 30px;
  width: 400px;
`;

export default Form;

//goes in index.js in seat select 
// if (validateEmail()) {
//   fetch(
//     update && userReservation
//       ? `/reservations/${userReservation.id}`
//       : "/reservations", {
//         method: update ? "PUT" : "POST",
//         body: JSON.stringify({...formData, flight: flightNumber}),
     
//       }
//   )
//     .then((res) => res.json())
//     .then((json) => {
 
//       if (json.status == 201) {
//         updateUserReservation(json.data);
//         if(!update) {
//           window.localStorage.setItem("reservationId", json.data.id);
//         }
//       history.push("/confirmed");
//       } else if (json.status == 400) {
//           history.push("/error");
//         }
    
//       }
//     );
  
// }
// };
