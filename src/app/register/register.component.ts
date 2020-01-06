import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;
  updateFlag: boolean;
  registerFlag: boolean;
  countries = [
    {value: "ind", viewValue: "India"},
    {value: "usa", viewValue: "United States of America"},
    {value: "uae", viewValue: "United Arab Emirates"},
    {value: "can", viewValue: "Canada"},
    {value: "mex", viewValue: "Mexico"}
  ]

  constructor(private fb: FormBuilder, private empservice: EmployeeService, private router: Router) { }

  ngOnInit() {
    if(this.empservice.updateEmp.id){ // when request come to update
      let temp = this.empservice.updateEmp;
      console.log("Displaying form for employee id "+ this.empservice.updateEmp.id);
      this.myForm = this.fb.group({
        firstName: [temp.firstName, [Validators.required]],
        lastName: [temp.lastName, [Validators.required]],
        phone: [temp.phone, [Validators.required, Validators.maxLength(10)]],
        email: [temp.email, [Validators.required,Validators.email]],
        country: [temp.country, [Validators.required]],
        deptName:[temp.deptName, [Validators.required]]
      });
      this.registerFlag = false;
      this.updateFlag = true;
    }
    else{ //when to register employee
      this.myForm = this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        phone: ['', [Validators.required, Validators.maxLength(10)]],
        email: ["", [Validators.required,Validators.email]],
        country: ["", [Validators.required]],
        deptName:["", [Validators.required]]
      });
      this.registerFlag = true;
      this.updateFlag = false;
    }
    
  }

  onSubmit(myForm){
    if(this.registerFlag){
      this.myForm.value["id"] = 0;
    console.log("myform value=",this.myForm.value)
    this.empservice.postEmployee(this.myForm.value).subscribe(
      data => {
        console.log("Post request is successful", data);
        this.router.navigate(['register-success']);
      }
    );
    }
    else{ //update employee
      this.myForm.value["id"] = this.empservice.updateEmp.id;
      this.empservice.updateEmployee(this.myForm.value, this.empservice.updateEmp.id).subscribe(
        data => {
          console.log("Update request is successful", data);
          this.empservice.updateEmp = new IEmployee();
          this.router.navigate(['update-success']);
        }
      );
    }
    

  }

  
}
