import { Component, OnInit } from '@angular/core';
import { CanvasService } from './service/canvas.service'
import { CanvasModel } from './model/canvas.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  canvasList: CanvasModel[];

  constructor(
    public canvasService: CanvasService
  ) { }

  async ngOnInit() {
    this.canvasList = await this.canvasService.getCanvasAll();
  }

}
