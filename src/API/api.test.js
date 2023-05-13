import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";
describe("write an async unit test for _saveQuestion to verify that the saved question", () => {
    it("test save question success", async () => {
        let question = {
            author: "sarahedo",
            optionOneText: "optionOneText",
            optionTwoText: "optionTwoText"
        };
        var result = await _saveQuestion(question);
        expect(result).toEqual(
            expect.objectContaining({
                id: expect.any(String),
                author: "sarahedo",
                timestamp: expect.any(Number),
                optionOne: {
                    votes: [],
                    text: "optionOneText"
                },
                optionTwo: {
                    votes: [],
                    text: "optionTwoText"
                },
            })
        );
    });
});
describe("write an async unit test for _saveQuestion to verify that the saved question fail", () => {
    it("test save question fail", async () => {
        let question = {
            author: "sarahedo",
            optionOneText: "",
            optionTwoText: ""
        };
        expect(_saveQuestion(question)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    });
});
describe("write an async unit test for _saveQuestionAnswer to verify that the saved question success", () => {
    it("test save _saveQuestionAnswer success", async () => {
        let answer = {
            authedUser: "sarahedo",
            qid: "vthrdm985a262al8qx3do",
            answer: "optionTwo"
        };
        var result = await _saveQuestionAnswer(answer);
        expect(result).toEqual(true);
    });
});
describe("write an async unit test for _saveQuestionAnswer to verify that the saved question fail", () => {
    it("test save _saveQuestionAnswer fail", async () => {
        let answer = {
            authedUser: "sarahedo",
            qid: "vthrdm985a262al8qx3do",
            answer: ""
        };
        expect(_saveQuestionAnswer(answer)).rejects.toEqual("Please provide authedUser, qid, and answer");
    });
});
