export class Employee {
    id:string;
    name:string;
    companyName:string;
    emailId:string;
    contactNo:number;
    designation:string;
    imageUrl:string;

    constructor(id:string,
        name:string,
        companyName:string,
        emailId:string,
        contactNo:number,
        designation:string,
        imageUrl:string){
            this.id = id;
            this.name = name;
            this.companyName = companyName;
            this.emailId = emailId;
            this.contactNo = contactNo;
            this.designation = designation;
            this.imageUrl = imageUrl;
        }
}
