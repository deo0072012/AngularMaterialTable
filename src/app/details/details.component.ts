import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

    row=[];
    keys=[];
    // row1:string;
    // newrow=[];
    // newrow1=[];
    constructor(@Inject(MAT_DIALOG_DATA) public arr: {},
    private dialogRef: MatDialogRef<DetailsComponent>) {
      this.row=Object.values(arr);
      this.keys=Object.keys(arr);
      // -----BY COVERTING THE OBJECT INTO STRING BY STRINGIFY-----
      // this.row=JSON.stringify(arr);
      // this.row1=this.row.replace('"Options":{',"").replace(`"Tags":[{`,"").replace(`}`,"").replace(`}`,"").replace(`}`,"").replace(`}]}`,"").replace(`[{`,"").replace(`"Tags":[]}`,"").replace(`[`,"").replace(`{`,"").replace(`]`,"").replace(`]`,"").replace(`}]`,"");
      // this.newrow=this.row1.split(',');
      // this.newrow1=this.newrow.splice(1,this.newrow.length);
        // console.log(this.newrow);
        //   console.log(this.row);
     }

   
  

  ngOnInit(): void {
  }
   close() {
    this.dialogRef.close();
}
   
}
