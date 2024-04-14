import { Document, Model, Schema, model } from "mongoose";
import { hashSync, genSaltSync, compareSync } from "bcrypt";

export interface IUser extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  createdOn: Date;
  updatedOn: Date;
  role: Role;
  encryptPassword: (password: string) => string;
  validPassword: (password: string) => boolean;
}

interface IUserModel extends Model<IUser> {}

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: {
    type: String,
    enum: Object.values(Role),
    default: Role.USER,
  },
  createdOn: {
    required: true,
    type: Date,
  },
  updatedOn: {
    required: true,
    type: Date,
    default: Date.now,
  },
});

schema.methods.encryptPassword = (password: string) =>
  hashSync(password, genSaltSync(10));

schema.methods.validPassword = function (password: string) {
  return compareSync(password, this.password);
};

export const User: IUserModel = model<IUser, IUserModel>("User", schema);
