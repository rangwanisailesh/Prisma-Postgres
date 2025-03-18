const Prisma = require('../prisma/db');

// create user
const CreateUser = async (req, res) => {

    try {

        const { name, email } = req.body;

        const newuser = await Prisma.user.create({
            data: { name: name, email: email }
        });

        return res.json({ success: newuser });
    } catch (err) {
        return res.json({ error: err.message });
    }
};

// create posts
const CreateMultiplePosts = async (req, res) => {

    try {

        const { data } = req.body;

        const multiple = await Prisma.post.createMany({ data });

        return res.json({ success: multiple });
    } catch (err) {
        return res.json({ error: err.message });
    }
};

// upsert user
const UpsertUser = async (req, res) => {

    try {

        const { data } = req.body;

        const upsert = await Prisma.user.upsert({
            where: { email: data.email },
            create: data,
            update: data
        });

        return res.json({ success: upsert });
    } catch (err) {
        return res.json({ error: err.message });
    }
};

// update posts
const UpdateMultiplePosts = async (req, res) => {

    try {

        const { userid, data } = req.body;

        const update = await Prisma.post.updateMany({
            where: { userid: userid },
            data
        });

        return res.json({ success: update });
    } catch (err) {
        return res.json({ error: err.message });
    }
};

// delete user
const DeleteUser = async (req, res) => {

    try {

        const { id } = req.params;

        const user = await Prisma.user.delete({
            where: { id: parseInt(id) }
        });

        return res.json({ success: 'User & its posts deleted successfully' });
    } catch (err) {
        return res.json({ error: err.message });
    }
};

// all users
const AllUsers = async (req, res) => {

    try {

        const users = await Prisma.user.findMany({ include: { posts: true } });

        return res.json({ success: users });
    } catch (err) {
        return res.json({ error: err.message });
    }
};

module.exports = {
    AllUsers,
    CreateUser,
    CreateMultiplePosts,
    DeleteUser,
    UpdateMultiplePosts,
    UpsertUser
};