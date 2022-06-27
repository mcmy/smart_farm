class Utils {
    static isNull(x: any): boolean {
        return x === undefined || x === null || x === "null" || x.length === 0;
    }

    static isNotNull(x: any): boolean {
        return !Utils.isNotNull(x);
    }
}

class ToastUtils {
    loaderDiv = document.createElement("div");
    static arr0 = JSON.stringify({
        "closeButton": false,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "2000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    });

    constructor() {
        this.loaderDiv.id = "loader";
        this.loaderDiv.classList.add("fill-screen");
        this.loaderDiv.innerHTML = "<div class='loader loader-c'><div><div><div><div><div><div></div></div></div></div></div></div></div>";
    }

    static toastDef() {
        return JSON.parse(this.arr0);
    }

    addFillLoader() {
        this.removeFillLoader();
        document.body.append(this.loaderDiv);
    }

    removeFillLoader() {
        const lt = document.getElementById("loader");
        if (!Utils.isNull(lt)) {
            // @ts-ignore
            lt.remove();
        }
    }
}

export default {
    name: "CloudCommon",
    Utils,
    ToastUtils
}