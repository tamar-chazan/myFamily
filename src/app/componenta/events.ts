import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-events',
  imports: [RouterLink],
  template: `
    <main class="destination" dir="rtl">
      <a routerLink="/" class="back-link">← חזרה לדף הבית</a>
      <h1>אירועים</h1>
      <p>כאן יוצגו האירועים והמפגשים המשפחתיים.</p>
    </main>
  `,
  styles: `
    .destination { max-width: 760px; margin: 0 auto; padding: 48px 24px; color: #28334f; }
    .back-link { color: #5368b4; text-decoration: none; }
    h1 { margin: 36px 0 10px; }
    p { color: #68728a; line-height: 1.7; }
  `,
})
export class Events {}
