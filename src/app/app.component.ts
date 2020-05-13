import {Component, Output} from '@angular/core';
import {stringify} from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'La Calculatrice';

  operator: Array<string>;
  number: Array<string>;
  calculAffiche = '';
  chiffre = '';
  resultat: number;

  newOperator(key: string): void {
    this.operator = [];
    this.number = [];

    this.operator.push(key);
    this.affichageCalcul(key);
    this.number.push(this.chiffre);
    this.chiffre = '';
  }

  newNumber(key: string): void {
    this.chiffre = this.chiffre + key;
    this.affichageCalcul(key);
  }

  affichageCalcul(myString: any): void {
    this.calculAffiche = this.calculAffiche + myString;
  }

  clear(): void {
    this.chiffre = '';
    this.calculAffiche = '';
    this.operator = [];
    this.number = [];
  }

  calcul(): void {
    if (this.number.length === 0) {
      this.calculAffiche = '0';
    }
    if (this.chiffre !== '') {
      this.number.push(this.chiffre);
      this.chiffre = '';
    }

    for (let i in this.number) {
      for (const j in this.operator) {
        const myNumber = parseInt(this.number[i]);
        const myNumber2 = parseInt(this.number[i + 1]);
        alert(i);
        if ( this.operator[j] === '+') {
          this.resultat = myNumber + myNumber2;
        }
        if ( this.operator[j] === 'x') {
          this.resultat = myNumber * myNumber2;
        }
        if ( this.operator[j] === '/') {
          this.resultat = myNumber / myNumber2;
        }
        i = i + 2;
        alert(i);
      }
    }
    alert(this.resultat);
    this.calculAffiche = '' + this.resultat;
  }
}
