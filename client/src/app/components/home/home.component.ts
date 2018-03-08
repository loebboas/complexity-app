import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

	hardThoughts = [
	{id: 1, label: 'Complexity-App', context: [{id: 1}], perspective: [{id: 2}, {id: 3}, {id: 4}], meaning: []},
    {id: 2, label: 'Welcome', context: [{id: 1}], perspective: [{id: 2}], meaning: [{ id: 5}, { id: 6}]},
    {id: 3, label: 'Public', context: [{id: 1}], perspective: [{id: 3}], meaning: [{ id: 7}]},
    {id: 4, label: 'About', context: [{id: 1}], perspective: [{id: 4}], meaning: [{ id: 8 }]},
    {id: 5, label: 'Login', context: [{id: 2}, {id: 1}], perspective: [{id: 2}], meaning: []},
    {id: 6, label: 'Register', context: [{id: 2}, {id: 1}], perspective: [{id: 2}], meaning: []},
    {id: 7, label: 'Public Thoughts', context: [{id: 2}, {id: 1}], perspective: [{id: 2}], meaning: []},
    {id: 8, label: 'Text about this Homepage', context: [{id: 1}, {id: 1}], perspective: [{id: 2}], meaning: []},
  	];
	showFiller = false;

  constructor() { }

  ngOnInit() {

  	//1. Check URL for Perspective
  	//2. If no URL: Check if LoggedIn
  	//2.a If LoggedIn --> Load "My-Room"
  	//2.b If not LoggedIn --> Load "hardThought"
  }

}
