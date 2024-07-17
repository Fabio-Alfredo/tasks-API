
export const handleHttpError = (res, err, errorRaw) => {
    console.log(errorRaw);

    res.status(errorRaw.status || 500);
    res.send({ error: err } || { error: 'Internal Server Error' });
}

export class httpError extends Error{
    constructor(message, status){
        super(message);
        this.status = status;
    }
}