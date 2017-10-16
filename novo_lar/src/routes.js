import Blog from './components/blog/blog.vue';
import Home from './components/home/home.vue';
import Contato from './components/contato/contato.vue';
import Sobre from './components/sobre/sobre.vue';
export const routes = [
    { path: '', component: Home },
    { path: '/home', component: Home },
    { path: '/blog', component: Blog },
    { path: '/sobre', component: Sobre },
    { path: '/contato', component: Contato }
];