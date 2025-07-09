const { addTask, getAllTasks, getTaskById, updateTask, deleteTask } = require('../controllers/taskcontroller');
const router = require('express').Router();

router.post('/tasks', addTask);
router.get('/tasks', getAllTasks);
router.get('/tasks/:id', getTaskById);
router.put('/tasks/:id', updateTask);     
router.delete('/tasks/:id', deleteTask); 

module.exports = router;
