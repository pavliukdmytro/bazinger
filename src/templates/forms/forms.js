$('.form-validate').each((i, el) => {
    el.addEventListener('invalid', (e) => {
        e.preventDefault();
        e.target.classList.add('invalid');
    }, true);
    el.addEventListener('focusin', (e) => {
        e.target.classList.remove('invalid');
    }, true);
});

const email = new Inputmask({
    mask: '*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@{1}*{1,20}d{1}*{2,6}[.*{1,2}]',
    greedy: false,
    definitions: {
        '*': {
            validator: "[0-9A-Za-z_-]",
            cardinality: 1,
            casing: "lower"
        },
        '@': {
            validator: '@',
            cardinality: 1,
            casing: 'lower'
        },
        'd': {
            validator: '.',
            cardinality: 1,
            casing: 'lower'
        }
    }
});
email.mask($('.email'));

$('.email:required').attr('pattern', `^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$`);
