import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck,AfterViewInit, AfterViewChecked{

  hotelName: string = "Grand Hayatt";

  numberOfRooms = 10;

  hideRooms = false;

  title= "Room List";

  selectedRoom!: RoomList;
  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  };
  roomList: RoomList[] = [];
  
  @ViewChild(HeaderComponent,{static:false }) headerComponent!:HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildernComponent!: QueryList<HeaderComponent>;


  constructor(private roomService:RoomsService ) { 


  }

  ngAfterViewChecked(): void {
    

  }
  ngAfterViewInit(): void {
    console.log(this.headerComponent);
    this.headerComponent.title="Rooms View";

    this.headerChildernComponent.last.title ="Last TITLE";
    

  }
  ngDoCheck():void {
    console.log('Do check is called')
  }

  ngOnInit(): void {
    // console.log(this.headerComponent);
   this.roomList = this.roomService.getRooms();
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: "Deluxe Room",
      rating: 4.567,
      amenities: 'Air conditioner, Free wifi, tv, bathroom, kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/_DaoqR8akYk',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('12-Nov-2022')
    }
    // this.roomList.push(room);
    this.roomList = [...this.roomList,room];
  }

}
