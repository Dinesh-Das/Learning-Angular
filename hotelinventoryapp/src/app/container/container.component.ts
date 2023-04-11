import { AfterContentInit, Component, ContentChild, ViewChild } from '@angular/core';
import { EmployeesComponent } from '../employees/employees.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterContentInit {

  @ContentChild(EmployeesComponent) employee!: EmployeesComponent;

  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName="Steve";

  }

}
