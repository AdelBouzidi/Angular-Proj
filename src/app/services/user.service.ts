export class UserService{
    getUser(id :string){
        if(id ==='1'){
            return{
                id:'1',
                name:'Rama'
            }
        }else{
            if(id ==='2'){
                return{
                    id:'2',
                    name:'Lrishna'
                }
            }else{
                return{
                    id:'3',
                    name:'Leela'
                }
            }
        }
    }
}