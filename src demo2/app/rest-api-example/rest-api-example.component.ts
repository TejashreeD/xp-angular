import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rest-api-example',
  templateUrl: './rest-api-example.component.html',
  styleUrls: ['./rest-api-example.component.css'],
  providers: [DataService]
})
export class RestApiExampleComponent implements OnInit {
  data: object;
  constructor(private serviceObj: DataService, private httpClientModule: HttpClient) { }

  ngOnInit() {
  }
  counter() {
    this.serviceObj.counter();
  }
  getCount() {
    return this.serviceObj.getCounter();
  }
  serviceCall(pageNumber) {
    // import http client module
    // get  service call
    const url = 'https://reqres.in/api/users?page=' + pageNumber;
    this.httpClientModule.get(url).
      subscribe(data => {
        this.data = data['data'];
        console.log(data);
      });



  }

}
