import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{

  loginForm!:FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }


  onSubmit() {
    this.userService.save(this.loginForm.value).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      name: '',
      email: ''
    });

  }

}
