import { useEffect, useState } from 'react';
import PhoneBookList from '../../components/Phonebook/PhonebookList/PhonebookList';
import Form from '../../components/Phonebook/FormAddPhonebook/FormAddPhonebook';
import Filter from '../../components/Phonebook/Filter/Filter';
import Modal from '../../components/Phonebook/Modal/Modal';
import FormChangeContact from '../../components/Phonebook/FormChangeContact/FormChangeContact';

import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContacts,
  addItems,
} from 'redux/items/itemsOperations';
import { addFilter } from 'redux/filter/filterActions';
import { getContactsList } from 'redux/items/itemsSelector';
import { getFilter } from 'redux/filter/filterSelector';

import styles from './ContactsPage.module.css';

const ContactsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [findContact, setFindContact] = useState({});
  const { loading } = useSelector(getContactsList);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const phoneList = useSelector(store => {
    const filteredContact = store.contacts.items.filter(item =>
      item.name.toLowerCase().includes(store.filter.toLocaleLowerCase())
    );
    return filteredContact;
  });
  // console.log(phoneList);

  const onAddContact = data => {
    const action = addItems(data);
    dispatch(action);
  };

  const onDelContact = id => {
    const action = deleteContacts(id);
    dispatch(action);
    // dispatch(fetchContacts());
  };

  const onChangeFilter = event => {
    const action = addFilter(event.currentTarget.value);
    dispatch(action);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const findIdContact = event => {
    const searchContact = phoneList.find(
      contact => contact.id.toString() === event.currentTarget.id
    );
    setFindContact(searchContact);
    // console.log(searchContact);
    toggleModal();
  };
  return (
    <div>
      <Form onSubmit={onAddContact} />
      <Filter value={filter} onChange={onChangeFilter} />
      {loading && <p>...Loading</p>}
      <PhoneBookList
        phoneList={phoneList}
        onDeletePhoneListItem={onDelContact}
        onClick={findIdContact}
      />
      {showModal && (
        <Modal onClose={toggleModal}>
          <h2 className={styles.title__change}>CHANGE CONTACT</h2>
          <div className={styles.contact}>
            <p className={styles.contact__name}>Name: {findContact.name}</p>
            <p className={styles.contact__name}>Tel: {findContact.number}</p>
          </div>
          <button
            type="button"
            onClick={toggleModal}
            className={styles.modal__close}
          >
            close
          </button>
          <FormChangeContact onClose={toggleModal} findContact={findContact} />
        </Modal>
      )}
    </div>
  );
};

export default ContactsPage;