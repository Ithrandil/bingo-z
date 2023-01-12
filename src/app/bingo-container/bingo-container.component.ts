import {Component, Input} from '@angular/core';
import {BingoBox} from "../models/bingo-box";

@Component({
  selector: 'app-bingo-container',
  templateUrl: './bingo-container.component.html',
  styleUrls: ['./bingo-container.component.scss']
})
export class BingoContainerComponent {
  @Input()data!: Array<BingoBox[]>;
}
