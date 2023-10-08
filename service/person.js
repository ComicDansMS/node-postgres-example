import personDAO from "../dao/person.js";

class PersonService {
  createTable() {
    console.log('PersonService -> createTable()')
    return personDAO.createTable();
  }

  createPerson(personDto) {
    console.log('PersonService -> createPerson()')

    const { firstName, lastName, email } = personDto;

    return personDAO.createPerson(firstName, lastName, email);
  }

  readPerson() {
    console.log('PersonService -> readPerson()')

    return personDAO.readPerson();
  }
}

export default new PersonService();