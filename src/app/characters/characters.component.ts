import { Info } from './../models/info';
import { Character } from './../models/character';
import { CharacterService } from './../services/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  data: Character[] = [];
  pagination: Info = {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  }

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.characterService.getAll()
        .subscribe({
          error: alert,
          next: value => {
            this.data = value.results;
            this.pagination = value.info;
            console.log(this.data);
            console.log(this.pagination);
          }
        })
  }

}
