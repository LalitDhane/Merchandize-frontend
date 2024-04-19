import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function passwordMissMatch(controlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const controlToCompare = control.parent?.get(controlName);
    if (control.value !== controlToCompare?.value) {
      return { missMatch: true };
    }
    return null;
  };
}
