import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table-basic-demo',
  templateUrl: 'table-basic-demo.html',
})
export class TableBasicDemo implements OnInit {
  event!: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get('http://localhost:8888/api/event').subscribe((data) => {
      console.log(data);
      this.event = data;
    });
  }
}
