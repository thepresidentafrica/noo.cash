export const AuthMitationresolvers = {
    authenticate: (_: unknown, args:{input:any})=>{
        return `hello ${args.input.name} welcome to api monorepo`
    }
}