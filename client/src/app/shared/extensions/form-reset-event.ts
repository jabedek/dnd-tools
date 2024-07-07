import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

export class AppFormGroup<TValue = any> extends FormGroup {
  info?: Record<string, any>;
  afterReset?: CallableFunction;

  setName(name?: string) {
    this.info = Object.freeze({ ...this.info, name });
  }

  private resetted_ = new Subject<void>();
  get resetted$() {
    return this.resetted_.asObservable();
  }

  override reset(value?: TValue, options?: Object) {
    super.reset(value, options);
    this.resetted_.next();
    if (this.afterReset) {
      this.afterReset();
    }
  }
}

export class AppFormControl<TValue = any> extends FormControl {
  info?: Record<string, any>;
  afterReset?: CallableFunction;

  setName(name?: string) {
    this.info = Object.freeze({ ...this.info, name });
  }

  private resetted_ = new Subject<void>();
  get resetted$() {
    return this.resetted_.asObservable();
  }

  override reset(value?: TValue, options?: Object) {
    super.reset(value, options);
    this.resetted_.next();
    if (this.afterReset) {
      this.afterReset();
    }
  }
}

export class AppFormArray<TValue = any> extends FormArray {
  info?: Record<string, any>;
  afterReset?: CallableFunction;

  setName(name?: string) {
    this.info = Object.freeze({ ...this.info, name });
  }

  private resetted_ = new Subject<void>();
  get resetted$() {
    return this.resetted_.asObservable();
  }

  override reset(value?: TValue, options?: Object) {
    super.reset(value, options);
    this.resetted_.next();
    if (this.afterReset) {
      this.afterReset();
    }
  }
}
