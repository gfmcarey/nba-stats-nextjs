import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from "@emotion/styled"
import DateSelector from './DateSelector';


const statOptions = [
    'pts',
    'min',
    'fgm',
    'fga',
    'fg3m',
    'fg3a',
    'ftm',
    'fta',
    'reb',
    'oreb',
    'dreb',
    'ast',
    'stl',
    'blk',
    'turnover',
];

const dateOptions = [
    'Last 3 Weeks',
    'Last 5 Games',
    'Last 10 Games',
    'Last 20 Games',
];

const Container = styled.div`
    display: grid;    
    padding-top: 30%;
    grid-template-columns:25% 25% 50%;
`

export default function SelectDropDown() {
    const [statOne, setStatOne] = React.useState('');
    const handleStatChangeOne = (event) => {
        setStatOne(event.target.value);
    };

    const [statTwo, setStatTwo] = React.useState('');
    const handleStatChangeTwo = (event) => {
        setStatTwo(event.target.value);
    };

    return (
        <Container>
            <FormControl 
                variant="outlined" 
                sx={{ m: 1, minWidth: 120 }} 
                size="small"
            >
                <InputLabel
                    id="demo-simple-select-standard-label"
                    style={{ color: "white" }}
                >
                    Stat
                </InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={statOne}
                    onChange={handleStatChangeOne}
                    label="Stat"
                >
                    {statOptions.map((option) => (
                        <MenuItem value={option} selected={option === 'Pyxis'}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl
                variant="outlined"
                sx={{ m: 1, minWidth: 120 }}
                size="small"
            >
                <InputLabel
                    id="demo-simple-select-standard-label"
                    style={{ color: "white" }}
                >
                    Stat
                </InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={statTwo}
                    onChange={handleStatChangeTwo}
                >
                    {statOptions.map((option) => (
                        <MenuItem value={option} selected={option === 'Pyxis'}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <DateSelector />
        </Container>
    );
}