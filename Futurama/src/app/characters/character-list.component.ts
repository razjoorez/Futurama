import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from '../models/characters';
import { FuturamaService } from '../services/futurama.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

   characters: Observable<Characters[]> = new Observable<Characters[]>();
  constructor(private futuramaService: FuturamaService) { }

  ngOnInit(): void {
   this.characters = this.futuramaService.characters;
   this.futuramaService.loadCharacters();

   this.characters.subscribe(data => {
     console.log(data);
   })
  }

}
