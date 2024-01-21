<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <span>ToeDoe</span>
                <strong>List</strong>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{name: 'tasks'}" class="nav-link">Tasks</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Summary</a>
                    </li>
                </ul>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{name: 'login'}" class="btn btn-outline-secondary ms-2">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'register'}" class="btn btn-danger ms-2">Register</router-link>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="btn btn-outline-secondary ms-2">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>