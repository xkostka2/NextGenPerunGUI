import { Component, OnInit } from '@angular/core';
import {AuthResolverService} from '../../core/services/common/auth-resolver.service';
import {PerunPrincipal} from '../../core/models/PerunPrincipal';

@Component({
  selector: 'app-debugger-page',
  templateUrl: './debugger-page.component.html',
  styleUrls: ['./debugger-page.component.scss']
})
export class DebuggerPageComponent implements OnInit {

  constructor(
    public authResolver: AuthResolverService
  ) { }

  principal: PerunPrincipal;

  ngOnInit() {
    this.principal = this.authResolver.getPerunPrincipal();
  }
}
