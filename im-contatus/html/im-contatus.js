class ImContactus {
    constructor(el, optionsTestimonial = null) {
        this.onForm = null;
        this.helper = new ImHelper(el);
        this.options = {
            items: [],
            ui: null,
            theme: null,
            style: null,
            text: '',
            title: '',
            darkMode: false,
            loadStart: {
                icon: 'fa fa-send',
                text: 'Enviando...'
            },
            loadEnd: {
                icon: 'fa fa-check',
                text: 'Enviado'
            },
            ...optionsTestimonial
        };
        this.viewInit();
    }
    viewInit() {
        const titleEl = this.helper.getRef('title');
        const subtitleEl = this.helper.getRef('subtitle');
        this.helper.setValue(titleEl, { text: this.options.title });
        this.helper.setValue(subtitleEl, { text: this.options.text });
        this.listContact();
        this.ui();
        this.formInit();
    }
    ui() {
        this.helper.bindingsClass(this.helper.getRoot, {
            ui: this.options.ui,
            theme: this.options.theme,
            style: this.options.style,
            dark: this.options.darkMode ? 'mode' : null
        });
    }
    load(status) {
        const load = status === 'start' ? this.options.loadStart : this.options.loadEnd;
        const icon = this.helper.getRef('load-icon');
        const text = this.helper.getRef('load-mesaage');
        icon.className = load.icon;
        text.innerText = load.text;
    }
    toggleLoading() {
        const loading = this.helper.getRef('loading');
        loading.classList.toggle('im-active');
    }
    formInit() {
        // form
        const form = this.helper.getRef('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.toggleLoading();
            this.load('start');
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            if (this.onForm) {
                this.onForm(data);
            }
        });
    }
    listContact() {
        const ul = this.helper.getRef('ul');
        ul.innerHTML = this.options.items.map((item) => /*html*/ `
            <li>
                <figure class="im-contatus-icono">
                    <i class="${item.icon}"></i>
                </figure>
                <div class="im-contatus-info">
                    <h6>${item.title}</h6>
                    <p>${item.text}</p>
                </div>
            </li>
        `).join('');
    }
    hideLoading() {
        this.load('end');
        setTimeout(() => {
            this.toggleLoading();
        }, 3000);
        const form = this.helper.getRef('form');
        form.reset();
    }
}
