import {faker} from '@faker-js/faker'

export const AuthRoutes = {
    LOGIN : {
        path: '/signin',
        handle: () => {
            return {
                firstname: faker.person.firstName(),
                lastname: faker.person.lastName(),
                phone: faker.phone.number(),
                email: faker.internet.email(),
            }
        }
    }
}