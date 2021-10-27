import { AfterContentInit, Component, ContentChild, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.css']
})
export class AuFaInputComponent implements OnInit, AfterContentInit {
  @Input() icon: string;
  @ContentChild(InputRefDirective, { static: true }) input: InputRefDirective;

  constructor() { }

  ngAfterContentInit(): void {
    if (!this.input){
      console.error('error')
    }
  }

  @HostBinding('class.input-focus')
  getIsInputFocus() {
    return this.input ? this.input.focus : false;
  }

  ngOnInit() {
  }

  getClasses() {
    const cssClasses = {
    }

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;
  }

}
