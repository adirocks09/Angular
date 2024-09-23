export interface IEmployee {
  code:string;     // the members are public by default , adding it explicitly over here will give compliation errors
  name:string;  
  age:number;
  salary:number;
  gender:string;
  dateOfBirth?: string; // optional property
}