import { api } from "../utils/api.url"

export abstract class DAO<T>{
    apiRoute: String

    constructor( route: string ){
        this.apiRoute = api + route;
    }

    public getById = async ( id: string | number ) => {
        return fetch(`${this.apiRoute}/${id}`, {
            method: 'GET'
        })
    }

    public getAll = async () => {
        return await fetch(`${this.apiRoute}/`, {
            method: 'GET'
        })
    }

    public create = async ( body: T ) => {
        return fetch(`${this.apiRoute}/`, {
            method: 'POST',
            body: JSON.stringify(body)
        })
    }

    public update = async () => {
        return fetch(`${this.apiRoute}/`, {
            method: 'PUT'
        })
    }

    public delete = async () => {
        return fetch(`${this.apiRoute}/`, {
            method: 'DELETE'
        })
    }
}