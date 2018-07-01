import { Component, OnInit } from '@angular/core';
import { myLanguages, myDevops, IconList } from './icons';

@Component({
  selector: 'app-tech-soup',
  templateUrl: './tech-soup.component.html',
  styleUrls: ['./tech-soup.component.css']
})
export class TechSoupComponent implements OnInit {

  private langs: IconList;
  private devOps: IconList;

  constructor() {
    this.langs = myLanguages;
    this.devOps = myDevops;
   }

  ngOnInit() {
  }

}
