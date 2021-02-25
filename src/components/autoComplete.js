/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { countries } from '../utils'
// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
        ? isoCode
            .toUpperCase()
            .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
        : isoCode;
}

const useStyles = makeStyles({
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
});

export default function CountrySelect({ setCountryCode }) {
    const classes = useStyles();

    return (
        <Autocomplete
            id="country-select-demo"
            style={{ width: 300 }}
            options={countries}
            classes={{
                option: classes.option,
            }}
            onSelect={(e)=>console.log(e)}

            autoHighlight
            getOptionSelected={(option) => console.log(option.code+'sss')}
            getOptionLabel={(option) => option.label}
            renderOption={(option) => (
                <div onClick={() => setCountryCode(option.code)}>
                    <span>{countryToFlag(option.code)}</span>
                    {option.label} ({option.code}) +{option.phone}
                </div>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a country"
                    variant="outlined"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}
