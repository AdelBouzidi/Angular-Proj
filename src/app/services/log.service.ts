export class LogService{
    static LogStatus(status: string) {
        throw new Error("Method not implemented.");
    }
    logStatus(status: string){
        console.log(
            'logging the status in the console and the status is : '+status
            );
    }
}