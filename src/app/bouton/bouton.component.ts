import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-bouton',
  templateUrl: './bouton.component.html',
  styleUrls: ['./bouton.component.css']
})
export class BoutonComponent implements OnInit {
  @Input() numero: string;
  @Output() operator;
  @Output() number;

  constructor() { }

  ngOnInit(): void {
  }

}
