import { Component, OnInit } from '@angular/core';
import {VoService} from '../../core/services/vo.service';

@Component({
  selector: 'app-vo-select-page',
  templateUrl: './vo-select-page.component.html',
  styleUrls: ['./vo-select-page.component.sass']
})
export class VoSelectPageComponent implements OnInit {

  constructor(
    private voService: VoService
  ) { }

  ngOnInit() {
    this.voService.getAllVos().subscribe(vos => console.log(vos), error1 => console.log(error1));
  }

}
