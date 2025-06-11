const contactus = new ImContactus('im-contatus', {
    title: 'Contactanos',
    theme: 'red',
    darkMode: true,
    ui: 'marshmallow',
    style: 'ii',
    text: 'Estamos encantados de atender todas tus consultas',
    items: [
        {
            icon: 'fa fa-map-marker',
            title: 'Locacion',
            text: 'Calle falsa 123 #12-9'
        },
        {
            icon: 'fa fa-phone',
            title: 'Telefono',
            text: '+57 300-4567890'
        },
        {
            icon: 'fa fa-envelope',
            title: 'Correo',
            text: 'caorreo@mail.com'
        }
    ]
});
contactus.onForm = (data) => {
    console.log('Form submitted:', data);
    setTimeout(() => {
        contactus.hideLoading();
    }, 5000);
};
