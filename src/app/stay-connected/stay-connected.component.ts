import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { timeout } from 'rxjs/operators';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-stay-connected',
  templateUrl: './stay-connected.component.html',
  styleUrls: ['./stay-connected.component.css']
})
export class StayConnectedComponent implements OnInit {
  contactForm: FormGroup;
  name    = new FormControl('', [Validators.required]);
  subject = new FormControl('', [Validators.required]);
  message = new FormControl('', [Validators.required]);
  email   = new FormControl('', [Validators.required, Validators.email]);
  validate = false;
  
  constructor(
    private _snackBar: MatSnackBar,
    public formBuilder: FormBuilder,
    private crudService: CrudService,
    private el: ElementRef
    ) { 
      this.contactForm = this.formBuilder.group({
        name: this.name,
        subject: this.subject,
        email: this.email,
        message: this.message
      })
    }

  ngOnInit(): void {
    // cdk-focused cdk-mouse-focused
  }

  // This will validate inputs in sending email function
  getErrorMessage() {
    if (this.email.hasError('required') || this.name.hasError('required') ||
         this.subject.hasError('required') || this.message.hasError('required')) {
          this.validate = false;
      return 'You must enter a value';
    }
    this.validate = true;
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  //sending email function
  onSubmit(): any {
    // var btn = document.getElementById("sendButton");
    let myTag = this.el.nativeElement.querySelector("#sendButton");
    myTag.classList.remove('cdk-focused');
    myTag.classList.remove('cdk-mouse-focused'); 
      
    
    this.getErrorMessage();
    if (this.validate == true){
      this.crudService.AddContact(this.contactForm.value)
      .subscribe(() => {
          console.log('Data added successfully!')
          
          // this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
        }, (err) => {
          console.log(err);
      });
      this._snackBar.open("Your message has been sent!", "OK", {
        duration: 2500,
      });
    }else{
      this._snackBar.open("Please fill out the required fields!", "OK", {
        duration: 2500,
      });
    }
  }

  //Sending email function
  // sendMessage() {
  //   this.getErrorMessage();
  //   if (this.validate == true){
  //     this._snackBar.open("Your message has been sent!", "OK", {
  //       duration: 2500,
  //     });
  //   }else{
  //     this._snackBar.open("Please fill out the required fields!", "OK", {
  //       duration: 2500,
  //     });
  //   }
  // }

}
