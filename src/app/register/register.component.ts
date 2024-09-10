import { Component } from '@angular/core';
import{
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class registerComponent {
  //FormsGroup
  registerform!:FormGroup;
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
    this.registerform = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]

    })
  }

  submitLogin(){
    this.submitted = true;
    //ถ้าฟอร์มไม่ถูกต้อง (Invalid)
    if(this.registerform.invalid){
      return
    }else{
      this.userLogin.email = this.registerform.value.eamil
      this.userLogin.Password = this.registerform.value.passeord
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
this.registerform.reset();

}
}