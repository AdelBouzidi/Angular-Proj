export class User{
    constructor(public email: string,
        public localId: string,
        // private _token: string,
        private _token: string,
        private expirationDate: Date){}
    get token(){
        if(new Date > this.expirationDate){
            return null;
        }
        // if(this._token === null){
        //     return null;
        // }  
        return this._token;
    }
}