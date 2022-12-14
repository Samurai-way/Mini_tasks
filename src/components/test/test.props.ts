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

// export type LessonsType = {
//     title: string
// }
//
// export type AddressType = {
//     title: string
// }
//
// export type PersonType = {
//     name: string,
//     age: number,
//     lessons: LessonsType,
//     address: AddressType
// }
//
// export function changePerson(u: PersonType, title: string){
//
//     return{
//         ...u,
//         address:
//             {...u.address,
//                 title: title}
//     }
// }
//
// export function changePersonLesson(u: PersonType, title: string){
//
//     return{
//         ...u,
//        lessons: {...u.lessons, title: title}
//     }
// }
//
// export type technologiesType = {
//     title: string,
//     name: string
// }
//
// export type UserType = {
//     name: string,
//     lessons: Array<string>
//     technologies: technologiesType
// }
//
// export function changeName(u:UserType, name:string){
//     return{
//         ...u, name: name
//     }
// }
//
// export function changeTech(u:UserType, name:string, title: string){
//     return{
//         ...u,
//         technologies: {...u, name: name, title: title}
//     }
// }

// export type UserType = {
//     name: string,
//     lessons: Array<string>,
//     technologies: Array<number>
// }
//
// export function changeUser(u: UserType, newLesons: Array<string>) {
//     return{
//         ...u, lessons: newLesons
//     }
// }
//
// export function changeUserTechno(u: UserType, newNech: Array<number>) {
//     return {
//         ...u, technologies: newNech
//     }
// }
//
// export type UserType = {
//     name: string,
//     lessons: Array<string>
//     books: Array<string>
// }
//
// export function changeLessons(user:UserType, oldSkill: string, newSkill:string){
//     return{
//         ...user,
//         lessons: user.lessons.map(l => l === oldSkill ? newSkill : l)
//     }
// }
//
// export function changeBooks(user:UserType, oldBook: string, newBook: string){
//     return{
//         ...user,
//         books: user.books.map(b => b === oldBook ? newBook : b)
//     }
// }
//
// export function removeBooks(user:UserType, oldBook: string){
//     return{
//         ...user,
//         books: user.books.filter(b => b !==oldBook)
//     }
// }
// export function upgradeBooks(user:UserType, newBook: string){
//     return{
//         ...user,
//         books: [newBook,...user.books]
//     }
// }
//
// export function updateBooks(user:UserType, oldBook: string, newBook: string){
//     return{
//         ...user,
//         books: user.books.map(b => b === oldBook ? newBook : b)
//     }
// }

import {number} from "prop-types";
//
// export type UserType = {
//     name: string
//     address: Array<{id: number, title: string}>
//     lessons: Array<string>
//     flowers: Array<string>
// }
//
// export function changeElement(user: UserType, oldID: number, newTitle: string){
//     return{
//         ...user,
//         address: user.address.map(m => m.id === oldID ? newTitle : m)
//     }
// }
//
// // export function changeElement2(user: UserType, oldID: number, newTitle: string){
// //     return{
// //         ...user,
// //         address: user.address.map(m => m.id === oldID ? newTitle : m)
// //     }
// // }
// export function changeElement2(user: UserType, oldID: number, newTitle: string){
//     return{
//         ...user,
//         address: user.address.map(el=> el.id === oldID ? newTitle : el)
//     }
// }
//
// export function changeFlower(user: UserType, oldTitle: string, newTitle: string){
//     return{
//         ...user,
//         flowers: user.flowers.map(f => f === oldTitle ? newTitle : f)
//     }
// }
//
// export function removeFlower(user:UserType, oldTitle: string){
//     return{
//         ...user,
//         flowers: user.flowers.filter(el=> el !== oldTitle)
//     }
// }


type CompanyType = { id: number, title: string }
export type WithCompanyType = {
    companies: Array<CompanyType>
}

export function updateCompanyTitle(companies: { [key: string]: Array<CompanyType> },
                                   userName: string,
                                   userID: number,
                                   newTitle: string
) {

    let copy = {...companies}
    // @ts-ignore
    copy[userName] = copy[userName].map(el => el.id === userID ? newTitle : el)


    return copy
}