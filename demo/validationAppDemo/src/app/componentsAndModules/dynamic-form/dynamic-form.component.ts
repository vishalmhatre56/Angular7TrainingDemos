import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from 'src/app/domain/question-base';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from 'src/app/services/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {
 
  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
 
  constructor(private qcs: QuestionControlService) {  }
 
  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }
 
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}