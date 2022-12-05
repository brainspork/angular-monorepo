import { Component, OnInit } from '@angular/core';
import { DndService, GetMonstersResponse } from 'projects/shared-library/src/public-api';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-monsters-page',
  templateUrl: './monsters-page.component.html',
  styleUrls: ['./monsters-page.component.scss']
})
export class MonstersPageComponent implements OnInit {

  public response: BehaviorSubject<GetMonstersResponse | undefined> = new BehaviorSubject<GetMonstersResponse | undefined>(undefined);

  constructor(
    private dndService: DndService
  ) { }

  ngOnInit(): void {
    this.dndService.getMonsters().subscribe({
      next: res => {
        this.response.next(res);
      },
      error: err => {
        console.error(err);
      }
    });
  }
}
