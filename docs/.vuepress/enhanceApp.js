import ElementUI from '@nicky132/element';
import '@nicky132/element/lib/theme-chalk/index.css';

console.log('ElementUI',ElementUI);

export default async ({
  Vue
}) => {
  if (typeof process === 'undefined') {
    Vue.use(ElementUI)
  }
}