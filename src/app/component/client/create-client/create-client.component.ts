import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../../../service/client.service';
import {Client} from '../../../model/client';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  client: Client = new Client();
  submitted = false;

  constructor(private clientService: ClientService) { }

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
    this.client = new Client();
    this.client.customerName = this.ClientName.value;
    this.client.companyName = this.CompanyName.value;
    this.client.profession = this.Profession.value;
    this.client.address = this.Address.value;
    this.client.areaName = this.Address.value;
    this.client.divisionName = this.DivisionName.value;
    this.client.contactNo = this.ContactNo.value;
    this.client.emailAddress = this.EmailAddress.value;
    this.submitted = true;
    this.save();
  }
  save() {
    this.clientService.createClient(this.client)
      .subscribe(data => console.log(data), error => console.log(error));
    this.client = new Client();
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
    this.submitted = false;
    this.clientForm.reset();
  }
}
