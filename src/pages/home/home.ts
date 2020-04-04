import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NweactivityPage } from '../../pages/nweactivity/nweactivity';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
todolist:any[]=[];
temp:any={title:"",description:"",price:"",note:""};

constructor(public navCtrl: NavController, public storage:Storage) {
    this.storage.get('todoDetails').then((val)=>{
      this.todolist=val;
    });
  }
    
ngOnInit() {
  this.storage.get('todoDetails').then((val)=>{
    this.todolist=val;
});
}
ionVieWillEnter(){
  this.storage.get('todoDetails').then((val)=>{
    this.todolist=val;
  });
}

ionViewDidEnter(){
  this.storage.get('todoDetails').then((val)=>{
    this.todolist=val;
  });
}

gotoNweactivity(){
  this.navCtrl.push(NweactivityPage);
}
removeItem(todo){
  let index = this.todolist.indexOf(todo);
  if(index>-1){
    this.todolist.splice(index,1);
    this.storage.set('todoDetails',this.todolist);
  }
}
}
