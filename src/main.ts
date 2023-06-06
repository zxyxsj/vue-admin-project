import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'element-plus/dist/index.css';
//svg插件的配置代码
import 'virtual:svg-icons-register';
//引入自定义插件对象
import globalComponent from '@/components';
//引入全局样式
import '@/styles/index.scss';

const app = createApp(App);
//安装自定义插件
app.use(globalComponent);
app.mount('#app');
