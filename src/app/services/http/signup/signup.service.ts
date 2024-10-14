import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from '../../endpoint/endpoint.service';
import { IUser } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  
  data = {
    url: "qa/signup",
  }

  constructor(private httpClient: HttpClient, private endpointService: EndpointService) {}

  post(data: IUser) {
    return this.httpClient.post(this.endpointService.getEndpointUrl(this.data.url), data);
  }
}
