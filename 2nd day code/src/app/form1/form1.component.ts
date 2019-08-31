import { Component, OnInit, SimpleChanges, OnChanges  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit, OnChanges {
  params: any;

  // public formBuilder: FormBuilder;
  public name;
public myForm:FormGroup;
  updateName() {
    this.name.setValue('Nancy');
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
     private fb: FormBuilder
  ) {
    this.myForm = this.fb.group(
      {
        namecn: ['', Validators.required, Validators.minLength(4)]
      }
    );

    // this.showData();
    // this.route.
   }

   ngOnChanges(changes: SimpleChanges): void {
     this.showData();
   }
  ngOnInit() {
    this.showData();


  }
  showData() {
    console.log('route', this.route);
    console.log('router', this.router);
    this.params = this.route.snapshot.paramMap.get('id');

  }
  redirectMe() {
    this.router.navigate(['/Display']);
  }

}
