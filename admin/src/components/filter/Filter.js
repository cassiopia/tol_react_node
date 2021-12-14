import React, {useEffect, useState} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import './css/style.css';
import SelectedFilter from "./SelectedFilter";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import TagService from "../services/TagService";
import PageService from "../services/PageService";
import Notification from "../notification/Notification";
import FilterLogic from "./FilterLogic";

function Filter(props) {

    const [filterValue, setFilterValue] = useState([]);
    const [yearTags, setYearTags] = useState([]);
    const [countryTags, setCountryTags] = useState([]);
    const [open, setOpen] = useState(false);
    const [order, setOrder] = useState('');
    const [isFilterApprove, setFilterApprove] = useState(false);
    const [selectedTagsIds, setSelectedTagsIds] = useState([]);

    const handleFilterChange = (event) => {
        setFilterValue({...filterValue, [event.target.id]: event.target.checked});
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

    const setFilterData = () => {
        TagService.getTagsByPageType(props.pageType)
            .then(response => {
                groupTagByTagType(response.data);
            })
            .catch(e => {
                Notification.errorNotification('Ошибка загрузки данных!');
                console.log(e);
            });
    };

    const groupTagByTagType = (tags) => {
        let yearTitles = [];
        let countryTitles = [];

        tags.map((tag) => {
                if (tag.type === 'year') {
                    yearTitles = {...yearTitles, [tag.id]: tag.title};
                } else if (tag.type === 'country') {
                    countryTitles = {...countryTitles, [tag.id]: tag.title};
                } else {
                    // todo Возможно залогировать,  а что выводить пользователю? Может прогуглить этот вопрос...Частый он у тебя
                    console.log('Не регламентированная категория фильтра');
                }
            }
        );
        setYearTags(yearTitles);
        setCountryTags(countryTitles);
    };

    const sendFilterData = (filterIds) => {
        PageService.getByPageTypeAndTagIds(props.pageType, filterIds)
            .then(response => {
                console.log(response.data);
                // todo Перезагрузить парента. Придумать как :)
            })
            .catch(e => {
                Notification.errorNotification('Ошибка загрузки данных!');
                console.log(e);
            });

    };

    const handleApprove = () => {
        setFilterApprove(true);
        const filterIds = Object.keys(filterValue).toString();
        localStorage.setItem('filter', JSON.stringify(filterValue));
        sendFilterData(filterIds);
        setOpen(false);
    };

    const listYearCheckbox = () => {
        const formControlLabel = [];
        for (let tagId in yearTags) {
            const isChecked = (filterValue[tagId] !== undefined) ? filterValue[tagId] : false;
            formControlLabel.push(<FormControlLabel
                control={
                    <Checkbox
                        checked={isChecked}
                        onChange={handleFilterChange}
                        name={yearTags[tagId]}
                        className="checkboxStyle"
                        id={tagId}
                    />
                }
                label={yearTags[tagId]}
                key={yearTags[tagId]}
            />);
        }

        return formControlLabel;
    };

    const listCountryCheckbox = () => {
        const formControlLabel = [];
        for (let tagId in countryTags) {
            const isChecked = (filterValue[tagId] !== undefined) ? filterValue[tagId] : false;
            formControlLabel.push(<FormControlLabel
                control={
                    <Checkbox
                        checked={isChecked}
                        onChange={handleFilterChange}
                        name={countryTags[tagId]}
                        className="checkboxStyle"
                        id={tagId}
                    />
                }
                label={countryTags[tagId]}
                key={countryTags[tagId]}
            />)
        }
        return formControlLabel;
    };

    const isFilterInLocalStorage = () => {
        const localStorageKeys = Object.keys(localStorage);
        return localStorageKeys.includes('filter');
    };

    useEffect(() => {
        // todo Fто будет если тэга в БД уже нету, а в локал сторадже нету? Интересно было бы написать тэст
        // todo Dозможно в локал стор сразу записывать и потом менять гостояние галок

        setFilterData();
        if (FilterLogic().isFilterInLocalStorage()) {
            const localStorageItem = JSON.parse(localStorage.getItem('filter'));
            setFilterValue(localStorageItem);
        }
    }, []);


    return (
        <>
            <div>Test Text !!!!!!! </div>
            <div>{FilterLogic().nameFilterToUpperCase('Test Text !!!!!!!')}</div>
            <div style={{width: '100%'}}>
                <Box display="flex" p={1} pt={0.5}>
                    <Box p={1} flexGrow={1}>

                        <div>
                            <Button onClick={handleClickOpen} className="filterButton">
                                <i className="fa fa-filter" aria-hidden="true"></i>
                                <span className="filterButtonSpan"> Фильтры  </span>
                            </Button>

                            <Dialog
                                disableEscapeKeyDown
                                fullWidth={true}
                                maxWidth="xs"
                                open={open}
                                onClose={handleClose}

                            >
                                <DialogContent>
                                    <form>
                                        <FormControl>
                                            <FormLabel className="checkboxGroupLabel">Год:</FormLabel>
                                            <FormGroup>
                                                {listYearCheckbox()}
                                            </FormGroup>

                                            <FormLabel
                                                className="checkboxGroupLabel checkboxGroupCountryLabel">Страна:</FormLabel>
                                            <FormGroup>
                                                {listCountryCheckbox()}
                                            </FormGroup>
                                        </FormControl>
                                    </form>
                                </DialogContent>
                                <DialogActions>

                                    <Button onClick={handleClose} className="btnFilterCancel">
                                        Отмена
                                    </Button>
                                    <Button onClick={handleApprove} className="btnFilterApprove">
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
            {Object.keys(filterValue).length > 0 &&
            <div><SelectedFilter selectedTagsIds={selectedTagsIds}/></div>
            }

        </>
    );
}

export default Filter;