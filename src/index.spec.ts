import handler, { IEvent } from "./index";

describe("Hello handler", () => {

    const eventBase: IEvent = {
        name: "World",
    };

    it("should greet user", () => {
        return handler(eventBase).then((result) => {
            expect(result.body.message).toEqual("Hello World");
        });
    });
});
