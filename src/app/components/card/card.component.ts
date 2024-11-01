import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() dataFromForm!: any
  @Input() userName!: string
  @Output() selectedCard: any = new EventEmitter()

  data = {
    id: 1,
    name: 'Omar Hassan',
    job: 'fullstack',
    city: 'portsaid',
    image: 'https://randomuser.me/api/portraits/men/85.jpg',
    dob: "1989-05-22T18:30:00.000Z"
  }

  name = ''

  isClicked: boolean = false

  // handleId() {
  //   this.selectedCard.emit(this.data.id)
  // }

  changeMessage() {
    this.isClicked = !this.isClicked
    this.selectedCard.emit(this.data.id)
    console.log(this.name);
    console.log(this.isClicked);
  }
}
