export class User {
    name: string;
    email: string;
    last_name: string;
    icon: string;
    phone: string;
    country: string;
    
    constructor(name: string, email: string, last_name: string, icon: string, phone: string, country: string) {
        this.name = name;
        this.email = email;
        this.last_name = last_name;
        this.icon = icon;
        this.phone = phone;
        this.country = country;
    }

}