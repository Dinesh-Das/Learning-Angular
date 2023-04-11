import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[] = [
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


  constructor() { 
    console.log('Rooms Service got initialised')
  }

  getRooms(){
    return this.roomList;

  }
}
