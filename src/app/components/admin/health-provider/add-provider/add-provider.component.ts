import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faXmark, faArrowUpFromBracket, faCircleXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.scss']
})
export class AddProviderComponent implements OnInit {

  @Input() onEditProvider: boolean = false;
  @Input() providerAdded: boolean = false;
  @Input() data: any = {
    name: '',
    rut: '',
    review: '',
    address: '',
    email: '',
    website: '',
    logo: '',
    image1: '',
    image2: '',
    accesscode: 1234
  }

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

  constructor(public api: ApiService) { }

  ngOnInit(): void {
  }

  uploadFile(e: any) {
    var files = e.srcElement.files;
    if (files.length > 0) {
      let file = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      let uploadedFile = '';
      
      reader.onload = () => {
        this.api.uploadStoreImage({
          file: reader.result,
          name: file.name
        }).subscribe((data: any) => {
          uploadedFile = data.url;
          let fieldName = e.target.name;
      
          switch (fieldName) {
            case 'logoFile':
              this.fileLogoUploaded = true;
              this.data.logo = uploadedFile;
              break;
            case 'providerImg1':
              this.file1Uploaded = true;
              this.data.image1 = uploadedFile;
              break;
            case 'providerImg2':
              this.file2Uploaded = true;
              this.data.image2 = uploadedFile;
              break;
      
            default:
              this.fileLogoUploaded = false;
              this.file1Uploaded = false;
              this.file2Uploaded = false;
              break;
          }
        });
      };
    }
  }

  addProvider() {
    this.loading = true;
    this.data.accesscode = Math.floor(Math.random() * 9000 + 1000);
    this.api.addCustomer(this.data).subscribe(data => {
      console.log(data);
      this.onAddProvider.emit();
    });
    setTimeout(() => {
      this.loading = false;
      this.providerAdded = true;
    }, 1500);
    this.fileLogoUploaded = false;
    this.file1Uploaded = false;
    this.file2Uploaded = false;
  }

  editProvider() {
    this.loading = true;
    this.api.editCustomer(this.data).subscribe(data => {
      console.log(data);
      this.onAddProvider.emit();
    });
    setTimeout(() => {
      this.closeModal();
      this.loading = false;
    }, 1500);
    this.fileLogoUploaded = false;
    this.file1Uploaded = false;
    this.file2Uploaded = false;
  }

  closeModal() {
    this.providerAdded = false;
    this.fileLogoUploaded = false;
    this.file1Uploaded = false;
    this.file2Uploaded = false;
    this.onCloseModal.emit();
  }

}
