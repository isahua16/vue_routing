import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import MenuPage from '@/views/MenuPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: `/`,
    component: HomePage,
    meta : [
      {
        title: `My Home Page`
      },
      {
        name: `author`,
        content: `Isael Huard`
      },
      {
        name: `description`,
        content: `This is the home page of my new app`
      }
    ]
  },
  {
    path: `/menu`,
    component: MenuPage,
    meta: [
      {
        title: `The Menu Page`,
      },
      {
        name: `author`,
        content: `Jeff Musk`
      },
      {
        name: `description`,
        content: `This is the menu page of my awesome application`
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  let old_tags = document.querySelectorAll(`meta`);
  for(let i = 0; i < old_tags.length; i++) {
    old_tags[i].remove();
  }
  let new_tags = to.meta;
  document.querySelector(`title`).innerHTML = new_tags[0].title;
  for(let i = 1; i < new_tags.length; i++) {
    document.querySelector(`head`).insertAdjacentHTML(`beforeend`, `<meta name="${new_tags[i].name}" content="${new_tags[i].content}">`);
  }
  document.querySelector(`head`).insertAdjacentHTML(`afterbegin`, `    
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">`);
  from;
  next();
})

export default router
