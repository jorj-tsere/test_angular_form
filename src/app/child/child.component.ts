import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() parentFormGroup: any;

  //  form2 = new FormGroup({
  //   name: new FormControl(null, Validators.required),
  //   quantity: new FormControl(null),
  //   unitOfMeasure: new FormControl(null),
  //   amount: new FormControl(null),
  // })

  constructor() { }

  ngOnInit(): void {
    // this.form2.valueChanges.subscribe((res=>{
    //   console.log(res,'res Child')
    // }))
  }

}
