import { Injectable } from '@angular/core';
import { CanvasModel } from '../model/canvas.model'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CanvasService {
  URL : string = 'http://localhost:5000/api/opcanvas';

  constructor(private http: HttpClient) { }

  public async getCanvasAll(): Promise<CanvasModel[]> {

    let canvases: CanvasModel[] = await ( this.http.get(this.URL).toPromise() as Promise<CanvasModel[]>);

    return canvases;
  }

}
