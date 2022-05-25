const mainAuth = '/auth/'
const mainPayment = 'payment/'
const mainTicket = '/ticket/'
const mainProfile = '/profile/'

const path = {
    AUTH_LOGIN: mainAuth + 'login',
    AUTH_Forgot_PW: mainAuth + 'forgot-password',
    AUTH_REST_PW: mainAuth + 'reset-password',

    HOME: '/home',

    BILL_INDEX: mainPayment,
    BILL_FINISH: mainPayment + 'finish',

    TICKET_INDEX: mainTicket,
    TICKET_ADD: mainTicket + 'add',

    PROFILE_INDEX: mainProfile,
    PROFILE_INDEX_SIDE_BILL: mainProfile,
    PROFILE_INDEX_SIDE_CHANGE_PW: mainProfile + 'change-password',

    NOTIFICATION: '/notification'
}

export default path