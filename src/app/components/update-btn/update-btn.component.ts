import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-update-btn',
  templateUrl: './update-btn.component.html',
  styleUrls: ['./update-btn.component.css']
})
export class UpdateBtnComponent implements ICellRendererAngularComp{

  public params!: ICellRendererParams;
  agInit(params: ICellRendererParams): void {
    this.params=params;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }

  onClick(){
    console.log("open");
    const createmodal = document.getElementById('UpdateModal');
    if(createmodal != null){
      createmodal.style.display='block';
    }

  }
  CloseUpdateModal(){
    console.log("closed Update Modal")
    const createmodal = document.getElementById('UpdateModal');
    if(createmodal != null){
      createmodal.style.display='none';
    }
  }

}
