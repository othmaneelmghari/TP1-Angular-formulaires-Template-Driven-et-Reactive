import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, JsonPipe, MatCardModule, MatFormFieldModule,
    MatInputModule, MatSelectModule, MatButtonModule,
  ],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveFormComponent {
  private fb = inject(FormBuilder);

  countries = [
    { value: 'fr', label: 'France' },
    { value: 'be', label: 'Belgique' },
    { value: 'ch', label: 'Suisse' },
    { value: 'ca', label: 'Canada' },
  ];

  form = this.fb.group({
    fullname: ['', [Validators.required, Validators.minLength(3)]],
    age: [null as number | null, [Validators.required, Validators.min(18)]],
    country: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  result: any = null;

  // Raccourcis pour le template
  get fullname() { return this.form.controls.fullname; }
  get age()      { return this.form.controls.age; }
  get country()  { return this.form.controls.country; }
  get email()    { return this.form.controls.email; }

  onSubmit() {
    if (this.form.valid) {
      this.result = this.form.value;
      console.log('Inscription réussie', this.result);
    } else {
      this.form.markAllAsTouched();
    }
  }
}