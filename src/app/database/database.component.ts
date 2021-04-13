import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Data, DataService } from '../data.service';


@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {
  typePass: string;
   myArray: any[] = []
  data: Data = new Data;
  showData: boolean = false;
  hidepass: boolean = true;

  constructor(public service: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAlldata();
  }
  getAlldata(){
    this.service.getallFirestore().subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.myArray.push(doc.data());
      });
    });
  }
  deleteFirestore(item: any){
    this.service.deleteFirestore(item);
    this.myArray = []
    this.getAlldata();
  }
  checkPassword(){
    if ('parth499' === this.typePass){
      this.showData = true;
      this.hidepass = false;
    }
    else {
      
      this.showData= false;
      this.toastr.error('Wrong Password');
    }
  }
  

}
