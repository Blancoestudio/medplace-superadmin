import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-profession',
  templateUrl: './action-profession.component.html',
  styleUrls: ['./action-profession.component.scss']
})
export class ActionProfessionComponent implements OnInit {

  @Input() show: boolean = false;
  @Input() action: string = 'mirar';

  @Output() onDismiss: EventEmitter<any> = new EventEmitter();

  completed: boolean = false;
  loading: boolean = false;

  actionMap = {
    'activar': 'activar',
    'pausar': 'pausar',
    'eliminar': 'eliminar'
  }
  actionResp = {
    'activar': 'activada',
    'pausar': 'pausada',
    'eliminar': 'eliminada'
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
