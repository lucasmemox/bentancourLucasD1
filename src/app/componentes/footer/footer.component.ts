import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
// export class FooterComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

export class FooterComponent {
  public appInfo: {
    year: number;
  };

  constructor() {
    this.appInfo = {
      year: new Date().getFullYear()
    };
  }
}
