import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from './pages/sharing/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mk-portifolio';

  // @ViewChild('body',  {static: false}) body: ElementRef | undefined;
  
  // @ViewChild('displaymode') displaymode: ElementRef | undefined;
  // @ViewChild('menu_button') momenu_button: ElementRef | undefined;


// body =document.getElementById('body');
// displaymode=document.getElementById('displaymode');
// menu_button=document.getElementById('menu_button');


  constructor() {
  }


  // changeIcon() {
  //   let value = this.displaymode?.getAttribute('id');

  //   if (value === 'dark_mode') {
  //     value = 'light_mode';
  //   } else {
  //     value = 'dark_mode';
  //   }
  //   this.displaymode?.setAttribute('fontIcon', value);
  // }




  // ngAfterViewChecked(): void {

  //   this.body =document.getElementById('body');
  //   this.displaymode=document.getElementById('displaymode');
  //   this.menu_button=document.getElementById('menu_button');
  //   console.log(this.ELEMENTO, this.body, )
  // }
}
