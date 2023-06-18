import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListFamiliar, EditFamiliar } from './interfaces/familiar.interface';
import { enviroments } from 'src/enviroments/enviroments';
import { CreateFamiliar } from './interfaces/familiar.interface';

@Injectable({
  providedIn: 'root'
})
export class FamiliarService {

  private baseUrl: string = enviroments.baseUrl;

  constructor(private http: HttpClient) { }

  getFamiliars():Observable<ListFamiliar[]>{
    return this.http.get<ListFamiliar[]>(`${ this.baseUrl }/familiars/get_all_familiars`);
  }

  addFamiliar(familiar: CreateFamiliar): Observable<CreateFamiliar>{
    return this.http.post<CreateFamiliar>(`${ this.baseUrl }/familiars/create_user_with_familiar`,familiar);
  }

  updateFamiliar(familiar: EditFamiliar): Observable<CreateFamiliar>{
    return this.http.patch<EditFamiliar>(`${ this.baseUrl }/familiars/update_user_with_familiar/${familiar.id}`,familiar);
  }
}
