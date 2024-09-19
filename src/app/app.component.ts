import { Component } from '@angular/core';
import { RestaurantComponent } from './restaurant/restaurant.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RestaurantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FooFaster';
}
