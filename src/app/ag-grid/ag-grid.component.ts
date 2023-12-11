import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {  ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent {

  createForm! :FormGroup;
  updateForm! : FormGroup;
  deleteForm! :FormGroup;
  

  constructor(private auth: AuthService, private http: HttpClient,private fb: FormBuilder){}

  ngOnInit(){
    this.createForm = this.fb.group({
      name: ['',Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]

    })

    this.updateForm = this.fb.group({
      userid: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
    })

    this.deleteForm = this.fb.group({
      userid: ['', Validators.required]
    })
  }

  public getSettings(key: string) {
 
    return localStorage.getItem(key);
 
  }

  token= this.getSettings("jwtToken");
    jtoken = "Bearer "+this.token
    

  public columnDefs: ColDef[] = [
    {field: 'userid'},
    { field: 'name'},
    { field: 'email'},
    { field: 'role' },];

    // Data that gets displayed in the grid
    public rowData$!: Observable<any[]>;

    // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  // Example load data from server
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = 
    this.http
      .get<any[]>('http://localhost:8080/users');
  }
  

  openCreateModal(){
    console.log("open");
    const createmodal = document.getElementById('CreateModal');
    if(createmodal != null){
      createmodal.style.display='block';
    }}


    CloseCreateModal(){
      console.log("close")
      const createmodal = document.getElementById('CreateModal');
      if(createmodal != null){
        createmodal.style.display='none';
      }
    }

    openDeleteModal(){
      console.log("open");
      const createmodal = document.getElementById('DeleteModal');
      if(createmodal != null){
        createmodal.style.display='block';
      }}

      openUpdateModal(){
        console.log("open");
        const createmodal = document.getElementById('UpdateModal');
        if(createmodal != null){
          createmodal.style.display='block';
        }}

      CloseDeleteModal(){
        console.log("close")
        const createmodal = document.getElementById('DeleteModal');
        if(createmodal != null){
          createmodal.style.display='none';
        }
      }

      CloseUpdateModal(){
        console.log("close")
        const createmodal = document.getElementById('UpdateModal');
        if(createmodal != null){
          createmodal.style.display='none';
        }
      }
      // updateUser() {
      //   if(this.updateForm.valid){
      //     this.auth.update(this.updateForm.value)
          
      //   }
        
      // }

      createuser(){
        if(this.createForm.valid){
          this.auth.signUp(this.createForm.value)
          
          .subscribe({
            next:(res)=>{
              alert(res.message)
              console.log(this.createForm.value)
              this.createForm.reset();
            },
            error(err) {
              alert(err?.error.message)
            },
          })
          console.log(this.createForm.value)
    
        } else{
          
        }
      }

      update(){
        this.auth.update(this.updateForm.value);
        console.log()

      }

      delete(){
        this.auth.delete(this.deleteForm.value);
      }



  // Example of consuming Grid Event
  // onCellClicked( e: CellClickedEvent): void {
  //   console.log('cellClicked', e);
  // }

  // Example using Grid's API
  // clearSelection(): void {
  //   this.agGrid.api.deselectAll();
  // }
}

// ngOnInit(){
//   this.auth.aggrid();

// }




