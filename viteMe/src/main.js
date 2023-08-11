import { createApp } from 'vue';
import './style.css'
import App from './App.vue';
import router from './router/router_index';
import PrimeVue from 'primevue/config';

import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/nano/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import Panel from 'primevue/panel';
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import AutoComplete from 'primevue/autocomplete';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Dialog from 'primevue/dialog';
import Inplace from 'primevue/inplace';
import InputText from 'primevue/inputtext';
import Editor from 'primevue/editor';
import Chips from 'primevue/chips';
import Sidebar from 'primevue/sidebar';
import Tooltip from 'primevue/tooltip';
import Textarea from 'primevue/textarea';
import Calendar from 'primevue/calendar';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ProgressBar from 'primevue/progressbar';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional


const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.component('Panel', Panel);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Toolbar', Toolbar);
app.component('Button', Button);
app.component('Dropdown', Dropdown);
app.component('AutoComplete', AutoComplete);
app.component('Card', Card);
app.component('Calendar', Calendar)
app.component('Tag', Tag);
app.component('Dialog', Dialog);
app.component('Inplace', Inplace);
app.component('InputText', InputText);
app.component('Editor', Editor);
app.component('Chips', Chips);
app.component('Textarea', Textarea);
app.component('Sidebar', Sidebar)
app.component('Progressbar', ProgressBar)
app.directive('tooltip', Tooltip);


app.mount('#app');
