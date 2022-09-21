import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {

  faXmark = faXmark;
  open: boolean = false;

  adminMenu = [
    {
      icon: "icon-dashboard",
      name: "Dashboard",
      url: "dashboard"
    },
    {
      icon: "icon-bell-bold",
      name: "Notificaciones",
      url: "notifications"
    },
    {
      icon: "icon-prestador-de-salud",
      name: "Dashboard",
      url: "health-provider"
    },
    // {
    //   icon: "icon-users",
    //   name: "Dashboard",
    //   url: "/admin"
    // },
    // {
    //   icon: "icon-doc",
    //   name: "Dashboard",
    //   url: "/admin"
    // },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(state: boolean) {
    this.open = state;
  }

}
