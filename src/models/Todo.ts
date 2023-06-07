class Todo{
    title: String;
    description : String;
    expireDate : Date;
    
    constructor(title: String, description: String, expireDate: Date){
        this.title = title;
        this.description = description;
        this.expireDate = expireDate; 
    }
}

export {Todo};