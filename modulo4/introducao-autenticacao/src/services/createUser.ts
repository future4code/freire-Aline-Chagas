import connection from "../connection";

const createUser = async (id: string, email: string, password: string) => {
    await connection
      .insert({
        id,
        email,
        password,
      })
      .into('users_exercicio1209');
  };