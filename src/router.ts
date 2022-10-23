import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import RadioDemo from './components/RadioDemo.vue'
import getStarted from './markdown/get-started.md'
import install from './markdown/Install.md'
import intro from './markdown/Intro.md'
import { h } from 'vue'
import Markdown from './components/Markdown.vue'
const history = createWebHashHistory()
const md = (string) => h(Markdown, { content: string, key: string })

export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: '', redirect: '/doc/intro' },
        { path: 'get-started', component: md(getStarted) },
        { path: 'install', component: md(install) },
        { path: 'intro', component: md(intro) },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
        { path: 'radio', component: RadioDemo },
      ],
    },
    ,
    {
      path: '/:w+',
      redirect:'/'
    }
  ],
})
router.afterEach(() => {
  console.log('路由切换了')
})
