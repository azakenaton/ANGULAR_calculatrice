import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-historique-calcul',
  templateUrl: './historique-calcul.component.html',
  styleUrls: ['./historique-calcul.component.css']
})
export class HistoriqueCalculComponent implements OnInit {

  @Input() calcul: string;

  constructor() { }

  ngOnInit(): void {
  }

}
