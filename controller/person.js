import personService from "../service/person.js";

class PersonController {
  async createTable(req, res) {
    console.log('Route: /create-table');

    try {
      await personService.createTable();
      res.status(201).json({ message: 'Table created' });
    } catch (err) {
      console.error(err);
    }
  }
  
  async createPerson(req, res) {
    console.log('Route: /create-person');

    try {
      const id = await personService.createPerson(req.body);
      res.status(201).json({ id: id });
    } catch (err) {
      console.error(err);
    }
  }
}

export default new PersonController();