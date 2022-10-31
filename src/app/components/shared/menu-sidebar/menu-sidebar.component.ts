import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/api.service';

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
/*     {
      icon: "icon-bell-bold",
      name: "Notificaciones",
      url: "notifications"
    }, */
    {
      icon: "icon-prestador-de-salud",
      name: "Prestadores de salud",
      url: "health-provider"
    },
    {
      icon: "icon-users",
      name: "Administradores",
      url: "admin-users"
    },
/*     {
      icon: "icon-doc",
      name: "Facturación",
      url: "billing"
    }, */
    {
      icon: "icon-settings",
      name: "Configuración",
      url: "setting"
    },
  ];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  toggleMenu(state: boolean) {
    this.open = state;
  }

  logOut() {
    //this.router.navigate(['/']);
    this.api.confirmModal('¿Deseas salir de Medplace?').then((data:any) => {
      if (data.isConfirmed) {
        this.api.logout();
      }
    });
  }

}
