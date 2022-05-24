import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Info } from '../models/info';
import { FuturamaService } from '../services/futurama.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private futuramaService: FuturamaService) { }
  public info$: Observable<Info[]> = new Observable<Info[]>();
  ngOnInit(): void {
    this.info$ = this.futuramaService.getInfo();
  }

}
