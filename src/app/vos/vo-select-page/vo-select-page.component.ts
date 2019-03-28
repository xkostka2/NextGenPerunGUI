import { Component, OnInit } from '@angular/core';
import {VoService} from '../../core/services/vo.service';
import {Vo} from '../../core/models/Vo';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {MenuItem} from '../../shared/MenuItem';
import {MatAutocompleteSelectedEvent} from '@angular/material';

@Component({
  selector: 'app-vo-select-page',
  templateUrl: './vo-select-page.component.html',
  styleUrls: ['./vo-select-page.component.scss']
})
export class VoSelectPageComponent implements OnInit {

  constructor(
    private voService: VoService
  ) { }

  formControl = new FormControl();
  vos: Vo[];
  filteredOptions: Observable<Vo[]>;

  items: MenuItem[] = [
    {
      icon: 'create1-white.svg',
      url: '/organizations/new',
      label: 'VO_MANAGEMENT.CREATE_VO',
      style: 'vo-btn'
    },
    {
      icon: 'create1-white.svg',
      url: '/organizations/new',
      label: 'VO_MANAGEMENT.CREATE_VO',
      style: 'vo-btn'
    },
    {
      icon: 'create1-white.svg',
      url: '/organizations/new',
      label: 'VO_MANAGEMENT.CREATE_VO',
      style: 'vo-btn'
    },
    {
      icon: 'create1-white.svg',
      url: '/organizations/new',
      label: 'VO_MANAGEMENT.CREATE_VO',
      style: 'vo-btn'
    }
  ];

  ngOnInit() {
    this.voService.getAllVos().subscribe(vos => {
      this.vos = vos;
      this.vos = vos.sort(((vo1, vo2) => {
        if (vo1.name > vo2.name) {
          return 1;
        }

        if (vo1.name < vo2.name) {
          return -1;
        }

        return 0;
      }));

      this.filteredOptions = this.formControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    });
  }

  private _filter(value: string): Vo[] {
    // Hack that ensures proper autocomplete value displaying
    if (value && value.name) {
      return [];
    }
    const filterValue = value.toLowerCase();

    return value ? this.vos.filter(vo => vo.name.toLowerCase().indexOf(filterValue) === 0) : this.vos;
  }

  voSelected(event: MatAutocompleteSelectedEvent) {
    const selectedVo: Vo = event.option.value;
  }

  displayFn(vo: Vo) {
    return vo ? vo.name : vo;
  }
}
