import personDOA from "../doa/person.js";

class PersonService {
  createTable() {
    console.log('PersonService -> createTable()')
    return personDOA.createTable();
  }

  createPerson(personDto) {
    console.log('PersonService -> createPerson()')

    const { firstName, lastName, email } = personDto;

    return personDOA.createPerson(firstName, lastName, email);
  }
}

export default new PersonService();