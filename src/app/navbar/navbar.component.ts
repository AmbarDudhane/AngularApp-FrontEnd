import { Component, OnInit, Input, ViewChild, AfterContentInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Subject } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  ngOnInit() {
  }
  


  mobileQuery: MediaQueryList;
  public name = "Ambar Dudhane";
  public person = {
    "firstname": "Ambar", "lastname": "Dudhane", "age": 25
  }
  
  fillerNav = ["Home", "Register", "Features", "About us"];//Array.from({length: 5}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 1}, () =>
      `This is test content`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

 



}
