import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { JsonDataSource, JsonItem } from './json-datasource';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';




@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements AfterViewInit, OnInit {
  [x: string]: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<JsonItem>;
  dataSource: JsonDataSource;
  constructor(public dialog: MatDialog){}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['ID', 'TYPE','REGION','DETAILS'];
  arr=[];

  ngOnInit() {
    this.dataSource = new JsonDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  name=[];
  
  getRecord(name){
  //   alert(JSON.stringify(name).split(','));
  //   console.log(name);
  // }
  // var arr=JSON.stringify(name);
    let dialogRef=this.dialog.open(DetailsComponent,{ data:name}
      
  );
  dialogRef.afterClosed().subscribe(result=>{
    this.showDataOfDetailsComponet=result;
    
    // alert(JSON.stringify(name));
    console.log("the dialog box was closed")
    })
  

}
}