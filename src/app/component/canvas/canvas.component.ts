import { Component, OnInit, Input } from '@angular/core';
import { CanvasModel } from '../../model/canvas.model';

@Component({
  selector: 'opportunity-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  
  @Input() canvas: CanvasModel;

  constructor(
  ) { }

  ngOnInit() {
  }

}
