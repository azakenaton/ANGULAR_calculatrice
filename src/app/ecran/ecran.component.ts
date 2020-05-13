import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ecran',
  templateUrl: './ecran.component.html',
  styleUrls: ['./ecran.component.css']
})
export class EcranComponent implements OnInit {

  @Input() calculAffiche: string;
  constructor() { }

  ngOnInit(): void {
  }

}
