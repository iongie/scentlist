import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomNavigationComponent } from "./components/bottom-navigation/bottom-navigation.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BottomNavigationComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'scentlist';
}
