import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  openInput = true;
  searchValue;

  constructor() {}

  ngOnInit() {}

  toggleInput() {
    this.openInput = !this.openInput;
  }

  search() {
    // Search....
    this.searchValue = "";
    this.openInput = !this.openInput;
  }
}
