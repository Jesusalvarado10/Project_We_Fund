export class Foundation {
    id: string;
    tittle: string;
    photo: string;
    description: string;
    email: string;
    location: {
        latitude: number;
        longitude: number;
    };
    type: string;
    img: string;
    shortDescription: string;
    constructor(id: string, tittle: string, img:string, description: string,shortDescription :string , type: string, email: string, location: { latitude: number; longitude: number; }) {
        this.id = id;
        this.img=img;
        this.shortDescription = shortDescription;
        this.tittle = tittle;
        this.photo = '';
        this.email = email;
        this.location = location;
        this.description = description;
        this.type = type;
    }
    setPhoto(photo: string) {
        this.photo = photo;
    }
    show() {
        console.log(this.tittle);
        console.log(this.img);
        console.log(this.description);
        console.log(this.email);
        console.log(this.location);
        console.log(this.type);
        console.log(this.shortDescription);

    }

}