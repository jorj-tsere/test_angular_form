import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  generalForm = this.fb.group({
    name: new FormControl(null, Validators.required),
    quantity: new FormControl(null),
    unitOfMeasure: new FormControl(null),
    amount: new FormControl(null),
    items: this.fb.array([]),
  });

  constructor(private fb: FormBuilder) {}

  generateItemForm(): FormGroup {
    return this.fb.group({
      name: new FormControl(null, Validators.required),
      quantity: new FormControl(null),
      unitOfMeasure: new FormControl(null),
      amount: new FormControl(null),
    });
  }

  get items(): FormArray {
    return this.generalForm.controls.items as FormArray;
  }

  ngOnInit(): void {
    this.generalForm.valueChanges.subscribe((res) => {
      console.log(res, 'res pharent');
    });

    const aa = this.generateItemForm();
    const bb = this.generateItemForm();
    const cc = this.generateItemForm();
    this.items.push(aa);
    this.items.push(bb);
    this.items.push(cc);
  }
}
