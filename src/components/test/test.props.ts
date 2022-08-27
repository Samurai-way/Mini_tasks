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

export type heirType = {
    name: string,
    age: number,
    heir: number,
    address: {city: string, house: number}
}

export type LeptopType = {
    title: string
}

export type UserWithLeptopType = heirType &{
    laptop: LeptopType
}

export function inc(person: heirType, power: number) {
    let copy = {...person}
    copy.heir = person.heir / power

    return copy
}

export function leptop(person: UserWithLeptopType, city: string) {
    let copy = {...person,
        address: {
            city
        }}

    return copy
}

export function leptopUserMacbook(person: UserWithLeptopType, title: string) {
    return {
        ...person, laptop: {...person.laptop, title: title}
    }
}