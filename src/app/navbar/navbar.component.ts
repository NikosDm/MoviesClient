import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() searchQuery = new EventEmitter<any>();
  searchParam: string;

  constructor() {}

  ngOnInit(): void {}

  search() {
    this.searchQuery.emit(this.searchParam);
  }
}
