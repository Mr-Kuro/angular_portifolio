import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // @ViewChild('showFigcaption') botao: ElementRef | undefined;
  @ViewChild('figcaption1') figcaption1: ElementRef | undefined;
  @ViewChild('figcaption2') figcaption2: ElementRef | undefined;
  @ViewChild('figcaption3') figcaption3: ElementRef | undefined;
  @ViewChild('figcaption4') figcaption4: ElementRef | undefined;
  @ViewChild('figcaption5') figcaption5: ElementRef | undefined;
  list_figuries: (ElementRef<any> | undefined)[];

  @ViewChild('body', { static: false }) body: ElementRef | undefined;
  @ViewChild('displaymode', { static: false }) value!: ElementRef;
  mode!: string;

  // string!: string;
  // @Input() mode!: string;
  // @Output() modeChange = new EventEmitter<string>();


  constructor() {
    this.list_figuries = [];
  }

  focarNoInput(elemento: Event, id: number) {
    let ELEMENTO: HTMLElement | undefined;
    let ELEMENTO_ID: string | null | undefined;
    const istrust = typeof ELEMENTO != undefined;

    if (istrust) {
      for (let i = 0; i <= this.list_figuries.length; i++) {
        ELEMENTO = this.list_figuries[i]?.nativeElement;
        ELEMENTO_ID = ELEMENTO?.getAttribute('id');

        if (id.toString() == ELEMENTO_ID) {
          console.log(ELEMENTO_ID, id);
          ELEMENTO?.classList.toggle('no-display');
          break;
        }
      }
    } else {
      console.log('UÉ ;{');
    }
  }

  changeIcon() {
    let mode = this.mode;
    // console.log(mode, 2, 'mode header change icon');
    // console.log(this.mode, 2, 'this.mode header change icon');

    if (mode === 'dark_mode') {
      mode = 'light_mode';
    } else {
      mode = 'dark_mode';
    }

    this.mode = mode;
    // console.log(mode, 2, 'header change icon');
    // console.log(this.mode, 2, 'this.mode header change icon');

    this.value.nativeElement.innerHTML = `<mat-icon _ngcontent-ygr-c5="" role="img" aria-label="Example display mode icon" fonticon="${this.mode}" class="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" aria-hidden="true" ng-reflect-font-icon="${this.mode}" data-mat-icon-type="font" data-mat-icon-name="${this.mode}"></mat-icon>`;

    this.changeClasses();
  }

  changeClasses() {
    const bodyElement = this.body?.nativeElement;
    const primarys = bodyElement.querySelectorAll('.ligth-primary');
    const secondarys = bodyElement.querySelectorAll('.ligth-secondary');
    const accents = bodyElement.querySelectorAll('.ligth-accent');
    // console.log(primarys, secondarys, accents);

    for (let i = 0; i < primarys.length; i++) {
      // console.log(primarys[i].classList.toggle(`ligth-primary`));
      primarys[i].classList.toggle(`black-primary`);
    }

    for (let i = 0; i < secondarys.length; i++) {
      // console.log(secondarys[i].classList.toggle(`ligth-secondary`));
      secondarys[i].classList.toggle(`black-secondary`);
    }

    for (let i = 0; i < accents.length; i++) {
      // console.log(accents[i].classList.toggle(`ligth-accent`));
      accents[i].classList.toggle(`black-accent`);
    }
  }

  ngAfterViewInit(): void {
    this.list_figuries = [
      this.figcaption1,
      this.figcaption2,
      this.figcaption3,
      this.figcaption4,
      this.figcaption5,
    ];
  }

  /* display or no display navbar menu */
  isHidden: boolean = !true;
  displayMenu(): void {
    this.isHidden = !this.isHidden;
  }

  ngAfterViewChecked(): void {
    // const istrust = typeof this.value != undefined;
    // if (istrust) {
    //   console.log(this.value.nativeElement.querySelector('mat-icon').getAttribute('fonticon', '0'));
    // }
    // console.log(this.value, '1');

    this.mode = this.value.nativeElement
      .querySelector('mat-icon')
      .getAttribute('fonticon');
  }

  ngOnInit(): void {}
}
