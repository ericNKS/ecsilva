<template>
    <header>
        <ul class="navbar">
            <li class="active">
                <RouterLink to="/">Início</RouterLink>
            </li>
            <li class="inativo">
                <RouterLink to="/">Em breve</RouterLink>
            </li>
            <li class="inativo">
                <RouterLink to="/">Em breve</RouterLink>
            </li>
        </ul>
    </header>
</template>

<style>
    li.inativo a{
        cursor: default !important;
        color: #6e6e6e !important;
    }
    li.inativo a:hover{
        box-shadow: 0px 0px 0px #aaaaaa00 !important;
    }
    header{
        display: flex;
        justify-content: center;
        margin-top: 2.4em;
        margin-bottom: 2em;
    }
    .navbar{
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    li{
        list-style-type: none;
    }
    .navbar a{
        color: #acacac;
        font-weight: bold;
        text-decoration: none;
        margin: 0px 10px;
        padding: 10px 30px;
        border-radius: 25px;
        cursor: pointer;
    }
    .navbar a:hover{
        color: #ffffff;
        transition: .2s;
    }
</style>