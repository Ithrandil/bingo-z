import {Component, Input, OnInit} from '@angular/core';
import {BingoBox} from "../models/bingo-box";

@Component({
  selector: 'app-bingo-box',
  templateUrl: './bingo-box.component.html',
  styleUrls: ['./bingo-box.component.scss']
})
export class BingoBoxComponent implements OnInit {
  @Input()data!:BingoBox;
  public picturePath?:string;
  public displayResponsive = false;
  ngOnInit() {
    this.picturePath = `./assets/person-pictures/${this.data.back?.picture}`;
  }
  openModal(data:BingoBox) {
    if(data.modal) {
      this.displayResponsive = true;
    }
  }

}
