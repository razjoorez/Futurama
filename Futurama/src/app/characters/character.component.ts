import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../models/character';
import { Characters } from '../models/characters';
import { FuturamaService } from '../services/futurama.service';
import { CharactersComponent } from './characters.component';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  characters: Characters[]= [];
  chr: any = []
  constructor(private route: ActivatedRoute, 
              private futuramaService: FuturamaService) { 
              
              }

  ngOnInit(): void {
    this.route.params.subscribe(params=> {
      const id = params['id'];
      this.futuramaService.characters.subscribe(
        character => {
          this.chr = this.futuramaService.characterByID(id);
        }
      )
    })
  }

}
