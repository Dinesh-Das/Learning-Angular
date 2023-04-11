import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {
  title = 'hotelinventoryapp';

  role = 'Admin';

  // @ViewChild('user',{read:ViewContainerRef}) vcr!: ViewContainerRef;

  //  ngAfterViewInit(): void {
  //      const componentRef = this.vcr.createComponent(RoomsComponent);
  //      componentRef.instance.numberOfRooms = 50;
  //  }


  @ViewChild('name', { static: true }) name!: ElementRef;
  
  ngOnInit(): void {
    this.name.nativeElement.innerText = "Hilton Hitler";
  }

}
