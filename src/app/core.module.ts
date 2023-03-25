import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "./services/auth-interceptor-service";
import { AuthTokenInterceptorService } from "./services/auth-token-interceptor.service";
import { AuthService } from "./services/auth.service";
import { DummyService } from "./services/dummy.service";
import { AuthGuardService } from "./services/guardes/auth-guard.service";
import { DeactivateGuardService } from "./services/guardes/deactivat-guard.service";
import { LoggingInterceptorService } from "./services/logging-interceptor-service";
import { userResolveService } from "./services/resolvers/user-resolve.service";
import { UserService } from "./services/user.service";

@NgModule({
    providers: [
        {provide: HTTP_INTERCEPTORS, 
            useClass: AuthInterceptorService, 
            multi: true }, //interceptor 1
          {provide: HTTP_INTERCEPTORS, 
            useClass: LoggingInterceptorService, 
            multi: true }, //interceptor 2 (this interceptor will be executed after interceptor 1)
          {provide: HTTP_INTERCEPTORS, 
            useClass: AuthTokenInterceptorService, 
            multi: true }, //interceptor 1
          AuthService, 
          AuthGuardService, 
          DeactivateGuardService, 
          userResolveService, 
          UserService
    ] //there i no need to export providers (cas spécial)
})
export class CoreModule{

}