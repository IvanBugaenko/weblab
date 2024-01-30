const user1: IUser = {
    user_photo: String.raw`src\assets\images\users\avatar1.png`,
    user_name: 'Edward Newgate',
    user_position: 'Founder Circle'
}

const user2: IUser = {
    user_photo: String.raw`src\assets\images\users\avatar2.png`,
    user_name: 'Mr. Meow',
    user_position: 'Ruler of the World'
}

const user3: IUser = {
    user_photo: String.raw`src\assets\images\users\avatar3.jpg`,
    user_name: 'Jedi Cat',
    user_position: 'Grandmaster of Jedi Order'
}

const user4: IUser = {
    user_photo: String.raw`src\assets\images\users\avatar4.png`,
    user_name: 'Apple Cat',
    user_position: 'Food'
}

const slider_card1: ISliderCard = {
    header: 'What our customer are saying',
    description: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely”',
    user: user1
}

const slider_card2: ISliderCard = {
    header: 'What our customer are saying',
    description: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely”',
    user: user2
}

const slider_card3: ISliderCard = {
    header: 'What our customer are saying',
    description: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely”',
    user: user3
}

const slider_card4: ISliderCard = {
    header: 'What our customer are saying',
    description: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely”',
    user: user4
}

const sliders: ISliderCard[] = [
    slider_card1, slider_card2, slider_card3, slider_card4
]

export default sliders;
