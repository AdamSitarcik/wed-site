import Guest from './GuestModel.js';
import { StatusCodes } from 'http-status-codes';
import BadRequestError from './BadRequestError.js';

const createGuest = async (req, res) => {
    console.log(req.body);
    const { firstName, lastName } = req.body;
    if (!firstName || !lastName) {
        throw new BadRequestError('Vyplňte prosím meno');
    }
    const guest = await Guest.create(req.body);
    res.status(StatusCodes.CREATED).json({ guest });
};

export { createGuest };
