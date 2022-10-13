import { ContactForm } from './components/ContactForm';
import { ContactsList } from './components/ContactsList';
import { ContactsFilter } from './components/ContactsFilter';

export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactsFilter />
      <ContactsList />
    </>
  );
};
