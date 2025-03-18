const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
    AllUsers,
    CreateUser,
    CreateMultiplePosts,
    DeleteUser,
    UpdateMultiplePosts,
    UpsertUser,
    storageUpload
} = require('./controller');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/create', CreateUser);
router.post('/upsert', UpsertUser);
router.post('/upload', upload.single('file'), storageUpload);
router.post('/create-multiple-posts', CreateMultiplePosts);
router.post('/update-multiple-posts', UpdateMultiplePosts);
router.get('/all-users', AllUsers);
router.delete('/delete-user/:id', DeleteUser);

module.exports = router;