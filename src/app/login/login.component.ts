import { Component } from '@angular/core';
import{
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  //FormsGroup
  loginform!:FormGroup;
  //สร้างตัวแปรไว้เช็คว่า Submit form หรือยัง
  submitted = false;
  //ตัวสำหรับผูกกับฟอร์ม
  userLogin ={
    "email":"",
    "Password":"",
  }

  constructor(private formBuilder: FormBuilder) {

  }
  
  ngOnInit(){
    this.loginform = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]

    })
  }

  submitLogin(){
    this.submitted = true;
    //ถ้าฟอร์มไม่ถูกต้อง (Invalid)
    if(this.loginform.invalid){
      return
    }else{
      this.userLogin.email = this.loginform.value.eamil
      this.userLogin.Password = this.loginform.value.passeord
      if(this.userLogin.email == "admin@gmail.com" && this.userLogin.Password == "123456789"){
        alert("เข้าสู่ระบบสำเร็จ")
      }else{
        alert("เข้าสู่ระบบไม่สำเร็จ")
      }
    }
  }

//ปุ่ม reset Form
resetForm(){
this.submitted = false;
this.loginform.reset();

}
}