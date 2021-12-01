import { Component, OnInit } from '@angular/core';
import { SOCIALBUTTONS } from '../list-socialButtons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
copyright = "Alex Gorbachov";
socialButtons = SOCIALBUTTONS;
}
