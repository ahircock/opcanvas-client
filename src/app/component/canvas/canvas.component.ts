import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'opportunity-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  @Input() canvas: any;

  constructor() { }

  ngOnInit() {
  }

}
