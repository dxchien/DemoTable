import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'table-basic-demo',
  templateUrl: 'table-basic-demo.html',
})
export class TableBasicDemo implements OnInit {
  event!: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getData();

    setInterval(() => {
      this.getData();
    }, 3000);
  }

  getData() {
    this.http.get(environment.backendApiUrl + '/api/event').subscribe((data) => {
      console.log(data);
      this.event = data;
    });
  }

  decodeSeverity(input) {
    switch (input) {
      case "OK" :
        return "success";
      case "Warning" :
        return "warning";
      case "High" :
        return "danger";
    }
  }
}
