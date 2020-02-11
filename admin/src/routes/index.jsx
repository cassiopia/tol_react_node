import BlogLayout from 'layouts/Blog.jsx';
import BlankPage from 'layouts/BlankPage.jsx';
import LoginPage from 'layouts/LoginPage.jsx';

import DefaultLayout from 'layouts/PageLayouts/DefaultLayout.jsx';
import FoldedMenu from 'layouts/PageLayouts/FoldedMenu.jsx';
import TransparentLayout from 'layouts/PageLayouts/TransparentLayout.jsx';
import LightMenu from 'layouts/PageLayouts/LightMenu.jsx';
import ChatOpen from 'layouts/PageLayouts/ChatOpen.jsx';

var BASEDIR = process.env.REACT_APP_BASEDIR;

var indexRoutes = [
    { path: BASEDIR+"/login", name: "Login", component: LoginPage },
    { path: BASEDIR+"/register", name: "Register", component: LoginPage },
                        
    { path: BASEDIR+"/lockscreen", name: "Lockscreen", component: BlankPage },
	{ path: BASEDIR+"/403", name: "403", component: BlankPage },
    { path: BASEDIR+"/404", name: "404", component: BlankPage },
    { path: BASEDIR+"/405", name: "405", component: BlankPage },
    { path: BASEDIR+"/408", name: "408", component: BlankPage },
    { path: BASEDIR+"/500", name: "500", component: BlankPage },
    { path: BASEDIR+"/503", name: "503", component: BlankPage },
    { path: BASEDIR+"/offline", name: "Offline", component: BlankPage },

    { path: BASEDIR+"/blog", name: "Blog Dashboard", component: BlogLayout },

    { path: BASEDIR+"/defaultlayout", name: "Default Layout", component: DefaultLayout },
    { path: BASEDIR+"/foldedmenu", name: "Folded Menu", component: FoldedMenu },
    { path: BASEDIR+"/transparentlayout", name: "Folded Menu", component: TransparentLayout },
    { path: BASEDIR+"/lightmenu", name: "Light Menu", component: LightMenu },
    { path: BASEDIR+"/chatopen", name: "Chat Open", component: ChatOpen },

    { path: BASEDIR+"/", name: "Home", component: BlogLayout },
    { path: "/", name: "Home", component: BlogLayout },
];

export default indexRoutes;
