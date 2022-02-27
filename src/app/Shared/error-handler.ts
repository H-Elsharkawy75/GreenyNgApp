import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from "@angular/common/http";

export class ErrorHandler {

  handelerror(errorResponse: HttpErrorResponse){
    if(errorResponse.error instanceof ErrorEvent){
      console.error('Client Side error:' + errorResponse.error.message);
      console.error('Server Side error:' + errorResponse);
    } else {
      return alert('Pls Refresh the website again');
    }

  }
}
