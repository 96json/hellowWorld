export interface officeitem {
  key?:string;
  uid:string;
  FullName:string;
  address:string ;
  telephone:number;
  email:string;
  password:string ;
  rules:any;
  recruiter:any;
  status:string;
  write:any
}


export interface employeeitem {
  key?: string;
  FullName: string;
  age: number;
  salary: number;
  image: string;
  Country: string;
  ExperienceInYears:number;
  Description:string;
  Available:string;
  kids:string;
  uid:any;
  recruiter:any;
  status:string;
  write:any
}
