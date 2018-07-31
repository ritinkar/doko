// Reducers
const initialState = {
    questions: [
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
        }
    ]
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                username: action.username
            };
        default:
            return state;
    }
};

export { userReducer };
