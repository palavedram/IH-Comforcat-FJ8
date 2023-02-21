import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-color',
  templateUrl: './box-color.component.html',
  styleUrls: ['./box-color.component.css']
})
export class BoxColorComponent implements OnInit {

  color1 = '#F7B32B';
  color2 = '#F43E3E';
  color3 = '#3CAEA3';
  textColor1 = '#ffffff';
  textColor2 = '#ffffff';
  textColor3 = '#ffffff';
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleColors(boxNumber: number) {
    switch (boxNumber) {
      case 1:
        this.color1 = '#3CAEA3';
        this.textColor1 = '#ffffff';
        break;
      case 2:
        this.color2 = '#F7B32B';
        this.textColor2 = '#ffffff';
        break;
      case 3:
        this.color3 = '#F43E3E';
        this.textColor3 = '#ffffff';
        break;
    }
  }

  isColorblind = false;

  toggleMode() {
    this.isColorblind = !this.isColorblind;
    if (this.isColorblind) {
      this.color1 = '#00B4CC';
      this.color2 = '#FCCB00';
      this.color3 = '#F3722C';
    } else {
      this.color1 = '#026969';
      this.color2 = '#97040d';
      this.color3 = '#b300a6';
    }
}
  resetColors(boxNumber: number) {
  switch (boxNumber) {
    case 1:
      this.color1 = this.isColorblind ? '#00B4CC' : '#F7B32B';
      this.textColor1 = '#ffffff';
      break;
    case 2:
      this.color2 = this.isColorblind ? '#FCCB00' : '#F43E3E';
      this.textColor2 = '#ffffff';
      break;
    case 3:
      this.color3 = this.isColorblind ? '#F3722C' : '#3CAEA3';
      this.textColor3 = '#ffffff';
      break;
  }
}

}
