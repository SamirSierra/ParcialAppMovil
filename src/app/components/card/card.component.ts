import { Component, EventEmitter,Input, Output} from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() extraction: any;

  @Output() doClick = new EventEmitter();

  constructor() {}

  click(id: number) {
    this.doClick.emit(id);
  }
}
