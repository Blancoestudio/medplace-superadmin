import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faXmark, faArrowUpFromBracket, faCircleXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.scss']
})
export class AddProviderComponent implements OnInit {

  @Input() onEditProvider: boolean = false;
  @Input() providerAdded: boolean = false;

  @Output() onAddProvider: EventEmitter<any> = new EventEmitter<any>();
  @Output() onCloseModal: EventEmitter<any> = new EventEmitter<any>();

  loading: boolean = false;

  fileLogoUploaded: boolean = false;
  file1Uploaded: boolean = false;
  file2Uploaded: boolean = false;

  faXmark = faXmark;
  faArrowUpFromBracket = faArrowUpFromBracket;
  faCircleXmark = faCircleXmark;
  faCircleCheck = faCircleCheck;


  constructor() { }

  ngOnInit(): void {
  }

  uploadFile( e: any ) {
    let fieldName = e.target.name;

    switch (fieldName) {
      case 'logoFile':
        this.fileLogoUploaded = true;
        break;
      case 'providerImg1':
        this.file1Uploaded = true;
        break;
      case 'providerImg2':
        this.file2Uploaded = true;
        break;

      default:
        this.fileLogoUploaded = false;
        this.file1Uploaded = false;
        this.file2Uploaded = false;
        break;
    }
  }

  addProvider() {
    this.onAddProvider.emit();
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.providerAdded = true;
    }, 1500);
  }

  editProvider() {
      this.closeModal();
  }

  closeModal() {
    this.providerAdded = false;
    this.onCloseModal.emit();
  }

}
