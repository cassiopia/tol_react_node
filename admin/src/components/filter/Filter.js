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
import FormControlLabel from '@material-ui/core/FormControlLabel';

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

// todo Вытащить данные с вервера и нормально сделать чекбоксы. За имя и кey. И сделать отображение галок
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


export default function Filter() {
    const classes = useStyles();

    const [filterValue, setFilterValue] = useState([]);
    const [open, setOpen] = useState(false);
    const [order, setOrder] = useState('');
    const [isFilterApprove, setFilterApprove] = useState(false);

    const handleFilterChange = (event) => {
        console.log(event.target.name);
        console.log(event.target.checked);
        //setFilterValue(event.target.value);
        setFilterValue({...filterValue, [event.target.name]: event.target.checked});
        console.log(filterValue);
    };

    const handleOrderChange = (event) => {
        setOrder(Number(event.target.value) || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleApproveClose = () => {
        // todo Тут будет посыл на сервер
        // todo Ставить этот фильтр когда придет положительный ответ с сервера
        setFilterApprove(true);
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
                            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}
                                    className="filterDialog">
                                <DialogTitle>Выберите критерии фильтрации: </DialogTitle>
                                <DialogContent>
                                    <form>
                                        <FormControl className={classes.formControl}>
                                            {names.map((name) => (
                                                <FormControlLabel
                                                    control={<Checkbox checked={false} onChange={handleFilterChange}
                                                                       name={name}/>}
                                                    label={name}
                                                    key={name}
                                                />
                                            ))}
                                        </FormControl>
                                    </form>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                        Отмена
                                    </Button>
                                    <Button onClick={handleApproveClose} color="primary">
                                        Фильтровать
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </Box>
                    <Box p={1}>
                        <FormControl className="sortFormControl">
                            <InputLabel id="demo-controlled-open-select-label">Сортировать по:</InputLabel>
                            {/*todo Этот селект отрывается от селекта при прокрутке сайта*/}
                            <Select
                                // labelId="demo-controlled-open-select-label"
                                // id="demo-controlled-open-select"
                                value={order}
                                onChange={handleOrderChange}
                            >
                                <MenuItem value={1} className="sortSelectItem">
                                    По дате добавления
                                    <span className="sortItemSpanIcon">
                                    <i className="fa fa-sort-amount-desc" aria-hidden="true"></i>
                                    </span>
                                </MenuItem>
                                <MenuItem value={2} className="sortSelectItem">
                                    По дате добавления
                                    <span className="sortItemSpanIcon">
                                    <i className="fa fa-sort-amount-asc" aria-hidden="true"></i>
                                    </span>
                                </MenuItem>
                                <MenuItem value={3} className="sortSelectItem">
                                    По алфавиту
                                    <span className="sortItemSpanIcon">
                                    <i className="fa fa-sort-alpha-desc" aria-hidden="true"></i>
                                    </span>
                                </MenuItem>
                                <MenuItem value={4} className="sortSelectItem">
                                    По алфавиту
                                    <span className="sortItemSpanIcon">
                                    <i className="fa fa-sort-alpha-asc" aria-hidden="true"></i>
                                    </span>
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            </div>
            {isFilterApprove &&
            <div><SelectedFilter/></div>
            }
        </>
    );
}