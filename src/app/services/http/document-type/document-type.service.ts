import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from '../../endpoint/endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {
  
  data = {
    url: "qa/signup/documentTypes?apiKey=030106",
  }

  constructor(private httpClient: HttpClient, private endpointService: EndpointService) {}

  get() {
    return this.httpClient.get(this.endpointService.getEndpointUrl(this.data.url));
  }
}
