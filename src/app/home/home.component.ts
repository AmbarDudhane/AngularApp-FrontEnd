import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public employees = [];
  displayedColumns: string[] = ['id', 'fname', 'lname', 'email', 'phone', 'country','department', 'actions'];
  
  constructor(private _empService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this._empService.getEmployees().subscribe(
      data => this.employees = data
    );
    //this.dataSource = this.employees;
    console.log(this.employees)
  }

  update(id){
    console.log("Update emp id="+id);
    this.employees.forEach((emp) => {
      if( emp.id == id){
        this._empService.updateEmp = emp;
        this.router.navigate(['register']);
      }
    }); 
  }
}
