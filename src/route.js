const express = require('express');
const router = express.Router();
const {
    AllUsers,
    CreateUser,
    CreateMultiplePosts,
    DeleteUser,
    UpdateMultiplePosts,
    UpsertUser
} = require('./controller');

router.post('/create', CreateUser);
router.post('/upsert', UpsertUser);
router.post('/create-multiple-posts', CreateMultiplePosts);
router.post('/update-multiple-posts', UpdateMultiplePosts);
router.get('/all-users', AllUsers);
router.delete('/delete-user/:id', DeleteUser);

module.exports = router;