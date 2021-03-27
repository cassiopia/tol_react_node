import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import './css/style.css';
import AuthenticationService from "../../services/AuthenticationService";
import {useForm} from "react-hook-form";
import _ from "lodash/fp";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        //backgroundImage: 'url(https://i.imgur.com/NG5KNsw.jpg)',
        //backgroundImage: 'url(https://i.imgur.com/WT9To6C.jpg?3)',
        backgroundImage: 'url(https://i.imgur.com/ZweZXUD.jpg?1)',
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

export default function Login() {
    const classes = useStyles();

    const login = data => {
        sendData(data);
    };

    const sendData = (data) => {
        AuthenticationService.login(data)
            .then(response => {
                //todo Подумать что отрисовать / вызвать тут. Может показать менюшку и отрисовать котика? :)
            })
            .catch(e => {
                console.log(e);
            });
    };

    const {register, handleSubmit, errors} = useForm();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className={classes.image}/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>

                <div id="contact-form">

                    <div className="loginImg">
                        <div>
                            <img src="https://i.imgur.com/5U84EeS.jpg?1" alt=""/>
                            <h3>Вход</h3>
                        </div>
                    </div>

                    <form className="contact-form" data-animated="0" id="contactForm" onSubmit={handleSubmit(login)}>
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

                        <div className="checkboxAuth">
                            <input type="checkbox" id="remember" name="remember"/>
                            <label htmlFor="remember">Запомнить меня</label>
                        </div>

                        <div id="buttonId">
                            <button className="buttonAuth" type="submit">
                                Войти
                            </button>
                        </div>

                        <Grid container>
                            <Grid item xs>
                                <Link href="#" className="authLink">
                                    Забыли пароль?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/registration" className="authLink">
                                    {"Нету аккаунта? Зарегестрироваться"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}
