import TasksPage from "../Pages/TasksPage.vue"
import LoginPage from "../Pages/LoginPage.vue"
import RegisterPage from "../Pages/RegisterPage.vue"
import SummaryPage from "../Pages/SummaryPage.vue"

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
    {
        path: "/summary",
        component: SummaryPage,
        name: "summary",
    },
]

export default routes