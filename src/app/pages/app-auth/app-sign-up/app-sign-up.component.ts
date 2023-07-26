import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/app-common/services/auth.service";
import {catchError, map} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-sign-up',
  templateUrl: './app-sign-up.component.html',
  styleUrls: ['./app-sign-up.component.scss']
})
export class AppSignUpComponent implements OnInit {

  private authService = inject(AuthService);
  private router = inject(Router);

  formGroup: FormGroup;
  error: string;

  ngOnInit() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required, Validators.minLength(8)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  register() {
    return this.authService.createUser(
      this.formGroup.get('email')?.value,
      this.formGroup.get('username')?.value,
      this.formGroup.get('password')?.value
    ).pipe(
      map(() => {
        this.error = '';
        return this.router.navigate(['/auth/sign-in']);
      }),
      catchError(err => this.error = err.statusText)
    ).subscribe();
  }

}
