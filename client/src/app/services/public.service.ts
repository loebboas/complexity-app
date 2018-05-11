import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthService } from './auth.service';
import { Thought } from '../models/thought';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class PublicService {
  options;
  domain = this.authService.domain;
  constructor(
    private authService: AuthService,
  	private http: Http) { }


  
  
  getPubThought(id) {
    return this.http.get(this.domain + '/pubtransfer/getPubThought/' + id, this.options);
  }

  getPubContent(id) {
    return this.http.get(this.domain + '/api/getPubContent/' + id, this.options);
  }
}
