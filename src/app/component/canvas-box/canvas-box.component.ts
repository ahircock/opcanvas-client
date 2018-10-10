import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'canvas-box',
  templateUrl: './canvas-box.component.html',
  styleUrls: ['./canvas-box.component.css']
})
export class CanvasBoxComponent implements OnInit {
  @Input() title: any;
  @Input() subtitle: any;
  @Input() content: any;

  constructor() { }

  ngOnInit() {
  }

}
