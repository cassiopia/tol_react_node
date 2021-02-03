import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {Form} from "antd";

// todo Этот файл Это ЧЕРНОВИК с моими наработками

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
        backgroundImage: 'url(https://i.imgur.com/NG5KNsw.jpg)',
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
    avatar: {
        //margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
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
                            <h3>Sign in</h3>
                        </div>
                    </div>

                    <form className="contact-form" data-animated="0" id="contactForm" method="post">

                        <div className="mc-name">
                            <input type="text" name="senderName" id="senderName" placeholder="name" required/>
                            <span><i className="fa fa-user"></i></span>
                        </div>
                        <div className="mc-email">
                            <input type="email" name="senderEmail" id="senderEmail" placeholder="Email Address"
                                   required/>
                            <span><i className="fa fa-envelope-o"></i></span>
                        </div>
                        <div className="mc-website">
                            <input type="text" name="subject" id="subject" placeholder="subject"/>
                            <span><i className="fa fa-link"></i></span>
                        </div>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />

                        {/*<Button*/}
                        {/*    type="submit"*/}
                        {/*    fullWidth*/}
                        {/*    variant="contained"*/}
                        {/*    color="primary"*/}
                        {/*    className={classes.submit}*/}
                        {/*>*/}
                        {/*    Sign In*/}
                        {/*</Button>*/}

                        {/*todo Придумать  адекватное название айдишнику*/}

                        <div id="servicesTmp">
                            <div className="buttonAuth">Sign In</div>

                            <button className="buttonAuth" type="submit">
                                Кнопка :)
                            </button>
                        </div>

                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
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
