import { Injectable } from '@angular/core';
import { QuestionBase } from '../domain/question-base';
import { DropdownQuestion } from '../domain/question-dropdown';
import { TextboxQuestion } from '../domain/question-rextbox';
import { RadioQuestion } from '../domain/question-radio';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  getQuestions() {
 
    let questions: QuestionBase<any>[] = [
 
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),
      new TextboxQuestion({
        key: 'street',
        label: 'street',
        type: 'text',
        order: 4
      }),
      new TextboxQuestion({
        key: 'city',
        label: 'city',
        type: 'text',
        order: 5
      }),
      new TextboxQuestion({
        key: 'state',
        label: 'state',
        type: 'text',
        order: 6
      }),
      new TextboxQuestion({
        key: 'zip',
        label: 'zip',
        type: 'number',
        order: 7
      }),
      new RadioQuestion({
        key: 'online',
        label: 'online',
        type: 'radio',
        order: 8
      })
    ];
 
    return questions.sort((a, b) => a.order - b.order);
  }
}
