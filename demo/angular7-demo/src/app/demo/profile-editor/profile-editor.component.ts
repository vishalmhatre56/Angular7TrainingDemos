import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from '../forbidden-name-validator.directive';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
  // profileForm = new FormGroup({
  //   firstname: new FormControl(''),
  //   lastname: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl(''),
  //   })
  // })
  profileForm = this.fb.group({
    firstname: ['', [Validators.required,
    Validators.minLength(4),
    forbiddenNameValidator(/bobi/i) // <-- Here's how you pass in the custom validator.
    ]],
    lastname: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get firstname() { return this.profileForm.get('firstname'); }

  get lastname() { return this.profileForm.get('lastname'); }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.table(this.profileForm.value);
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstname: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
}
