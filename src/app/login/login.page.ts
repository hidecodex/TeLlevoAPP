import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { InicioPage } from '../inicio/inicio.page';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // Modelo user que permite obtener y setear información para el login
  login:any={
    Usuario:"",
    Password:""
  }
  // variable para mostrar el campo faltante
  field:string="";
  // Constructor que llama al toastController para su uso
  constructor(public toastController: ToastController, public modalCtrl: ModalController) {}
  ngOnInit() {}

  inicio(){

    if(this.validateModel(this.login)){
      this.Bienvenido();
    }
    else{
      this.presentToast("Falta: "+this.field);
    }

  }
  /**
   * validateModel sirve para validar que se ingrese algo en los
   * campos del html mediante su modelo
   */
  validateModel(model:any){
    // Recorro todas las entradas que me entrega Object entries y obtengo su clave, valor
    for (var [key, value] of Object.entries(model)) {
      // Si un valor es "" se retornara false y se avisara de lo faltante
      if (value=="") {
        // Se asigna el campo faltante
        this.field=key;
        // Se retorna false
        return false;
      }
    }
    return true;
  }
  /**
   * Muestra un toast al usuario
   * @param message Mensaje a presentar al usuario
   * @param duration Duración el toast, este es opcional
   */
  async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  } 

  async Bienvenido() {

    
    const modal = await this.modalCtrl.create({
      component: InicioPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'inicio-modal',
    })

    return await modal.present();
  }

}