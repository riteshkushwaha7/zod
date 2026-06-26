import interface mongoose from 'mongoose';
export interface IUser extends mongoose.Document {
    content: string;
    createdAt: Date;
}
const MesssageSchema = new mongoose.Schema({