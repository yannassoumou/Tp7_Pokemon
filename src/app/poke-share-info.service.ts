import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  public value = new Subject<string>();

  // create an observable to watch the subject
  getObservable(): Subject<string> {
    return this.value;
  }

  // for update value observer
  setValue(newValue: string) {
    this.value.next(newValue);
  }
}
