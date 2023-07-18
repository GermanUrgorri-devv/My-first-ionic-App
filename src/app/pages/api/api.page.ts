import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  //private content = document.getElementById('content');
  private content: HTMLElement = undefined!;

  ngAfterViewInit() {
    this.content = document.getElementById('content')!;
  }

  constructor() { }

  async showApi() {

  }

  ngOnInit() {
    fetch('https://api.rawg.io/api/platforms?key=9780a12a12c340d0b2a79ed502b6fa82')
      .then(response => response.json())
      .then(consoles => {

        console.log(consoles);
        if (Array.isArray(consoles.results)) {
          consoles.results.forEach((console: any) => {

            if (console) {

              let games = "";
              console.games.forEach((game: any) => {
                games += '<li>'+game.name+'</li>' 
              })

              let card = `
             <ion-col size="12"  size-sm="5" size-md="4" size-lg="3">
              <ion-card>
                <img alt="Silhouette of mountains" src="`+ console.image_background +`" />
                <ion-card-header>
                  <ion-card-title>`+ console.name +`</ion-card-title>
                  <ion-card-subtitle>Total games: `+console.games_count+`</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                 `+games+`
                </ion-card-content>
              </ion-card>
            </ion-col>
              `
              if (this.content) {
                this.content.innerHTML += card;
              }          
            }
          });
        }

      })
      .catch(error => {
        console.error(error);
      });
  }

}
