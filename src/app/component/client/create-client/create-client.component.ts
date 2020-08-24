import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  constructor() { }

  submitted = false;

  professions = [
    {id: 1, name: 'Teacher'},
    {id: 2, name: 'Engineer'},
    {id: 3, name: 'Doctor'},
    {id: 4, name: 'Govt. Service'},
    {id: 5, name: 'Private Service'},
    {id: 6, name: 'Others'}
  ];

  clientForm = new FormGroup({
    customerName: new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    companyName: new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    profession: new FormControl(),
    address: new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    areaName: new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    divisionName: new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    contactNo: new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    emailAddress: new FormControl('', [Validators.required, Validators.email])
  });

  ngOnInit(): void {
    this.submitted = false;
  }

  saveClient() {
  }

  get ClientName() {
    return this.clientForm.get('customerName');
  }

  get CompanyName() {
    return this.clientForm.get('companyName');
  }
  get Profession() {
    return this.clientForm.get('profession');
  }
  get Address() {
    return this.clientForm.get('address');
  }
  get AreaName() {
    return this.clientForm.get('areaName');
  }
  get DivisionName() {
    return this.clientForm.get('divisionName');
  }
  get ContactNo() {
    return this.clientForm.get('contactNo');
  }
  get EmailAddress() {
    return this.clientForm.get('emailAddress');
  }

  addClientForm() {
  }
}
