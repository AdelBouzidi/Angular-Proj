export class UserService{
    users = [
        {name: 'leela', status: 'active'},
        {name: 'leela2', status: 'active'},
        {name: 'leela3', status: 'active'}
    ]
    addUser(name:string, status:string){
        this.users.push({name,status});
    }
    UpdateStatus(id :number, status: string){
        this.users[id].status=status;
    }
}