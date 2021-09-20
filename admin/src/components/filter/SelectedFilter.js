import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        listStyle: 'none',
        paddingLeft: '10px',
        paddingRight: '10px',
        justifyContent: 'left',
        flexWrap: 'wrap',
        '& > *': {
            marginLeft: theme.spacing(0.5),
            marginRight: theme.spacing(0.5),
            marginBottom: theme.spacing(2),
        },
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));

function ChipDelIcon(props) {
    return (
        <SvgIcon {...props} viewBox="64 64 896 896">
            <path
                d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"/>
        </SvgIcon>
    );
}

export default function SelectedFilter() {
    const classes = useStyles();
    // todo  может тайтлы передавать?
    const [chipData, setChipData] = React.useState([
        {key: 0, label: 'Angular'},
        {key: 1, label: 'jQuery'},
        {key: 2, label: 'Polymer'},
        {key: 3, label: 'React'},
        {key: 4, label: 'Vue.js'},
        {key: 5, label: 'TT'},
    ]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    return (
        <>
            <div className={classes.root}>
                {chipData.map((data) => {
                    return (
                        <li key={data.key}>
                            <Chip
                                color="primary"
                                label={data.label}
                                onDelete={handleDelete(data)}
                                className={classes.chip}
                                deleteIcon={<ChipDelIcon style={{fontSize: 10}}/>}
                            />
                        </li>
                    );
                })}
            </div>
        </>
    );
}