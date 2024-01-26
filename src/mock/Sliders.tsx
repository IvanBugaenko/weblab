const user: IUser = {
    user_photo: String.raw`src\assets\images\users\avatar.png`,
    user_name: 'Edward Newgate',
    user_position: 'Founder Circle'
}

const slider_card: ISliderCard = {
    header: 'What our customer are saying',
    description: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely”',
    user: user
}

const sliders: ISliderCard[] = [
    slider_card, slider_card, slider_card, slider_card
]

export default sliders;