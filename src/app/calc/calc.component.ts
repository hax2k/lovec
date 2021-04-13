import { AlertDialogComponent } from './../alert-dialog/alert-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Data, DataService } from '../data.service';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

 

  data: Data = new Data;
 
  constructor(public service: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    
    

    this.data.yourname = this.service.getname();

  }

  getScore() {

    if (this.data.name.trim() == '' || this.data.partnername.trim() == '') {
      this.data.score = 0;
    }

    else {
      if (this.data.name.trim() == 'mahesh' && this.data.partnername.trim() == 'lavanya') {
        this.data.score = 100 + "%";
      }
      else {
        if (this.data.name.trim() == 'lavanya' && this.data.partnername.trim() == 'mahesh') {
          this.data.score = 100 + "%";
        }
        else {
          if (this.data.name.trim() == 'nishanth' && this.data.partnername.trim() == 'parth') {

            this.data.score = 'Brother-Brother';

          }
          else {
            const letters = (this.data.name.trim() + this.data.partnername.trim()).toLowerCase();
            let sum = 0;
            for (let i = 0; i < letters.length; i++) {
              sum += letters.charCodeAt(i);
            }
            this.data.score = sum % 101 + "%";
          }
        }
      }
    }
  }

  addData() {
    let cd ={};
    cd = this.data;
    
    this.service.addFirestore(this.data).then(x => {
      console.log(x)
    });
  }

  // addfiredatase(){
  //   this.service.addData(this.data).subscribe(x=>{
  //     console.log(x);
  //   })
  // }


  openDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent,{
      data:{
        message: (`${this.data.score}`),
        buttonText: {
          ok: 'Recalculate',
          cancel: 'Home'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        
        const a = document.createElement('a');
        a.click();
        a.remove();
        
       
      }
    });
  }
  
 
 

}





