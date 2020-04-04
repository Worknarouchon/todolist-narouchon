import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
/**
 * Generated class for the NweactivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nweactivity',
  templateUrl: 'nweactivity.html',
})
export class NweactivityPage {
  frmActivity:FormGroup;
  title:any;
  description:any;
  price:any;
  note:any;
  addedTodo:any[]=[];
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, public FormBuilder:FormBuilder) {
    this.storage=storage;
    this.frmActivity=this.FormBuilder.group({
      title:['',Validators.required],
      description:['',Validators.required],
      price:['',Validators.required],
      note:['',Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NweactivityPage');
  }

  saveRecord(){
    if(this.frmActivity.valid){
      let todoObj={title:"",description:"",price:"",note:""};
      todoObj.title=this.title;
      todoObj.description=this.description;
      todoObj.price=this.price;
      todoObj.note=this.note;

      this.storage.get('todoDetails').then((val)=>{
        if(val){
          this.addedTodo=val;
          this.addedTodo.push(todoObj);
          this.storage.set('todoDetails',this.addedTodo);
        }else{
          this.addedTodo.push(todoObj);
          this.storage.set("todoDetails",this.addedTodo);
        }

        this.title="";
        this.description="";
        this.price="";
        this.note="";
        this.navCtrl.pop();
      });
    }
  }

}
