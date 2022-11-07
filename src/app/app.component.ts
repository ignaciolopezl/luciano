import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  datos : any;
  constructor(private apiService: ApiService){

  }
  ngOnInit(): void {
    this.apiService.getAllContenido().subscribe(x=>{
      this.datos = x;
    })
  }
  title = 'luciano';

}
