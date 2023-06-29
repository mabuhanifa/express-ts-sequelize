import sequelize from "./sequelize";

sequelize
  .sync()
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((error) => console.log(error.message));

const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "Neon PostgreSQL Database Connection has been established successfully."
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default testDbConnection;
