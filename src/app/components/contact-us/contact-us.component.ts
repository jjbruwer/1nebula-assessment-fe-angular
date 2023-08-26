import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/* json */
import * as contactsInfo from 'src/assets/json/contacts.json';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  title = 'Contact list';

  contactsInfo:any;
  url: string = 'src/assets/json/contacts.json';

  constructor(private http: HttpClient) {
    console.log('test');
  }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.contactsInfo = res;
    });


  }
}
