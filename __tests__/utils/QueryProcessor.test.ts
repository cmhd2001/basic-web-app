import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    // TODO: Deberías actualizar la prueba a continuación después de añadir tu USB ID
    test('should return my USB ID', () => {
        const query = "what's your USB ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"TU USB ID DEBERÍA ESTAR AQUÍ"
    	));
    });

    test('should return my name', () => {
        const query = "what is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"PaniK"
    	));
    });


    test('should return the largest', () => {
        const query = "Which of the following numbers is the largest: 2, 23, 11?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"23"
    	));
    });

    test('should return the sum', () => {
        const query = "What is 1 plus 12?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"13"
    	));
    });

});
