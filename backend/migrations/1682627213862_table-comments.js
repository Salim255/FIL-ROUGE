/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  console.log("created comment table 🍎🍌🍓🍉");
  pgm.sql(`
    CREATE TABLE comments (
      id SERIAL PRIMARY KEY,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      contents VARCHAR(240) NOT NULL
    )
    `);
};

exports.down = (pgm) => {
  pgm.sql(`
      DROP TABLE comments
      `);
};
