import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/app-common/services/auth.service";
import {catchError, map} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-sign-in',
  templateUrl: './app-sign-in.component.html',
  styleUrls: ['./app-sign-in.component.scss']
})
export class AppSignInComponent implements OnInit {

  formGroup: FormGroup;
  error: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
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
