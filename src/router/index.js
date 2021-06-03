/* eslint-disable */

import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue"
import EventList from "../views/event/List.vue";
import EventLayout from "../views/event/Layout.vue"
import EventDetail from "../views/event/Detail.vue"
import EventEdit from "../views/event/Edit.vue"
import EventRegister from "../views/event/Register.vue"
import Prueba from "../components/Prueba.vue"


const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
    props: route => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: "/event/:id",
    name: "EventLayout",
    props: true,
    component: EventLayout,
    children: [
      {
        path: '',
        name: 'EventDetail',
        component: EventDetail,
      },
      {
        path: 'edit',
        name: 'EventEdit',
        component: EventEdit,
      },
      {
        path: 'register',
        name: 'EventRegister',
        component: EventRegister,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/prueba/:xd?",
    name: "Prueba",
    props: true,
    component: Prueba,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.replace(
//   {
//     path: '*',
//     redirect: '/'
//   }
// )

export default router;
