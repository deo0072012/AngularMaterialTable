import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

    row;
    constructor(@Inject(MAT_DIALOG_DATA) public arr: string,
    private dialogRef: MatDialogRef<DetailsComponent>) {
      this.row=arr;
          console.log(this.row);
     }

   
  

  ngOnInit(): void {
  }
   close() {
    this.dialogRef.close();
}
   
}
