import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers:[RoomsService]
})
export class EmployeesComponent {
  empName:string = 'John';

  constructor(@Self() private roomsService:RoomsService){}
}
