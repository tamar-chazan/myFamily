import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
export class Service1 {
  private http = inject(HttpClient);

  getSomething(): Observable<any> {
    return this.http.get<any>(
      'https://localhost:7236/WeatherForecast'
    );
  }
}
