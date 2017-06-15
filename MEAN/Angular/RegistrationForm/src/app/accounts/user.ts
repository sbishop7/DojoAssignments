export class User {
    constructor(
        public id: number = null,
        public firstName: string = "",
        public lastName: string = "",
        public email: string = "",
        public password: string = "",
        public address: string = "",
        public unit: string = "",
        public city: string = "",
        public state: string = "",
        public lucky: boolean,
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ){}
}
