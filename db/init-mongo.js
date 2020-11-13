db.createUser({
  user: "carlos",
  pwd: "1234",
  roles: [
    {
      role: "readWrite",
      db: "dbSopes1",
    },
  ],
});
