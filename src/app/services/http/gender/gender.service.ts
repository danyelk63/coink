import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from '../../endpoint/endpoint.service';
import { IGenders } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  
  data = {
    url: "qa/signup/genders?apiKey=030106",
  }

  constructor(private httpClient: HttpClient, private endpointService: EndpointService) {}

  get() {
    return this.httpClient.get<IGenders[]>(this.endpointService.getEndpointUrl(this.data.url));
  }
}
