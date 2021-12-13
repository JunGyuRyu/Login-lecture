"use strict"

class UserStorage{
    static #users = {
        id: ["fbwnsrb120", "나개발", "김팀장"],
        psword: ["1234","12345","123456"],
        name: ["류준규", "나개발", "김팀장"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;