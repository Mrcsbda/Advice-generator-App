import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private Http: HttpClient) {}

  advices: Advices|undefined;

  ngOnInit(): void {
    this.getAdvices();
  }

  getAdvices() {
    this.Http.get<any>('https://api.adviceslip.com/advice').subscribe(
      (advices) => {
      this.advices = advices.slip;
      }
    );
  }

  newAdvice(){
    this.getAdvices();
    console.log('hola')
  }
}

interface Advices {
  id: number;
  advice: string;
}
