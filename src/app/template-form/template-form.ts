import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [
    FormsModule, JsonPipe, MatCardModule, MatFormFieldModule,
    MatInputModule, MatSelectModule, MatButtonModule,
  ],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateFormComponent {
  countries = [
    { value: 'fr', label: 'France' },
    { value: 'be', label: 'Belgique' },
    { value: 'ch', label: 'Suisse' },
    { value: 'ca', label: 'Canada' },
  ];

  user = { fullname: '', age: null as number | null, country: '', email: '' };
  result: any = null;

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.result = { ...this.user };
      console.log('Inscription réussie', this.result);
    }
  }
}