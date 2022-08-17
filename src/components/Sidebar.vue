<template>
    <div>
        <div class="h-screen bg-dark-purple duration-300" :class="open ? 'w-72' : 'w-20'">
            <div class="p-7 text-2xl font-semibold flex-1 h-screen relative">
                <img src="../assets/control.png" class="
            absolute
            cursor-pointer
            -right-3
            top-9
            border-2 border-dark-purple
            rounded-full
          " :class="!open ? 'rotate-180' : 'rotate-0'" @click="open = !open" />

                <div class="flex gap-x-4 items-center">
                    <img src="../assets/logo.png" class="cursor-pointer duration-500" :class="open ? 'rotate-180' : ''"
                        alt="" />

                    <h1 class="text-white origin-left font-medium text-xl duration-300" :class="!open ? 'scale-0' : ''">
                        BrandTech
                    </h1>
                </div>

                <ul v-for="(menu, index) in Menus" :key="index" class="pt-6">
                    <li :class="index === 0 ? 'bg-light-white' : ''" class="
                text-gray-300 text-sm
                flex 
                items-center
                gap-x-4
                cursor-pointer
                p-2
                rounded-md
                hover:bg-light-white
            ">
                        <img src="../assets/Folder.png" :class="!open ? '' : ''" />

                        <span :class="!open ? 'hidden' : ''" class="origin-left duration-200">{{ menu.title }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script  >
export default {
    data() {
        return {
            open: true,

            Menus: [
                { title: "Dashboard", src: "Chart_fill" },
                { title: "Inbox", src: "Chat" },
                { title: "Account", src: "User", gap: true },
                { title: "Schedule", src: "Calendar" },
                { title: "Search", src: "Search" },
                { title: "Analatycs", src: "Chart" },
                { title: "Files", src: "Folder", gap: true },
                { title: "Setting", src: "Setting" },
            ],
        };
    },
};
</script>




