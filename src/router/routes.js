import TasksPage from "../Pages/TasksPage.vue"
import LoginPage from "../Pages/LoginPage.vue"
import RegisterPage from "../Pages/RegisterPage.vue"

const routes = [
    {
        path: "/tasks",
        component: TasksPage,
        name: "tasks",
    },
    {
        path: "/login",
        component: LoginPage,
        name: "login",
    },
    {
        path: "/register",
        component: RegisterPage,
        name: "register",
    },
]

export default routes