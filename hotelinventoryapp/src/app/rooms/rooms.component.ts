import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName: string = "Grand Hayatt";

  numberOfRooms = 10;

  hideRooms = false;
  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  };
  roomList: RoomList[] = [];

  constructor() { }

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: "Deluxe Room",
        amenities: "Air conditioner, Free WIFI, TV, Bathroom, Kitchen",
        price: 500,
        photos: "https://unsplash.com/photos/_DaoqR8akYk",
        checkinTime: new Date('11-Nov-2022'),
        checkoutTime: new Date('12-Nov-2022'),
        rating: 4.22345
      },
      {
        roomNumber: 3,
        roomType: "Private Suite",
        amenities: "Air conditioner, Free WIFI, TV, Bathroom, Kitchen",
        price: 15000,
        photos: "https://unsplash.com/photos/_DaoqR8akYk",
        checkinTime: new Date('11-Nov-2022'),
        checkoutTime: new Date('12-Nov-2022'),
        rating: 4.5678
      },
      {
        roomNumber: 2,
        roomType: "Deluxe Room",
        amenities: "Air conditioner, Free WIFI, TV, Bathroom, Kitchen",
        price: 1000,
        photos: "https://unsplash.com/photos/_DaoqR8akYk",
        checkinTime: new Date('11-Nov-2022'),
        checkoutTime: new Date('12-Nov-2022'),
        rating: 2.6732
      }
    ];

  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
