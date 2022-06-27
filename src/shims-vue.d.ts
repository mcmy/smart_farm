declare module '*.vue' {
    import type {DefineComponent} from 'vue'
    import {Router} from "vue-router";
    const component: DefineComponent<{}, {}, any>
    export default component

    interface Vue {
        $router: Router
    }
}

declare module 'toastr'