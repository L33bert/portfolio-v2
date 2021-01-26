import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public goTo(params) {
    var bio = document.getElementById("bio");
    var projects = document.getElementById("projects");
    var skills = document.getElementById("skills");
    var connect = document.getElementById("connect");

    if (params == "bio"){
      window.scrollTo(0, 0);
      bio.setAttribute("style", "color: rgb(9, 63, 134); border: none");
      projects.setAttribute("style", "color: white");
      skills.setAttribute("style", "color: white");
      connect.setAttribute("style", "color: white");
    }
    else if (params == "projects"){
      window.scrollTo(100, 600);
      bio.setAttribute("style", "color: white");
      projects.setAttribute("style", "color: rgb(9, 63, 134)");
      skills.setAttribute("style", "color: white");
      connect.setAttribute("style", "color: white");
    }
    else if (params == "skills"){
      window.scrollTo(100, 900);
      bio.setAttribute("style", "color: white");
      projects.setAttribute("style", "color: white");
      skills.setAttribute("style", "color: rgb(9, 63, 134)");
      connect.setAttribute("style", "color: white");
    }
    else{
      window.scrollTo(100, 1550);
      bio.setAttribute("style", "color: white");
      projects.setAttribute("style", "color: white");
      skills.setAttribute("style", "color: white");
      connect.setAttribute("style", "color: rgb(9, 63, 134)");
    }
  }

}
