import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

@ViewChild('displaymode', { static: false }) value!: ElementRef;

  @Input() mode!:string;
  @Output() modeChange = new EventEmitter<string>();
  muda = new HomeComponent


  constructor() {}

  // changeIcon() {
  //   let mode = this.mode;
  //   // console.log(mode, 2, 'mode header change icon');
  //   // console.log(this.mode, 2, 'this.mode header change icon');

  //   if (mode === 'dark_mode') {
  //     mode = 'light_mode';
  //   } else {
  //     mode = 'dark_mode';
  //   }

  //   this.mode = mode;
  //   // console.log(mode, 2, 'header change icon');
  //   // console.log(this.mode, 2, 'this.mode header change icon');

  //   this.value.nativeElement.innerHTML = `<mat-icon _ngcontent-ygr-c5="" role="img" aria-label="Example display mode icon" fonticon="${this.mode}" class="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" aria-hidden="true" ng-reflect-font-icon="${this.mode}" data-mat-icon-type="font" data-mat-icon-name="${this.mode}"></mat-icon>`;

  //   this.modeChange.emit(this.mode);

  //   this.muda.ngAfterViewInit()
  // }

  // /* display or no display navbar menu */
  // isHidden: boolean = !true;
  // displayMenu(): void {
  //   this.isHidden = !this.isHidden;
  // }


  // ngAfterViewChecked(): void {
  //   const istrust = typeof this.value != undefined;

  //   if (istrust) {
  //     // console.log(this.value.nativeElement.querySelector('mat-icon').getAttribute('fonticon', '0'));

  //     this.mode = this.value.nativeElement.querySelector('mat-icon').getAttribute('fonticon');
  //   }

  // }

  ngOnInit(): void {}
}
