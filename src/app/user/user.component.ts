import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  myName: string;

  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
