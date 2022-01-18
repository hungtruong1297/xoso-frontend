import { User } from './../user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  _urlUser = "http://localhost:8080/api/users";
  users: any;
  newPassword: String = "";
  currentPg: number = 1;

  constructor(private http: HttpClient, private router: Router) {
    this.getUsers();
  }

  ngOnInit(): void {
  }

  getUsers() {
    // Get users from Database
    this.http.get(this._urlUser).subscribe(response => this.users = response);
  }



  deleteUser(user: User) {
    if (user.role == "ADMIN") {
      alert("Không xoá được vai trò Admin");
      return;
    }
    if (confirm("Bạn có muốn xoá không?")) {
      this.http.delete(this._urlUser + "/" + user.mail, { observe: 'response' })
        .subscribe();
      setTimeout(() => {
        this.users = this.getUsers();
        this.router.navigate(['/manage-user']);
      }, 4000);


    }
  }

  resetPassword(user: User) {
    this.http.post("http://localhost:8080/admin/resetPassword", user).subscribe();
  }

  checkResponseStatus(responseStatus: number) {
    if (responseStatus == 200) {
      alert("Xoá thành công");
    }
    else
      alert("Xoá không thành công");
  }

  searchUserByMail(emailInput: HTMLInputElement) {
    if (emailInput.value == "") {
      this.getUsers();
    } else {
      this.http.get(this._urlUser + "/searchByMail/" + emailInput.value).subscribe(response => this.users = response);
    }
    this.resetInputValue(emailInput);
  }

  searchUserByPhone(phoneInput: HTMLInputElement) {
    if (phoneInput.value == "") {
      this.getUsers();
    } else {
      this.http.get(this._urlUser + "/searchByPhone/" + phoneInput.value).subscribe(response => this.users = response);
    }
    this.resetInputValue(phoneInput);
  }

  resetInputValue(input: HTMLInputElement) {
    input.value = "";
  }
}
