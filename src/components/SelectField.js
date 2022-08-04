import React from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import { MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { handleCategoryChange, handleTypeChange, handleDifficultyChange } from '../redux/actions';
import { connect } from 'react-redux';

function SelectField(props) {


    const [value, setvalue] = useState("")


    const handleChange = (e) => {
        setvalue(e.target.value);
        switch (props.label) {
            case "Category":
                props.handleCategoryChange(e.target.value);
                break;
            case "Difficulty":
                props.handleDifficultyChange(e.target.value);
                break;
            case "Type":
                props.handleTypeChange(e.target.value);
                break;
            default:
                return;
        }
    };

    return (
        <Box mt={3} width="100%">

            <FormControl variant="outlined" fullWidth>
                <InputLabel>
                    {props.label}
                </InputLabel>
                <Select value={value} label={props.label} onChange={handleChange}>
                    {
                        props.options.map(({ id, name }) =>
                        (<MenuItem key={id} value={id}>
                            {name}
                        </MenuItem>)
                        )}

                </Select>
            </FormControl>
        </Box>
    )
}

const mapToProps = (state, ownedProps) => {
    return {
        label: ownedProps.label,
        options: ownedProps.options
    }
}

const mapToDispatch = (dispatch) => {
    return {
        handleCategoryChange: (category) => dispatch(handleCategoryChange(category)),
        handleDifficultyChange: (difficulty) => dispatch(handleDifficultyChange(difficulty)),
        handleTypeChange: (type) => dispatch(handleTypeChange(type))

    }
}


export default connect(mapToProps, mapToDispatch)(SelectField);