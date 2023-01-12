import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Modal} from "../models/modal";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input()showModal = false;
  @Output()showModalChange = new EventEmitter<boolean>();
  @Input()data?: Modal;
  public picturePath?:string;

  ngOnInit() {
    this.picturePath = `./assets/person-pictures/${this.data?.picture}`;
  }

  closeModal() {
    this.showModal = false;
    this.showModalChange.emit(this.showModal);
  }
}
