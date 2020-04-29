import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular';
  inputText = "";
  bil1 = 0;
  bil2 = 0;
  op = "";
  res = 0;
  
  constructor(private router : Router) {}
  
  result(){
    this.bil1 = parseInt(this.inputText[0]);
    this.op = this.inputText[2];
    this.bil2 = parseInt(this.inputText[4]);

    if(this.op == "+")
    {
      this.res = this.bil1+this.bil2;
    }
    else if(this.op == "-")
    {
      this.res = this.bil1-this.bil2;
    }
    else if(this.op == "*")
    {
      this.res = this.bil1*this.bil2;
    }

    this.router.navigate(['/result']);
  }

  getResult()
  {
    return this.res;
  }
}
