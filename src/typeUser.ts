type User = {
    name: string
    email: string
    address: {
        city: string
        state?: string
    }
}

function showWelcomeMessage(user: User){
    return `Welcome ${user.name}, your emailis ${user.email}.Your city is ${user.address.city} and
    your state is ${user.address.state}
    `
}

const user = {
    name: "João",
    email: "joak2192@gmail.com",
    address: {
        city: 'VR',
        state: 'RJ'
    }   
}

const message = showWelcomeMessage(user)