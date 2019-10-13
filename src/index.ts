export interface Event {
    name: string;
}

export default async(event: Event): Promise<any> => {
    let response;
    try {
        response = {
            body: {
                message: `Hello ${event.name}`,
            },
            statusCode: 200,
        };
    } catch (err) {
        // tslint:disable-next-line:no-console
        console.log(err);
        return err;
    }
    return response;
}