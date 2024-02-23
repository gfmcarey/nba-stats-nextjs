import * as React from 'react';
import dayjs from 'dayjs';
import { Container } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DateSelector() {
    const today = dayjs()
    const [value, setValue] = React.useState(today);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <Container>
                <DatePicker
                    label="From"
                    defaultValue={today.subtract(7, 'day')}
                    onChange={(newValue) => setValue(newValue)}
                />
                <DatePicker
                    label="To"
                    defaultvalue={today}
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                />
            </Container>
        </LocalizationProvider>
    );
}