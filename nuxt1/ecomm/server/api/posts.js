import db from "../../app/db.json";

export default defineEventHandler((event)=>{
    return db.posts
})

