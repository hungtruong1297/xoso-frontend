import { CreateUserComponent } from './../create-user/create-user.component';
import { RegisterComponent } from './../register/register.component';
import { EditUserComponent } from './../edit-user/edit-user.component';
import { User } from './../user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  _urlUser = "http://localhost:8080/api/users";
  users: any;
  firstName: String = '';
  newPassword: any;
  currentPg: number = 1;
  filterTerm: string = '';
  searchInput = {
    mail: '',
    phone: ''
  }

  constructor(private http: HttpClient,
    private router: Router,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    // Get users from Database
    this.http.get(this._urlUser).subscribe(
      response => {
        this.users = response;
      });
  }

  createUser() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true; // alow Esc and click outside to close the dialog
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    this.dialog.open(CreateUserComponent);
    console.log('Create button works');
  }

  editUser(user: User) {


    console.log(user);
  }

  deleteUser(user: any) {
    if (user.roles[0].roleName == "ADMIN") {
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
    if (confirm("Do you want to reset password for this user? ")) {
      this.http.post("http://localhost:8080/admin/resetPassword", user).subscribe(
        response => {
          this.newPassword = response;
          alert("New password: " + this.newPassword.message);
        }
      );
    }
  }

  checkResponseStatus(responseStatus: number) {
    if (responseStatus == 200) {
      alert("Xoá thành công");
    }
    else
      alert("Xoá không thành công");
  }

  makeAdmin(user: any) {


    if (confirm('Make this user as Admin?')) {
      if (user.roles[0].roleName == "ADMIN") {
        alert("User is Admin already");
        return;
      }

      this.http.patch(this._urlUser, user.id)
        .subscribe(
          {
            error: (e) => console.error(e),
            complete: () => { alert('Admin Granted.'); this.ngOnInit() }
          }
        );
    }


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
