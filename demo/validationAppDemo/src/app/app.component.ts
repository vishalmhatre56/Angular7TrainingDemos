import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { QuestionService } from './services/question.service';
import { Observable } from 'rxjs';
import { Validators, FormBuilder } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [QuestionService],
  animations: [ slideInAnimation ]
})
export class AppComponent implements OnInit{

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  questions: any[];
  visible = true;
  @Output() open = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();
 
  nameChangeLog: string[] = [];

  heroForm = this.fb.group({
    name: ['', [Validators.required]]
  });
  
  getTitle() {
   return this.heroForm.get('title');
  }
  constructor(service: QuestionService,private fb: FormBuilder) {
    this.questions = service.getQuestions();
  }

  ngOnInit() {
    this.logNameChange();
  }

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }
  time = new Observable(observer =>
    { 
      setInterval(() => observer.next(new Date().toString()), 1000)
      setInterval(() => observer.unsubscribe(),5000);
    }
  );
  logNameChange() {
    const nameControl = this.heroForm.get('name');
    if(nameControl)
    nameControl.valueChanges.forEach(
      (value: string) => this.nameChangeLog.push(value)
    );
  }

}

// // Create simple observable that emits three values
// const myObservable = of(1, 2, 3);
 
// // Create observer object
// const myObserver = {
//   next: x => console.log('Observer got a next value: ' + x),
//   error: err => console.error('Observer got an error: ' + err),
//   complete: () => console.log('Observer got a complete notification'),
// };
 
// // Execute with the observer object
// myObservable.subscribe( myObserver);


// // This function runs when subscribe() is called
// function sequenceSubscriber(observer) {
//   // synchronously deliver 1, 2, and 3, then complete
//   observer.next(1);
//   setTimeout(() => { observer.next(2);},2000);
//   observer.next(3);
//   setTimeout(() => {observer.complete()},3000);
 
//   // unsubscribe function doesn't need to do anything in this
//   // because values are delivered synchronously
  
//    return {unsubscribe() {}} ;
// }
 
// // Create a new Observable that will deliver the above sequence
// const sequence = new Observable(sequenceSubscriber);
 
// // execute the Observable and print the result of each notification
// sequence.subscribe({
//   next(num) { console.log(num); },
//   complete() { console.log('Finished sequence'); }
// });

// function formEvent(target, eventName){
//   return new Observable((observer)=>{
//     const handler = (e) => observer.next(e);
    
//     target.addEventListner(eventName,handler);

//     return ()=>{
//       target.removeEventListner(eventName,handler);
//     }
//   })
// }

// const ESC_KEY = 27;
// const nameInput = document.getElementById('name') as HTMLInputElement;

// const subscription = fromEvent(nameInput, 'keydown')
//   .subscribe((e: KeyboardEvent) => {
//     if (e.keyCode === ESC_KEY) {
//       nameInput.value = '';
//     }
//   });
  


// function sequenceSubscriber(observer) {
//   const seq = [1, 2, 3];
//   let timeoutId;
 
//   // Will run through an array of numbers, emitting one value
//   // per second until it gets to the end of the array.
//   function doSequence(arr, idx) {
//     timeoutId = setTimeout(() => {
//       observer.next(arr[idx]);
//       if (idx === arr.length - 1) {
//         observer.complete();
//       } else {
//         doSequence(arr, ++idx);
//       }
//     }, 1000);
//   }
 
//   doSequence(seq, 0);
 
//   // Unsubscribe should clear the timeout to stop execution
//   return {unsubscribe() {
//     clearTimeout(timeoutId);
//   }};
// }
 
// // Create a new Observable that will deliver the above sequence
// const sequence = new Observable(sequenceSubscriber);
 
// sequence.subscribe({
//   next(num) { console.log(num); },
//   complete() { console.log('Finished sequence'); }
// });
 
// setTimeout(() => {
//   sequence.subscribe({
//     next(num) { console.log('2nd subscribe: ' + num); },
//     complete() { console.log('2nd sequence finished.'); }
//   });
// }, 500);


// import { interval } from 'rxjs';

// // Create an Observable that will publish a value on an interval
// const secondsCounter = interval(1000);
// // Subscribe to begin publishing values
// const subcription = secondsCounter.subscribe(n =>{
//   console.log(`It's been ${n} seconds since subscribing!`);
//   if(n>9)
//   subcription.unsubscribe();
// });

// import { map } from 'rxjs/operators';
 
// const nums = of(1, 2, 3);
 
// const squareValues = map((val: number) => val * val);
// const squaredNums = squareValues(nums);
 
// squaredNums.subscribe(x => console.log(x));



// import { filter, map } from 'rxjs/operators';

// const nums = of(1, 2, 3, 4, 5);

// // Create a function that accepts an Observable.
// const squareOddVals = pipe(
//   filter((n: number) => n % 2 !== 0),
//   map(n => n * n)
// );

// // Create an Observable that will run the filter and map functions
// const squareOdd = squareOddVals(nums);

// // Suscribe to run the combined functions
// squareOdd.subscribe(x => console.log(x));

// import { filter, map } from 'rxjs/operators';

// const squareOdd = of(1, 2, 3, 4, 5)
//   .pipe(
//     filter(n => n % 2 !== 0),
//     map(n => n * n)
//   );

// // Subscribe to get values
// squareOdd.subscribe(x => console.log(x));

//
