import React, {useState} from 'react';
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
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

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
    //const [age, setAge] = React.useState('');
    const [personName, setPersonName] = useState([]);
    const [filterValue, setFilterValue] = useState([]);

    const [open, setOpen] = useState(false);
    const [age, setAge] = useState('');

    const handleFilterChange = (event) => {
        setFilterValue(event.target.value);
    };

    const handleChange = (event) => {
        setAge(Number(event.target.value) || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <div style={{width: '100%'}}>
                <Box display="flex" p={1} pt={0.5}>
                    <Box p={1} flexGrow={1}>

                        <div className="filterButtonFormControl">
                            <Button onClick={handleClickOpen} className="filterButton">
                                <i className="fa fa-filter" aria-hidden="true"></i>
                                <span className="filterButtonSpan"> Фильтры </span>
                            </Button>
                            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                                <DialogTitle>Fill the form</DialogTitle>
                                <DialogContent>
                                    <form className={classes.container}>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel htmlFor="demo-dialog-native">Age</InputLabel>
                                            <Select
                                                native
                                                value={age}
                                                onChange={handleChange}
                                                input={<Input id="demo-dialog-native"/>}
                                            >
                                                <option aria-label="None" value=""/>
                                                <option value={10}>Ten</option>
                                                <option value={20}>Twenty</option>
                                                <option value={30}>Thirty</option>
                                            </Select>
                                        </FormControl>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel id="demo-dialog-select-label">Age</InputLabel>
                                            <Select
                                                labelId="demo-dialog-select-label"
                                                id="demo-dialog-select"
                                                value={age}
                                                onChange={handleChange}
                                                input={<Input/>}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </form>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                        Cancel
                                    </Button>
                                    <Button onClick={handleClose} color="primary">
                                        Ok
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </Box>
                    <Box p={1}>
                        <FormControl className="sortFormControl">
                            <InputLabel id="demo-controlled-open-select-label">Сортировать по:</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                value={age}
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            </div>
            <div><SelectedFilter/></div>
        </>
    );
}