import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
logForm:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.logForm=this.fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      mobileNo:['', [Validators.required, Validators.minLength(10), Validators.maxLength(15)
        , Validators.pattern('^[0-9]+$')]]
    })
  }
  onSubmit(){
    console.log("logform", this.logForm.value);
  }
}
