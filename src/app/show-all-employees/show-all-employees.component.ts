import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-show-all-employees',
  templateUrl: './show-all-employees.component.html',
  styleUrls: ['./show-all-employees.component.css']
})
export class ShowAllEmployeesComponent implements OnInit {

  constructor(private http: HttpClient) { }
  configUrl = 'assets/config.json';
  getConfig() {
    return this.http.get(this.configUrl);
  }
  ngOnInit() {
    this.http.get('http://localhost:8090/SpringWebIntro/').subscribe(data => {
      console.log(data);
    });
  }

}
