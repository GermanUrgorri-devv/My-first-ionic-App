import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.page.html',
  styleUrls: ['./registrer.page.scss'],
})
export class RegistrerPage implements OnInit {

  public RegistrerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    repeatPassword: ['', [Validators.required, Validators.minLength(6)]]

  },
  { validator: passwordMatchValidator('password', 'repeatPassword') });


  constructor(private formBuilder: FormBuilder, private alertController: AlertController) { }

  onSubmit(){

    const user = this.RegistrerForm.value;

    const alert = this.alertController.create({
      header: 'Bienvenido',
      subHeader: 'Has creado tu cuenta correctamente.',
      message: 'Hola, ' + user.email,
      buttons: ['OK'],
    });

    alert.then((a) => {
      a.present();
    });
  }

  ngOnInit() {
  }

}

function passwordMatchValidator(controlName: string, matchingControlName: string): Validators {
  return (formGroup: FormGroup): ValidationErrors | null => {
    const password = formGroup.controls[controlName];
    const confirmPassword = formGroup.controls[matchingControlName];

    if (confirmPassword.errors && !confirmPassword.errors['passwordMismatch']) {
      return null;
    }

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else {
      confirmPassword.setErrors(null);
    }
    return null;
  };
}