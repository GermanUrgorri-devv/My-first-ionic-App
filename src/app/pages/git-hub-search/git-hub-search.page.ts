import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';
import { AlertController } from '@ionic/angular';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-git-hub-search',
  templateUrl: './git-hub-search.page.html',
  styleUrls: ['./git-hub-search.page.scss'],
})
export class GitHubSearchPage implements OnInit {

  public user: any = [];
  public repos: any = [];

  public username: string;

  constructor(
    private _githubService: GithubService,
    private alertController: AlertController
  ) {

    this.user = false;
    this.username = "";

  }

  searchUser() {
    this._githubService.updateUser(this.username);
    this._githubService.getUser().pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error)
        if (error.status === 403) {
          // Acciones para error 403
          this.presentAlert('error', 'Se ha alcanzado el número máximo de llamadas');
        } else if (error.status === 404) {
          // Acciones para error 404
          this.presentAlert('error', 'No se encontró al usuario');
        }
        // Devuelve un observable vacío para que la cadena de observables pueda continuar
        return of(null);
      })
    ).subscribe(user => {
      if (user) { 
        this.user = user;
      }
    });


    this._githubService.getRepos().subscribe(repos => {

      this.repos = repos;

    });
  }

  // ... tu función presentAlert aquí


  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();

  }

  ngOnInit(): void { }

}
