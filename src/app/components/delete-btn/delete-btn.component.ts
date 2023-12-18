import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-btn',
  templateUrl: './delete-btn.component.html',
  styleUrls: ['./delete-btn.component.css']
})
export class DeleteBtnComponent implements ICellRendererAngularComp {

  constructor(private auth: AuthService, private snackbar: MatSnackBar){};
  public params!: ICellRendererParams;
  agInit(params: ICellRendererParams): void {
    this.params=params;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }

  openDeleteModal(){
      // console.log("open");
      // const createmodal = document.getElementById('DeleteModal');
      // if(createmodal != null){
      //   createmodal.style.display='block';
      // }
      console.log(this.params.data.userid)
      let conf = "Are you sure want delete UserName= "+this.params.data.name;
      // this.snackbar.open("you have opend delete","ok",{duration:5000,})
      if (confirm(conf) == true) {
        this.auth.delete(this.params.data.userid);
        this.snackbar.open("SuccessFully Deleted","ok",{duration:5000,})
      } else {
        conf = "You canceled!";
      }
      // this.auth.delete(this.params.data.userid);
    }
}
