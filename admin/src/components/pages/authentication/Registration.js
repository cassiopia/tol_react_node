import React, {useRef, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import './css/style.css';
import {useForm} from "react-hook-form";
import _ from "lodash/fp";
import AuthenticationService from "../../services/AuthenticationService";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://i.imgur.com/NG5KNsw.jpg)',
        //backgroundImage: 'url(https://i.imgur.com/WT9To6C.jpg?3)',
        // backgroundImage: 'url(https://i.imgur.com/ZweZXUD.jpg?1)',
        //backgroundImage: 'url(https://i.imgur.com/6SvxEsg.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Registration() {
    const [open, setOpen] = useState(false);
    const [typeDialog, setTypeDialog] = useState('');
    const [messageDialog, setMessageDialog] = useState('');

    const classes = useStyles();

    const createAccount = data => {
        sendData(data);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function SimpleDialog(props) {
        return (
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">
                    {typeDialog === 'success' ? (
                        <>
                            <span>Авторизация прошла успешно!</span>
                            <Link href="/login" className="authLinkDialog"> Пожалуйста авторизируйтесь.</Link>
                        </>

                    ) : (<span className="formDialogErrors">{messageDialog} </span>)}
                </DialogTitle>
            </Dialog>
        );
    }

    const sendData = (data) => {
        AuthenticationService.registration(data)
            .then(() => {
                setTypeDialog('success');
                handleOpen();
            })
            .catch(e => {
                setTypeDialog('error');
                setMessageDialog(e.response.data.message);
                handleOpen();
            });
    };

    const {register, handleSubmit, watch, errors} = useForm();
    const password = useRef({});
    password.current = watch("password", "");

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className={classes.image}/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>

                <div id="contact-form">

                    <div className="loginImg">
                        <div>
                            <img src="https://i.imgur.com/5U84EeS.jpg?1" alt=""/>
                            <h3>Регистрация</h3>
                        </div>
                    </div>

                    <form className="contact-form" data-animated="0" id="contactForm"
                          onSubmit={handleSubmit(createAccount)}>
                        <div className="mc-name">
                            <input
                                name="name"
                                id="name"
                                placeholder="Имя"
                                ref={register({
                                    required: true
                                })}
                            />
                            {_.get("name.type", errors) === "required" && (
                                <p className="formErrors">Пожалуйста, введите Ваше имя</p>
                            )}
                            <span><i className="fa fa-user"></i></span>
                        </div>
                        <div className="mc-email">
                            <input
                                name="email"
                                id="email"
                                placeholder="Email"
                                ref={register({
                                    required: true,
                                    pattern: /^\S+@\S+$/i
                                })}
                            />
                            {_.get("email.type", errors) === "required" && (
                                <p className="formErrors">Пожалуйста, введите Ваш Email</p>
                            )}
                            {_.get("email.type", errors) === "pattern" && (
                                <p className="formErrors">Пожалуйста, введите верный Email</p>
                            )}
                            <span><i className="fa fa-envelope-o"></i></span>
                        </div>
                        <div className="mc-website">
                            <input
                                name="password"
                                type="password"
                                placeholder="Пароль"
                                ref={register({
                                    required: true
                                })}
                            />
                            {_.get("password.type", errors) === "required" && (
                                <p className="formErrors">Пожалуйста, введите Ваш пароль</p>
                            )}
                            <span><i className="fa fa-lock"></i></span>
                        </div>
                        <div className="mc-website">
                            <input
                                name="confirmPassword"
                                type="password"
                                placeholder="Подтвердите пароль"
                                ref={register({
                                    validate: value =>
                                        value === password.current
                                })}
                            />
                            {_.get("confirmPassword.type", errors) === "validate" && (
                                <p className="formErrors">Пароли не совпадают</p>
                            )}
                            <span><i className="fa fa-lock"></i></span>
                        </div>

                        <div id="buttonId">
                            <button className="buttonAuth" type="submit">
                                Создать аккаунт
                            </button>
                        </div>

                        <Grid>
                            <Grid item>
                                <Link href="/login" className="authLink">
                                    {"Есть аккаунт? Войти"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>

                    <SimpleDialog open={open} onClose={handleClose}/>
                </div>
            </Grid>
        </Grid>

    );

}
