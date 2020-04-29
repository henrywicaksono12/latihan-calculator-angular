import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular';
  bil1 = "";
  bil2 = "";
  op = "";
  res = 0;
  a = null;
  b = null;

  hasOp = false;
  
  constructor(private router : Router) {}
  
  result(){
    
    this.a = parseInt(this.bil1);
    this.b = parseInt(this.bil2);

    if(this.op == "+")
    {
      this.res = this.a+this.b;
    }
    else if(this.op == "-")
    {
      this.res = this.a-this.b;
    }
    else if(this.op == "*")
    {
      this.res = this.a*this.b;
    }

    this.router.navigate(['/result', this.res]);
  }

  type(par)
  {
    if(par == "12")
    {
      this.op += "+";
      this.hasOp = true; 
    }
    else if(par == "13")
    {
      this.op += "*";
      this.hasOp = true;  
    }
    else if(par == "11")
    {
      this.op += "-";
      this.hasOp = true;  
    }
    else
    {
      if(this.hasOp)
      {
        this.bil2 += par.toString();
      }
      else
      {
        this.bil1 += par.toString();
      }
    }
  }
}
