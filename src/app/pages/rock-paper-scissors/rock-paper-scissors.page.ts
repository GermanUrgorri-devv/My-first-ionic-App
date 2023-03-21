import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-rock-paper-scissors',
  templateUrl: './rock-paper-scissors.page.html',
  styleUrls: [ './rock-paper-scissors.page.scss'],
})
export class RockPaperScissorsPage implements OnInit {


  private piedra!: HTMLElement;
  private papel!: HTMLElement;
  private tijeras!: HTMLElement;

  constructor(private alertController: AlertController) { }

  ngAfterViewInit() {
    this.piedra = document.getElementById('piedra')!;
    this.papel = document.getElementById('papel')!;
    this.tijeras = document.getElementById('tijeras')!;
  }
  options = ['piedra', 'papel', 'tijeras'];

  private async esperar(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public async play() {

    const ionRadioGroup = document.querySelector('ion-radio-group');
    const player = ionRadioGroup?.value;//opcion seleccionada por el jugador
    let result = '';
    const machineHand = document.getElementById('machine-hand') as HTMLImageElement;
        
    
    if (player && machineHand) {
      

      const resultElement = document.getElementById('result');
      const machine = this.options[Math.floor(Math.random() * this.options.length)];//opcion de la maquina
      machineHand.style.display = 'none';


      // verificar el resultado
      if (player === machine) {

        result = 'Empate';

      } else if ((player === 'piedra' && machine === 'tijeras') ||
        (player === 'papel' && machine === 'piedra') ||
        (player === 'tijeras' && machine === 'papel')) {

        result = 'Ganaste!';

      } else {

        result = 'Perdiste :(';

      }

      if (resultElement) {
        resultElement.innerHTML = 'La maquina escogió...';

        // Esperar 5 segundos antes de mostrar el resultado completo
        if (this.piedra && this.papel && this.tijeras)
          for (let y = 0; y < 20; y++) {

            this.piedra.style.display = 'block';
            await this.esperar(25);
            this.piedra.style.display = 'none';
            this.papel.style.display = 'block';
            await this.esperar(25);
            this.papel.style.display = 'none';
            this.tijeras.style.display = 'block';
            await this.esperar(25);
            this.tijeras.style.display = 'none';
          }

        await this.esperar(300);


          if (machine === 'piedra') {

            machineHand.src = '../../../assets/img/rps/piedra.png';

          } else if (machine === 'papel') {

            machineHand.src = '../../../assets/img/rps/papel.png';

          } else if (machine === 'tijeras') {

            machineHand.src = '../../../assets/img/rps/tijeras.png';

          }
        machineHand.style.display = 'block';
        resultElement.innerHTML = 'La maquina escogió ' + machine + ', ' + result;
      }
    } else{
      const alert = await this.alertController.create({
        header: 'Por favor, escoge una opcion antes de jugar.',  
        buttons: ['OK'],
      });
  
      await alert.present();
    }
  }

  ngOnInit() {
  }
}