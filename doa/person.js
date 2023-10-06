import pool from "../db/db.js";

class PersonDOA {
  async createTable() {
    console.log('PersonDOA -> createTable()')

    const query = `
    CREATE TABLE person (
      id SERIAL PRIMARY KEY,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  await pool.query(query);

  console.log('Success')
  }

  async createPerson(firstName, lastName, email) {
    console.log('PersonDOA -> createPerson()')

    const query = `
    INSERT INTO person(firstName, lastName, email)
    VALUES ($1, $2, $3)
    RETURNING id;
  `;
  
  const { rows } = await pool.query(query, [firstName, lastName, email]);

  console.log('Success');

  return rows[0].id;
  }
}

export default new PersonDOA;