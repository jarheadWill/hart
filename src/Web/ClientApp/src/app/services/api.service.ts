import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    constructor(
        protected http: HttpClient) { }


    private get apiUrl(): string {
        return `api/`;
    }
    private setUrl(url: string): string {
        if (!url.startsWith(this.apiUrl)) {
            url = `${this.apiUrl}${this.trimStart(url, '/')}`;
        }

        return url;
    }

    private trimStart(str: string, token: string): string {
        if (str && str.length > 0 && str[0] === token) {
            return this.trimStart(str.substring(1), token);
        }

        return str;
    }

    public get(url: string, options?: any | undefined): Observable<any> {
        url = this.setUrl(url);
        return this.http.get(url, options);
    }

    public put(url: string, body: any, options?: any | undefined): Observable<any> {
        url = this.setUrl(url);
        return this.http.put(url, body, options);
    }

    public post(url: string, body?: any, options?: any | undefined): Observable<any> {
        if(!body){
            body = {};
        }
        url = this.setUrl(url);
        return this.http.post(url, body, options);
    }

    public delete(url: string, options?: any | undefined): Observable<any> {
        url = this.setUrl(url);
        return this.http.delete(url, options);
    }
}
