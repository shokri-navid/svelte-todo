class Todo{
    title: String;
    description : String;
    expireDate : Date;
    id: number | undefined;
    constructor(title: String, description: String, expireDate: Date, id?: number){
        if(id != undefined){
            this.id = id; 
        }
        this.title = title;
        this.description = description;
        this.expireDate = expireDate; 
    }
}

export {Todo};