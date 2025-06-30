import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  suc: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      suc: ['', Validators.required],
      password: ['', Validators.required],
    });
    console.log("hi")
  }

 onLogin(): void {
  console.log('Login function triggered');

  
  
  const obj = {
    stdMobileNo: this.loginForm.value.suc,
    stdPwd: this.loginForm.value.password,
  };

  this.http.post<any>('http://10.70.9.204:4002/api/student/login', obj)
    .subscribe({
      next: (res: any) => {
        if (res && res.result && res.result.length > 0) {
          const student = res.result[0];
          localStorage.setItem('student', JSON.stringify(student));
          this.router.navigate(['/student']);
        } else if (this.loginForm.get('suc')?.value === '') {
          this.errorMsg = "SUC is required.";
        } else if (this.loginForm.get('password')?.value === '') {
          this.errorMsg = "Password is required.";
        } else if (this.loginForm.invalid) {
          this.errorMsg = 'Please enter both SUC and Password.';
        } else {
            this.errorMsg = 'Invalid login credentials.';
        }
      },
      error: (err) => {
        console.error('Login error:', err);
        this.errorMsg = 'Server error.';
      },
    });
  }
 }