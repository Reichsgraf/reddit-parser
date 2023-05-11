import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/app-common/services/auth.service";
import {catchError, map} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-sign-up',
  templateUrl: './app-sign-up.component.html',
  styleUrls: ['./app-sign-up.component.scss']
})
export class AppSignUpComponent implements OnInit {

  formGroup: FormGroup;
  error: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
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
