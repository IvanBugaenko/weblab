const virtualBanner: IBanner = {
    header: 'Virtual healthcare for you',
    description: 'Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone',
    illustration: String.raw`src\assets\images\illustrations\banner1.png`,
    banner_class: 'virtual'
}

const leadingProvidersBanner: IBanner = {
    header: 'Leading healthcare providers',
    description: 'We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver',
    illustration: String.raw`src\assets\images\illustrations\banner2.png`,
    banner_class: 'leading_providers'
}
const mobileBanner: IBanner = {
    header: 'Download our mobile apps',
    description: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely',
    illustration: String.raw`src\assets\images\illustrations\banner3.png`,
    banner_class: 'mobile'
}

export default {
    virtualBanner, 
    leadingProvidersBanner, 
    mobileBanner
}
