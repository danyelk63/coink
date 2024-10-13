import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from '../../endpoint/endpoint.service';
import { IIdTypes } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {
  
  data = {
    url: "qa/signup/documentTypes?apiKey=030106",
  }

  constructor(private httpClient: HttpClient, private endpointService: EndpointService) {}

  get() {
    return this.httpClient.get<IIdTypes[]>(this.endpointService.getEndpointUrl(this.data.url));
  }
}
