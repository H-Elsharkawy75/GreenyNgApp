import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us-public',
  templateUrl: './contact-us-public.component.html',
  styleUrls: ['./contact-us-public.component.css']
})
export class ContactUSPublicComponent implements OnInit {
  ContactFormREactive!: FormGroup;
  @ViewChild('contactForm') FormContactlissein: any;

  constructor(
    private Toaster:ToastrService,
    private FB:FormBuilder,
    private HTTP:HttpClient ) {
    this.ContactFormREactive = this.FB.group({
      FullName : ['', Validators.required],
      EmailAdress: ['', [Validators.required, Validators.email]],
      SubjectReac:['', Validators.required],
      Message:['', Validators.required],
    })

  }

  get FullName(){
    return this.ContactFormREactive.get('FullName')
  }
  get EmailAdress(){
    return this.ContactFormREactive.get('EmailAdress')
  }
  get SubjectReac(){
    return this.ContactFormREactive.get('SubjectReac')
  }
  get Message(){
    return this.ContactFormREactive.get('Message')
  }
  ngOnInit(): void {
  }

  SubmetContactMessage(DtatContactMessage:any){
    this.HTTP.post('Api Url', DtatContactMessage.value);
    this.Toaster.success(' Message Send Succssfully')
    console.log('Message Contact Data is',DtatContactMessage.value);
    this.ContactFormREactive.reset();
  }






}
