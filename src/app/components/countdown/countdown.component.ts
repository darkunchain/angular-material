import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { timer, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { StateButtonService } from 'src/app/services/state-button.service';



@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
  providers: [],
})
export class CountdownComponent implements OnInit, OnDestroy {

  countDown: Subscription;
  @Input() counter: number;
  tick = 1000;
  ClientData:Cliente[] = []
  @Input() conta:number



  constructor(
    private stateButtonService: StateButtonService) {

  }


  ngOnInit() {
    this.countDown = timer(5000,this.tick)
    .pipe(takeWhile(x => this.counter > 0)).subscribe(() => --this.counter);

  }

  ngOnDestroy() {
    if (this.countDown) this.countDown.unsubscribe();
    this.stateButtonService.enable();
  }

}


@Pipe({
  name: 'formatTime',
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ('00' + minutes).slice(-2) +
      ':' +
      ('00' + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}


