import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ac-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>First name: {{firstName}}</div>
    <div>Last name: {{lastName}}</div>
    
    <form [formGroup]="profileForm" (ngSubmit)="onUpdateProfile()">
      <input formControlName="firstName" class="form-control" placeholder="first name"/>
      <input formControlName="lastName" class="form-control" placeholder="last name"/>
      
      <button type="submit">Update</button>
    </form>
  `
})
export class InfoComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Output() updateProfile = new EventEmitter<any>();

  profileForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  onUpdateProfile() {
    if (!this.profileForm.valid) return;

    this.updateProfile.emit({
      firstName: this.profileForm.value.firstName,
      lastName: this.profileForm.value.lastName
    });

    this.profileForm.reset();
  }
}
