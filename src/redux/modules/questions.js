// Reducers
const initialState = {
    details: [
        {
            id: 1,
            text: 'New phon. who dis?',
            answers: [
                {
                    id: 1,
                    text: 'kim k'
                },
                {
                    id: 2,
                    text: 'ray j'
                },
                {
                    id: 3,
                    text: 'kanye w'
                },
                {
                    id: 4,
                    text: 'taylor s'
                }
            ],
            correctAnswerId: 3
        },
        {
            id: 2,
            text: 'who killed uncle ben?',
            answers: [
                {
                    id: 1,
                    text: 'spiderman'
                },
                {
                    id: 2,
                    text: 'sandman'
                },
                {
                    id: 3,
                    text: 'kim jung un'
                },
                {
                    id: 4,
                    text: 'taylor s'
                }
            ],
            correctAnswerId: 1
        },
        {
            id: 3,
            text: 'Question 3?',
            answers: [
                {
                    id: 1,
                    text: 'kim k'
                },
                {
                    id: 2,
                    text: 'ray j'
                },
                {
                    id: 3,
                    text: 'kanye w'
                },
                {
                    id: 4,
                    text: 'taylor s'
                }
            ],
            correctAnswerId: 3
        },
        {
            id: 4,
            text: 'Question 4?',
            answers: [
                {
                    id: 1,
                    text: 'kim k'
                },
                {
                    id: 2,
                    text: 'ray j'
                },
                {
                    id: 3,
                    text: 'kanye w'
                },
                {
                    id: 4,
                    text: 'taylor s'
                }
            ],
            correctAnswerId: 3
        },
        {
            id: 5,
            text: 'Question 5?',
            answers: [
                {
                    id: 1,
                    text: 'kim k'
                },
                {
                    id: 2,
                    text: 'ray j'
                },
                {
                    id: 3,
                    text: 'kanye w'
                },
                {
                    id: 4,
                    text: 'taylor s'
                }
            ],
            correctAnswerId: 3
        },
        {
            id: 6,
            text: 'Question 6?',
            answers: [
                {
                    id: 1,
                    text: 'kim k'
                },
                {
                    id: 2,
                    text: 'ray j'
                },
                {
                    id: 3,
                    text: 'kanye w'
                },
                {
                    id: 4,
                    text: 'taylor s'
                }
            ],
            correctAnswerId: 3
        },
        {
            id: 7,
            text: 'Question 7?',
            answers: [
                {
                    id: 1,
                    text: 'kim k'
                },
                {
                    id: 2,
                    text: 'ray j'
                },
                {
                    id: 3,
                    text: 'kanye w'
                },
                {
                    id: 4,
                    text: 'taylor s'
                }
            ],
            correctAnswerId: 3
        },
        {
            id: 8,
            text: 'Question 8?',
            answers: [
                {
                    id: 1,
                    text: 'kim k'
                },
                {
                    id: 2,
                    text: 'ray j'
                },
                {
                    id: 3,
                    text: 'kanye w'
                },
                {
                    id: 4,
                    text: 'taylor s'
                }
            ],
            correctAnswerId: 3
        },
        {
            id: 9,
            text: 'Question 9?',
            answers: [
                {
                    id: 1,
                    text: 'kim k'
                },
                {
                    id: 2,
                    text: 'ray j'
                },
                {
                    id: 3,
                    text: 'kanye w'
                },
                {
                    id: 4,
                    text: 'taylor s'
                }
            ],
            correctAnswerId: 3
        },
        {
            id: 10,
            text: 'Question 10?',
            answers: [
                {
                    id: 1,
                    text: 'kim k'
                },
                {
                    id: 2,
                    text: 'ray j'
                },
                {
                    id: 3,
                    text: 'kanye w'
                },
                {
                    id: 4,
                    text: 'taylor s'
                }
            ],
            correctAnswerId: 3
        }
    ]
};

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export { questionsReducer };
