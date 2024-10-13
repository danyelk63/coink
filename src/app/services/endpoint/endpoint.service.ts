import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  getEndpointUrl(path: string) {
    return environment.baseEndpoint + path;
  }
}
