import homeInit from './home';
import ImageC from './components/single-figure.js';

let Vue;

document.addEventListener('DOMContentLoaded', async () => {
  if (document.body.dataSet?.production === 'true') {
    Vue = await import('./vue.esm-browser.prod');
  } else {
    Vue = await import('./vue.esm-browser');
  }  
  
  let components = [
    {name: 'single-figure', component: ImageC},
  ];

  const app = Vue.createApp({});
  app.config.compilerOptions.isCustomElement = tag => tag === 'nobr'

  components.forEach((c) => {
    app.component(c.name, c.component);
  });

  app.mount('body');

});
document.addEventListener('DOMContentLoaded', () => {
  if (document.body.classList.contains('home')) {
    homeInit();
  }
});
