import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor( private route:ActivatedRoute) { }

  res = "";

  ngOnInit() {
     this.res = this.route.snapshot.paramMap.get('res');
  }
}