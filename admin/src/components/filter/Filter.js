import React from 'react';
import {makeStyles, useTheme, withStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import './css/style.css';
import SelectedFilter from "./SelectedFilter";

const useStyles = makeStyles((theme) => ({
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

// todo Интерная логика. Разобрать ее по косточкам
export default function Filter() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        setAge(event.target.value);
        setPersonName(event.target.value);
    };

    return (
        <>
            <div style={{width: '100%'}}>
                <Box display="flex" p={1} pt={0.5}>
                    <Box p={1} flexGrow={1}>
                        <FormControl className="filterFormControl">
                            <InputLabel>
                                Фильтры
                            </InputLabel>
                            <Select
                                id="filterx"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<Input/>}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {names.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={personName.indexOf(name) > -1}/>
                                        <ListItemText primary={name}/>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>

                    <Box p={1}>
                        <FormControl className="sortFormControl">
                            <InputLabel>
                                Сортировать по:
                            </InputLabel>
                            <Select
                                id="sort"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<Input/>}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {names.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={personName.indexOf(name) > -1}/>
                                        <ListItemText primary={name}/>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            </div>
            <div><SelectedFilter/></div>
        </>
    );
}