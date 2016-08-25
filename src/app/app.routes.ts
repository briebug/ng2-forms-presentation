import {provideRouter, RouterConfig} from '@angular/router';

import {TemplateFormComponent} from './components/template-form/template-form.component';
import {ModelFormComponent} from './components/model-form/model-form.component';

export const routes: RouterConfig = [
    {path: '', component: TemplateFormComponent},
    {path: 'template', component: TemplateFormComponent},
    {path: 'model', component: ModelFormComponent},
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
