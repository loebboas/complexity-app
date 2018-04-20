import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthService } from './auth.service';
import { Thought } from '../models/thought';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class PublicService {
  options;
  domain = this.authService.domain;
  constructor(
    private authService: AuthService,
  	private http: Http) { }


  
  
  getPubThought(id) {
    return this.http.get(this.domain + '/pubtransfer/getPubThought/' + id, this.options).map(res => res.json());
  }

  getPubContent(id) {
    return this.http.get(this.domain + '/datatransfer/getPubContent/' + id, this.options).map(res => res.json());
  }
}
