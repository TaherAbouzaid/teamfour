import { Component } from '@angular/core';
import { Store } from '../../Models/store';

@Component({
  selector: 'app-content',
  standalone: false,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  prod: Store = new Store('Store', ['Branch1', 'Branch2', 'Branch3'], "clientOne");
}
