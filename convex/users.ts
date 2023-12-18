import { query, mutation } from './_generated/server';
import { v } from 'convex/values';

export const saveDataToDb = mutation({
  args: { name: v.string(), age: v.number() },
  handler: (ctx, args) => {
    ctx.db.insert('users', { name: args.name, age: args.age });
  },
});

// const getDataFromDb = () => {

// }
