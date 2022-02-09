// Source: https://www.youtube.com/watch?v=YkvqLNcJz3Y&ab_channel=Academind
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-file',
  templateUrl: './submit-file.component.html',
  styleUrls: ['./submit-file.component.css']
})
export class SubmitFileComponent {
  private selectedFile!: File;

  constructor(private http: HttpClient) {

  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:8080/files', fd)
      .subscribe(
        res => console.log(res)
      );
  }
}
