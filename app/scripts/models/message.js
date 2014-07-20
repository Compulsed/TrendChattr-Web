Trendchattr.Message = DS.Model.extend({
	username: DS.attr('string'),
	userMessage: DS.attr('string')
});

Trendchattr.Message.FIXTURES = [{
    id: 1,
    name: "#dalesucks",
    source: "twitter",
    messages: [
        {
            "sender": "daniel",
            "message": "I hear this dale kid sucks"
        },
        {
            "sender": "dale",
            "message": "Hey!! Thats me"
        }
    ]
},

{
    id: 2,
    name: "#dan is awesome",
    source: "twitter",
    messages: [
        {
            "sender": "dale",
            "message": "You're so awesome dan"
        }
    ]
}];
