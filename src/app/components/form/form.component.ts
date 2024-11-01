import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  name: string = ''
  @Output() nameChange = new EventEmitter<{ name: string }>()

  handleNameChange() {
    const data = { name: this.name }
    this.nameChange.emit(data)
    console.log(data);
  }

  // Detect Input Change
  // handleChange(e: Event) {
  //   const value = (e.target as HTMLInputElement).value
  //   console.log(value);
  //   return value
  // }
  handleChange(e: any) {
    const value = (e.target).value
    console.log(value);
    return value
  }

  onSubmit() {
    console.log('Form submitted');
    this.handleNameChange()
  }
}
