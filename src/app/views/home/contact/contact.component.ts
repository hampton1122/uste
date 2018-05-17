import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  contactForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', Validators.required]
    });
  }
  submitForm() {
    if (this.contactForm.valid) {
      const name = this.contactForm.controls.name.value;
      const emailTo = this.contactForm.controls.email.value;
      const subject = this.contactForm.controls.subject.value;
      const message = this.contactForm.controls.message.value;
      document.location.href = `mailto:info@us-extradition.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(message)}`;
      this.contactForm.reset();
    }
  }
}
