import * as jwt from "jsonwebtoken";
import { Token } from "../types";

  const expiresIn = "1min";
  
  export const generateToken=(input: Token): string => {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }
