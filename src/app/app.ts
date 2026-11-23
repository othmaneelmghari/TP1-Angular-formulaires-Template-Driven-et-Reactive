import { Component } from '@angular/core';
import { TemplateFormComponent } from './template-form/template-form';
import { ReactiveFormComponent } from './reactive-form/reactive-form';

@Component({
  selector: 'app-root',
  imports: [TemplateFormComponent, ReactiveFormComponent],
  template: `<app-template-form /><app-reactive-form />`,
})
export class App {}