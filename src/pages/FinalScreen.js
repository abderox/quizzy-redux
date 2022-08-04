import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { handleAmountChange, handleScoreChange } from "../redux/actions";

const FinalScreen = (props) => {

  const history = useHistory();
  const handleBackToSettings = () => {
    props.handleScoreChange(0);
    props.handleAmountChange(0);
    history.push("/");
  };

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score {props.score}
      </Typography>
      <Button variant="outlined" onClick={handleBackToSettings}>
        back to settings!
      </Button>
    </Box>
  );
};

const mapToProps = (state) => {
  return {
    score: state.score
  };
}

const mapToDispatch = (dispatch) => {
  return {
    handleAmountChange: (amount) => dispatch(handleAmountChange(amount)),
    handleScoreChange: (score) => dispatch(handleScoreChange(score))
  };
}


export default connect(mapToProps, mapToDispatch)(FinalScreen);
