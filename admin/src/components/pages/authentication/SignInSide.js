import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import './css/style.css';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        // todo Фотки где каська в шкафу поставить что бы линия дверки была по лиии блока формы (типо выглядывает из за блока формы)
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

export default function SignInSide() {
    const classes = useStyles();

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

                    <form className="contact-form" data-animated="0" id="contactForm" method="post">
                        <div className="mc-email">
                            <input type="email" name="senderEmail" id="senderEmail" placeholder="Email"
                                   required/>
                            <span><i className="fa fa-envelope-o"></i></span>
                        </div>
                        <div className="mc-website">
                            <input type="password" name="password" id="subject" placeholder="Пароль"/>
                            <span><i className="fa fa-lock"></i></span>
                        </div>

                        <div className="checkboxAuth">
                            <input type="checkbox" id="remember" name="remember"/>
                            <label htmlFor="remember">Remember me</label>
                        </div>

                        <div id="buttonId">
                            <button className="buttonAuth" type="submit">
                                Войти
                            </button>
                        </div>

                        <Grid container>
                            <Grid item xs>
                                <Link href="#" className="authLink">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" className="authLink">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>

                    </form>
                </div>
            </Grid>
        </Grid>
    );
}
