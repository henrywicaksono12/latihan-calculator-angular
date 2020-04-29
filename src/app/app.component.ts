import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular';
  bil1 = null;
  bil2 = null;
  op = "";
  res = 0;

  hasOp = false;
  
  constructor(private router : Router) {}
  
  result(){
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

  type(par)
  {
    if(par == "add")
    {
      this.op = "+";
      this.hasOp = true; 
    }
    else if(par == "mul")
    {
      this.op = "*";
      this.hasOp = true;  
    }
    else if(par == "sub")
    {
      this.op = "-";
      this.hasOp = true;  
    }
    else
    {
      if(this.hasOp)
      {
        if(this.bil2 == null){this.bil2 = par;}
        else this.bil2 = this.bil2*10 + par;
      }
      else
      {
        if(this.bil1 == null){this.bil1 = par;}
        else this.bil1 = this.bil1*10 + par;
      }
    }
  }

  getResult()
  {
    return this.res;
  }
}
