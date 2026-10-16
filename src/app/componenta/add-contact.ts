import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  imports: [RouterLink],
  template: `
    <main class="destination" dir="rtl">
      <a routerLink="/" class="back-link">← חזרה לדף הבית</a>
      styleUrl: './add-contact.css',
       templateUrl: './add-contact.html',
      <h1>הוספת איש קשר</h1>
      

      <p></p>
    </main>
  `,
  styles: `
    .destination { max-width: 760px; margin: 0 auto; padding: 48px 24px; color: #28334f; }
    .back-link { color: #5368b4; text-decoration: none; }
    h1 { margin: 36px 0 10px; }
    p { color: #68728a; line-height: 1.7; }
  `,
})
export class AddContact {
    @Input() firstName = '';
  @Input() lastName = '';
  @Input() email = '';
  @Input() adress = '';
   @Input() phone = 0;
}

