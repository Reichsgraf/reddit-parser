import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/app-common/services/auth.service";
import {catchError, map} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-sign-in',
  templateUrl: './app-sign-in.component.html',
  styleUrls: ['./app-sign-in.component.scss']
})
export class AppSignInComponent implements OnInit {

  private authService = inject(AuthService);
  private router = inject(Router);

  formGroup: FormGroup;
  error: string = '';

  ngOnInit() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  login() {
    return this.authService.loginUser(
      this.formGroup.get('email')?.value,
      this.formGroup.get('password')?.value
    ).pipe(
      map(() => {
        this.error = '';
        return this.router.navigate(['/dashboard']);
      }),
      catchError(err => this.error = err.statusText)
    ).subscribe();
  }

}
