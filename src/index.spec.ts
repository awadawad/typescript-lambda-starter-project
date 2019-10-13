import handler, { Event } from './index';

describe('Hello handler', () => {

    const eventBase: Event = {
        name: 'World',
    };

    it('should greet user', () => {
        return handler(eventBase).then((result) => {
            expect(result.body.message).toEqual('Hello World');
        });
    });
});
