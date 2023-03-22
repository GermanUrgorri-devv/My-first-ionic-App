import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';





@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
/**
  Esta línea de código define un nuevo componente de Angular llamado "LoginPage". 
  Los componentes son bloques de construcción fundamentales en la construcción de 
  aplicaciones en Angular, ya que encapsulan la lógica y la presentación de una sección 
  específica de una aplicación web.

  El selector "app-login" se utilizará para identificar y utilizar este componente en 
  el archivo HTML de la aplicación, y los archivos de la plantilla y estilos asociados con 
  el componente se especifican en las propiedades "templateUrl" y "styleUrls", respectivamente.
*/})



export class LoginPage implements OnInit {

  private users = [
    {
      email: 'germanurgorri@gmail.com',
      password: 'contraseña'
    },
    {
      email: 'administrador@gmail.com',
      password: 'contraseña1234'
    }
  ];



  /*
  Define una clase llamada LoginPage y la exporta para que pueda ser 
  utilizada en otros módulos y componentes.
  
  La palabra clave class se utiliza para crear una clase en TypeScript, 
  y implements OnInit indica que la clase implementa la interfaz OnInit.
  
  La interfaz OnInit es una interfaz que define el método ngOnInit(), 
  que es un método de ciclo de vida de Angular que se llama después de que 
  se hayan inicializado todas las propiedades del componente.
  
  En resumen, la línea define una clase que implementa la interfaz OnInit, 
  lo que significa que la clase tendrá un método ngOnInit() que 
  se llamará automáticamente después de que se hayan inicializado todas las propiedades del componente.
  */
  public loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  /**
  Esta línea de código está creando una instancia de FormGroup llamada loginForm 
  utilizando la clase FormBuilder de Angular.
  
  El FormGroup es una clase que representa un grupo de controles de formulario. 
  En este caso, loginForm es un objeto que agrupa dos controles de formulario: 
  el campo de correo electrónico y el campo de contraseña.
  
  El método group() del FormBuilder se utiliza para crear un objeto FormGroup 
  que contiene uno o más objetos FormControl, que son los componentes básicos 
  del formulario.
  
  En este caso, cada campo del formulario está representado por un objeto FormControl, 
  que tiene un valor inicial vacío ('') y un conjunto de validadores. 
  Los validadores se pasan como un segundo argumento en un arreglo.
  
  El primer validador utilizado es Validators.required, que se encarga de validar 
  que el campo no esté vacío. 
  El segundo validador es Validators.email, que se encarga de validar que 
  el valor del campo sea una dirección de correo electrónico válida.
  
  En resumen, la línea de código está creando un objeto FormGroup que agrupa 
  dos controles de formulario, cada uno con un valor inicial vacío y un conjunto 
  de validadores para asegurarse de que los datos ingresados por el usuario sean válidos.
   */
  constructor(private formBuilder: FormBuilder, private alertController: AlertController) { }

  onSubmit() {
    const user = this.loginForm.value;

    const foundUser = this.users.find(u => u.email === user.email && u.password === user.password);

    if (foundUser) {

      const alert = this.alertController.create({
        header: 'Bienvenido',
        subHeader: 'Has iniciado sesion correctamente.',
        message: 'Hola, ' + user.email,
        buttons: ['OK'],
      });

      if (alert) {
        alert.then((a) => {
          a.present();
        });
      }
    } else {
      {
        const alert = this.alertController.create({
          header: 'Error',
          subHeader: 'No se pudo iniciar sesión.',
          message: 'Por favor, comprueba tu correo electrónico y contraseña.',
          buttons: ['OK'],
        });

        alert.then((a) => {
          a.present();
        });
      }
    }
    /**
Esta sección de código es parte de una función que muestra un cuadro de alerta 
al usuario después de que intenta iniciar sesión en la aplicación. 
La condición if (alert) verifica si hay un objeto de alerta disponible.

La función then se usa para esperar la resolución de una promesa y, 
en este caso, espera la resolución de la promesa que se devuelve 
al llamar al método create del AlertController en la función login. 
Cuando se resuelve la promesa, la función then se ejecuta con el 
objeto de alerta a como parámetro.

La última línea de código a.present() llama al método present() 
del objeto de alerta, lo que hace que se muestre en la interfaz de usuario. 
En resumen, esta sección de código muestra la alerta de inicio de sesión al usuario si existe.
     */
  }

  ngOnInit() { }



}
