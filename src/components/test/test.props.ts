// export type UserType = {
//     name: string,
//     age: number,
//     address: { title: string }
// }

// export type HeirType = {
//     name: string,
//     age: number,
//     heir: number
//     address: {title: string}
// }

// export type copyType = {
//     name: string,
//     age: number,
//     heir: number
// }

// export type heirType = {
//     name: string,
//     age: number,
//     heir: number,
//     address: {city: string, house: number}
// }
//
// export type LeptopType = {
//     title: string
// }
//
// export type UserWithLeptopType = heirType &{
//     laptop: LeptopType
// }
//
// export function inc(person: heirType, power: number) {
//     let copy = {...person}
//     copy.heir = person.heir / power
//
//     return copy
// }
//
// export function leptop(person: UserWithLeptopType, city: string) {
//     let copy = {...person,
//         address: {
//             city
//         }}
//
//     return copy
// }
//
// export function leptopUserMacbook(person: UserWithLeptopType, title: string) {
//     return {
//         ...person, laptop: {...person.laptop, title: title}
//     }
// }


// export type UserType = {
//     name: string,
//     age: number,
//     address: { title: string },
//     technologies: { title: string }
// }

// export function changeUser(user: UserType, title: string){
//     return{
//         ...user,
//         address: {...user.address, title: title}
//     }
// }

// export function changeTechno(user: UserType, title: string){
//     return {
//         ...user, technologies: {...user.technologies, title: title}
//     }
// }

export type LessonsType = {
    title: string
}

export type AddressType = {
    title: string
}

export type PersonType = {
    name: string,
    age: number,
    lessons: LessonsType,
    address: AddressType
}

export function changePerson(u: PersonType, title: string){

    return{
        ...u,
        address:
            {...u.address,
                title: title}
    }
}

export function changePersonLesson(u: PersonType, title: string){

    return{
        ...u,
       lessons: {...u.lessons, title: title}
    }
}