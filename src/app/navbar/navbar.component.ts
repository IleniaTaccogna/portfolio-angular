import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
logoNavbar="logo.jpg";

protected readonly routers = [
  { link: "/home-page", displayName: "Home" },
  { link: "/chi-siamo", displayName: "Chi siamo" },
  { link: "/progetti", displayName: "Progetti" },
  { link: "/contatti", displayName: "Contatti" }
];

}
