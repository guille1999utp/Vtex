import { Albums } from "../Albums";
import { Home } from "../Home";
import { PlaySong } from "../PlaySong";
import Routes from "../shared/models/rutas";
import { Song } from "../Song";

const routes: Routes[] = [
    {
        path:"/",
        name:"home",
        exact:true,
        component:Home
    },
    {
        path:"/:id/albums",
        name:"albums",
        exact:true,
        component:Albums
    },
    {
        path:"/:id/canciones",
        name:"canciones",
        exact:true,
        component:Song
    },
    {
        path:"/:id/reproduccion",
        name:"canciones reproduccion",
        exact:true,
        component:PlaySong
    }
];

export default routes;