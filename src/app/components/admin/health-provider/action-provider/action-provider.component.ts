import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-provider',
  templateUrl: './action-provider.component.html',
  styleUrls: ['./action-provider.component.scss']
})
export class ActionProviderComponent implements OnInit {

  @Input() show: boolean = false;
  @Input() action: string = '';

  @Output() onDismiss: EventEmitter<any> = new EventEmitter();

  completed: boolean = false;
  loading: boolean = false;

  actionMap = {
    'activar': 'activar',
    'pausar': 'pausar',
    'eliminar': 'eliminar'
  }
  actionResp = {
    'activar': 'activado',
    'pausar': 'pausado',
    'eliminar': 'eliminado'
  }

  constructor() { }

  ngOnInit(): void {
  }

  dismissAction() {
    this.onDismiss.emit();
    this.completed = false;
    this.loading = false;
  }

  triggerAction(action: string) {
    this.loading = true;
    setTimeout(() => {
      this.completed = true;
      this.loading = false;
    }, 1000);
  }

}
