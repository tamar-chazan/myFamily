import { Routes } from '@angular/router';
import { Home } from './componenta/home/home';
import { AddContact } from './componenta/add-contact';
import { Contacts } from './componenta/contacts';
import { Events } from './componenta/events';
import { SendEmail } from './componenta/send-email';

export const routes: Routes = [
  { path: '', component: Home, title: 'דף הבית | המשפחה שלנו' },
  { path: 'contacts/new', component: AddContact, title: 'הוספת איש קשר | המשפחה שלנו' },
  { path: 'events', component: Events, title: 'אירועים | המשפחה שלנו' },
  { path: 'contacts', component: Contacts, title: 'אנשי קשר | המשפחה שלנו' },
  { path: 'email', component: SendEmail, title: 'שליחת אימייל | המשפחה שלנו' },
  { path: '**', redirectTo: '' },
];
