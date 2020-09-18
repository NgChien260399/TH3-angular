import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from 'src/app/common/base-component';
import { FileUpload } from 'primeng/fileupload';
import { FormBuilder } from '@angular/forms';

declare var $: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends BaseComponent implements OnInit {public sanphams: any;
  public datetime: Date;
  public selectedGT: any;
  public mota: any;
  public uploadedFiles: any[] = [];
  public formdata:any;
  public form
  @ViewChild(FileUpload, { static: false }) file_image: FileUpload;
  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.formdata = this.fb.group({
      tensp: this.fb.control(''),
      ngaythem: this.fb.control(''),
      soluong: this.fb.control(''),
      loaisp: this.fb.control('chien,khánh,fomr'),
      mota: this.fb.control('') 
    });
    
    this.sanphams = [
      {
        tensp: 'ssd 120gb',
        anh: 'not now',
        soluong: '100',
        loai: 'ổ cứng',
      },
      {
        tensp: 'hdd 120gb',
        anh: 'not now',
        soluong: '10',
        loai: 'ổ cứng',
      },
    ];
  }
  onSubmit() {}

  createModal() {
    setTimeout(() => {
      $('#createUserModal').modal('toggle');
    });
  }
  closeModal() {
    $('#createUserModal').closest('.modal').modal('hide');
  }
}
