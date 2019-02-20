import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  openInput = true;
  searchValue = "";

  constructor() {}

  ngOnInit() {}

  toggleInput() {
    this.openInput = !this.openInput;
  }

  search() {
    // Search....
    // Open Dialog Component with search results...
    this.searchValue = "";
    this.openInput = !this.openInput;
  }

  clearInput() {
    if (this.searchValue == "") {
      this.openInput = !this.openInput;
    } else {
      this.searchValue = "";
    }
  }
}
