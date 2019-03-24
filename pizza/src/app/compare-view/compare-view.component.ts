import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-compare-view',
  templateUrl: './compare-view.component.html',
  styleUrls: ['./compare-view.component.scss']
})
export class CompareViewComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  
  submitData(){

  }
getConfig(url,body) {
  return this.http.post(url,body);
}

}
