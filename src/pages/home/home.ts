import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
// import { GooglePlus } from '@ionic-native/google-plus';

import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private fb: Facebook,
    // private googlePlus: GooglePlus
  ) {

  }

  /* Facebook Login */
  public facebookLogin(){

      this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => {

          // console.log('Logged into Facebook!', res)
          const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken)
          firebase.auth().signInWithCredential(facebookCredential)
          .then( success => { 
            // console.log("Firebase success: " + JSON.stringify(success)); 
          })
          .catch((error:any)=>{console.log("firebase facebook login error: ", error)})
        
      })
      .catch(e => console.log('Error logging into Facebook', e));

  }

  /* google Login */
  public googleLogin(){
    alert("not implemented yet ..")
    // this.googlePlus.login({
    //   'webClientId': '640803988276-efe6m2nmmo3pgfs3tvqjaqfl19iq9duh.apps.googleusercontent.com'
    // })
    // .then(res => console.log(res))
    // .catch(err => console.error(err));

}
  

}
