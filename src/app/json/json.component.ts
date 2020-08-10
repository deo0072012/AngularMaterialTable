import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { JsonDataSource, JsonItem } from './json-datasource';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';
import { WHITE_ON_BLACK_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';

interface Color{
  value:string;
  label:string;
  toolBarColor: string;
  text:string;
}






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


  colors:Color[]=[
    {
      label: 'White',
      value: 'white',
      toolBarColor: '',
      text:'white'
    },
    {
      label: 'Red',
      value: 'red',
      toolBarColor: 'red',
      text:'blue'
    },
    {
      label: 'Green',
      value: 'green',
      toolBarColor: 'green',
      text:'black',
    },
    {
      label: 'Pink',
      value: 'pink',
      toolBarColor: 'pink',
      text:'brown'
    },

]
det=[];

changetheme(color)
{
  const toolBarElement = document.getElementById('toolbar-color')
  const element=document.getElementById("table-color")
  element.style.background=color.value
  toolBarElement.style.backgroundColor = color.toolBarColor
  
  
  // const elem =document.getElementById('txt')
  // elem.textContent.fontcolor=color.value;
  const elem = document.getElementById("txt");
  elem.style.color=color.text;
  const materialicon=document.getElementById("icn")
  materialicon.style.color=color.text;
  const button= document.getElementById("clr");
  button.style.textDecorationColor=color.text;
  let det= document.getElementsByClassName("details")
 
}

  
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