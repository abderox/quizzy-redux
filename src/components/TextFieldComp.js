import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { connect } from "react-redux";
import { handleAmountChange } from "../redux/actions";

const TextFieldComp = (props) => {
  
  const handleChange = (e) => {
    props.handleAmountChange(e.target.value);
  };

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <TextField
          onChange={handleChange}
          variant="outlined"
          label="Amount of Questions"
          type="number"
          size="small"
        />
      </FormControl>
    </Box>
  );
};


const mapToDispatch = (dispatch) => {
  return {
    handleAmountChange: (amount) => dispatch(handleAmountChange(amount)),
  };}

export default connect(null, mapToDispatch)(TextFieldComp);
