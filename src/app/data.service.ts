import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  name: string

  // url="https://my-json-server.typicode.com/hax2k/lovecappjson/hax2k";
  // url="https://hax2k-37320-default-rtdb.firebaseio.com/";

  constructor(public http: HttpClient, public fireservice: AngularFirestore) { }

  sentName(data : any){
this.name = data
  }
  getname(){
    return this.name
  }

  // getAlldata(){
  //   return this.http.get(`${this.url}`);
  // }
  // addData(data:Data){
  //   return this.http.post(this.url, data);
  // }
  // deleteData(id: number){
  //   return this.http.delete(`${this.url}/${id}`)
  // }

  getallFirestore() { 
    return this.fireservice.collection('data').get();
  }
  addFirestore(record: any){
    return this.fireservice.collection('data').add({...record});
  }

  deleteFirestore(id : any){
    return this.fireservice.collection('data').doc(`${id}`).delete();
  }

}

export class Data{
  id: any;
  name: string;
  yourname: string;
  partnername: string;
  score: any;
}