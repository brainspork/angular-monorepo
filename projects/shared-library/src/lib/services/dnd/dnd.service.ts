import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DndModule } from './dnd.module';

export type GetMonstersResponse = {
  count: number;
  results: Array<{ index: string; name: string; url: string; }>
}

@Injectable({
  providedIn: DndModule
})
export class DndService {
  constructor(
    private client: HttpClient
  ) { }

  public getMonsters(): Observable<GetMonstersResponse> {
    return this.client.get<GetMonstersResponse>('/dnd/api/monsters', { observe: 'body', responseType: 'json' });
  }
}
