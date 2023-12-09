import config from '~/config';
// Layouts
import { HeaderOnly } from '~/layouts/';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';

const publicRoutes = [
    { path: config.routers.home, component: Home },
    { path: config.routers.following, component: Following },
    { path: config.routers.live, component: Live },
    { path: config.routers.profile, component: Profile },
    { path: config.routers.upload, component: Upload, layout: HeaderOnly },
    { path: config.routers.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
