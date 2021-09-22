import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WelcomePage } from '../welcome/welcome.page';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  

  constructor(public modalCtrl: ModalController,) { }

  ngOnInit() {
  }

  async Welcome() {
    const modal = await this.modalCtrl.create({
      component: WelcomePage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'welcome-modal',
    })

    return await modal.present();
  }

  logout(){
    this.Welcome();
  }

}
