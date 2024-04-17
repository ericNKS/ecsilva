<template>
    <div>
        
        <header>
            <ul class="navbar">
                <li class="active">
                    Home
                </li>
                <li>
                    Projects
                </li>
                <li>
                    More
                </li>
            </ul>
        </header>

    </div>
</template>

<style>
    header{
        display: flex;
        justify-content: center;
        margin-top: 2%;
    }
    .navbar{
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .active{
        box-shadow: 1px 1px 10px #8f88884b;
    }
    li{
        list-style-type: none;
    }
    .navbar li{
        margin: 0px 10px;
        border: 1px solid #555555;
        padding: 5px 30px;
        border-radius: 25px;
        cursor: pointer;
    }
    .navbar li:hover{
        box-shadow: 1px 1px 10px #aaaaaa5e;
        color: #ffffff;
        transition: .24s;
    }
</style>