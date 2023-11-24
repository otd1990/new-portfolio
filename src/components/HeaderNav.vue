<template>
    <header class="header">
        <div>logo</div>
        <nav class="header__nav">
            <ul class="header__nav-list">
                <li class="header__nav-list-item"><a href="#projects" class="header__nav-list-link">Projects</a></li>
                <li class="header__nav-list-item"><a href="#chat" class="header__nav-list-link">Chat</a></li>
                <li class="header__nav-list-item"><a href="#contact" class="header__nav-list-link">Contact</a></li>
            </ul>
        </nav>
    </header>
</template>
<style>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.75rem;
}

.header__nav-list {
    display: flex;
    align-items: center;
}

.header__nav-list-item:not(:last-child) {
    padding: 0.25rem
}

.header__nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

    
</style>