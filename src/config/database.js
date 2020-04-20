module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '5433',
  username: 'postgres',
  password: '', //Put the password of your database
  database: '', //Put the name of yout databse
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
