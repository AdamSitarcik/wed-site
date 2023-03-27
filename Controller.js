import Guest from './GuestModel.js';
import { StatusCodes } from 'http-status-codes';
import BadRequestError from './BadRequestError.js';

const createGuest = (req, res) => {
    console.log(req);
    // const {name, note} = req.body;
    // if(!name) {
    //     throw new BadRequestError('Vyplňte prosím meno');
    // }
    // const guest = await Guest.create(req.body);
    // res.status(StatusCodes.CREATED).json({ guest });
    res.send('create user');
};

export { createGuest };