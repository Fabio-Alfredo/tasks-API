
export const handleHttpError = (res, err, errorRaw) => {
    console.log(errorRaw);

    res.status(errorRaw.status || 500);
    res.send({ error: err });
}

export class httpError extends Error{
    constructor(message, status){
        super(message);
        this.status = status;
    }
}